"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},l=void 0,s={unversionedId:"k8s/Scaling",id:"k8s/Scaling",title:"Scaling",description:"replicas can be used for scaling.   You must also think about storage.",source:"@site/docs/k8s/07- Scaling.md",sourceDirName:"k8s",slug:"/k8s/Scaling",permalink:"/k8s/Scaling",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/07- Scaling.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ReplicaSets",permalink:"/k8s/ReplicaSets"},next:{title:"Multi Container Pods",permalink:"/k8s/Multi Container Pods"}},i={},c=[{value:"DaemonSets",id:"daemonsets",level:2},{value:"Use cases for DaemonSets:",id:"use-cases-for-daemonsets",level:3},{value:"Labeling A Node For DaemonSets",id:"labeling-a-node-for-daemonsets",level:3},{value:"Cascade Delete",id:"cascade-delete",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"replicas can be used for scaling.   You must also think about storage.  "),(0,a.kt)("h2",{id:"daemonsets"},"DaemonSets"),(0,a.kt)("p",null,"[","[DaemonSets]","] allow you to run a service on each node.  You can do this for node specific things like collecting logs on each node.  ",(0,a.kt)("inlineCode",{parentName:"p"},"DaemonSets")," are yet another kind of controller for Pods beyond [","[Deployments]","]"),(0,a.kt)("p",null,"If you switch from a Deployment to a DaemonSet you should delete the Deployment first.  You can't automatically change from one kind of controller to another."),(0,a.kt)("p",null,"A DaemonSet runs a control loop that will watch for any new nodes and start a pod on that node."),(0,a.kt)("h3",{id:"use-cases-for-daemonsets"},"Use cases for DaemonSets:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Want to run a pod on every node"),(0,a.kt)("li",{parentName:"ol"},"you have only a subset of nodes that can receive traffic from the internet -> use labels to achieve this.  ")),(0,a.kt)("h3",{id:"labeling-a-node-for-daemonsets"},"Labeling A Node For DaemonSets"),(0,a.kt)("p",null,"This allows you to select which nodes the Daemonset runs on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat pi/proxy/daemonset/nginx-ds-nodeSelector.yaml\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: pi-proxy\n  labels:\n    kiamol: ch06\nspec:\n  selector:\n    matchLabels:\n      app: pi-proxy\n  template:\n    metadata:\n      labels:\n        app: pi-proxy\n    spec:\n...\n      nodeSelector:\n        kiamol: ch06\n")),(0,a.kt)("p",null,"To use thie above yaml, you have to label your node like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kl label node $(kl get nodes...) kiamol=ch06 --overwrite\n")),(0,a.kt)("h3",{id:"cascade-delete"},"Cascade Delete"),(0,a.kt)("p",null,"TLDR; you probably don't need this"),(0,a.kt)("p",null,"You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"cascade=False")," to delete a controller without deleting its managed objects.  This is how you can change a controller but still keep pods alive. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kl delete ds pi-proxy --cascade=orphan  # deletes the daemonset pi-proxy\n")),(0,a.kt)("p",null,"Controllers use a label selector to find objects they manage, so you just have to make sure the new controller you define has the right label.  Hamel: it's not clear how to switch from a Daemonset to a deployment."))}u.isMDXComponent=!0}}]);