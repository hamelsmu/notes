[[k8s]]

This is Chapter 5 in KIAMOL

Unlike compute, storage is more complicated because you don't want your data to get lost on pod restarts. 

Solution: you want to mount external file systems that will survive a container restart.  

ConfigMaps and Secrets are mounted, but those are read aonly. 

## Pod Storage

This kind of storage lives outside the container but on the Pod.  It will survive container restarts, but not a Pod restart.  

```yaml
%cat sleep/sleep-with-emptyDir.yaml
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
          volumeMounts:             # Mounts a volume call data
            - name: data
              mountPath: /data      # into the /data directory
      volumes:
        - name: data           # this is the data volume spec
          emptyDir: {}         # this is the EmptyDir type
```

If you want your data to persist across pod restarts, you have to mount a different type of storage.

## HostPath

Writes files to a disk on a node.  So it will survive pod replacements.  However, it is only on that Node and K8s doesn't replicate files to other nodes for you.  **Assumes that the replacement pod will always run on the same node :/**


```yaml
% cat pi/nginx-with-hostPath.yaml                                                                                                     
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pi-proxy
  labels:
    app: pi-proxy
...
          volumeMounts:
            - name: config
              mountPath: "/etc/nginx/"
              readOnly: true
            - name: cache-volume
              mountPath: /data/nginx/cache
      volumes:
        - name: config
          configMap:
            name: pi-proxy-configmap
        - name: cache-volume
          hostPath:
            path: /volumes/nginx/cache  #uses a directory non the node
            type: DirectoryOrCreate #creates a path if it doesn't exist
```

[[HostPath]] is only a good idea when your app needs temporary storage, because it can dissapear with a node.  You could use Pod Storage for this, too so its not clear when this is useful.  

## Persistent Volumes and Claims

:::note

This section is largely pedagoical, you will want to use Dynamic volume provisioning in most cases.

:::


You have to configure shared storage on your cloud provider.  For example, if you had a NFS server with the domain name `nfs.my.network` your PV resource would look like this:

```yaml
% cat todo-list/persistentVolume-nfs.yaml                                                                                            
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv01
spec:
  capacity:
    storage: 50Mi
  accessModes:
    - ReadWriteOnce
  nfs:
    server: nfs.my.network
    path: "/kubernetes-volumes
```


### Node Labeling

If you can use a local storage for a PV like this:

1st make sure your node is labeled: `kl label node docker-desktop kiamol=ch05`

```yaml
% cat todo-list/persistentVolume.yaml                                                                                                 
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv01
spec:
  capacity:
    storage: 50Mi
  accessModes:
    - ReadWriteOnce   # Means that we can only mount this to ONLY ONE POD
  local:
    path: /volumes/pv01  # this path must be present on the node
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
          - key: kiamol
            operator: In
            values:
              - ch05
```

Pods cannot use this directly, they need to use a [[PersistenVolumeClaim]] or PVC.  The PVC gets matched to a PV by K8s which leaves the underling volume details to the Pv. 

```yaml
%cat todo-list/postgres-persistentVolumeClaim.yaml                                                                                   
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 40Mi                  # 40 MB
  storageClassName: ""               # A blank name means a PV needs to exist
```



PV is like creating storage
PVC is requesting storage that Pods use

### Manual Provisioning

We have been manually provisioning PV + PVCs 

When you `kl apply` the PVC, it will find unbound PVs and then bind them.  

when you run `kl get pv` you will see if the PV is unclaimed yet or not

if you create a PVC that requests more than any PV, it will show a pending status instead of Bound.  

:::warning
If you try to deploy a pod that uses an unbound PVC, the Pod will stay in a Pending state until the PVC gets bound
:::


### Binding To the PVC

The deployment references the PVC like so:

```yaml
% cat todo-list/postgres/todo-db.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todo-db
spec:
  selector:
    matchLabels:
      app: todo-db
  template:
    metadata:
      labels:
        app: todo-db
    spec:
      containers:
        - name: db
          image: postgres:11.6-alpine
          env:
          - name: POSTGRES_PASSWORD_FILE
            value: /secrets/postgres_password
          volumeMounts:
            - name: secret
              mountPath: "/secrets"
            - name: data
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: secret
          secret:
            secretName: todo-db-secret
            defaultMode: 0400
            items:
            - key: POSTGRES_PASSWORD
              path: postgres_password
        - name: data
          persistentVolumeClaim:
            claimName: postgres-pvc
```


:::Note
In production, you want to replace the local volume PV with a distributed volume supported by your cloud provider or cluster.  

The PVC doesn't care about the implementation so you will just have to swap out the PV
:::
