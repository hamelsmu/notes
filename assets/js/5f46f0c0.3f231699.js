"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"k8s/Helm",id:"k8s/Helm",title:"Helm",description:"- It's a client-side tool",source:"@site/docs/k8s/15-Helm.md",sourceDirName:"k8s",slug:"/k8s/Helm",permalink:"/k8s/Helm",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/15-Helm.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rollouts",permalink:"/k8s/Rollouts & Rollbacks"},next:{title:"Creating Your Own Helm Charts",permalink:"/k8s/Creating Your Own Helm Charts"}},p={},s=[{value:"Add a repo",id:"add-a-repo",level:2},{value:"Inspect default values in chart",id:"inspect-default-values-in-chart",level:2},{value:"Install the chart",id:"install-the-chart",level:2},{value:"Dry runs",id:"dry-runs",level:3},{value:"Update the release",id:"update-the-release",level:2}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's a client-side tool"),(0,a.kt)("li",{parentName:"ul"},"Uses ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," to connect to your cluster"),(0,a.kt)("li",{parentName:"ul"},"Add repos with a URL ",(0,a.kt)("inlineCode",{parentName:"li"},"helm repo add https://...")),(0,a.kt)("li",{parentName:"ul"},"Update repos with ",(0,a.kt)("inlineCode",{parentName:"li"},"helm repo update")),(0,a.kt)("li",{parentName:"ul"},"It's basically parametrized YAML",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Helm templates are not valid YAML, so you can't use kubectl")))),(0,a.kt)("p",null,"Jeremy Lewi:  Use Kustomize, not Helm, if you can."),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chart"),": an application packge "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"release"),": when you install a chart.  Every release has a name.")),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"A helm chart parameterizes YAML and exposes the parameters and their defaults on the command line for you to edit. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5010).Z,width:"629",height:"496"})),(0,a.kt)("h2",{id:"add-a-repo"},"Add a repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," helm repo add kiamol https://kiamol.net\n")),(0,a.kt)("h2",{id:"inspect-default-values-in-chart"},"Inspect default values in chart"),(0,a.kt)("p",null,"See what versions are available"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"% helm search repo vweb --versions  \nNAME        CHART VERSION   APP VERSION DESCRIPTION\nkiamol/vweb 2.0.0           2.0.0       Simple versioned web app\nkiamol/vweb 1.0.0           1.0.0       Simple versioned web app\n")),(0,a.kt)("p",null,"See the default values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"% helm show values kiamol/vweb --version 1.0.0                                                                            \nservicePort: 8090\nreplicaCount: 2\n")),(0,a.kt)("h2",{id:"install-the-chart"},"Install the chart"),(0,a.kt)("p",null,"Override default values, and name the release ",(0,a.kt)("inlineCode",{parentName:"p"},"ch10-vweb"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," helm install --set servicePort=8010 --set replicaCount=1 ch10-vweb kiamol/vweb --version 1.0.0\n")),(0,a.kt)("p",null,"See the deployment (labels omitted in below output for brevity)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"% kl get deploy --show-labels                                                                                                              \nNAME        READY   UP-TO-DATE   AVAILABLE   AGE\nch10-vweb   1/1     1            1           39s\n")),(0,a.kt)("h3",{id:"dry-runs"},"Dry runs"),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag that will generate the YAML for you.  "),(0,a.kt)("h2",{id:"update-the-release"},"Update the release"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade")," :"),(0,a.kt)("p",null,"In this case we are going to increase the replica count:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'% helm upgrade --set servicePort=8010 --set replicaCount=3 ch10-vweb kiamol/vweb --version 1.0.0\nRelease "ch10-vweb" has been upgraded. Happy Helming!\nNAME: ch10-vweb\nLAST DEPLOYED: Tue Dec 13 11:10:04 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 2\nTEST SUITE: None\n')))}c.isMDXComponent=!0},5010:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20221213105720-6de5049ad2cd8bbf71a18a131e80da5a.png"}}]);