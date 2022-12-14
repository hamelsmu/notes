"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4741],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),y=o,f=p["".concat(c,".").concat(y)]||p[y]||m[y]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5687:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var n=t(3117),o=(t(7294),t(3905));const a={title:"Remote Browser For Jupyter"},i=void 0,u={unversionedId:"jupyter/remote_browser",id:"jupyter/remote_browser",title:"Remote Browser For Jupyter",description:"Background",source:"@site/docs/jupyter/remote_browser.md",sourceDirName:"jupyter",slug:"/jupyter/remote_browser",permalink:"/jupyter/remote_browser",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/jupyter/remote_browser.md",tags:[],version:"current",frontMatter:{title:"Remote Browser For Jupyter"},sidebar:"tutorialSidebar",previous:{title:"Fix Jupyter CUDA cache",permalink:"/jupyter/Fix Jupyter CUDA cache"},next:{title:"My Jupyter Shortcuts",permalink:"/jupyter/shortcuts"}},c={},s=[{value:"Background",id:"background",level:2},{value:"fast.ai",id:"fastai",level:2}],l={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"It is very common to connect to a remote Jupyter server with your local browser.  However, if you lose connection with your remote server, logs printed to the screen may stop streaming.  This is common when training deep learning models where training runs can last days or weeks where progress bars are printed to the screen in a notebook.  "),(0,o.kt)("p",null,"To avoid the issue with your browser loosing connection you can run the browser remotely on the same machine as the Jupyter server, even if your remote server does not have a desktop/GUI interface."),(0,o.kt)("h2",{id:"fastai"},"fast.ai"),(0,o.kt)("p",null,"The below youtube link (at timestamp 1:58:33), from fastai Lesson 10 Part 2 (2018) will walk you through how to accomplish this."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/h5Tz7gZT9Fo?start=7113",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);