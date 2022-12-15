"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"k8s/Creating Your Own Helm Charts",id:"k8s/Creating Your Own Helm Charts",title:"Creating Your Own Helm Charts",description:"This is going to be really light, as we don't want to get too deep into this.  You can really just skip this if you like.",source:"@site/docs/k8s/16-Creating Your Own Helm Charts.md",sourceDirName:"k8s",slug:"/k8s/Creating Your Own Helm Charts",permalink:"/k8s/Creating Your Own Helm Charts",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/16-Creating Your Own Helm Charts.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Helm",permalink:"/k8s/Helm"},next:{title:"Helm Upgrades & Rollbacks",permalink:"/k8s/Helm Upgrade & Rollbacks"}},s={},p=[{value:"Validate with <code>helm lint</code>",id:"validate-with-helm-lint",level:2},{value:"Install",id:"install",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This is going to be really light, as we don't want to get too deep into this.  You can really just skip this if you like. ")),(0,r.kt)("p",null,"You can reference a directory, vs a zip archive when developing locally. "),(0,r.kt)("h1",{id:"setup-directory-w-helm-create"},"Setup Directory w/ ",(0,r.kt)("inlineCode",{parentName:"h1"},"helm create")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"helm create")," to generate boilerplate directory structure:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5010).Z,width:"629",height:"496"})),(0,r.kt)("p",null,"YAML is templated like this: "),(0,r.kt)("p",null,"Note the handy ",(0,r.kt)("inlineCode",{parentName:"p"},"quote")," function for applying quotes!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Release.Name }}\n  labels:\n    kiamol: {{ .Values.kiamolChapter }}\nspec:\n  selector:\n    matchLabels:\n      app: web-ping\n      instance: {{ .Release.Name }}\n  template:\n    metadata:\n      labels:\n        app: web-ping\n        instance: {{ .Release.Name }}\n    spec:\n      containers:\n        - name: app\n          image: kiamol/ch10-web-ping\n          env:\n            - name: TARGET\n              value: {{ .Values.targetUrl }}\n            - name: METHOD\n              value: {{ .Values.httpMethod }}\n            - name: INTERVAL\n              value: {{ .Values.pingIntervalMilliseconds | quote }}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# port for the Service to listen on\nservicePort: 8090\n# number of replicas for the web Pod\nreplicaCount: 2\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v2\nname: vweb\ndescription: Simple versioned web app\ntype: application\nversion: 1.0.0\nappVersion: 1.0.0\n\n")),(0,r.kt)("h1",{id:"running-charts"},"Running charts"),(0,r.kt)("h2",{id:"validate-with-helm-lint"},"Validate with ",(0,r.kt)("inlineCode",{parentName:"h2"},"helm lint")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helm lint directory/")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm install directory/\n")),(0,r.kt)("h1",{id:"distributing-charts"},"Distributing Charts"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://kiamol.net/index.yaml"},"https://kiamol.net/index.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nentries:\n  vweb:\n  - apiVersion: v2\n    appVersion: 2.0.0\n    created: "2020-06-10T10:42:32.3790003+01:00"\n    description: Simple versioned web app\n    digest: 16b2d1059639208d64fa0c6d9d7aeb825021f7fe25034760a70d33afda51a8cb\n    name: vweb\n    type: application\n    urls:\n    - https://github.com/sixeyed/kiamol/releases/download/v2.0.0/vweb-2.0.0.tgz\n    version: 2.0.0\n  - apiVersion: v2\n    appVersion: 1.0.0\n    created: "2020-06-10T10:42:32.3790003+01:00"\n    description: Simple versioned web app\n    digest: 182061847198468c8ee55e56104d8eaa2b1662e10846aed7134930ef6e03f95b\n    name: vweb\n    type: application\n    urls:\n    - https://github.com/sixeyed/kiamol/files/4757269/vweb-1.0.0.tar.gz\n    version: 1.0.0\ngenerated: "2020-06-10T10:01:44.600496+01:00"\n')),(0,r.kt)("p",null,"Charts need to be packaged before they can be published to a repository, and publishing is usually a three-stage process: package the chart into a zip archive, upload the archive to a server, and update the repository index to add the new chart."),(0,r.kt)("p",null,"There is software called ChartMueseum that will help you package things.  "),(0,r.kt)("p",null,"Lookup how to host helm charts on GitHub if interested."))}u.isMDXComponent=!0},5010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20221213105720-6de5049ad2cd8bbf71a18a131e80da5a.png"}}]);