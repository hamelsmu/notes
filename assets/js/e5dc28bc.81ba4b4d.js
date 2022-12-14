"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7400],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),o=["components"],l={},i=void 0,c={unversionedId:"k8s/2b. Secrets",id:"k8s/2b. Secrets",title:"2b. Secrets",description:"Obfuscation, not encryption",source:"@site/docs/k8s/2b. Secrets.md",sourceDirName:"k8s",slug:"/k8s/2b. Secrets",permalink:"/k8s/2b. Secrets",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/2b. Secrets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2a. Basics",permalink:"/k8s/2a. Basics"},next:{title:"7b. Ambassador Sidecars",permalink:"/k8s/7b. Ambassador Sidecars"}},p={},d=[{value:"Obfuscation, not encryption",id:"obfuscation-not-encryption",level:2},{value:"Mounting Secrets as Files",id:"mounting-secrets-as-files",level:2},{value:"Bringing together config, secrets, deployments and services",id:"bringing-together-config-secrets-deployments-and-services",level:2},{value:"Updating Configurations",id:"updating-configurations",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"obfuscation-not-encryption"},"Obfuscation, not encryption"),(0,r.kt)("p",null,"Unlike [","[ConfigMap]","], K8s doesn't like to show you plain text version of your secret.  You must decode it with ",(0,r.kt)("inlineCode",{parentName:"p"},"base64 -d"),", this is not encrypted, just obfuscated."),(0,r.kt)("p",null,"The container still sees the original plain text data.  Let's manually create a secret like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kl create secret generic sleep-secret-literal --from-literal=secret=shh...")),(0,r.kt)("p",null,"Then, we reference this seret in a deployment like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"% cat sleep/sleep-with-secret.yaml                                                                                                    \napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: sleep\nspec:\n  selector:\n    matchLabels:\n      app: sleep\n  template:\n    metadata:\n      labels:\n        app: sleep\n    spec:\n      containers:\n        - name: sleep\n          image: kiamol/ch03-sleep\n          env:\n          - name: KIAMOL_SECRET\n            valueFrom:\n              secretKeyRef:\n                name: sleep-secret-literal\n                key: secret\n")),(0,r.kt)("p",null,"If we apply this ",(0,r.kt)("inlineCode",{parentName:"p"},"kl apply -f sleep/sleep-with-secret.yaml")," , we can see the secret lke this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% kl exec -it deploy/sleep -- printenv | grep KIAMOL_SECRET                                                                           \nKIAMOL_SECRET=shh...\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!Warning]","\nYou shouldn't expose secrets as environment variables as that is not very secure.  You should store secrets in files that have restricted premissions. ")),(0,r.kt)("p",null,"You can also store your secrets in plain text in a YAML file like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'%cat todo-list/secrets/todo-db-secret-test.yaml                                                                                      \napiVersion: v1\nkind: Secret\nmetadata:\n  name: todo-db-secret-test\ntype: Opaque\nstringData:                          # use this field when using plain text stuff\n  POSTGRES_PASSWORD: "kiamol-2*2*"   # this is the plain text password\n')),(0,r.kt)("p",null,"Interestingly, you will be able to see the plain text password if you do this!  See the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.annotations")," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'%kl get secret/sleep-secret-literal -o yaml\napiVersion: v1\ndata:\n  POSTGRES_PASSWORD: a2lhbW9sLTIqMio=\nkind: Secret\nmetadata:\n  annotations:\n    kubectl.kubernetes.io/last-applied-configuration: |\n      {"apiVersion":"v1","kind":"Secret","metadata":{"annotations":{},"name":"todo-db-secret-test","namespace":"default"},"stringData":{"POSTGRES_PASSWORD":"kiamol-2*2*"},"type":"Opaque"}\n  creationTimestamp: "2022-12-01T18:22:56Z"\n  name: todo-db-secret-test\n  namespace: default\n  resourceVersion: "629050"\n  uid: 35b42a79-a8dd-447d-a191-a295ca1e4d66\ntype: Opaque\n')),(0,r.kt)("h2",{id:"mounting-secrets-as-files"},"Mounting Secrets as Files"),(0,r.kt)("p",null,"This is recommended over env variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/todo-db-test.yaml                                                                                                     \napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: todo-db\nspec:\n  selector:\n    matchLabels:\n      app: todo-db\n  template:\n    metadata:\n      labels:\n        app: todo-db\n    spec:\n      containers:\n        - name: db\n          image: postgres:11.6-alpine\n          env:\n          - name: POSTGRES_PASSWORD_FILE\n            value: /secrets/postgres_password\n          volumeMounts:\n            - name: secret                           # Mounts a secret volume\n              mountPath: "/secrets"                  # The location\n      volumes:\n        - name: secret\n          secret:                                     # Volumen loaded\n            secretName: todo-db-secret-test           #Name of secret\n            defaultMode: 0400                         #Permissions set for files\n            items:\n            - key: POSTGRES_PASSWORD\n              path: postgres_password\n')),(0,r.kt)("p",null,"You can see that this secret is now mounted as a file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%kl exec deploy/todo-db -- ls /secrets                                                                                               \npostgres_password\n\n% kl exec deploy/todo-db -- cat /secrets/postgres_password                                                                            \nkiamol-2*2*\n")),(0,r.kt)("h2",{id:"bringing-together-config-secrets-deployments-and-services"},"Bringing together config, secrets, deployments and services"),(0,r.kt)("p",null,"Here is an example file that uses both ConfigMaps and Secrets in a deployment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/todo-web-test.yaml | pbcopy\napiVersion: v1\nkind: Service\nmetadata:\n  name: todo-web-test\nspec:\n  ports:\n    - port: 8081\n      targetPort: 80\n  selector:\n    app: todo-web\n    environment: test\n  type: LoadBalancer\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: todo-web-test\nspec:\n  selector:\n    matchLabels:\n      app: todo-web\n      environment: test\n  template:\n    metadata:\n      labels:\n        app: todo-web\n        environment: test\n    spec:\n      containers:\n        - name: web\n          image: kiamol/ch04-todo-list\n          env:\n          - name: ASPNETCORE_ENVIRONMENT\n            value: Test\n          volumeMounts:\n            - name: config\n              mountPath: "/app/config"\n              readOnly: true\n            - name: secret\n              mountPath: "/app/secrets"\n              readOnly: true\n      volumes:\n        - name: config\n          configMap:\n            name: todo-web-config-test\n            items:\n            - key: config.json\n              path: config.json\n        - name: secret\n          secret:\n            secretName: todo-web-secret-test\n            defaultMode: 0400\n            items:\n            - key: secrets.json\n              path: secrets.json\n\n')),(0,r.kt)("p",null,"That json secret is stored like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'% cat todo-list/secrets/todo-web-secret-test.yaml                                                                                     \napiVersion: v1\nkind: Secret\nmetadata:\n  name: todo-web-secret-test\ntype: Opaque\nstringData:\n  secrets.json: |-\n    {\n      "ConnectionStrings": {\n        "ToDoDb": "Server=todo-db;Database=todo;User Id=postgres;Password=kiamol-2*2*;"\n      }\n    }\n')),(0,r.kt)("p",null,"You can see that  these files exist now"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% kl exec deploy/todo-web-test -- ls /app/                                                                                            \nconfig\nsecrets\n...\n")),(0,r.kt)("h2",{id:"updating-configurations"},"Updating Configurations"),(0,r.kt)("p",null,"Your app may only read config when it starts, so if you change configuration settings via [","[ConfigMap]","] or [","[Secrets]","] then you would have to restart your app.  Two ways to do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kl rollout restart deploy/...."),"  (preferred method)"),(0,r.kt)("li",{parentName:"ol"},"Delete all pods related to that deployment using a label selector or something similar and let the deployment restart them.  ")),(0,r.kt)("p",null,"Context From Discord chat with Michal ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/1043031122721914940/1045846418331537459/1047961668426158192"},"https://discord.com/channels/1043031122721914940/1045846418331537459/1047961668426158192")))}m.isMDXComponent=!0}}]);