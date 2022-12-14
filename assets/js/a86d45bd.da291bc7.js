"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[9044],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9493:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),i=["components"],r={},s=void 0,p={unversionedId:"k8s/2a. Basics",id:"k8s/2a. Basics",title:"2a. Basics",description:"Do stuff: kubectl apply -f",source:"@site/docs/k8s/2a. Basics.md",sourceDirName:"k8s",slug:"/k8s/2a. Basics",permalink:"/k8s/2a. Basics",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/2a. Basics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrading",permalink:"/k8s/10c. Helm Upgrade & Rollbacks"},next:{title:"2b. Secrets",permalink:"/k8s/2b. Secrets"}},c={},u=[{value:"Deployments",id:"deployments",level:2},{value:"Services",id:"services",level:2},{value:"Labels",id:"labels",level:4},{value:"Routing internal traffic <code>ClusterIP</code>",id:"routing-internal-traffic-clusterip",level:3},{value:"Routing external traffic: <code>LoadBalancer</code>",id:"routing-external-traffic-loadbalancer",level:3},{value:"Routing Traffic Outside K8s <code>ExternalNameService</code>",id:"routing-traffic-outside-k8s-externalnameservice",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"Configuring Applications",id:"configuring-applications",level:2},{value:"Creating a [ConfigMap]",id:"creating-a-configmap",level:3},{value:"Method 1: from env file",id:"method-1-from-env-file",level:4},{value:"Method 2: from ConfigMap spec",id:"method-2-from-configmap-spec",level:4}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Do stuff: ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply -f")),(0,l.kt)("p",null,"Multiple resources in one yaml with ",(0,l.kt)("inlineCode",{parentName:"p"},"---")),(0,l.kt)("h2",{id:"deployments"},"Deployments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kind: deployment")),(0,l.kt)("p",null,"[","[Pods]","] can have more than 1 container but usually contain just one"),(0,l.kt)("p",null,"[","[Deployments]","] control pods and will restart Pods if they fail.  Deployments are a type of [","[controller]","].  You usually deploy pods via a deployment.  ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create deployment"),".  Deployments keep track of pods via labels and a ",(0,l.kt)("inlineCode",{parentName:"p"},"label selector"),".  If you change the pod's labels the deployment might lose track of the pods. "),(0,l.kt)("p",null,"A [","[controller]","] is a K8s resource that manages other resources.  "),(0,l.kt)("p",null,"-o yaml is great for seeing labels,  you can swithc to ",(0,l.kt)("inlineCode",{parentName:"p"},"- json")," and pipe to ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")),(0,l.kt)("p",null,"Execute a command in a container by doing ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl exec -it <pod name> -- sh")),(0,l.kt)("h2",{id:"services"},"Services"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kind: service")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can\u2019t switch a Service from one type to another in every version of Kubernetes, so you\u2019ll need to delete the original ClusterIP Service for the API before you can deploy the ExternalName Service.")),(0,l.kt)("h4",{id:"labels"},"Labels"),(0,l.kt)("p",null,'If you have overlapping labels for a particular deployment, the service will route to all deployments that match that label.  If you want to control for this, add additional unique labels.  Just having one label like "myapp" can be dangerous for this reason.'),(0,l.kt)("p",null,"Services deal with networking.  These use labels, too via a ",(0,l.kt)("inlineCode",{parentName:"p"},"selector"),".  "),(0,l.kt)("h3",{id:"routing-internal-traffic-clusterip"},"Routing internal traffic ",(0,l.kt)("inlineCode",{parentName:"h3"},"ClusterIP")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ClusterIP"),":  default service that is internal DNS.    ",(0,l.kt)("inlineCode",{parentName:"p"},"type: ClusterIP")),(0,l.kt)("p",null,"Forward port ",(0,l.kt)("inlineCode",{parentName:"p"},"8080")," on your local computer to port 80 in container:  ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl port-forward deploy/numbers-web 8080:80")),(0,l.kt)("h3",{id:"routing-external-traffic-loadbalancer"},"Routing external traffic: ",(0,l.kt)("inlineCode",{parentName:"h3"},"LoadBalancer")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type: LoadBalancer"),"\nUses labels too"),(0,l.kt)("h3",{id:"routing-traffic-outside-k8s-externalnameservice"},"Routing Traffic Outside K8s ",(0,l.kt)("inlineCode",{parentName:"h3"},"ExternalNameService")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type: ExternalName")),(0,l.kt)("p",null,"You have to watch out when making HTTP requests through ENS, b/c the header wil still contain the original hostname, which will probably get rejected.  It's fine for things like TCP etc for databases.  "),(0,l.kt)("h3",{id:"namespaces"},"Namespaces"),(0,l.kt)("p",null,"This is relevant to networking b/c resources outside the default namespace will have a different network address"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get svc -n default"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get svc -n kube-system")),(0,l.kt)("p",null,"For example, the internal kube-dns service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," kl get svc -n kube-system                                                                                                                                                                            (master)kiamol\nNAME       TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)                  AGE\nkube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP,9153/TCP   9d\n")),(0,l.kt)("p",null,"Can be accessed like this ",(0,l.kt)("inlineCode",{parentName:"p"},"kl exec deploy/sleep-1 -- sh - c'nslookup kube-dns.kube-system.svc.cluster.local")),(0,l.kt)("h2",{id:"configuring-applications"},"Configuring Applications"),(0,l.kt)("p",null,"You can environment variables to Pod specs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\nspec:\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n    spec:\n      containers:\n        - name: sleep\n          image: kiamol/ch03-sleep\n          env:\n          - name: KIAMOL_CHAPTER\n            value: "04"\n')),(0,l.kt)("p",null,"You usually don't set configs in pod specs.  You ususally use [","[ConfigMap]","]"),(0,l.kt)("p",null,"How to reference a configmap instead/in addition to of an env variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat sleep/sleep-with-configMap-env-file.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\nspec:\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n    spec:\n      containers:\n        - name: sleep\n          image: kiamol/ch03-sleep\n          envFrom: # This section will bring in all env variables from the config map `sleep-config-env-file` which we create below.  This can be thought of as the "baseline" config.\n          - configMapRef:\n              name: sleep-config-env-file\n          env: # This section can override any environment variables from the config, including any other configs that are elswhere.  So this will override other things\n          - name: KIAMOL_CHAPTER\n            value: "04"\n          - name: KIAMOL_SECTION\n            valueFrom:\n              configMapKeyRef: # this came from another configMap\n                name: sleep-config-literal\n                key: kiamol.section\n')),(0,l.kt)("h3",{id:"creating-a-configmap"},"Creating a [","[ConfigMap]","]"),(0,l.kt)("h4",{id:"method-1-from-env-file"},"Method 1: from env file"),(0,l.kt)("p",null,"This way is not recommended b/c you have to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kl create")," rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"kl apply")," , and you want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kl apply")," for everything"),(0,l.kt)("p",null,"Start with an env file, like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"% cat sleep/ch04.env                                                                                                                                                                                   \nKIAMOL_CHAPTER=ch04\nKIAMOL_SECTION=ch04-4.1\nKIAMOL_EXERCISE=try it now\n")),(0,l.kt)("p",null,"Create a config file from an env file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"% kl create configmap sleep-config-env-file --from-env-file=sleep/ch04.env                                                                                                                             \nconfigmap/sleep-config-env-file created\n")),(0,l.kt)("p",null,"Update your deployment by making changes to add the reference to the config file (see previous section)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kl apply -f sleep/sleep-with-configMap-env-file.yaml\n")),(0,l.kt)("h4",{id:"method-2-from-configmap-spec"},"Method 2: from ConfigMap spec"),(0,l.kt)("p",null,"This is more flexible and powerful, you can embed arbitrary files like json files that can be read by your app.   "),(0,l.kt)("p",null,"Create a spec:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'% cat todo-list/configMaps/todo-web-config-dev.yaml                                                                                                                                                    \napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: todo-web-config-dev\ndata: # we are going to mount this json file into the container so the app can use it\n  config.json: |-\n    {\n      "ConfigController": {\n        "Enabled" : true\n      }\n    }\n')),(0,l.kt)("p",null,"Apply this spec: ",(0,l.kt)("inlineCode",{parentName:"p"},"kl apply -f todo-list/configMaps/todo-web-config-dev.yaml")),(0,l.kt)("p",null,"P.S. You could have also seen the yaml file for the other configmap we created earlier with ",(0,l.kt)("inlineCode",{parentName:"p"},"kl get cm/sleep-config-env-file -o yaml")," and used that yaml file"),(0,l.kt)("p",null,"Use the config map in the deployment spec, and additionally mount a volume containing the config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/todo-web-dev.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: todo-web\nspec:\n  selector:\n    matchLabels:\n      app: todo-web\n  template:\n    metadata:\n      labels:\n        app: todo-web\n    spec:\n      containers:\n        - name: web\n          image: kiamol/ch04-todo-list\n          volumeMounts: # This will load the config json file into `/app/config` in your container\n            - name: config\n              mountPath: "/app/config" #directory path to mount the volume **BE CAREFUL** if you mounted this to `/app`, then it would have wiped out all the files!\n              readOnly: true\n      volumes: # volumes are defined at pod level\n        - name: config  # Name matches the volume mount\n          configMap: # volume source is the Config Map\n            name: todo-web-config-dev  #ConfigMap name\n')),(0,l.kt)("p",null,"Be careful when specifying the mount path,  lots of people make mistakes here and overwrite existing data.  K8s will not merge directories for you!"),(0,l.kt)("p",null,"If you change the config map, it will refresh the files in the directory.  You have to make sure your app is watching that directory though."),(0,l.kt)("p",null,"Instead of loading the whole config map, you can selectively mount files in the config map like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat todo-list/todo-web-dev-no-logging.yaml                                                                                                                                                                     \napiVersion: apps/v1\n...\n      volumes:\n        - name: config\n          configMap:\n            name: todo-web-config-dev\n            items:\n            - key: config.json\n              path: config.json\n")))}d.isMDXComponent=!0}}]);