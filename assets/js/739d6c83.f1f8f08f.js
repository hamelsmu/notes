"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={},r=void 0,i={unversionedId:"k8s/Storage - Basics",id:"k8s/Storage - Basics",title:"Storage - Basics",description:"[[k8s]]",source:"@site/docs/k8s/04-Storage - Basics.md",sourceDirName:"k8s",slug:"/k8s/Storage - Basics",permalink:"/k8s/Storage - Basics",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/04-Storage - Basics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/k8s/Secrets"},next:{title:"Storage - Dynamic Provisioning",permalink:"/k8s/Storage - Dynamic Provisioning"}},l={},p=[{value:"Pod Storage",id:"pod-storage",level:2},{value:"HostPath",id:"hostpath",level:2},{value:"Persistent Volumes and Claims",id:"persistent-volumes-and-claims",level:2},{value:"Node Labeling",id:"node-labeling",level:3},{value:"Manual Provisioning",id:"manual-provisioning",level:3},{value:"Binding To the PVC",id:"binding-to-the-pvc",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[","[k8s]","]"),(0,o.kt)("p",null,"This is Chapter 5 in KIAMOL"),(0,o.kt)("p",null,"Unlike compute, storage is more complicated because you don't want your data to get lost on pod restarts. "),(0,o.kt)("p",null,"Solution: you want to mount external file systems that will survive a container restart.  "),(0,o.kt)("p",null,"ConfigMaps and Secrets are mounted, but those are read aonly. "),(0,o.kt)("h2",{id:"pod-storage"},"Pod Storage"),(0,o.kt)("p",null,"This kind of storage lives outside the container but on the Pod.  It will survive container restarts, but not a Pod restart.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"%cat sleep/sleep-with-emptyDir.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\nspec:\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n    spec:\n      containers:\n        - name: sleep\n          image: kiamol/ch03-sleep\n          volumeMounts:             # Mounts a volume call data\n            - name: data\n              mountPath: /data      # into the /data directory\n      volumes:\n        - name: data           # this is the data volume spec\n          emptyDir: {}         # this is the EmptyDir type\n")),(0,o.kt)("p",null,"If you want your data to persist across pod restarts, you have to mount a different type of storage."),(0,o.kt)("h2",{id:"hostpath"},"HostPath"),(0,o.kt)("p",null,"Writes files to a disk on a node.  So it will survive pod replacements.  However, it is only on that Node and K8s doesn't replicate files to other nodes for you.  ",(0,o.kt)("strong",{parentName:"p"},"Assumes that the replacement pod will always run on the same node :/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat pi/nginx-with-hostPath.yaml                                                                                                     \napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: pi-proxy\n  labels:\n    app: pi-proxy\n...\n          volumeMounts:\n            - name: config\n              mountPath: "/etc/nginx/"\n              readOnly: true\n            - name: cache-volume\n              mountPath: /data/nginx/cache\n      volumes:\n        - name: config\n          configMap:\n            name: pi-proxy-configmap\n        - name: cache-volume\n          hostPath:\n            path: /volumes/nginx/cache  #uses a directory non the node\n            type: DirectoryOrCreate #creates a path if it doesn\'t exist\n')),(0,o.kt)("p",null,"[","[HostPath]","] is only a good idea when your app needs temporary storage, because it can dissapear with a node.  You could use Pod Storage for this, too so its not clear when this is useful.  "),(0,o.kt)("h2",{id:"persistent-volumes-and-claims"},"Persistent Volumes and Claims"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This section is largely pedagoical, you will want to use Dynamic volume provisioning in most cases.")),(0,o.kt)("p",null,"You have to configure shared storage on your cloud provider.  For example, if you had a NFS server with the domain name ",(0,o.kt)("inlineCode",{parentName:"p"},"nfs.my.network")," your PV resource would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/persistentVolume-nfs.yaml                                                                                            \napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv01\nspec:\n  capacity:\n    storage: 50Mi\n  accessModes:\n    - ReadWriteOnce\n  nfs:\n    server: nfs.my.network\n    path: "/kubernetes-volumes\n')),(0,o.kt)("h3",{id:"node-labeling"},"Node Labeling"),(0,o.kt)("p",null,"If you can use a local storage for a PV like this:"),(0,o.kt)("p",null,"1st make sure your node is labeled: ",(0,o.kt)("inlineCode",{parentName:"p"},"kl label node docker-desktop kiamol=ch05")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat todo-list/persistentVolume.yaml                                                                                                 \napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv01\nspec:\n  capacity:\n    storage: 50Mi\n  accessModes:\n    - ReadWriteOnce   # Means that we can only mount this to ONLY ONE POD\n  local:\n    path: /volumes/pv01  # this path must be present on the node\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n          - key: kiamol\n            operator: In\n            values:\n              - ch05\n")),(0,o.kt)("p",null,"Pods cannot use this directly, they need to use a [","[PersistenVolumeClaim]","] or PVC.  The PVC gets matched to a PV by K8s which leaves the underling volume details to the Pv. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'%cat todo-list/postgres-persistentVolumeClaim.yaml                                                                                   \napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgres-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 40Mi                  # 40 MB\n  storageClassName: ""               # A blank name means a PV needs to exist\n')),(0,o.kt)("p",null,"PV is like creating storage\nPVC is requesting storage that Pods use"),(0,o.kt)("h3",{id:"manual-provisioning"},"Manual Provisioning"),(0,o.kt)("p",null,"We have been manually provisioning PV + PVCs "),(0,o.kt)("p",null,"When you ",(0,o.kt)("inlineCode",{parentName:"p"},"kl apply")," the PVC, it will find unbound PVs and then bind them.  "),(0,o.kt)("p",null,"when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kl get pv")," you will see if the PV is unclaimed yet or not"),(0,o.kt)("p",null,"if you create a PVC that requests more than any PV, it will show a pending status instead of Bound.  "),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you try to deploy a pod that uses an unbound PVC, the Pod will stay in a Pending state until the PVC gets bound")),(0,o.kt)("h3",{id:"binding-to-the-pvc"},"Binding To the PVC"),(0,o.kt)("p",null,"The deployment references the PVC like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/postgres/todo-db.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: todo-db\nspec:\n  selector:\n    matchLabels:\n      app: todo-db\n  template:\n    metadata:\n      labels:\n        app: todo-db\n    spec:\n      containers:\n        - name: db\n          image: postgres:11.6-alpine\n          env:\n          - name: POSTGRES_PASSWORD_FILE\n            value: /secrets/postgres_password\n          volumeMounts:\n            - name: secret\n              mountPath: "/secrets"\n            - name: data\n              mountPath: /var/lib/postgresql/data\n      volumes:\n        - name: secret\n          secret:\n            secretName: todo-db-secret\n            defaultMode: 0400\n            items:\n            - key: POSTGRES_PASSWORD\n              path: postgres_password\n        - name: data\n          persistentVolumeClaim:\n            claimName: postgres-pvc\n')),(0,o.kt)("p",null,":::Note\nIn production, you want to replace the local volume PV with a distributed volume supported by your cloud provider or cluster.  "),(0,o.kt)("p",null,"The PVC doesn't care about the implementation so you will just have to swap out the PV\n:::"))}c.isMDXComponent=!0}}]);