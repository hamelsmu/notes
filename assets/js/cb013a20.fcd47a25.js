"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4182],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={layout:"default",title:"Batch Predictions"},o="How to make batch predictions in fastai",s={unversionedId:"fastai/batch_predicitions",id:"fastai/batch_predicitions",title:"Batch Predictions",description:'Making batch predictions on new data is not provided "out of the box" in fastai.  This is how you can achieve that:',source:"@site/docs/fastai/batch_predicitions.md",sourceDirName:"fastai",slug:"/fastai/batch_predicitions",permalink:"/fastai/batch_predicitions",draft:!1,editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/fastai/batch_predicitions.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Batch Predictions"},sidebar:"tutorialSidebar",previous:{title:"Data in fastai",permalink:"/fastai/data"},next:{title:"How To Learn",permalink:"/how-to-learn/lhtl"}},c={},p=[],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-make-batch-predictions-in-fastai"},"How to make batch predictions in fastai"),(0,i.kt)("p",null,'Making batch predictions on new data is not provided "out of the box" in fastai.  This is how you can achieve that:'),(0,i.kt)("p",null,"Add this method to learner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@patch\ndef predict_batch(self:Learner, item, rm_type_tfms=None, with_input=False):\n    dl = self.dls.test_dl(item, rm_type_tfms=rm_type_tfms, num_workers=0)\n    inp,preds,_,dec_preds = self.get_preds(dl=dl, with_input=True, with_decoded=True)\n    i = getattr(self.dls, 'n_inp', -1)\n    inp = (inp,) if i==1 else tuplify(inp)\n    dec_inp, nm = zip(*self.dls.decode_batch(inp + tuplify(dec_preds)))\n    res = preds,nm,dec_preds\n    if with_input: res = (dec_inp,) + res\n    return res\n")),(0,i.kt)("p",null,"You can then use this method like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> from fastai.text.all import *\n>>> from predict_batch import predict_batch # this file.  If you don't import just define in your script.\n>>> dls = TextDataLoaders.from_folder(untar_data(URLs.IMDB), valid='test')\n>>> learn = text_classifier_learner(dls, AWD_LSTM, drop_mult=0.5, metrics=accuracy)\n>>> learn.fine_tune(4, 1e-2)\n>>> learn.predict_batch([\"hello world\"]*4)\n(TensorText([[0.0029, 0.9971],\n         [0.0029, 0.9971],\n         [0.0029, 0.9971],\n         [0.0029, 0.9971]]),\n ('pos', 'pos', 'pos', 'pos'),\n TensorText([1, 1, 1, 1]))\n")),(0,i.kt)("p",null,"Alternatively, you can just patch the predict function so it works on batches:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@patch\ndef predict(self:Learner, item, rm_type_tfms=None, with_input=False):\n    dl = self.dls.test_dl(item, rm_type_tfms=rm_type_tfms, num_workers=0)\n    inp,preds,_,dec_preds = self.get_preds(dl=dl, with_input=True, with_decoded=True)\n    i = getattr(self.dls, 'n_inp', -1)\n    inp = (inp,) if i==1 else tuplify(inp)\n    dec = self.dls.decode_batch(inp + tuplify(dec_preds))\n    dec_inp,dec_targ = (tuple(map(detuplify, d)) for d in zip(*dec.map(lambda x: (x[:i], x[i:]))))\n    res = dec_targ,dec_preds,preds\n    if with_input: res = (dec_inp,) + res\n    return res\n")),(0,i.kt)("p",null,"Other notes h/t zach:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"learn.dls.vocab")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"learn.dls.categorize.vocab")," is another way to get the class names."))}d.isMDXComponent=!0}}]);