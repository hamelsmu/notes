"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3099],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8103:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={},c=void 0,l={unversionedId:"k8s/7b. Ambassador Sidecars",id:"k8s/7b. Ambassador Sidecars",title:"7b. Ambassador Sidecars",description:"[[Ambassador]]",source:"@site/docs/k8s/7b. Ambassador Sidecars.md",sourceDirName:"k8s",slug:"/k8s/7b. Ambassador Sidecars",permalink:"/k8s/7b. Ambassador Sidecars",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/7b. Ambassador Sidecars.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2b. Secrets",permalink:"/k8s/2b. Secrets"},next:{title:"7c. Downsides of MC Pods",permalink:"/k8s/7c. Downsides of MC Pods"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[","[Ambassador]","]"),(0,o.kt)("p",null,"These are [","[Sidecar]","] containers that act as proxys.  You can do this for reliability or security.  Proxy containers can do load balancing, retries, or encrypt items.  [","[service mesh]","] uses patterns like this. "),(0,o.kt)("p",null,"For example you may want to restrict what web requests or URLs your app is allowed to talk to.  With an ambassador sidecar, you can block all traffic besides the allowed one.   Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'      containers:\n        - name: web\n          image: kiamol/ch03-numbers-web \n          env:\n          - name: http_proxy\n            value: http://localhost:1080\n          - name: RngApi__Url\n            value: http://localhost/api\n        - name: proxy                         # this is a basic proxy\n          image: kiamol/ch07-simple-proxy          \n          env:\n          - name: Proxy__Port                 #Routes network requets given \n            value: "1080"                     # the below mapping\n          - name: Proxy__Request__UriMap__Source\n            value: http://localhost/api\n          - name: Proxy__Request__UriMap__Target\n            value: http://numbers-api/sixeyed/kiamol/master/ch03/numbers/rng\n\n')),(0,o.kt)("p",null,"In the above example, anything that is not in the mapping  is blocked.   Now the web app is restricted to a single address for outgoing requests, which are logged by the proxy. "),(0,o.kt)("p",null,"the app container uses localhost addresses for any services it consumes, and it\u2019s configured to route all network calls through the proxy container. The proxy is a custom app that logs network calls, maps localhost addresses to real addresses, and blocks any addresses that are not listed in the map. All that becomes functionality in the Pod, but it\u2019s transparent to the application container."),(0,o.kt)("p",null,"You can also use Ambassador's for database connections, to query read-only copies when there are no db updates/writes:"),(0,o.kt)("p",null,"![","[Pasted image 20221210204112.png]","]"))}m.isMDXComponent=!0}}]);