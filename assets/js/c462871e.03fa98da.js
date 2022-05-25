"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[32],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=o.createContext({}),m=function(n){var e=o.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=m(n.components);return o.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,p=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),s=m(t),d=a,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return t?o.createElement(f,i(i({ref:e},c),{},{components:t})):o.createElement(f,i({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var m=2;m<r;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1201:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},assets:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"pandoc filters"},p=void 0,m={unversionedId:"pandoc/filters",id:"pandoc/filters",title:"pandoc filters",description:"Two python packages",source:"@site/docs/pandoc/filters.md",sourceDirName:"pandoc",slug:"/pandoc/filters",permalink:"/pandoc/filters",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/pandoc/filters.md",tags:[],version:"current",frontMatter:{title:"pandoc filters"},sidebar:"tutorialSidebar",previous:{title:"programming languages",permalink:"/programming-languages/pl"},next:{title:"minimal",permalink:"/pandoc/minimal"}},c={},u=[{value:"The minimal notebook",id:"the-minimal-notebook",level:2},{value:"Minimal ipynb to md converstion with pandoc",id:"minimal-ipynb-to-md-converstion-with-pandoc",level:2},{value:"Minimal ipynb to md converstion with quarto",id:"minimal-ipynb-to-md-converstion-with-quarto",level:2},{value:"How to use panflute",id:"how-to-use-panflute",level:2}],s={toc:u};function d(n){var e=n.components,t=(0,a.Z)(n,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Two python packages"),(0,r.kt)("div",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://scorreia.com/software/panflute/"},"panflute")," - recommended"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/jgm/pandocfilters"},"pandocfilters"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://pandoc.org/filters.html"},"tutorial")," on pandoc filters can help you get oriented to the general idea.  If rolling your own filters, you probably want to use the JSON filters.  Furthermore you can understand the pandoc AST by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-t native")," flag (examples of this are shown later)."),(0,r.kt)("h2",{id:"the-minimal-notebook"},"The minimal notebook"),(0,r.kt)("p",null,"Here is minimal notebook we are working with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="mininimal.ipynb"',title:'"mininimal.ipynb"'},'{\n "cells": [\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "## A minimal notebook"\n   ]\n  },\n  {\n   "cell_type": "markdown",\n   "metadata": {},\n   "source": [\n    "<MyTag></MyTag>"\n   ]\n  },\n  {\n   "cell_type": "code",\n   "execution_count": 1,\n   "metadata": {},\n   "outputs": [\n    {\n     "name": "stdout",\n     "output_type": "stream",\n     "text": [\n      "2\\n"\n     ]\n    }\n   ],\n   "source": [\n    "# Do some arithmetic\\n",\n    "print(1+1)"\n   ]\n  }\n ],\n "metadata": {\n  "interpreter": {\n   "hash": "42fd40e048e0585f88ec242f050f7ef0895cf845a8dd1159352394e5826cd102"\n  },\n  "kernelspec": {\n   "display_name": "Python 3.9.7 (\'base\')",\n   "language": "python",\n   "name": "python3"\n  },\n  "language_info": {\n   "codemirror_mode": {\n    "name": "ipython",\n    "version": 3\n   },\n   "file_extension": ".py",\n   "mimetype": "text/x-python",\n   "name": "python",\n   "nbconvert_exporter": "python",\n   "pygments_lexer": "ipython3",\n   "version": "3.9.7"\n  }\n },\n "nbformat": 4,\n "nbformat_minor": 4\n}\n')),(0,r.kt)("h2",{id:"minimal-ipynb-to-md-converstion-with-pandoc"},"Minimal ipynb to md converstion with pandoc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ pandoc --to gfm minimal.ipynb\n<div class="cell markdown">\n\n## A minimal notebook\n\n</div>\n\n<div class="cell markdown">\n\n<MyTag></MyTag>\n\n</div>\n\n<div class="cell code" execution_count="1">\n\n``` python\n# Do some arithmetic\nprint(1+1)\n```\n\n<div class="output stream stdout">\n\n    2\n\n</div>\n\n</div>\n')),(0,r.kt)("h2",{id:"minimal-ipynb-to-md-converstion-with-quarto"},"Minimal ipynb to md converstion with quarto"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ quarto render minimal.ipynb --to gfm\npandoc\n  to: gfm+footnotes+tex_math_dollars-yaml_metadata_block\n  output-file: minimal.md\n  standalone: true\n  default-image-extension: png\n  filters:\n    - crossref\n\nOutput created: minimal.md\n")),(0,r.kt)("p",null,"This creates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n## A minimal notebook\n\n<MyTag></MyTag>\n\n``` python\n# Do some arithmetic\nprint(1+1)\n```\n\n    2\n")),(0,r.kt)("p",null,"Running Pandoc With those Extensions"),(0,r.kt)("p",null,"running pandoc with ",(0,r.kt)("inlineCode",{parentName:"p"},"--standalone --to gfm+footnotes+tex_math_dollars-yaml_metadata_block")," still adds the divs and looks different than quarto.  Somewhere, maybe quarto is removing the divs.  We can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Div")," elements in the AST when we explore panflute in the sections below."),(0,r.kt)("h2",{id:"how-to-use-panflute"},"How to use panflute"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sergiocorreia/panflute-filters"},"examples")," are helpful."),(0,r.kt)("p",null,"This filter places ",(0,r.kt)("inlineCode",{parentName:"p"},"CodeOutput")," blocks around code as well as changes the codefence to have ",(0,r.kt)("inlineCode",{parentName:"p"},"file=script.py")," in order to hack the code fence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/Users/hamel/opt/anaconda3/bin/python\n#flute.py\nfrom typing import Text\nfrom panflute import *\nfrom logging import warning\n\n\ndef increase_header_level(elem, doc):\n    if type(elem) == CodeBlock and type(elem.parent.prev) == CodeBlock:\n        return ([RawBlock("<CodeOutput>"), elem, RawBlock("</CodeOutput>")])\n    elif type(elem) == CodeBlock:\n        elem.classes = [\'file=script.py\']\n\n\ndef main(doc=None):\n    return run_filter(increase_header_level, doc=doc)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("p",null,"This is how we can use this filter and see the rendered output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ pandoc --to gfm minimal.ipynb --filter "flute.py"\n<div class="cell markdown">\n\n## A minimal notebook\n\n</div>\n\n<div class="cell markdown">\n\n<MyTag></MyTag>\n\n</div>\n\n<div class="cell code" execution_count="1">\n\n``` file=script.py\n# Do some arithmetic\nprint(1+1)\n```\n\n<div class="output stream stdout">\n\n<CodeOutput>\n\n    2\n\n</CodeOutput>\n\n</div>\n\n</div>\n')),(0,r.kt)("p",null,"Note: we could probably replace the inner div with the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," class with ",(0,r.kt)("inlineCode",{parentName:"p"},"<CodeOutput>")," tag"),(0,r.kt)("p",null,"Just for completeness, this is the schema of the minimal notebook using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--to native")," flag ",(0,r.kt)("strong",{parentName:"p"},"prior to")," applying the filter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$pandoc --to native minimal.ipynb\n[ Div\n    ( "" , [ "cell" , "markdown" ] , [] )\n    [ Header\n        2\n        ( "a-minimal-notebook" , [] , [] )\n        [ Str "A" , Space , Str "minimal" , Space , Str "notebook" ]\n    ]\n, Div\n    ( "" , [ "cell" , "markdown" ] , [] )\n    [ Para\n        [ RawInline (Format "html") "<MyTag>"\n        , RawInline (Format "html") "</MyTag>"\n        ]\n    ]\n, Div\n    ( ""\n    , [ "cell" , "code" ]\n    , [ ( "execution_count" , "1" ) ]\n    )\n    [ CodeBlock\n        ( "" , [ "python" ] , [] )\n        "# Do some arithmetic\\nprint(1+1)"\n    , Div\n        ( "" , [ "output" , "stream" , "stdout" ] , [] )\n        [ CodeBlock ( "" , [] , [] ) "2\\n" ]\n    ]\n]\n')),(0,r.kt)("p",null,"And ",(0,r.kt)("strong",{parentName:"p"},"after applying the filter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$pandoc --to native minimal.ipynb --filter flute.py\n[ Div\n    ( "" , [ "cell" , "markdown" ] , [] )\n    [ Header\n        2\n        ( "a-minimal-notebook" , [] , [] )\n        [ Str "A" , Space , Str "minimal" , Space , Str "notebook" ]\n    ]\n, Div\n    ( "" , [ "cell" , "markdown" ] , [] )\n    [ Para\n        [ RawInline (Format "html") "<MyTag>"\n        , RawInline (Format "html") "</MyTag>"\n        ]\n    ]\n, Div\n    ( ""\n    , [ "cell" , "code" ]\n    , [ ( "execution_count" , "1" ) ]\n    )\n    [ CodeBlock\n        ( "" , [ "file=script.py" ] , [] )\n        "# Do some arithmetic\\nprint(1+1)"\n    , Div\n        ( "" , [ "output" , "stream" , "stdout" ] , [] )\n        [ RawBlock (Format "html") "<CodeOutput>"\n        , CodeBlock ( "" , [] , [] ) "2\\n"\n        , RawBlock (Format "html") "</CodeOutput>"\n        ]\n    ]\n]\n')))}d.isMDXComponent=!0}}]);