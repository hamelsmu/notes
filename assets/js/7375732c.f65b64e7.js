"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[8084],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),b=a,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},4443:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const r={},l="Jobs",s={unversionedId:"k8s/Jobs and CronJobs",id:"k8s/Jobs and CronJobs",title:"Jobs",description:"Thes are useful!  You can run ad-hoc jobs to completion, or schedule something to run!  Lots of DS workloads are like this.",source:"@site/docs/k8s/13-Jobs and CronJobs.md",sourceDirName:"k8s",slug:"/k8s/Jobs and CronJobs",permalink:"/k8s/Jobs and CronJobs",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/13-Jobs and CronJobs.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StatefulSet",permalink:"/k8s/StatefulSet"},next:{title:"Rollouts",permalink:"/k8s/Rollouts & Rollbacks"}},i={},u=[{value:"See Logs",id:"see-logs",level:2},{value:"Fields",id:"fields",level:2},{value:"Optional Fields",id:"optional-fields",level:3},{value:"Processing A Queue (Like data)",id:"processing-a-queue-like-data",level:3},{value:"CronJob Cleanup",id:"cronjob-cleanup",level:2},{value:"Pausing CronJobs",id:"pausing-cronjobs",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jobs"},"Jobs"),(0,a.kt)("p",null,"Thes are useful!  You can run ad-hoc jobs to completion, or schedule something to run!  Lots of DS workloads are like this."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Jobs aren\u2019t just for stateful apps; they\u2019re a great way to bring a standard approach to any batch-processing problems, where you can hand off all the scheduling and monitoring and retry logic to the cluster.  You can run any container image in the Pod for a Job, but it should start a process that ends; otherwise, your jobs will keep running forever.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job                           # Job is the object type.\nmetadata:\n name: pi-job\nspec:\n template:\n   spec:                           # The standard Pod spec\n     containers:\n       - name: pi                  # The container should run and exit.\n         image: kiamol/ch05-pi     \n         command: ["dotnet", "Pi.Web.dll", "-m", "console", "-dp", "50"]\n     restartPolicy: Never          # If the container fails, replace the Pod.\n')),(0,a.kt)("h2",{id:"see-logs"},"See Logs"),(0,a.kt)("p",null,"Run the above and get logs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kl apply -f pi/pi-job.yaml  # this is the filename  for the above\nkl logs jobs/pi-job\n")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("p",null,"its like a Pod standard spec, but there is an additional required field ",(0,a.kt)("inlineCode",{parentName:"p"},"restartPolicy"),"."),(0,a.kt)("h3",{id:"optional-fields"},"Optional Fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"completions:"),"  how many times should the job run. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"parallelism"),":  How many Pods to run in parallel with multiple completions set.  ")),(0,a.kt)("h3",{id:"processing-a-queue-like-data"},"Processing A Queue (Like data)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parallel Jobs with a work queue:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"do not specify .spec.completions, default to .spec.parallelism."),(0,a.kt)("li",{parentName:"ul"},"the Pods must coordinate amongst themselves or an external service to determine what each should work on. For example, a Pod might fetch a batch of up to N items from the work queue."),(0,a.kt)("li",{parentName:"ul"},"each Pod is independently capable of determining whether or not all its peers are done, and thus that the entire Job is done."),(0,a.kt)("li",{parentName:"ul"},"when any Pod from the Job terminates with success, no new Pods are created."),(0,a.kt)("li",{parentName:"ul"},"once at least one Pod has terminated with success and all Pods are terminated, then the Job is completed with success."),(0,a.kt)("li",{parentName:"ul"},"once any Pod has exited with success, no other Pod should still be doing any work for this task or writing any output. They should all be in the process of exiting."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/job/"},"https://kubernetes.io/docs/concepts/workloads/controllers/job/")),(0,a.kt)("p",null,"Argo is basically a wrapper on Jobs. "),(0,a.kt)("h1",{id:"cronjob"},"CronJob"),(0,a.kt)("p",null,"Just adds a few lines to the Job YAML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n name: todo-db-backup\nspec:\n schedule: "*/2 * * * *"          # Creates a Job every 2 minutes\n concurrencyPolicy: Forbid        # Prevents overlap so a new Job won\u2019t be\n jobTemplate:                     # created if the previous one is running\n   spec:\n     # job template...\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#cronjobspec-v1-batch"},"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.22/#cronjobspec-v1-batch")),(0,a.kt)("h2",{id:"cronjob-cleanup"},"CronJob Cleanup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CronJobs don\u2019t perform an automatic cleanup for Pods and Jobs.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CronJobs don\u2019t follow the standard controller model, with a label selector to identify the Jobs it owns. You can add your own labels in the Job template for the CronJob, but if you don\u2019t do that, you need to identify Jobs where the owner reference is the CronJob")))),(0,a.kt)("p",null,"TLDR; Clean up lingering pods afer you are done, and organize everything with labels!"),(0,a.kt)("h2",{id:"pausing-cronjobs"},"Pausing CronJobs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also move CronJobs to a suspended state, which means the object spec still exists in the cluster, but it doesn\u2019t run until the CronJob is activated again"),(0,a.kt)("li",{parentName:"ul"})))}p.isMDXComponent=!0}}]);