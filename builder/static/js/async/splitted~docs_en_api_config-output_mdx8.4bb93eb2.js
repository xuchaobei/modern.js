(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["splitted~docs_en_api_config-output_mdx8"],{90162:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return s},toc:function(){return t},default:function(){return c}});var r=i("12151");let s=void 0,t=[{id:"config",text:"Config",depth:3},{id:"entry",text:"entry",depth:4},{id:"usage",text:"usage",depth:4},{id:"ua",text:"ua",depth:4},{id:"off",text:"off",depth:4}];function d(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",div:"div"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type:"})," ",(0,r.jsx)(n.code,{children:"'entry' | 'usage' | 'ua' | 'off'"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default:"})," ",(0,r.jsx)(n.code,{children:"'entry'"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Via ",(0,r.jsx)(n.code,{children:"output.polyfill"})," you can configure how the polyfill is injected."]}),"\n",(0,r.jsxs)(n.h3,{id:"config",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"}),"Config"]}),"\n",(0,r.jsxs)(n.h4,{id:"entry",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry",children:"#"}),"entry"]}),"\n",(0,r.jsxs)(n.p,{children:["Polyfill is injected in every entry file when ",(0,r.jsx)(n.code,{children:"output.polyfill"})," is configured as ",(0,r.jsx)(n.code,{children:"'entry'"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"useBuiltIns: 'entry'"})," configuration in ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"usage",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"usage"]}),"\n",(0,r.jsx)(n.p,{children:"Polyfill is injected in each file based on the API used in the code."}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"useBuiltIns: 'usage'"})," configuration in ",(0,r.jsx)(n.code,{children:"@babel/preset-env"}),"."]}),"\n",(0,r.jsxs)(n.h4,{id:"ua",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ua",children:"#"}),"ua"]}),"\n",(0,r.jsx)(n.p,{children:"The Polyfill code is dynamically delivered according to the currently requested UA information."}),"\n",(0,r.jsxs)(n.h4,{id:"off",children:[(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#off",children:"#"}),"off"]}),"\n",(0,r.jsx)(n.p,{children:"Polyfill is not injected. When using this option, you need to ensure code compatibility yourself."}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsxs)(n.p,{children:["\nWhen using Rspack as the bundler, the ",(0,r.jsx)(n.code,{children:"usage"}),"configuration item is not currently supported."]})})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);