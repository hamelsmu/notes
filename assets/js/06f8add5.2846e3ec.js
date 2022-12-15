"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),p=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,d=c["".concat(i,".").concat(h)]||c[h]||m[h]||r;return a?l.createElement(d,s(s({ref:t},u),{},{components:a})):l.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=a(7462),n=(a(7294),a(3905));const r={},s="Helm Upgrades & Rollbacks",o={unversionedId:"k8s/Helm Upgrade & Rollbacks",id:"k8s/Helm Upgrade & Rollbacks",title:"Helm Upgrades & Rollbacks",description:"Recommended pattern:",source:"@site/docs/k8s/17-Helm Upgrade & Rollbacks.md",sourceDirName:"k8s",slug:"/k8s/Helm Upgrade & Rollbacks",permalink:"/k8s/Helm Upgrade & Rollbacks",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/17-Helm Upgrade & Rollbacks.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Your Own Helm Charts",permalink:"/k8s/Creating Your Own Helm Charts"},next:{title:"Developer tips",permalink:"/k8s/Developer"}},i={},p=[{value:"1. Install &amp; test the new version",id:"1-install--test-the-new-version",level:2},{value:"2. Uninstall the test release",id:"2-uninstall-the-test-release",level:2},{value:"3. Perform an upgrade",id:"3-perform-an-upgrade",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"helm-upgrades--rollbacks"},"Helm Upgrades & Rollbacks"),(0,n.kt)("p",null,"Recommended pattern:"),(0,n.kt)("h2",{id:"1-install--test-the-new-version"},"1. Install & test the new version"),(0,n.kt)("p",null,"list all installed releases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"% helm ls -q \nch10-vweb\n")),(0,n.kt)("p",null,"see which versions are available"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"% helm search repo vweb --versions  \nNAME        CHART VERSION   APP VERSION DESCRIPTION\nkiamol/vweb 2.0.0           2.0.0       Simple versioned web app\nkiamol/vweb 1.0.0           1.0.0       Simple versioned web app\n")),(0,n.kt)("p",null,"Install the new version of the app"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# check the values for the new chart version:\nhelm show values kiamol/vweb --version 2.0.0\n\nhelm install --set servicePort=8020 --set replicaCount=1 --set serviceType=ClusterIP ch10-vweb-v2 kiamol/vweb --version 2.0.0\n")),(0,n.kt)("p",null,"After you test the app,"),(0,n.kt)("h2",{id:"2-uninstall-the-test-release"},"2. Uninstall the test release"),(0,n.kt)("p",null,"You can see a list of all releases with ",(0,n.kt)("inlineCode",{parentName:"p"},"helm list")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# see a list of releases\nhelm list\n....\n\nhelm uninstall ch10-vweb-v2\n")),(0,n.kt)("h2",{id:"3-perform-an-upgrade"},"3. Perform an upgrade"),(0,n.kt)("p",null,"You can upgrade like this, optionally using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--atomic")," flags:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--atomic")," flag is important, always use this!  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"with the atomic flag. It waits for all the resource updates to complete, and if any of them fails, it rolls back every other resource to the previous state.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --reuse-values --atomic ch10-vweb kiamol/vweb --version 2.0.0\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Always use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--atomic")," flag!")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"When you upgrade, the ",(0,n.kt)("inlineCode",{parentName:"p"},"--reuse-values")," flag will often be handy.  However, this can cause things to break if the api changes between versions.  So use with extreme care!")),(0,n.kt)("h1",{id:"dealing-with-failed-upgrades"},"Dealing With Failed Upgrades"),(0,n.kt)("p",null,"Get the history.  When you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--atomic")," flag things will automatically rollback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm history ch10-web\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4718).Z,width:"702",height:"362"})),(0,n.kt)("p",null,"To fix the failed update, I can manually set all the values in the upgrade command or use a values file with the same settings that are currently deployed. I don\u2019t have that values file, but I can save the output of the get values command to a file and use that in the upgrade, which gives me all my previous settings plus the defaults in the chart for any new settings."),(0,n.kt)("p",null,"You can get the values like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values kiamol/vweb --version 2.0.0 > myvalues.yaml                                                                          \n")),(0,n.kt)("p",null,"Then you can edit ",(0,n.kt)("inlineCode",{parentName:"p"},"myvalues.yaml")," and use it like this with the ",(0,n.kt)("inlineCode",{parentName:"p"},"-f")," flag:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade -f myvalues.yaml ch10-vweb-v2 kiamol/vweb --version 2.0.0 --dry-run  # take out --dry-run when ready to deploy\n")),(0,n.kt)("p",null,":::Note]"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It's usually a good idea to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag to sanity check that the generated YAML looks reasonable. ")),(0,n.kt)("h1",{id:"rollback"},"Rollback"),(0,n.kt)("p",null,"First, see thie history of your releases, which will show you ",(0,n.kt)("inlineCode",{parentName:"p"},"REVISION")," numbers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm release history ch10-vweb\n")),(0,n.kt)("p",null,"Rollback to a previous revision"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm rollback ch10-vweb 2\n")),(0,n.kt)("p",null,"Check the history again, will reflect the rollback."),(0,n.kt)("h1",{id:"uninstall--cleanup"},"Uninstall / Cleanup"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall release_name\n\n# uninstall everything DONT DO THIS IN PROD\nhelm uninstall $(helm ls -q)\n")))}c.isMDXComponent=!0},4718:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/20221213124829-0795b7a528bb96f7b3f081975e131c27.png"}}]);