"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[73],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return u}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?t.createElement(h,i(i({ref:a},d),{},{components:n})):t.createElement(h,i({ref:a},d))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7783:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),r="tableOfContentsInline_gwOO",l=n(5002);function i(e){var a=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return t.createElement("div",{className:r},t.createElement(l.Z,{toc:a,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},5002:function(e,a,n){n.d(a,{Z:function(){return p}});var t=n(7462),r=n(3366),l=n(7294),i=n(5450),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var a=e.toc,n=e.className,t=e.linkClassName,r=e.isChild;return a.length?l.createElement("ul",{className:r?void 0:n},a.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function p(e){var a=e.toc,n=e.className,p=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,c=void 0===d?"table-of-contents__link":d,m=e.linkActiveClassName,u=void 0===m?void 0:m,h=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,r.Z)(e,o),k=(0,i.LU)(),y=null!=h?h:k.tableOfContents.minHeadingLevel,v=null!=g?g:k.tableOfContents.maxHeadingLevel,_=(0,i.b9)({toc:a,minHeadingLevel:y,maxHeadingLevel:v}),N=(0,l.useMemo)((function(){if(c&&u)return{linkClassName:c,linkActiveClassName:u,minHeadingLevel:y,maxHeadingLevel:v}}),[c,u,y,v]);return(0,i.Si)(N),l.createElement(s,(0,t.Z)({toc:_,className:p,linkClassName:c},f))}},4175:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return h}});var t=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(7783),o=["components"],s={title:"1_Fundamentals"},p="fastai fundamentals",d={unversionedId:"fastai/fundamentals",id:"fastai/fundamentals",title:"1_Fundamentals",description:"DataLoaders",source:"@site/docs/fastai/01_fundamentals.md",sourceDirName:"fastai",slug:"/fastai/fundamentals",permalink:"/fastai/fundamentals",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/fastai/01_fundamentals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1_Fundamentals"},sidebar:"tutorialSidebar",previous:{title:"How To Learn",permalink:"/how-to-learn/lhtl"},next:{title:"2_Computer_Vision",permalink:"/fastai/cv"}},c={},m=[{value:"DataLoaders",id:"dataloaders",level:2},{value:"DataBlocks",id:"datablocks",level:2},{value:"Training",id:"training",level:2},{value:"Interpetability",id:"interpetability",level:3},{value:"Cleaning",id:"cleaning",level:3},{value:"Loading / Saving",id:"loading--saving",level:3},{value:"Predicting",id:"predicting",level:3},{value:"Computer Vision",id:"computer-vision",level:2},{value:"Pixel Similarity Baseline",id:"pixel-similarity-baseline",level:3},{value:"numpy",id:"numpy",level:3},{value:"SGD from scratch",id:"sgd-from-scratch",level:2},{value:"Minimal Example",id:"minimal-example",level:3},{value:"MNIST",id:"mnist",level:3},{value:"Mini Batch SGD",id:"mini-batch-sgd",level:4},{value:"Create a dataloader",id:"create-a-dataloader",level:5},{value:"The Training Loop",id:"the-training-loop",level:4},{value:"Using Pytorch",id:"using-pytorch",level:3},{value:"Using fastai",id:"using-fastai",level:4},{value:"Simple Neural Nets",id:"simple-neural-nets",level:2},{value:"Inspecting Training History",id:"inspecting-training-history",level:3}],u={toc:m};function h(e){var a=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fastai-fundamentals"},"fastai fundamentals"),(0,l.kt)(i.Z,{toc:m,mdxType:"TOCInline"}),(0,l.kt)("h2",{id:"dataloaders"},"DataLoaders"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DataLoaders")," is a thin class around ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/beginner/basics/data_tutorial.html#preparing-your-data-for-training-with-dataloaders"},"DataLoader"),", and makes them available as ",(0,l.kt)("inlineCode",{parentName:"p"},"train")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"valid"),"."),(0,l.kt)("p",null,"Same thing applies to ",(0,l.kt)("inlineCode",{parentName:"p"},"Datasets")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset"),"."),(0,l.kt)("p",null,"In pytorch, ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset")," is fed into a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataLoader"),". "),(0,l.kt)("h2",{id:"datablocks"},"DataBlocks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use this to create ",(0,l.kt)("inlineCode",{parentName:"p"},"DataLoaders"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"bears = DataBlock(\n    blocks=(ImageBlock, CategoryBlock), \n    get_items=get_image_files, \n    splitter=RandomSplitter(valid_pct=0.2, seed=42),\n    get_y=parent_label,\n    item_tfms=Resize(128))\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DataBlocks")," are a template for creating ",(0,l.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", and need to be instantiated somehow - for example given a path where to find the data: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dls = bears.dataloaders(path)\n")),(0,l.kt)("p",null,"You can modify the settings of a ",(0,l.kt)("inlineCode",{parentName:"p"},"DataBlock")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"new"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"bears = bears.new(item_tfms=RandomResizedCrop(128, min_scale=0.3)) #book has more examples\ndls = bears.dataloaders(path)\n")),(0,l.kt)("p",null,"You can sanity check / see transformed data with ",(0,l.kt)("inlineCode",{parentName:"p"},"show_batch"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> dls.train.show_batch(max_n=8, nrows=2, unique=True)\n... images\n")),(0,l.kt)("p",null,"You also use ",(0,l.kt)("inlineCode",{parentName:"p"},"DataBlocks")," for data augmentation, with ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_tfms"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"bears = bears.new(\n    item_tfms=Resize(128),        \n    batch_tfms=aug_transforms(mult=2)\n)\ndls = bears.dataloaders(path)\ndls.train.show_batch(max_n=8, nrows=2, unique=True)\n")),(0,l.kt)("h2",{id:"training"},"Training"),(0,l.kt)("p",null,"Most things use ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.fine_tune()"),", when you cannot fine-tune like tabular data, you often use ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.fit_one_cycle")),(0,l.kt)("p",null,"You can also do ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.show_results(...)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from fastai.vision.all import *\npath = untar_data(URLs.PETS)/'images'\n\ndef is_cat(x): \n    return x[0].isupper()\ndls = ImageDataLoaders.from_name_func(\n        path=str(path), \n        fnames=get_image_files(path), \n        valid_pct=0.2, \n        seed=42,\n        label_func=is_cat, \n        item_tfms=Resize(224))\n\nlearn = cnn_learner(dls, resnet34, metrics=error_rate)\nlearn.fine_tune(1)\n")),(0,l.kt)("p",null,"More info on what this is in later sections."),(0,l.kt)("h3",{id:"interpetability"},"Interpetability"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"interp = ClassificationInterpretation.from_learner(learn)\ninterp.plot_confusion_matrix()\n")),(0,l.kt)("p",null,"Also see top losses:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"interp.plot_top_losses(5, nrows=1)\n")),(0,l.kt)("h3",{id:"cleaning"},"Cleaning"),(0,l.kt)("p",null,"You can get a ",(0,l.kt)("inlineCode",{parentName:"p"},"ImageClassifierCleaner")," which allows you to choose (1) a category and (2) data partition (train/val) and shows you the highest loss items so you can decide whether to Keep, Delete, Change etc."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"cleaner = ImageClassifierCleaner(learn)\ncleaner\n")),(0,l.kt)("p",null,"The thing doesn't actually delete/change anything but gives you the idxs that allow you to do things with them"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"for idx in cleaner.delete(): cleaner.fns[idx].unlink()\nfor idx,cat in cleaner.change(): shutil.move(str(cleaner.fns[idx]), path/cat)\n")),(0,l.kt)("h3",{id:"loading--saving"},"Loading / Saving"),(0,l.kt)("p",null,"Saving a model can be done with ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.export"),', when you do this, fastai will save a file called "export.pkl"'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"learn.export()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"load_learner")," can be used to load a model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"learn_inf = load_learner(path/'export.pkl')\n")),(0,l.kt)("h3",{id:"predicting"},"Predicting"),(0,l.kt)("p",null,"When you call predict,  you will get three things: (1) class, (2) the index of the predicted category (3) Probabilities of each category"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> learn_inf.predict('images/grizzly.jpg')\n('grizzly', tensor(1), tensor([9.0767e-06, 9.9999e-01, 1.5748e-07]))\n")),(0,l.kt)("p",null,"You can see all the classes with ",(0,l.kt)("inlineCode",{parentName:"p"},"dls.vocab"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> learn_inf.dls.vocab\n(#3) ['black','grizzly','teddy']\n")),(0,l.kt)("p",null,"Zach: ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.dls.vocab")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.dls.categorize.vocab")," is another way to get the class names."),(0,l.kt)("h2",{id:"computer-vision"},"Computer Vision"),(0,l.kt)("p",null,"You can open an image with ",(0,l.kt)("inlineCode",{parentName:"p"},"Pilow (PIL)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"im3 = Image.open(im3_path)\nim3\n\n#convert to numpy\narray(im3)\n# convert to pytorch tensor\ntensor(im3)\n\n")),(0,l.kt)("h3",{id:"pixel-similarity-baseline"},"Pixel Similarity Baseline"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Compute avg pixel value for 3's and 7's"),(0,l.kt)("li",{parentName:"ol"},"At inference time, see which one its similar too, using ",(0,l.kt)("inlineCode",{parentName:"li"},"RMSE (L2 Norm)")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"MAE (L1 Norm)"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Kind of like KNN")),(0,l.kt)("p",null,"Taking an inference tensor, ",(0,l.kt)("inlineCode",{parentName:"p"},"a_3")," and calculate distance to mean 3 and 7:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# MAE & RMSE for 3  vs avg3\ndist_3_abs = (a_3 - mean3).abs().mean()\ndist_3_sqr = ((a_3 - mean3)**2).mean().sqrt()\n\n# MAE & RMSE for 3  vs avg7\ndist_7_abs = (a_3 - mean7).abs().mean()\ndist_7_sqr = ((a_3 - mean7)**2).mean().sqrt()\n\n# Use Pytorch Losses to do the same thing for 3 vs avg 7\nF.l1_loss(a_3.float(),mean7), F.mse_loss(a_3,mean7).sqrt()\n")),(0,l.kt)("h3",{id:"numpy"},"numpy"),(0,l.kt)("p",null,"Take the mean over an axis:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def mnist_distance(a,b): \n    #(-2,1) means take the average of the last 2 axis\n    return (a-b).abs().mean((-2,-1))\n")),(0,l.kt)("h2",{id:"sgd-from-scratch"},"SGD from scratch"),(0,l.kt)("h3",{id:"minimal-example"},"Minimal Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# the loss function\ndef mse(y, yhat): \n    return (y - yhat).square().mean().sqrt()\n\n# the function that produces the data\ndef quadratic(x, params=[.75, -25.5, 15]):\n    a,b,c = params\n    noise = (torch.randn(len(x)) * 3)\n    return a*(x**2) + b*x +c + noise\n\n# generate training data\nx = torch.arange(1, 40, 1)\ny = quadratic(x)\n\n# define the training loop\ndef apply_step(params, pr=True):\n    lr = 1.05e-4\n    preds = quadratic(x, params)\n    loss = mse(preds, y)\n    loss.backward()\n    params.data -= params.grad.data * lr\n    if pr: print(f'loss: {loss}')\n    params.grad = None\n\n# initialize random params\nparams = torch.rand(3)\nparams.requires_grad_()\nassert params.requires_grad\n\n# train the model\nfor _ in range(1000):\n    apply_step(params)\n")),(0,l.kt)("h3",{id:"mnist"},"MNIST"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset")," in pytorch is required to return a tuple of (x,y) when indexed.  You can do this in python as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Turn mnist data into vectors 3dim -> 2dim\ntrain_x = torch.cat([stacked_threes, stacked_sevens]).view(-1, 28*28)\n# Generate label tensor\ntrain_y = tensor([1]*len(threes) + [0]*len(sevens)).unsqueeze(1)\n# Create dataset\ndset = list(zip(train_x,train_y))\n\n# See shapes from first datum in the dataset\n>>> x,y = dset[0]\n>>> x.shape, y.shape\n(torch.Size([784]), torch.Size([1]))\n\n\n# Do the same thing for the validation set\n....\n\n")),(0,l.kt)("h4",{id:"mini-batch-sgd"},"Mini Batch SGD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# `@` and dot product is the same:\na, b = torch.rand(10), torch.rand(10)\nassert a.dot(b) == a@b\n\n# define model\ndef init_params(size, std=1.0): \n    return (torch.randn(size)*std).requires_grad_()\nweights = init_params((28*28,1))\nbias = init_params(1)\n\ndef linear1(xb): return xb@weights + bias\n\n#naive loss (for illustration)\ncorrects = (preds>0.0).float() == train_y\ncorrects.float().mean().item()\n\n# define loss\ndef mnist_loss(preds, targets):\n    preds = preds.sigmoid() #squash b/w 0 and 1\n    return torch.where(targets==1, 1-preds, preds).mean() # average distance loss\n")),(0,l.kt)("h5",{id:"create-a-dataloader"},"Create a dataloader"),(0,l.kt)("p",null,"You want to load your data in batches, so you will want to create a dataloader.  Recall that in pytorch, a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataset")," is required to return a tuple of (x,y) when indexed, which is quite easy to do:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# define a data loader using `dset`\ndset = list(zip(train_x,train_y))\n")),(0,l.kt)("p",null,"Pytorch offers a utility to then create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dataloader")," from a dataset, but Jeremy basically rolled his own (w/same api):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dl = DataLoader(dset, batch_size=256)\nvalid_dl = DataLoader(valid_dset, batch_size=256)\n")),(0,l.kt)("h4",{id:"the-training-loop"},"The Training Loop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def calc_grad(xb, yb, model):\n    preds = model(xb)\n    loss = mnist_loss(preds, yb)\n    loss.backward()\n\ndef train_epoch(model, lr, params):\n    for xb,yb in dl:\n        calc_grad(xb, yb, model)\n        for p in params:\n            p.data -= p.grad*lr\n            p.grad.zero_() #updates in place\n\n### Calculate metrics\ndef batch_accuracy(xb, yb):\n    preds = xb.sigmoid()\n    correct = (preds>0.5) == yb\n    return correct.float().mean()\n\ndef validate_epoch(model):\n    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]\n    return round(torch.stack(accs).mean().item(), 4)\n\n# Train model\nlr = 1.\nparams = weights,bias\ntrain_epoch(linear1, lr, params)\nvalidate_epoch(linear1)\n\n# Train model w/epochs\nfor i in range(20):\n    train_epoch(linear1, lr, params)\n    print(validate_epoch(linear1), end=' ')\n")),(0,l.kt)("h3",{id:"using-pytorch"},"Using Pytorch"),(0,l.kt)("p",null,"Blueprint:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Define a dataset and then a dataloader"),(0,l.kt)("li",{parentName:"ol"},"Create a model, which will have parameters"),(0,l.kt)("li",{parentName:"ol"},"Create an optimizer, that:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Updates the params: params.data -= parmas.grad.data * lr"),(0,l.kt)("li",{parentName:"ul"},"Zeros out the gradients: setting ",(0,l.kt)("inlineCode",{parentName:"li"},"params.grad = None")," or zeroing out the gradients with ",(0,l.kt)("inlineCode",{parentName:"li"},"params.grad.zero_()")))),(0,l.kt)("li",{parentName:"ol"},"Generate the predictions"),(0,l.kt)("li",{parentName:"ol"},"Calculate the loss"),(0,l.kt)("li",{parentName:"ol"},"Calculate the gradients ",(0,l.kt)("inlineCode",{parentName:"li"},"loss.backward()")),(0,l.kt)("li",{parentName:"ol"},"Using the optimizer, update the weights ",(0,l.kt)("inlineCode",{parentName:"li"},"step")," and zero out the gradients ",(0,l.kt)("inlineCode",{parentName:"li"},"zero_grad")),(0,l.kt)("li",{parentName:"ol"},"Put 4-7 in a loop.")),(0,l.kt)("p",null,"Create an optimizer and use ",(0,l.kt)("inlineCode",{parentName:"p"},"nn.Linear")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"linear_model = nn.Linear(28*28,1)\nw,b = linear_model.parameters()\n\n# Define an optimizer\nclass BasicOptim:\n    def __init__(self,params,lr): self.params,self.lr = list(params),lr\n\n    def step(self, *args, **kwargs):\n        for p in self.params: p.data -= p.grad.data * self.lr\n\n    def zero_grad(self, *args, **kwargs):\n        for p in self.params: p.grad = None\n\nopt = BasicOptim(linear_model.parameters(), lr)\n# alternative, fastai provides SGD\nopt = SGD(linear_model.parameters(), lr)\n\n# Define Metrics\ndef batch_accuracy(xb, yb):\n    preds = xb.sigmoid()\n    correct = (preds>0.5) == yb\n    return correct.float().mean()\n\n# Helper to calculate metrics on validation set\ndef validate_epoch(model):\n    accs = [batch_accuracy(model(xb), yb) for xb,yb in valid_dl]\n    return round(torch.stack(accs).mean().item(), 4)\n\ndef train_epoch(model):\n    for xb,yb in dl:\n        calc_grad(xb, yb, model)\n        opt.step()\n        opt.zero_grad()\n\n\ndef train_model(model, epochs):\n    for i in range(epochs):\n        train_epoch(model)\n        print(validate_epoch(model), end=' ')\n\n\ntrain_model(linear_model, 20)\n")),(0,l.kt)("h4",{id:"using-fastai"},"Using fastai"),(0,l.kt)("p",null,"We can substitute the above with ",(0,l.kt)("inlineCode",{parentName:"p"},"learner.fit")," from fastai\nWe just have to supply the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Dataloaders"),(0,l.kt)("li",{parentName:"ol"},"Model"),(0,l.kt)("li",{parentName:"ol"},"Optimization function"),(0,l.kt)("li",{parentName:"ol"},"Loss function"),(0,l.kt)("li",{parentName:"ol"},"Metrics")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dls = DataLoaders(dl, valid_dl)\nlearn = Learner(dls, nn.Linear(28*28,1), opt_func=SGD, \n                loss_func=mnist_loss,\n                metrics=batch_accuracy)\n\nlearn.fit(10, lr=lr)\n")),(0,l.kt)("p",null,"What if you used the full power of fastai?  It would look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"dls = ImageDataLoaders.from_folder(path)\n# Lots of things have defaults like optimization func\nlearn = cnn_learner(dls, resnet18, pretrained=False,\n                    loss_func=F.cross_entropy, \n                     metrics=accuracy)\nlearn.fit_one_cycle(1, 0.1)\n")),(0,l.kt)("h2",{id:"simple-neural-nets"},"Simple Neural Nets"),(0,l.kt)("p",null,"The next step is to introduce a non-linearity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"simple_net = nn.Sequential(\n    nn.Linear(28*28, 30),\n    nn.ReLU(),\n    nn.Linear(30, 1)\n)\n\n# Construct the learner as before\nlearn = learner(dls, simple_net, opt_func=SGD,\n               loss_func=mnist_loss, metrics=batch_accuracy)\n\nlearner.fit(40, 0.1)\n")),(0,l.kt)("h3",{id:"inspecting-training-history"},"Inspecting Training History"),(0,l.kt)("p",null,"The training history is saved in ",(0,l.kt)("inlineCode",{parentName:"p"},"learn.recorder"),".  You can plot your training progress with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(learn.recorder.values).itemgot(2)\n")))}h.isMDXComponent=!0}}]);