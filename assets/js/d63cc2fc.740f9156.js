"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[42],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,d=f["".concat(a,".").concat(p)]||f[p]||u[p]||l;return n?r.createElement(d,A(A({ref:t},c),{},{components:n})):r.createElement(d,A({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,A=new Array(l);A[0]=f;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,A[1]=o;for(var s=2;s<l;s++)A[s]=n[s];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2875:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),A=["components"],o={title:"OSX Shell Tips"},a="Key Repeat Rate",s={unversionedId:"linux/osx",id:"linux/osx",title:"OSX Shell Tips",description:"Add days to your lifespan by Increasing the key repeat rate. Run the following in the terminal then restart.  Protip by Michael Musson.",source:"@site/docs/linux/osx.md",sourceDirName:"linux",slug:"/linux/osx",permalink:"/linux/osx",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/linux/osx.md",tags:[],version:"current",frontMatter:{title:"OSX Shell Tips"},sidebar:"tutorialSidebar",previous:{title:"Misc Utilities",permalink:"/linux/misc_utils"},next:{title:"Processes, Permissions and Moving Data",permalink:"/linux/permprocdata"}},c={},u=[],f={toc:u};function p(e){var t=e.components,o=(0,i.Z)(e,A);return(0,l.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"key-repeat-rate"},"Key Repeat Rate"),(0,l.kt)("p",null,"Add days to your lifespan by Increasing the key repeat rate. Run the following in the terminal then restart.  Protip by ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/michael-m-a37b1932/"},"Michael Musson"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"defaults write -g InitialKeyRepeat -int 13 # normal minimum is 15 (225 ms)\ndefaults write -g KeyRepeat -int 1 # normal minimum is 2 (30 ms)\n")),(0,l.kt)("h1",{id:"a-better-way-to-search-text-ack"},"A better way to search text: ",(0,l.kt)("inlineCode",{parentName:"h1"},"ack")),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"ack"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"brew install ack")),(0,l.kt)("p",null,"Search files for text, super fast and returns results in a very nice way. By default will search recursively from the current directory and it skips unimportant files by default."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'ack "search string"')),(0,l.kt)("h1",{id:"keyboard-tricks-os-x"},"Keyboard Tricks (OS X)"),(0,l.kt)("p",null,"Set your option key to ",(0,l.kt)("inlineCode",{parentName:"p"},"Esc+"),"  in iTerm under Profiles>Keys"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(486).Z,width:"363",height:"84"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"control-W")," delete word backwards"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"option-D")," delete word forwards"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"control-K")," delete until end of line")),(0,l.kt)("h1",{id:"my-zshrc-file"},"My ",(0,l.kt)("inlineCode",{parentName:"h1"},".zshrc")," file"),(0,l.kt)("p",null,"Stored at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")),(0,l.kt)("p",null,"I used to have ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh"},"ohmyzsh")," but it made my shell too slow. This is good enough for me."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# #speed startup time https://medium.com/@dannysmith/little-thing-2-speeding-up-zsh-f1860390f92\nautoload -Uz compinit\nfor dump in ~/.zcompdump(N.mh+24); do\n  compinit\ndone\ncompinit -C\n####\n\nPROMPT=\'%(?.%F{green}\u221a.%F{red}?%?)%f %B%F{157}%1~%f%b %F{231}%# \'\n\nautoload -Uz vcs_info\nprecmd_vcs_info() { vcs_info }\nprecmd_functions+=( precmd_vcs_info )\nsetopt prompt_subst\nRPROMPT=\\$vcs_info_msg_0_\nzstyle \':vcs_info:git:*\' formats \'%F{141}(%b)%r%f\'\nzstyle \':vcs_info:*\' enable git\n\nalias ls="colorls"\nalias python="python3"\n\n# install jupyter kernel with pipenv\nfunction install-jupyter {\n  if [ -n "${PIPENV_ACTIVE+1}" ]; then\n    VENV_NAME=`echo ${VIRTUAL_ENV} | cut -d \'/\' -f 7`\n    echo "creating Jupyter kernel named $VENV_NAME"\n    pipenv install --skip-lock ipykernel\n    python -m ipykernel install --user --name=$VENV_NAME\n  fi\n}\n\n## automatically activate pipenv shell upon cd\nfunction auto_pipenv_shell {\n    if [ ! -n "${PIPENV_ACTIVE+1}" ]; then\n        if [ -f "Pipfile" ] ; then\n            pipenv shell\n        fi\n    fi\n}\n\nfunction cd {\n    builtin cd "$@"\n    auto_pipenv_shell\n}\n\n#extra stuff\nexport CLICOLOR=1\nexport LSCOLORS=GxFxCxDxBxegedabagaced\nGREP_OPTIONS="--color=always";export GREP_OPTIONS\n__git_files () { \n    _wanted files expl \'local files\' _files     \n}\n')))}p.isMDXComponent=!0},486:function(e,t){t.Z="data:image/png;base64,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"}}]);