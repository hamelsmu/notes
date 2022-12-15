"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1826],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4751:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var n=a(3117),o=(a(7294),a(3905));const s={title:"Why Should Data Scientists Learn Kubernetes?",description:"Learning Kubefrnetes basics can give you an unreasonable competitive advantage as a data scientist and unblock your teams.",image:"https://user-images.githubusercontent.com/1483922/207669622-c20b0c6c-5721-473c-ba03-b831000ef0a8.jpeg"},r=void 0,i={unversionedId:"k8s/index",id:"k8s/index",title:"Why Should Data Scientists Learn Kubernetes?",description:"Learning Kubefrnetes basics can give you an unreasonable competitive advantage as a data scientist and unblock your teams.",source:"@site/docs/k8s/index.md",sourceDirName:"k8s",slug:"/k8s/",permalink:"/k8s/",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/index.md",tags:[],version:"current",frontMatter:{title:"Why Should Data Scientists Learn Kubernetes?",description:"Learning Kubefrnetes basics can give you an unreasonable competitive advantage as a data scientist and unblock your teams.",image:"https://user-images.githubusercontent.com/1483922/207669622-c20b0c6c-5721-473c-ba03-b831000ef0a8.jpeg"},sidebar:"tutorialSidebar",previous:{title:"My Jupyter Shortcuts",permalink:"/jupyter/shortcuts"},next:{title:"Basics",permalink:"/k8s/Basics"}},l={},u=[{value:"Managed services are not always an option",id:"managed-services-are-not-always-an-option",level:2},{value:"Nobody is coming to save you",id:"nobody-is-coming-to-save-you",level:2},{value:"Helm Charts are like an OSS app store",id:"helm-charts-are-like-an-oss-app-store",level:2},{value:"ML research is crowded. Compete on SWE skills.",id:"ml-research-is-crowded-compete-on-swe-skills",level:2},{value:"Your company likely already runs K8s",id:"your-company-likely-already-runs-k8s",level:2},{value:"But isn&#39;t it overkill?",id:"but-isnt-it-overkill",level:2},{value:"You don&#39;t need to become an expert",id:"you-dont-need-to-become-an-expert",level:2},{value:"Course: K8s for Data Scientists",id:"course-k8s-for-data-scientists",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For the uninitiated ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),', also known as K8s, is "an open-source system for automating deployment, scaling, and management of containerized applications."'),(0,o.kt)("p",null,"I agree with ",(0,o.kt)("a",{parentName:"p",href:"https://huyenchip.com/2021/09/13/data-science-infrastructure.html"},"Chip Huyen")," that Data Scientists ",(0,o.kt)("strong",{parentName:"p"},"shouldn't need to")," learn K8s.   However, the cold truth is:  ",(0,o.kt)("strong",{parentName:"p"},"Even though you shouldn't have to, you should anyway!"),"  Even ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/vboykis/status/1596610600511102976"},"Vicki Boykis")," seems to agree",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sage wisdom from Vicki",src:a(7851).Z,width:"480",height:"310"})),(0,o.kt)("p",null,"Below, I outline reasons why I think learning K8s is a good idea for data scientists",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),".  But if you are already convinced, feel free to jump ahead and read about my free course: ",(0,o.kt)("a",{parentName:"p",href:"#course-k8s-for-data-scientists"},"K8s For Data Scientists"),"."),(0,o.kt)("h2",{id:"managed-services-are-not-always-an-option"},"Managed services are not always an option"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A robot concierge helping a data scientist",src:a(9063).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"Major clouds offer some data science infrastructure as managed services, but it usually doesn't cover everything you need. There are many popular open source infrastructure tools which data scienists consider to be staples or must-haves in their workflow.  For example, many clouds offer only limited or no managed services for things like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://airflow.apache.org/"},"Airflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jupyter.org/hub"},"JupyterHub")),(0,o.kt)("li",{parentName:"ul"},"ML workflow and experiment tracking systems. ",(0,o.kt)("sup",{parentName:"li",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.dask.org/"},"Dask")),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("p",null,"There is often a gap between cloud offerings and the needs of data science teams, which are often filled by open-source tools. When open source isn't enough, third party vendors are happy to install their software on your cloud. However, you often need basic infrastructure skills to enable either of these things. These skills often intersect with Kubernetes."),(0,o.kt)("h2",{id:"nobody-is-coming-to-save-you"},"Nobody is coming to save you"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A scientist dressed as a super hero",src:a(7068).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"A typical first experience as a data scientist or machine learning professional is that you don't have the necessary tools to get started.  This is incredibly frustrating, as making progress without the proper tools can be hard.  This experience usually culminates in a conversation like this:"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Data Scientist: I'm excited to join ACME company!  You've hired me to optimize marketing spend with predictive models.  The issue is that we don't have the basic infrastructure or tools are necessary for me to work efficiently.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Manager: I'm confused. Can't you install the tools you need?  Isn't that what you are for?  I was expecting that you would figure it out.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Data Scientist:  No, I don't know how to setup and deploy infrastructure.  We need a special infrastructure or DevOps person for that.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Manager: It will be hard to ask for more resources if we don't know the expected return on investment.  Can you do the ML project first, demonstrate some value, and then we can invest in infrastructure?")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Data Scientist:  I need some minimum tools to allow me to more quickly experiment and develop proof of concepts.  Also, I need tools that might help me collaborate better with my team...")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"... At this point, the Manager and the Data Scientist are stuck debating the chicken and the egg problem.  This impasse leads to career dissatisfaction and stagnation.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"By learning basic infra skills, you can unblock yourself and your team in many cases!"),(0,o.kt)("h2",{id:"helm-charts-are-like-an-oss-app-store"},"Helm Charts are like an OSS app store"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App store, abstract",src:a(2493).Z,width:"768",height:"768"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package mansger for K8s.  It allows you to install a wide variety of software in the cloud quickly.  Sure, you can install software on your laptop, ",(0,o.kt)("strong",{parentName:"p"},"but the whole point of many data science tools to enable better collaboration with your team"),".  To properly evaluate these tools, you will want to install them in an environment that your whole team can observe and interact with.   "),(0,o.kt)("p",null,"You can install many data science tools with Helm:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Airflow: ",(0,o.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/helm-chart/stable/index.html"},"https://airflow.apache.org/docs/helm-chart/stable/index.html")),(0,o.kt)("li",{parentName:"ul"},"Dask: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.dask.org/en/stable/deploying-kubernetes-helm.html"},"https://docs.dask.org/en/stable/deploying-kubernetes-helm.html")),(0,o.kt)("li",{parentName:"ul"},"JuptyerHub: ",(0,o.kt)("a",{parentName:"li",href:"https://z2jh.jupyter.org/en/stable/jupyterhub/installation.html"},"https://z2jh.jupyter.org/en/stable/jupyterhub/installation.html")),(0,o.kt)("li",{parentName:"ul"},"Metaflow: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/outerbounds/metaflow-tools#metaflow-services-on-kubernetes-k8s"},"https://github.com/outerbounds/metaflow-tools#metaflow-services-on-kubernetes-k8s")),(0,o.kt)("li",{parentName:"ul"},"Prefect: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PrefectHQ/prefect-helm"},"https://github.com/PrefectHQ/prefect-helm")),(0,o.kt)("li",{parentName:"ul"},"ElasaticSearch: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/elastic/helm-charts"},"https://github.com/elastic/helm-charts"))),(0,o.kt)("p",null,"You don't need to become an expert in K8s to deploy and perform basic configuration of these tools.  You might need deeper exercise to maintain them over a long period; however, you can get quite far with basic knowledge of K8s. "),(0,o.kt)("h2",{id:"ml-research-is-crowded-compete-on-swe-skills"},"ML research is crowded. Compete on SWE skills."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A crowded space of scientists frantically trying to do work",src:a(2670).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"One of the best ways to set yourself apart as a data scientist is through your skills.  Traditional education often emphasizes learning the latest ML techniques.  However, cutting-edge ML research is very competitive.  It also moves incredibly fast!  In the last six months, we have seen Stable Diffusion and ChatGPT, with more to come.  It's also an extremely crowded space."),(0,o.kt)("p",null,"In my experience, the bottleneck many teams face is not a lack of knowledge of cutting-edge ML techniques, but software engineering skills and partners to help operationalize models.  If you take some time to learn how to stand up tools and infrastructure, you will be invaluable to your team.  "),(0,o.kt)("h2",{id:"your-company-likely-already-runs-k8s"},"Your company likely already runs K8s"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A scientist shaking hands with someone who runs infrastructure",src:a(7333).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"I believe that data scientists should have tools that meet them where they are. An example of an anti-pattern of failing to meet data scientists where they are is not allowing development in Jupyter Notebooks.  "),(0,o.kt)("p",null,"By deploying and exploring tools in K8s you increase the likelihood that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your DevOps counterparts will feel comfortable with the tools you want to deploy"),(0,o.kt)("li",{parentName:"ul"},"You will have a shared language in which to talk to your application administrators"),(0,o.kt)("li",{parentName:"ul"},"You will be more likely to attract people to help you with infra"),(0,o.kt)("li",{parentName:"ul"},"You will look smart for leveraging technology that's (likely) already adopted  ")),(0,o.kt)("p",null,"These factors make it much more likely that you will get the tools that meet you where you are as opposed to something a software engineer without any data science experience thinks is a good idea (which I've seen happen a lot!)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Even if your company doesn't run K8s, you can recruit generalists that can administer K8s for you, as opposed to trying to find a unicorn that specializes in ML Infrastructure.")),(0,o.kt)("h2",{id:"but-isnt-it-overkill"},"But isn't it overkill?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cutting oranges with a chainsaw",src:a(2843).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"For simple apps that you want to stand up quickly or prototype, K8s is likely overkill. Instead, I'm advocating knowledge of K8s as useful when working within the typical constraints and environments in many companies.  For example, if you want to deploy production software, hosting your data product on a single VM is often insufficient.  Many companies even have infrastructure that may block you from doing this with paved paths that only include Kubernetes."),(0,o.kt)("p",null,"Even if you are not deploying any production software, K8s can be invaluable in allowing you to deploy the tools you need."),(0,o.kt)("h2",{id:"you-dont-need-to-become-an-expert"},"You don't need to become an expert"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"A student sitting at a desk in a library",src:a(1305).Z,width:"768",height:"768"})),(0,o.kt)("p",null,"K8s are complicated, but you don't need to become an expert to unlock tons of value as a Data Scientist.  I would focus on three capabilities:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploying tools/infra you need (with the help of managed cloud services)"),(0,o.kt)("li",{parentName:"ol"},"Basic debugging "),(0,o.kt)("li",{parentName:"ol"},"Familiarity with high-level concepts")),(0,o.kt)("p",null,"Furthermore, I'm not suggesting that data scientists become K8s administrators.  That is a very involved task and worthy of its own role. However, we can use managed cloud services and some basic knowledge to get far. That's why I'm teaching a course on this topic: ",(0,o.kt)("a",{parentName:"p",href:"#course-k8s-for-data-scientists"},"Kubernetes for Data Scientists"),"."),(0,o.kt)("h2",{id:"course-k8s-for-data-scientists"},"Course: K8s for Data Scientists"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://vickiboykis.com/"},"Vicki")," is a champion of data scientists on the ground.  Her views resonate with people in the industry, especially those outside Silicon Valley, about the realities of being a data scientist.  She is not someone who is impressed by flashy or new technologies and is someone who takes a pragmatic approach to get the job done.  When she says you should learn K8s, you should pay attention!",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Each subsection of this article has a picture that has been generated by Stable diffusion with a prompt that very similar to the image caption.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Major cloud providers do have managed workflow systems (AWS - Sagemaker, Azure - AzureML, GCP - VertexAI), but these may not fit your needs.",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},7068:function(e,t,a){t.Z=a.p+"assets/images/20221212104110-7ea578e2557de075ad0feae526be6ce9.png"},2493:function(e,t,a){t.Z=a.p+"assets/images/20221212110053-7a391b0aab5aec13daee07c7190c854b.png"},1305:function(e,t,a){t.Z=a.p+"assets/images/20221212115117-d37965aaffbb6201e133772d32bec775.png"},2670:function(e,t,a){t.Z=a.p+"assets/images/20221212122136-5ee70b7b74527f01e16b6fbf7d93f8b4.png"},7851:function(e,t,a){t.Z=a.p+"assets/images/20221212131043-a0373e88894ca208b140793999f89039.png"},9063:function(e,t,a){t.Z=a.p+"assets/images/bellman_ds-0496a946e923fb96ebe10df9e36349b6.jpeg"},2843:function(e,t,a){t.Z=a.p+"assets/images/orange_chainsaw-20caf06dcca847b00392ba4c2b9bc9f7.jpeg"},7333:function(e,t,a){t.Z=a.p+"assets/images/shaking_hands-81a2d3b32aa919b06492e8dfeee9058d.jpeg"}}]);