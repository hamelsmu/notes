"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"k8s/Storage - Dynamic Provisioning",id:"k8s/Storage - Dynamic Provisioning",title:"Storage - Dynamic Provisioning",description:"[[k8s]]",source:"@site/docs/k8s/05-Storage - Dynamic Provisioning.md",sourceDirName:"k8s",slug:"/k8s/Storage - Dynamic Provisioning",permalink:"/k8s/Storage - Dynamic Provisioning",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/05-Storage - Dynamic Provisioning.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Storage - Basics",permalink:"/k8s/Storage - Basics"},next:{title:"ReplicaSets",permalink:"/k8s/ReplicaSets"}},l={},c=[{value:"Storage Classes",id:"storage-classes",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"[","[k8s]","]"),(0,r.kt)("p",null,"In [","[3. Storage - Basics]","], you were shown how to setup a PV, and a PVC that would bind to the PV, and finally how to create a deployment that would reference the PVC"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"graph TD;\nDeployment --\x3e PVC --\x3e PV;\n")),(0,r.kt)("p",null,"However we can have K8s dynamically provision the PV.  So you just create the PVC, and K8s creates the PV for you!  You can have clusters configured with different storage classes.  You can also use the default class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat todo-list/postgres-persistentVolumeClaim-dynamic.yaml                                                                           \napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgres-pvc-dynamic\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 100Mi\n")),(0,r.kt)("p",null,"So if we deploy ths, let's see what will happen!  ",(0,r.kt)("inlineCode",{parentName:"p"},"kl apply -f todo-list/postgres-persistentVolumeClaim-dynamic.yaml")),(0,r.kt)("p",null,"If you do ",(0,r.kt)("inlineCode",{parentName:"p"},"kl get pv")," you will see a PV has been automatically created. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Docker Desktop uses a HostPath volume in the default storage class for dynamically provisioned PVs; AKS uses Azure Files; ",(0,r.kt)("strong",{parentName:"p"},"K3s uses HostPath but with a different configuration from Docker Desktop, which means you won\u2019t see the PV because it is created only when a Pod that uses the PVC is created."))),(0,r.kt)("h2",{id:"storage-classes"},"Storage Classes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kind: StorageClass")),(0,r.kt)("p",null,"You can create a storage class and reference it from the PVC.  Three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provisioner"),":  How to create PV on demand"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reclaimPolicy")," what happens to dynamically created volumes when PVC is deleted"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volumeBindingMode")," if pv is created now or when the related Pod is created")),(0,r.kt)("p",null,"Example of [","[StorageClass]","]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},'apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"storage.k8s.io/v1","kind":"StorageClass","metadata":{"annotations":{},"name":"kiamol"},"provisioner":"docker.io/hostpath","reclaimPolicy":"Delete","volumeBindingMode":"Immediate"}\n  creationTimestamp: "2022-12-06T00:45:35Z"\n  name: kiamol\n  resourceVersion: "819084"\n  uid: 79a1b70e-6ebe-4aa8-92ce-595220fc6b14\nprovisioner: docker.io/hostpath\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n')),(0,r.kt)("p",null,"You can see all of the storage classes in your cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"kl get sc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat sktorageClass/postgres-persistentVolumeClaim-storageClass.yaml                                                                   \napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgres-pvc-kiamol\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: kiamol\n  resources:\n    requests:\n      storage: 100Mi\n")),(0,r.kt)("p",null,"You would use the above storage class in a deployment like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Deployment\n...\n    spec:\n      containers:\n        - name: db\n          image: postgres:11.6-alpine\n...\n          volumeMounts:\n            - name: secret\n              mountPath: "/secrets"\n            - name: data\n              mountPath: /var/lib/postgresql/data\n      volumes:\n        - name: secret\n          secret:\n            secretName: todo-db-secret\n            defaultMode: 0400\n            items:\n            - key: POSTGRES_PASSWORD\n              path: postgres_password\n        - name: data\n          persistentVolumeClaim:\n            claimName: postgres-pvc-kiamol\n')))}m.isMDXComponent=!0}}]);