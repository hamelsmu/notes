(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5920],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6066:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r=n(3117),o=n(7294),a=n(2389),i=n(4334),c=n(2949),s=n(6668);function l(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var u=n(5281),p=n(7594),d=n.n(p);const f=/title=(?<quote>["'])(?<title>.*?)\1/,m=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:r}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&m.test(a)){const e=a.match(m).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(h),t)}}(r,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<c.length;){const e=c[d].match(i);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?s[l[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const f={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}var b="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(l());return o.createElement(t,(0,r.Z)({},n,{style:a,className:(0,i.Z)(n.className,b,u.k.common.codeBlock)}))}var k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return o.createElement(v,{as:"pre",tabIndex:0,className:(0,i.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:k.codeBlockLines},t))}var T=n(902);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,r]=(0,o.useState)(),a=(0,o.useCallback)((()=>{r(e.current?.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,o.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=C);const r=(0,T.zX)(t),a=(0,T.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,a),()=>t.disconnect()}),[e,r,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var O={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},N={Prism:n(1205).Z,theme:O};function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var A=/\r\n|\r|\n/,j=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},x=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=S({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=S({},n,{backgroundColor:null}),o};function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var I=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),L(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=S({},B(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==o&&(a.style=void 0!==a.style?S({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),L(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var i=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),L(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,i=S({},B(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(i.style=void 0!==i.style?S({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),L(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=r[i]++)<o[i];){var l=void 0,u=t[i],p=n[i][a];if("string"==typeof p?(u=i>0?u:["plain"],l=p):(u=x(u,p.type),p.alias&&(u=x(u,p.alias)),l=p.content),"string"==typeof l){var d=l.split(A),f=d.length;c.push({types:u,content:d[0]});for(var m=1;m<f;m++)j(c),s.push(c=[]),c.push({types:u,content:d[m]})}else i++,t.push(u),n.push(l),r.push(0),o.push(l.length)}i--,t.pop(),n.pop(),r.pop(),o.pop()}return j(c),s}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),_=I,H="codeLine_lJS_",M="codeLineNumber_Tfdd",Z="codeLineContent_feaV";function R(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=c({line:t,className:(0,i.Z)(n,a&&H)}),u=t.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))));return o.createElement("span",l,a?o.createElement(o.Fragment,null,o.createElement("span",{className:M}),o.createElement("span",{className:Z},u)):u,o.createElement("br",null))}var D=n(5999),q={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function z(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),s=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let i=!1;a.rangeCount>0&&(i=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),i&&(a.removeAllRanges(),a.addRange(i)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,D.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,q.copyButton,r&&q.copyButtonCopied),onClick:s},o.createElement("span",{className:q.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:q.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:q.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var W="wordWrapButtonIcon_Bwma",$="wordWrapButtonEnabled_EoeP";function F(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,D.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,r&&$),"aria-label":a,title:a},o.createElement("svg",{className:W,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Y(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,s.L)(),h=p??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??d;const y=l(),b=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),i=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return w(a,c),(0,o.useEffect)((()=>{c()}),[e,c]),(0,o.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:i}}(),E=function(e){return e?.match(f)?.groups.title??""}(a)||c,{lineClassNames:T,code:C}=g(t,{metastring:a,language:h,magicComments:m}),O=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return o.createElement(v,{as:"div",className:(0,i.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},E&&o.createElement("div",{className:k.codeBlockTitle},E),o.createElement("div",{className:k.codeBlockContent},o.createElement(_,(0,r.Z)({},N,{theme:y,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,i.Z)(t,k.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,i.Z)(k.codeBlockLines,O&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(R,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:T[t],showLineNumbers:O})))))})),o.createElement("div",{className:k.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&o.createElement(F,{className:k.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),o.createElement(z,{className:k.codeButton,code:C}))))}function U(e){let{children:t,...n}=e;const i=(0,a.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?Y:E;return o.createElement(s,(0,r.Z)({key:String(i)},n),c)}},4673:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(3117),o=n(7294),a=n(4334),i=n(7459),c=n(2389),s=n(6043),l="details_lb9f",u="isBrowser_bmU9",p="collapsibleContent_i85q";function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function m(e){let{summary:t,children:n,...a}=e;const m=(0,c.Z)(),h=(0,o.useRef)(null),{collapsed:y,setCollapsed:g}=(0,s.u)({initialState:!a.open}),[b,v]=(0,o.useState)(a.open);return o.createElement("details",(0,r.Z)({},a,{ref:h,open:b,"data-collapsed":y,className:(0,i.Z)(l,m&&u,a.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&f(t,h.current)&&(e.preventDefault(),y?(g(!1),v(!0)):g(!0))}}),t??o.createElement("summary",null,"Details"),o.createElement(s.z,{lazy:!1,collapsed:y,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),v(!e)}},o.createElement("div",{className:p},n)))}var h="details_b_Ee";function y(e){let{...t}=e;return o.createElement(m,(0,r.Z)({},t,{className:(0,a.Z)("alert alert--info",h,t.className)}))}},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(3117),o=n(7294),a=n(4334),i=n(5999),c=n(6668),s="anchorWithStickyNavbar_LWe7",l="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:p}}=(0,c.L)();return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},u,{className:(0,a.Z)("anchor",p?l:s),id:n}),u.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},u,{id:void 0}))}},5042:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(3905),a=n(2294);function i(e){let{children:t}=e;return r.createElement(o.Zo,{components:a.Z},t)}},9407:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(3117),o=n(7294),a=n(4334),i=n(3743),c="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,a.Z)(c,"thin-scrollbar",t)},o.createElement(i.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(3117),o=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,o.useRef)(void 0),n=u();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),s=l(c,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}var f=o.memo(d);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:u,maxHeadingLevel:d,...m}=e;const h=(0,a.L)(),y=u??h.tableOfContents.minHeadingLevel,g=d??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:y,maxHeadingLevel:g});return p((0,o.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:y,maxHeadingLevel:g}}),[s,l,y,g])),o.createElement(f,(0,r.Z)({toc:b,className:n,linkClassName:s},m))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},4593:function(e,t,n){"use strict";var r,o,a,i,c=n(5697),s=n.n(c),l=n(3524),u=n.n(l),p=n(9590),d=n.n(p),f=n(7294),m=n(7418),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(v).map((function(e){return v[e]})),"charset"),E="cssText",T="href",C="http-equiv",w="innerHTML",O="itemprop",N="name",L="property",S="rel",A="src",j="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",B="defer",I="encodeSpecialCharacters",_="onChangeClientState",H="titleTemplate",M=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),Z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],R="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=J(e,v.TITLE),n=J(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},V=function(e){return J(e,_)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==w&&c!==E&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(v.BODY,r),se(v.HTML,o),ce(p,d);var f={baseTag:le(v.BASE,n),linkTags:le(v.LINK,a),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(v.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(R):n.getAttribute(R)!==i.join(",")&&n.setAttribute(R,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+R+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=pe(n,r),[f.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+" "+R+'="true" '+o+">"+Y(a,r)+"</"+e+">":"<"+e+" "+R+'="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===w||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===w||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===Z.indexOf(e);return t+"<"+e+" "+R+'="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,a,r),meta:de(v.META,i,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,s,r),style:de(v.STYLE,l,r),title:de(v.TITLE,{title:p,titleAttributes:d},r)}},me=u()((function(e){return{baseTag:G([T,j],e),bodyAttributes:K(y,e),defer:J(e,B),encode:J(e,I),htmlAttributes:K(g,e),linkTags:X(v.LINK,[S,T],e),metaTags:X(v.META,[N,k,C,L,O],e),noscriptTags:X(v.NOSCRIPT,[w],e),onChangeClientState:V(e),scriptTags:X(v.SCRIPT,[A,w],e),styleTags:X(v.STYLE,[E],e),title:U(e),titleAttributes:K(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),fe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return q(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case v.BODY:return W({},o,{bodyAttributes:W({},a)});case v.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}($(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=$(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(f.Component),a.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.Z=he},3524:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}}}]);