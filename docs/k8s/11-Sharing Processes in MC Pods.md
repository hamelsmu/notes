MC = multi container

Containers isolate proceses, so containers cannot see eachothers processes.  You can set `Namespace: true` to make processes visible amongst all containers in a pod:

```yaml
...
spec:
  ...
  template:
	...
    spec:
      shareProcessNamespace: true
      containers:
      ...
```

If you enable this: 
- containers can kill eachother's processes
- enable interproces communication
- fetch metrics about the app process


