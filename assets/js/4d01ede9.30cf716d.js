"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7073],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return h}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?t.createElement(h,i(i({ref:n},p),{},{components:a})):t.createElement(h,i({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3901:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),r=a(3743),l="tableOfContentsInline_prmo";function i(e){let{toc:n,minHeadingLevel:a,maxHeadingLevel:i}=e;return t.createElement("div",{className:l},t.createElement(r.Z,{toc:n,minHeadingLevel:a,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(3117),r=a(7294),l=a(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);n.forEach(((e,n)=>{const t=a.slice(2,e.level);e.parentIndex=Math.max(...t),a[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?n[a].children.push(r):t.push(r)})),t}function o(e){let{toc:n,minHeadingLevel:a,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:t});return function(e){return e.level>=a&&e.level<=t}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function d(e,n){let{anchorTopOffset:a}=n;const t=e.find((e=>s(e).top>=a));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function p(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,r.useRef)(void 0),a=p();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:a}=e;const t=[];for(let r=n;r<=a;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),s=d(o,{anchorTopOffset:a.current}),p=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===p)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function m(e){let{toc:n,className:a,linkClassName:t,isChild:l}=e;return n.length?r.createElement("ul",{className:l?void 0:a},n.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children,className:a,linkClassName:t}))))):null}var u=r.memo(m);function h(e){let{toc:n,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:m,...h}=e;const f=(0,l.L)(),g=p??f.tableOfContents.minHeadingLevel,k=m??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:a,maxHeadingLevel:t}=e;return(0,r.useMemo)((()=>o({toc:i(n),minHeadingLevel:a,maxHeadingLevel:t})),[n,a,t])}({toc:n,minHeadingLevel:g,maxHeadingLevel:k});return c((0,r.useMemo)((()=>{if(s&&d)return{linkClassName:s,linkActiveClassName:d,minHeadingLevel:g,maxHeadingLevel:k}}),[s,d,g,k])),r.createElement(u,(0,t.Z)({toc:y,className:a,linkClassName:s},h))}},4175:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var t=a(3117),r=(a(7294),a(3905)),l=a(3901);const i={title:"1_Fundamentals"},o="fastai fundamentals",s={unversionedId:"fastai/fundamentals",id:"fastai/fundamentals",title:"1_Fundamentals",description:"DataLoaders",source:"@site/docs/fastai/01_fundamentals.md",sourceDirName:"fastai",slug:"/fastai/fundamentals",permalink:"/fastai/fundamentals",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/fastai/01_fundamentals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1_Fundamentals"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docker/Docker-In-Action"},next:{title:"2_Computer_Vision",permalink:"/fastai/cv"}},d={},p=[{value:"DataLoaders",id:"dataloaders",level:2},{value:"DataBlocks",id:"datablocks",level:2},{value:"Training",id:"training",level:2},{value:"Interpetability",id:"interpetability",level:3},{value:"Cleaning",id:"cleaning",level:3},{value:"Loading / Saving",id:"loading--saving",level:3},{value:"Predicting",id:"predicting",level:3},{value:"Computer Vision",id:"computer-vision",level:2},{value:"Pixel Similarity Baseline",id:"pixel-similarity-baseline",level:3},{value:"numpy",id:"numpy",level:3},{value:"SGD from scratch",id:"sgd-from-scratch",level:2},{value:"Minimal Example",id:"minimal-example",level:3},{value:"MNIST",id:"mnist",level:3},{value:"Mini Batch SGD",id:"mini-batch-sgd",level:4},{value:"Create a dataloader",id:"create-a-dataloader",level:5},{value:"The Training Loop",id:"the-training-loop",level:4},{value:"Using Pytorch",id:"using-pytorch",level:3},{value:"Using fastai",id:"using-fastai",level:4},{value:"Simple Neural Nets",id:"simple-neural-nets",level:2},{value:"Inspecting Training History",id:"inspecting-training-history",level:3}],c={toc:p};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastai-fundamentals"},"fastai fundamentals"),(0,r.kt)(l.Z,{toc:p,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"dataloaders"},"DataLoaders"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaders")," is a thin class around ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/beginner/basics/data_tutorial.html#preparing-your-data-for-training-with-dataloaders"},"DataLoader"),", and makes them available as ",(0,r.kt)("inlineCode",{parentName:"p"},"train")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"valid"),"."),(0,r.kt)("p",null,"Same thing applies to ",(0,r.kt)("inlineCode",{parentName:"p"},"Datasets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset"),"."),(0,r.kt)("p",null,"In pytorch, ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," is fed into a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoader"),". "),(0,r.kt)("h2",{id:"datablocks"},"DataBlocks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use this to create ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaders"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bears = DataBlock(\n    blocks=(ImageBlock, CategoryBlock), \n    get_items=get_image_files, \n    splitter=RandomSplitter(valid_pct=0.2, seed=42),\n    get_y=parent_label,\n    item_tfms=Resize(128))\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DataBlocks")," are a template for creating ",(0,r.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", and need to be instantiated somehow - for example given a path where to find the data: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dls = bears.dataloaders(path)\n")),(0,r.kt)("p",null,"You can modify the settings of a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataBlock")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"new"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bears = bears.new(item_tfms=RandomResizedCrop(128, min_scale=0.3)) #book has more examples\ndls = bears.dataloaders(path)\n")),(0,r.kt)("p",null,"You can sanity check / see transformed data with ",(0,r.kt)("inlineCode",{parentName:"p"},"show_batch"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> dls.train.show_batch(max_n=8, nrows=2, unique=True)\n... images\n")),(0,r.kt)("p",null,"You also use ",(0,r.kt)("inlineCode",{parentName:"p"},"DataBlocks")," for data augmentation, with ",(0,r.kt)("inlineCode",{parentName:"p"},"batch_tfms"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"bears = bears.new(\n    item_tfms=Resize(128),        \n    batch_tfms=aug_transforms(mult=2)\n)\ndls = bears.dataloaders(path)\ndls.train.show_batch(max_n=8, nrows=2, unique=True)\n")),(0,r.kt)("h2",{id:"training"},"Training"),(0,r.kt)("p",null,"Most things use ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.fine_tune()"),", when you cannot fine-tune like tabular data, you often use ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.fit_one_cycle")),(0,r.kt)("p",null,"You can also do ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.show_results(...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from fastai.vision.all import *\npath = untar_data(URLs.PETS)/'images'\n\ndef is_cat(x): \n    return x[0].isupper()\ndls = ImageDataLoaders.from_name_func(\n        path=str(path), \n        fnames=get_image_files(path), \n        valid_pct=0.2, \n        seed=42,\n        label_func=is_cat, \n        item_tfms=Resize(224))\n\nlearn = cnn_learner(dls, resnet34, metrics=error_rate)\nlearn.fine_tune(1)\n")),(0,r.kt)("p",null,"More info on what this is in later sections."),(0,r.kt)("h3",{id:"interpetability"},"Interpetability"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"interp = ClassificationInterpretation.from_learner(learn)\ninterp.plot_confusion_matrix()\n")),(0,r.kt)("p",null,"Also see top losses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"interp.plot_top_losses(5, nrows=1)\n")),(0,r.kt)("h3",{id:"cleaning"},"Cleaning"),(0,r.kt)("p",null,"You can get a ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageClassifierCleaner")," which allows you to choose (1) a category and (2) data partition (train/val) and shows you the highest loss items so you can decide whether to Keep, Delete, Change etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"cleaner = ImageClassifierCleaner(learn)\ncleaner\n")),(0,r.kt)("p",null,"The thing doesn't actually delete/change anything but gives you the idxs that allow you to do things with them"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for idx in cleaner.delete(): cleaner.fns[idx].unlink()\nfor idx,cat in cleaner.change(): shutil.move(str(cleaner.fns[idx]), path/cat)\n")),(0,r.kt)("h3",{id:"loading--saving"},"Loading / Saving"),(0,r.kt)("p",null,"Saving a model can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.export"),', when you do this, fastai will save a file called "export.pkl"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"learn.export()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"load_learner")," can be used to load a model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"learn_inf = load_learner(path/'export.pkl')\n")),(0,r.kt)("h3",{id:"predicting"},"Predicting"),(0,r.kt)("p",null,"When you call predict,  you will get three things: (1) class, (2) the index of the predicted category (3) Probabilities of each category"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> learn_inf.predict('images/grizzly.jpg')\n('grizzly', tensor(1), tensor([9.0767e-06, 9.9999e-01, 1.5748e-07]))\n")),(0,r.kt)("p",null,"You can see all the classes with ",(0,r.kt)("inlineCode",{parentName:"p"},"dls.vocab"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> learn_inf.dls.vocab\n(#3) ['black','grizzly','teddy']\n")),(0,r.kt)("p",null,"Zach: ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.dls.vocab")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.dls.categorize.vocab")," is another way to get the class names."),(0,r.kt)("h2",{id:"computer-vision"},"Computer Vision"),(0,r.kt)("p",null,"You can open an image with ",(0,r.kt)("inlineCode",{parentName:"p"},"Pilow (PIL)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"im3 = Image.open(im3_path)\nim3\n\n#convert to numpy\narray(im3)\n# convert to pytorch tensor\ntensor(im3)\n\n")),(0,r.kt)("h3",{id:"pixel-similarity-baseline"},"Pixel Similarity Baseline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compute avg pixel value for 3's and 7's"),(0,r.kt)("li",{parentName:"ol"},"At inference time, see which one its similar too, using ",(0,r.kt)("inlineCode",{parentName:"li"},"RMSE (L2 Norm)")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MAE (L1 Norm)"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Kind of like KNN")),(0,r.kt)("p",null,"Taking an inference tensor, ",(0,r.kt)("inlineCode",{parentName:"p"},"a_3")," and calculate distance to mean 3 and 7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# MAE & RMSE for 3  vs avg3\ndist_3_abs = (a_3 - mean3).abs().mean()\ndist_3_sqr = ((a_3 - mean3)**2).mean().sqrt()\n\n# MAE & RMSE for 3  vs avg7\ndist_7_abs = (a_3 - mean7).abs().mean()\ndist_7_sqr = ((a_3 - mean7)**2).mean().sqrt()\n\n# Use Pytorch Losses to do the same thing for 3 vs avg 7\nF.l1_loss(a_3.float(),mean7), F.mse_loss(a_3,mean7).sqrt()\n")),(0,r.kt)("h3",{id:"numpy"},"numpy"),(0,r.kt)("p",null,"Take the mean over an axis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def mnist_distance(a,b): \n    #(-2,1) means take the average of the last 2 axis\n    return (a-b).abs().mean((-2,-1))\n")),(0,r.kt)("h2",{id:"sgd-from-scratch"},"SGD from scratch"),(0,r.kt)("h3",{id:"minimal-example"},"Minimal Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# the loss function\ndef mse(y, yhat): \n    return (y - yhat).square().mean().sqrt()\n\n# the function that produces the data\ndef quadratic(x, params=[.75, -25.5, 15]):\n    a,b,c = params\n    noise = (torch.randn(len(x)) * 3)\n    return a*(x**2) + b*x +c + noise\n\n# generate training data\nx = torch.arange(1, 40, 1)\ny = quadratic(x)\n\n# define the training loop\ndef apply_step(params, pr=True):\n    lr = 1.05e-4\n    preds = quadratic(x, params)\n    loss = mse(preds, y)\n    loss.backward()\n    params.data -= params.grad.data * lr\n    if pr: print(f'loss: {loss}')\n    params.grad = None\n\n# initialize random params\nparams = torch.rand(3)\nparams.requires_grad_()\nassert params.requires_grad\n\n# train the model\nfor _ in range(1000):\n    apply_step(params)\n")),(0,r.kt)("h3",{id:"mnist"},"MNIST"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," in pytorch is required to return a tuple of (x,y) when indexed.  You can do this in python as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Turn mnist data into vectors 3dim -> 2dim\ntrain_x = torch.cat([stacked_threes, stacked_sevens]).view(-1, 28*28)\n# Generate label tensor\ntrain_y = tensor([1]*len(threes) + [0]*len(sevens)).unsqueeze(1)\n# Create dataset\ndset = list(zip(train_x,train_y))\n\n# See shapes from first datum in the dataset\n>>> x,y = dset[0]\n>>> x.shape, y.shape\n(torch.Size([784]), torch.Size([1]))\n\n\n# Do the same thing for the validation set\n....\n\n")),(0,r.kt)("h4",{id:"mini-batch-sgd"},"Mini Batch SGD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# `@` and dot product is the same:\na, b = torch.rand(10), torch.rand(10)\nassert a.dot(b) == a@b\n\n# define model\ndef init_params(size, std=1.0): \n    return (torch.randn(size)*std).requires_grad_()\nweights = init_params((28*28,1))\nbias = init_params(1)\n\ndef linear1(xb): return xb@weights + bias\n\n#naive loss (for illustration)\ncorrects = (preds>0.0).float() == train_y\ncorrects.float().mean().item()\n\n# define loss\ndef mnist_loss(preds, targets):\n    preds = preds.sigmoid() #squash b/w 0 and 1\n    return torch.where(targets==1, 1-preds, preds).mean() # average distance loss\n")),(0,r.kt)("h5",{id:"create-a-dataloader"},"Create a dataloader"),(0,r.kt)("p",null,"You want to load your data in batches, so you will want to create a dataloader.  Recall that in pytorch, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataset")," is required to return a tuple of (x,y) when indexed, which is quite easy to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# define a data loader using `dset`\ndset = list(zip(train_x,train_y))\n")),(0,r.kt)("p",null,"Pytorch offers a utility to then create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dataloader")," from a dataset, but Jeremy basically rolled his own (w/same api):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dl = DataLoader(dset, batch_size=256)\nvalid_dl = DataLoader(valid_dset, batch_size=256)\n")),(0,r.kt)("h4",{id:"the-training-loop"},"The Training Loop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def calc_grad(xb, yb, model):\n    preds = model(xb)\n    loss = mnist_loss(preds, yb)\n    loss.backward()\n\ndef train_epoch(model, lr, params):\n    for xb,yb in dl:\n        calc_grad(xb, yb, model)\n        for p in params:\n            p.data -= p.grad*lr\n            p.grad.zero_() #updates in place\n\n### Calculate metrics\ndef batch_accuracy(xb, yb):\n    preds = xb.sigmoid()\n    correct = (preds>0.5) == yb\n    return correct.float().mean()\n\ndef validate_epoch(model):\n    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]\n    return round(torch.stack(accs).mean().item(), 4)\n\n# Train model\nlr = 1.\nparams = weights,bias\ntrain_epoch(linear1, lr, params)\nvalidate_epoch(linear1)\n\n# Train model w/epochs\nfor i in range(20):\n    train_epoch(linear1, lr, params)\n    print(validate_epoch(linear1), end=' ')\n")),(0,r.kt)("h3",{id:"using-pytorch"},"Using Pytorch"),(0,r.kt)("p",null,"Blueprint:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define a dataset and then a dataloader"),(0,r.kt)("li",{parentName:"ol"},"Create a model, which will have parameters"),(0,r.kt)("li",{parentName:"ol"},"Create an optimizer, that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updates the params: params.data -= parmas.grad.data * lr"),(0,r.kt)("li",{parentName:"ul"},"Zeros out the gradients: setting ",(0,r.kt)("inlineCode",{parentName:"li"},"params.grad = None")," or zeroing out the gradients with ",(0,r.kt)("inlineCode",{parentName:"li"},"params.grad.zero_()")))),(0,r.kt)("li",{parentName:"ol"},"Generate the predictions"),(0,r.kt)("li",{parentName:"ol"},"Calculate the loss"),(0,r.kt)("li",{parentName:"ol"},"Calculate the gradients ",(0,r.kt)("inlineCode",{parentName:"li"},"loss.backward()")),(0,r.kt)("li",{parentName:"ol"},"Using the optimizer, update the weights ",(0,r.kt)("inlineCode",{parentName:"li"},"step")," and zero out the gradients ",(0,r.kt)("inlineCode",{parentName:"li"},"zero_grad")),(0,r.kt)("li",{parentName:"ol"},"Put 4-7 in a loop.")),(0,r.kt)("p",null,"Create an optimizer and use ",(0,r.kt)("inlineCode",{parentName:"p"},"nn.Linear")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"linear_model = nn.Linear(28*28,1)\nw,b = linear_model.parameters()\n\n# Define an optimizer\nclass BasicOptim:\n    def __init__(self,params,lr): self.params,self.lr = list(params),lr\n\n    def step(self, *args, **kwargs):\n        for p in self.params: p.data -= p.grad.data * self.lr\n\n    def zero_grad(self, *args, **kwargs):\n        for p in self.params: p.grad = None\n\nopt = BasicOptim(linear_model.parameters(), lr)\n# alternative, fastai provides SGD\nopt = SGD(linear_model.parameters(), lr)\n\n# Define Metrics\ndef batch_accuracy(xb, yb):\n    preds = xb.sigmoid()\n    correct = (preds>0.5) == yb\n    return correct.float().mean()\n\n# Helper to calculate metrics on validation set\ndef validate_epoch(model):\n    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]\n    return round(torch.stack(accs).mean().item(), 4)\n\ndef train_epoch(model):\n    for xb,yb in dl:\n        calc_grad(xb, yb, model)\n        opt.step()\n        opt.zero_grad()\n\n\ndef train_model(model, epochs):\n    for i in range(epochs):\n        train_epoch(model)\n        print(validate_epoch(model), end=' ')\n\n\ntrain_model(linear_model, 20)\n")),(0,r.kt)("h4",{id:"using-fastai"},"Using fastai"),(0,r.kt)("p",null,"We can substitute the above with ",(0,r.kt)("inlineCode",{parentName:"p"},"learner.fit")," from fastai\nWe just have to supply the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dataloaders"),(0,r.kt)("li",{parentName:"ol"},"Model"),(0,r.kt)("li",{parentName:"ol"},"Optimization function"),(0,r.kt)("li",{parentName:"ol"},"Loss function"),(0,r.kt)("li",{parentName:"ol"},"Metrics")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dls = DataLoaders(dl, valid_dl)\nlearn = Learner(dls, nn.Linear(28*28,1), opt_func=SGD, \n                loss_func=mnist_loss,\n                metrics=batch_accuracy)\n\nlearn.fit(10, lr=lr)\n")),(0,r.kt)("p",null,"What if you used the full power of fastai?  It would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dls = ImageDataLoaders.from_folder(path)\n# Lots of things have defaults like optimization func\nlearn = cnn_learner(dls, resnet18, pretrained=False,\n                    loss_func=F.cross_entropy, \n                     metrics=accuracy)\nlearn.fit_one_cycle(1, 0.1)\n")),(0,r.kt)("h2",{id:"simple-neural-nets"},"Simple Neural Nets"),(0,r.kt)("p",null,"The next step is to introduce a non-linearity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"simple_net = nn.Sequential(\n    nn.Linear(28*28, 30),\n    nn.ReLU(),\n    nn.Linear(30, 1)\n)\n\n# Construct the learner as before\nlearn = learner(dls, simple_net, opt_func=SGD,\n               loss_func=mnist_loss, metrics=batch_accuracy)\n\nlearner.fit(40, 0.1)\n")),(0,r.kt)("h3",{id:"inspecting-training-history"},"Inspecting Training History"),(0,r.kt)("p",null,"The training history is saved in ",(0,r.kt)("inlineCode",{parentName:"p"},"learn.recorder"),".  You can plot your training progress with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(learn.recorder.values).itemgot(2)\n")))}m.isMDXComponent=!0}}]);