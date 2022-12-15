---
title: Developer tips
---

These notes provide tips on the developer workflow while using K8s.  Some people use Docker compose to work with things locally, however you can also run a Kubernetes cluster locally.



## Use the `IfNotPresent` imagePullPolicy

K8s have tricky rules for which container images are used (local vs from repo).  

If the image doesn't have an explict tag in the name (and therefore uses the implicit `:latest` tag), then K8s will always pull the image first. Otherwise, K8s will use the local image if it exists in the image cache on the node.

You can override this behavior by specifying an [image pull policy](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy).  **When developing locally, you want to use the `IfNotPresent` policy**.

```yaml
spec:                         # This is the Pod spec within the Deployment.
 containers:
   - name: bulletin-board
     image: kiamol/ch11-bulletin-board:dev 
     imagePullPolicy: IfNotPresent   # Prefer the local image if it exists
```

If you forget to do this, it can be very confusing as to why your image doesn't seem to be updated!


## Use namespaces

You can use namespaces to test apps on the cluster.  For example, a production and a test namespace.

Deploy with a namespace using the `--namespace` flag:

```yaml
# create a new namespace:
kubectl create namespace kiamol-ch11-test

# deploy a sleep Pod in the new namespace:
kubectl apply -f sleep.yaml --namespace kiamol-ch11-test

# list sleep Pods--this won’t return anything:
kubectl get pods -l app=sleep

# now list the Pods in the namespace:
kubectl get pods -l app=sleep -n kiamol-ch11-test
```

Objects within a namespace are isolated, so you can deploy the same apps with the same object names in different namespaces.  

### Setting the namespace in YAML

First create the namespace and then assign the deployment to a namespace.

```yaml
apiVersion: v1
kind: Namespace      # Namespace specs need only a name.
metadata:
 name: kiamol-ch11-uat
---
apiVersion: apps/v1
kind: Deployment
metadata:                       # The target namespace is part of the 
 name: sleep                   # object metadata. The namespace needs
 namespace: kiamol-ch11-uat    # to exist, or the deployment fails.    

  # The Pod spec follows.
```

### See resources in all namespaces with `--all namespaces`

```yaml
# create the namespace and Deployment:
kubectl apply -f sleep-uat.yaml

# list the sleep Deployments in all namespaces:
kubectl get deploy -l app=sleep --all-namespaces

# delete the new UAT namespace:
kubectl delete namespace kiamol-ch11-uat

# list Deployments again:
kubectl get deploy -l app=sleep --all-namespaces
```

### Deleting namespace deletes all resources

When you delete everything in a namespace, like with the above example, you also delete all the resources in the namespace.

Often people will delete a namespace and re-create it, this will delete everything in the namespace.  For example:

```bash
kl delete namespace {namespace}
kubectl create namespace {namespace}
```

## Change the default namespace

Constantly passing the `--namespace` flag is tedious.  You can set the default namespace with `kl config set-context`:

```bash
# list all contexts:
kubectl config get-contexts

# update the default namespace for the current context:
kubectl config set-context --current --namespace=kiamol-ch11-test

# list the Pods in the default namespace:
kubectl get pods
```

You can also get the current context with:

```bash
kl config current-context
```

## Switching Between Clusters

Use contexts to switch b/w clusters.  Config files with contexts live at `~/.kube`.

### Reset the default namespace

Below shows you how to reset the default namespace.  You can also set another context to a different namespace.

It's always a good idea to check your config as well.

```bash
# setting the namespace to blank resets the default:
kubectl config set-context --current --namespace=

# printing out the config file shows your cluster connection:
kubectl config view
```

What does Michal do to [manage different clusters](https://discord.com/channels/1043031122721914940/1045846418331537459/1052831632798777364)?



## Private Images

Kubernetes supports pulling private images by storing registry credentials in a special type of Secret object named `docker-registry`. 

```bash
 % kl create secret --help                                                                             
Create a secret using specified subcommand.

Available Commands:
  docker-registry   Create a secret for use with a Docker registry
  generic           Create a secret from a local file, directory, or literal value
  tls               Create a TLS secret
```

You can set the secret like this, where we create a `docker-registry` secret called `registry-creds`

```bash
# create the Secret using the details from the script:
kubectl create secret docker-registry registry-creds 
   --docker-server=$REGISTRY_SERVER
   --docker-username=$REGISTRY_USER
   --docker-password=$REGISTRY_PASSWORD

# show the Secret details:
kubectl get secret registry-creds
```

This docker secret is mounted into the container like so:

```yaml title="bb-deployment.yaml"
    spec:
      containers:
        - name: bulletin-board
          image: {{ .Values.registryServer }}/{{ .Values.registryUser }}/bulletin-board:{{ .Values.imageBuildNumber }}-kiamol 
          imagePullPolicy: Always    
          ports:
            - name: http
              containerPort: 8080  
      imagePullSecrets:
      - name: {{ .Values.registrySecretName }}
```

Where the Helm values are configured like so:

```yaml title="values.yaml"
# port for the Service to listen on
servicePort: 8012
# type of the Service:
serviceType: LoadBalancer
# domain of the registry server - e.g docker.io for Docker Hub
registryServer: docker.io
# user portion of the image repostory:
registryUser: kiamol
# build number portion of the image tag:
imageBuildNumber: dev
# name of the Secret containing registry credentials:
registrySecretName: registry-creds
```

## Local Setup


Try to encapsulate the CI process into a script that you run locally, that also includes a local version of K8s if possible, where you:

1. Build container images
2. Spin everything up in a local K8s cluster
3. Run/test the app

This won't work all the time.  You can also develop without containers, and setup GitHub Actions to do the container builds, tests, and deploy K8s in a test namespace.

