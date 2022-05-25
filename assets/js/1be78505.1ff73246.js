"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[514,608],{6756:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),r=n(3905),l=n(8790),o=n(2434),i=n(6010),c=n(5450),s=n(5537),u=n(7462);function d(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(5999),p=n(3366),h=n(9960),b=n(3919),f=n(541),v="menuHtmlItem_fVIQ",E=n(2389),g=["item"],k=["item","onItemClick","activePath","level","index"],Z=["item","onItemClick","activePath","level","index"];function _(e){var t=e.item,n=(0,p.Z)(e,g);switch(t.type){case"category":return a.createElement(C,(0,u.Z)({item:t},n));case"html":return a.createElement(S,(0,u.Z)({item:t},n));default:return a.createElement(T,(0,u.Z)({item:t},n))}}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=e.index,s=(0,p.Z)(e,k),d=t.items,b=t.label,f=t.collapsible,v=t.className,g=t.href,Z=function(e){var t=(0,E.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),_=(0,c._F)(t,r),C=(0,c.Mg)(g,r),S=(0,c.uR)({initialState:function(){return!!f&&(!_&&t.collapsed)}}),T=S.collapsed,I=S.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,c.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:_,collapsed:T,setCollapsed:I});var N=(0,c.fP)(),M=N.expandedItem,x=N.setExpandedItem;function L(e){void 0===e&&(e=!T),x(e?null:o),I(e)}var w=(0,c.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){f&&M&&M!==o&&w&&I(!0)}),[f,M,o,I,w]),a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemCategory,c.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":T},v)},a.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":f&&!g,"menu__link--active":_}),onClick:f?function(e){null==n||n(t),g?L(!1):(e.preventDefault(),L())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,href:f?null!=Z?Z:"#":Z},s),b),g&&f&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),a.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},a.createElement(y,{items:d,tabIndex:T?-1:0,onItemClick:n,activePath:r,level:l+1})))}function S(e){var t=e.item,n=e.level,r=e.index,l=t.value,o=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(n),o&&v+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:l}})}function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(e.index,(0,p.Z)(e,Z)),s=t.href,d=t.label,m=t.className,v=(0,c._F)(t,r);return a.createElement("li",{className:(0,i.Z)(c.kM.docs.docSidebarItemLink,c.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:d},a.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},o),(0,b.Z)(s)?d:a.createElement("span",null,d,a.createElement(f.Z,null))))}var I=["items"];function N(e){var t=e.items,n=(0,p.Z)(e,I);return a.createElement(c.D_,null,t.map((function(e,t){return a.createElement(_,(0,u.Z)({key:t,item:e,index:t},n))})))}var y=(0,a.memo)(N),M="sidebar_CW9Y",x="sidebarWithHideableNavbar_FoYL",L="sidebarHidden_D64r",w="sidebarLogo_FJUI",A="menu_SkdO",B="menuWithAnnouncementBar_x19h",F="collapseSidebarButton_cwdi",H="collapseSidebarButtonIcon_xORG";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(d,{className:H}))}function D(e){var t,n,r=e.path,l=e.sidebar,o=e.onCollapse,u=e.isHidden,d=function(){var e=(0,c.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,c.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,c.LU)(),p=m.navbar.hideOnScroll,h=m.hideableSidebar;return a.createElement("div",{className:(0,i.Z)(M,(t={},t[x]=p,t[L]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:w}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",A,(n={},n[B]=d,n))},a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:l,activePath:r,level:1}))),h&&a.createElement(P,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,i.Z)(c.kM.docs.docSidebarMenu,"menu__list")},a.createElement(y,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return a.createElement(c.Cv,{component:R,props:e})}var O=a.memo(D),Y=a.memo(W);function q(e){var t=(0,c.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(O,e),r&&a.createElement(Y,e))}var z=n(2294),U=n(4608),V="backToTopButton_RiI4",K="backToTopButtonShow_ssHd";function G(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function X(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useRef)(!1),o=G(),s=o.smoothScrollTop,u=o.cancelScrollToTop;return(0,c.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(l.current)l.current=!1;else{var o=n<a;if(o||u(),n<300)r(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&r(!0)}else r(!1)}})),(0,c.SL)((function(e){e.location.hash&&(l.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.kM.common.backToTopButton,V,(e={},e[K]=n,e)),type:"button",onClick:function(){return s()}})}var j=n(6775),J={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},Q=n(5742);function $(e){var t,n,l,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,h=e.sidebarName,b=(0,c.Vq)(),f=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],k=E[1],Z=(0,a.useState)(!1),_=Z[0],C=Z[1],S=(0,a.useCallback)((function(){_&&C(!1),k((function(e){return!e}))}),[_]);return a.createElement(o.Z,{wrapperClassName:c.kM.wrapper.docsPages,pageClassName:c.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.os)(f,v)}},a.createElement("div",{className:J.docPage},a.createElement(X,null),b&&a.createElement("aside",{className:(0,i.Z)(c.kM.docs.docSidebarContainer,J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&g&&C(!0)}},a.createElement(q,{key:h,sidebar:b,path:s.path,onCollapse:S,isHidden:_}),_&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},a.createElement(d,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(J.docMainContainer,(n={},n[J.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(l={},l[J.docItemWrapperEnhanced]=g,l))},a.createElement(r.Zo,{components:z.Z},p)))))}function ee(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,j.LX)(r.pathname,e)}));if(!o)return a.createElement(U.default,null);var i=o.sidebar,s=i?n.docsSidebars[i]:null;return a.createElement(a.Fragment,null,a.createElement(Q.Z,null,a.createElement("html",{className:n.className})),a.createElement(c.qu,{version:n},a.createElement(c.bT,{sidebar:s},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:i},(0,l.H)(t,{versionMetadata:n})))))}},4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(7294),r=n(2434),l=n(5999);function o(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2294:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7462),r=n(3366),l=n(7294),o=n(5742),i=n(9960),c=n(1736),s=n(9649),u=n(7488),d="wrapper_Kbar",m=function(e){var t=e.children;return l.createElement("div",{className:d},t," ")},p="wrapper_II1w",h=n(4593),b=function(e){var t,n,a,r,o=e.children;if(!o)return console.warn("<HTMLOutputBlock/> should include a code block"),null;if(null==(t=o.props)||!t.children||"code"!==(null==(n=o.props)||null==(a=n.children)||null==(r=a.props)?void 0:r.originalType))return console.warn("<HTMLOutputBlock/> should include a code block"),null;var i=o.props.children.props.children,c=i.match(/<script[^>]*>([\s\S]*)<\/script>/),s=c&&c.length>1;return l.createElement(l.Fragment,null,s?l.createElement(h.Z,null,l.createElement("script",null,c[1])):null,l.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:i}}))},f=["mdxType","originalType"];var v={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,r.Z)(a,f));return l.createElement(e.props.originalType,o)}return e}(e)}));return l.createElement(o.Z,e,t)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(c.Z,e)},a:function(e){return l.createElement(i.Z,e)},pre:function(e){var t;return l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(u.Z,(0,a.Z)({},e,{summary:n}),r)},h1:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return l.createElement(s.Z,(0,a.Z)({as:"h6"},e))},CodeOutputBlock:m,HTMLOutputBlock:b}}}]);