Do stuff: `kubectl apply -f`

Multiple resources in one yaml with `---`


## Deployments

`kind: deployment`

[[Pods]] can have more than 1 container but usually contain just one

[[Deployments]] control pods and will restart Pods if they fail.  Deployments are a type of [[controller]].  You usually deploy pods via a deployment.  `kubectl create deployment`.  Deployments keep track of pods via labels and a `label selector`.  If you change the pod's labels the deployment might lose track of the pods. 

A [[controller]] is a K8s resource that manages other resources.  


-o yaml is great for seeing labels,  you can swithc to `- json` and pipe to `jq`

Execute a command in a container by doing `kubectl exec -it <pod name> -- sh`

## Services

`kind: service`

> You can’t switch a Service from one type to another in every version of Kubernetes, so you’ll need to delete the original ClusterIP Service for the API before you can deploy the ExternalName Service.

#### Labels 

If you have overlapping labels for a particular deployment, the service will route to all deployments that match that label.  If you want to control for this, add additional unique labels.  Just having one label like "myapp" can be dangerous for this reason.

Services deal with networking.  These use labels, too via a `selector`.  

### Routing internal traffic `ClusterIP`

`ClusterIP`:  default service that is internal DNS.    `type: ClusterIP`

Forward port `8080` on your local computer to port 80 in container:  `kubectl port-forward deploy/numbers-web 8080:80`


### Routing external traffic: `LoadBalancer`

`type: LoadBalancer`
Uses labels too


### Routing Traffic Outside K8s `ExternalNameService`

`type: ExternalName`

You have to watch out when making HTTP requests through ENS, b/c the header wil still contain the original hostname, which will probably get rejected.  It's fine for things like TCP etc for databases.  


### Namespaces

This is relevant to networking b/c resources outside the default namespace will have a different network address

`kubectl get svc -n default`
`kubectl get svc -n kube-system`

For example, the internal kube-dns service:

```
 kl get svc -n kube-system                                                                                                                                                                            (master)kiamol
NAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE
kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   9d
```

Can be accessed like this `kl exec deploy/sleep-1 -- sh - c'nslookup kube-dns.kube-system.svc.cluster.local`

##  Configuring Applications

You can environment variables to Pod specs

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sleep
spec:
  selector:
    matchLabels:
      app: sleep
  template:
    metadata:
      labels:
        app: sleep
    spec:
      containers:
        - name: sleep
          image: kiamol/ch03-sleep
          env:
          - name: KIAMOL_CHAPTER
            value: "04"
```


You usually don't set configs in pod specs.  You ususally use [[ConfigMap]]

How to reference a configmap instead/in addition to of an env variable:

```yaml
% cat sleep/sleep-with-configMap-env-file.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sleep
spec:
  selector:
    matchLabels:
      app: sleep
  template:
    metadata:
      labels:
        app: sleep
    spec:
      containers:
        - name: sleep
          image: kiamol/ch03-sleep
          envFrom: # This section will bring in all env variables from the config map `sleep-config-env-file` which we create below.  This can be thought of as the "baseline" config.
          - configMapRef:
              name: sleep-config-env-file
          env: # This section can override any environment variables from the config, including any other configs that are elswhere.  So this will override other things
          - name: KIAMOL_CHAPTER
            value: "04"
          - name: KIAMOL_SECTION
            valueFrom:
              configMapKeyRef: # this came from another configMap
                name: sleep-config-literal
                key: kiamol.section
```


### Creating a [[ConfigMap]]

####  Method 1: from env file

This way is not recommended b/c you have to use `kl create` rather than `kl apply` , and you want to use `kl apply` for everything

Start with an env file, like this:

```bash
% cat sleep/ch04.env                                                                                                                                                                                   
KIAMOL_CHAPTER=ch04
KIAMOL_SECTION=ch04-4.1
KIAMOL_EXERCISE=try it now
```

Create a config file from an env file

```bash
% kl create configmap sleep-config-env-file --from-env-file=sleep/ch04.env                                                                                                                             
configmap/sleep-config-env-file created
```

Update your deployment by making changes to add the reference to the config file (see previous section)

```bash
kl apply -f sleep/sleep-with-configMap-env-file.yaml
```

#### Method 2: from ConfigMap spec

This is more flexible and powerful, you can embed arbitrary files like json files that can be read by your app.   

Create a spec:

```bash
% cat todo-list/configMaps/todo-web-config-dev.yaml                                                                                                                                                    
apiVersion: v1
kind: ConfigMap
metadata:
  name: todo-web-config-dev
data: # we are going to mount this json file into the container so the app can use it
  config.json: |-
    {
      "ConfigController": {
        "Enabled" : true
      }
    }
```

Apply this spec: `kl apply -f todo-list/configMaps/todo-web-config-dev.yaml`

P.S. You could have also seen the yaml file for the other configmap we created earlier with `kl get cm/sleep-config-env-file -o yaml` and used that yaml file


Use the config map in the deployment spec, and additionally mount a volume containing the config:

```yaml
% cat todo-list/todo-web-dev.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todo-web
spec:
  selector:
    matchLabels:
      app: todo-web
  template:
    metadata:
      labels:
        app: todo-web
    spec:
      containers:
        - name: web
          image: kiamol/ch04-todo-list
          volumeMounts: # This will load the config json file into `/app/config` in your container
            - name: config
              mountPath: "/app/config" #directory path to mount the volume **BE CAREFUL** if you mounted this to `/app`, then it would have wiped out all the files!
              readOnly: true
      volumes: # volumes are defined at pod level
        - name: config  # Name matches the volume mount
          configMap: # volume source is the Config Map
            name: todo-web-config-dev  #ConfigMap name
```

Be careful when specifying the mount path,  lots of people make mistakes here and overwrite existing data.  K8s will not merge directories for you!

If you change the config map, it will refresh the files in the directory.  You have to make sure your app is watching that directory though.

Instead of loading the whole config map, you can selectively mount files in the config map like this:

```yaml
% cat todo-list/todo-web-dev-no-logging.yaml                                                                                                                                                                     
apiVersion: apps/v1
...
      volumes:
        - name: config
          configMap:
            name: todo-web-config-dev
            items:
            - key: config.json
              path: config.json
```

