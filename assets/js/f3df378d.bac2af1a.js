"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const l={},a="Rollouts",i={unversionedId:"k8s/Rollouts & Rollbacks",id:"k8s/Rollouts & Rollbacks",title:"Rollouts",description:"Rollouts happen when you create a deployment or update a podspec.",source:"@site/docs/k8s/14-Rollouts & Rollbacks.md",sourceDirName:"k8s",slug:"/k8s/Rollouts & Rollbacks",permalink:"/k8s/Rollouts & Rollbacks",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/14-Rollouts & Rollbacks.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jobs",permalink:"/k8s/Jobs and CronJobs"},next:{title:"Helm",permalink:"/k8s/Helm"}},s={},u=[{value:"Dry Run",id:"dry-run",level:3},{value:"To a specific version",id:"to-a-specific-version",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rollouts"},"Rollouts"),(0,r.kt)("p",null,"Rollouts happen when you create a deployment or update a podspec."),(0,r.kt)("p",null,"Only triggered by change to the podspec, not other changes to a Deployment\nYou can see rollout history like this "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kl rollout history deploy/vweb\n")),(0,r.kt)("p",null,"You can get details of a revision with the revision flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% kl rollout history deploy/vweb                                                                                             \ndeployment.apps/vweb\nREVISION  CHANGE-CAUSE\n1         <none>\n2         kubectl apply --filename=vweb/update/vweb-v11.yaml --record=true\n\n% kl rollout history deploy/vweb  --revision=1                                                                               \ndeployment.apps/vweb with revision #1\nPod Template:\n  Labels:   app=vweb\n    pod-template-hash=6ddb844d69\n    version=v1\n  Containers:\n   web:\n    Image:  kiamol/ch09-vweb:v1\n    Port:   80/TCP\n    Host Port:  0/TCP\n    Environment:    <none>\n    Mounts: <none>\n  Volumes:  <none>\n")),(0,r.kt)("p",null,"It's helpful to include informational labels with version numbers."),(0,r.kt)("h1",{id:"undoing-a-rollout"},"Undoing a rollout"),(0,r.kt)("h3",{id:"dry-run"},"Dry Run"),(0,r.kt)("p",null,"This shows you what the YAML will be  so you can inspect the changes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kl rollout undo .... --dry-run=client")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"% kl rollout undo deploy/vweb --dry-run=client                                                                               \ndeployment.apps/vweb Pod Template:\n  Labels:   app=vweb\n    pod-template-hash=6ddb844d69\n    version=v1   # its helpful to have version numbers for informational purposes\n  Containers:\n   web:\n    Image:  kiamol/ch09-vweb:v1\n    Port:   80/TCP\n    Host Port:  0/TCP\n    Environment:    <none>\n    Mounts: <none>\n  Volumes:  <none>\n")),(0,r.kt)("h2",{id:"to-a-specific-version"},"To a specific version"),(0,r.kt)("p",null,"You can rollback to a specific revision "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl rollout undo deploy/vweb --to-revision=2\n")),(0,r.kt)("h1",{id:"configuring-rollouts"},"Configuring Rollouts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxUnavailable")," is the accelerator for scaling down the old ReplicaSet. It defines how many Pods can be unavailable during the update, relative to the desired Pod count. You can think of it as the batch size for terminating Pods in the old ReplicaSet. In a Deployment of 10 Pods, setting this to 30% means three Pods will be terminated immediately. Default is 25%"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minReadySeconds")," adds a delay where the Deployment waits to make sure new Pods are stable. It specifies the number of seconds the Pod should be up with no containers crashing before it\u2019s considered to be successful. The default is zero, which is why new Pods are created quickly during rollouts.")),(0,r.kt)("p",null,"There are specific options for [","[DaemonSets]","] and [","[StatefulSet]","] but we will skip those as we can just use the defaults for now (and not get stuck in advanced things)."),(0,r.kt)("h1",{id:"blue-green-deployments"},"Blue Green Deployments"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You can probably ignore this section")),(0,r.kt)("p",null,"This is a paradigm that is different than rolling updates, where you have two versions of your app deployed, but only one is active.  You can flip the switch by updating the label selector in the Service to send the traffic to Pods in a different deployment. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(545).Z,width:"634",height:"427"})))}c.isMDXComponent=!0},545:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/20221213102708-ce41f8209fbbb54e16ba903ca212c4fa.png"}}]);