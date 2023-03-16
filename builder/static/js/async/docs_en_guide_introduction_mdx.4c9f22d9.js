(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_introduction_mdx"],{4446:function(e,r,n){e.exports={"next-steps":"qKm1u ",nextSteps:"qKm1u "}},82173:function(e,r,n){e.exports={description:"_1vcO ",description:"_1vcO ",step:"_2ddq ",step:"_2ddq ",title:"_74tj ",title:"_74tj "}},93850:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return a},toc:function(){return d},title:function(){return c},default:function(){return p}});var t=n("12151"),s=n("21447"),i=n.ir(n("32747")),l=n.ir(n("70792")),o=n.ir(n("69571"));let a=void 0,d=[{id:"rust-tools",text:"Rust Tools",depth:2},{id:"position",text:"Position",depth:2},{id:"features",text:"Features",depth:2},{id:"support-rspack-build",text:"Support Rspack Build",depth:3},{id:"deep-optimization",text:"Deep optimization",depth:3},{id:"extensible-plugin-system",text:"Extensible Plugin System",depth:3},{id:"npm-packages",text:"npm packages",depth:2},{id:"next-step",text:"Next Step",depth:2}],c="Introduction";function h(e){let r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h1,{id:"introduction",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"}),"Introduction"]}),"\n",(0,t.jsxs)(r.p,{children:["Modern.js Builder is ",(0,t.jsx)(r.strong,{children:"a Build Engine for web development"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"With the growing of the front-end ecosystem, more and more build tools and plugins are created. For most developers, the configuration and dependencies required to build a web application have become complex; the cost of finding best practices for developers has also risen."}),"\n",(0,t.jsx)(r.p,{children:"In order to reduce the complexity and make it easier to build a project, we abstracted the build abilities based on the practical experience of Modern.js, and created the open source tool Modern.js Builder."}),"\n",(0,t.jsxs)(r.h2,{id:"rust-tools",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-tools",children:"#"}),"Rust Tools"]}),"\n",(0,t.jsxs)(r.p,{children:["In recent years, the trend in front-end toolchain has been to re-implement them with native programming languages like Rust for better performance. Some high-performance tools have created, such as ",(0,t.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer",children:"SWC"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer",children:"esbuild"}),", ",(0,t.jsx)(r.a,{href:"/builder/en/guide/glossary.html#rspack",children:"Rspack"}),", etc., and their use is gradually expanding. However, there are many differences between these Rust tools and JavaScript tools, including functional differences, configuration inconsistencies, which make it difficult for users to migrate."]}),"\n",(0,t.jsxs)(r.p,{children:["The Rust process of the front-end toolchain will continue for a long time, ",(0,t.jsx)(r.strong,{children:"Modern.js Builder is expected to help developers better transition to Rust tools"}),". Whether it's JavaScript tools, Rust tools, or even low-level bundlers like webpack, they're all replaceable components in Modern.js Builder. You can incrementally replace these components by turning on configuration or enabling plugins, and Modern.js Builder will smooth out the major differences and help users migrate."]}),"\n",(0,t.jsxs)(r.h2,{id:"position",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#position",children:"#"}),"Position"]}),"\n",(0,t.jsx)(r.p,{children:"Modern.js Builder is a build engine serving the upper-level front-end frameworks. It focuses on solving problems in web application building, and expects to provide out-of-box building abilities for front-end frameworks."}),"\n",(0,t.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{maxWidth:"80%",marginLeft:"10%"}}),"\n",(0,t.jsx)(r.p,{children:"If you are developing a front-end framework, or developing a scaffolding for a front-end application, Builder can provide most of the build logics for you, which allowing you to focus on implementing other features of the framework."}),"\n",(0,t.jsx)(r.p,{children:"If you are a business developer, in most cases, you do not need to manually install Builder in your projects. We recommend that you use the upper-level frameworks based on Builder."}),"\n",(0,t.jsx)(r.p,{children:"Currently, the following front-end frameworks are already using Builder:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js",target:"_blank",rel:"noopener noreferrer",children:"Modern.js"})," Framework (Open source)."]}),"\n",(0,t.jsx)(r.li,{children:"EdenX Framework and PIA Framework inside ByteDance."}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"features",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),"\n",(0,t.jsxs)(r.h3,{id:"support-rspack-build",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#support-rspack-build",children:"#"}),"Support Rspack Build"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Builder supports both webpack and Rspack"}),", so you can switch between the stable Webpack and the faster Rspack."]}),"\n","\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsxs)(r.p,{children:["By default, Builder uses webpack 5 as the bundler. Although the compilation speed of webpack is not ideal, it is still the most mature and ecological bundler in the community. Based on webpack, Builder integrates ",(0,t.jsx)(r.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"noopener noreferrer",children:"babel"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer",children:"postcss"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"noopener noreferrer",children:"terser"})," and other tools to transform or minify codes. Builder also supports replacing some compile tools with native tools to improve compilation speed, such as replacing babel/terser with ",(0,t.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"noopener noreferrer",children:"swc"})," or ",(0,t.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer",children:"esbuild"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you have higher build performance requirements, you can easily switch to Rspack build mode, see ",(0,t.jsx)(r.a,{href:"/builder/en/guide/advanced/rspack-start.html",children:"Using Rspack"})," for more information."]}),"\n",(0,t.jsxs)(r.h3,{id:"deep-optimization",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#deep-optimization",children:"#"}),"Deep optimization"]}),"\n",(0,t.jsxs)(r.p,{children:["Builder ",(0,t.jsx)(r.strong,{children:"makes full use of various optimization strategies"})," in the webpack ecosystem to ensure the product performance in the production environment."]}),"\n",(0,t.jsxs)(r.p,{children:["Taking the chunk splitting scenario as an example, the webpack's splitChunks config is complex, and Builder makes it as an out-of-the-box ",(0,t.jsx)(r.a,{href:"/builder/en/api/config-performance.html#performancechunksplit",children:"performance.chunkSplit"})," config, it will split common third-party libraries into chunks to make page loading faster."]}),"\n",(0,t.jsxs)(r.h3,{id:"extensible-plugin-system",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#extensible-plugin-system",children:"#"}),"Extensible Plugin System"]}),"\n",(0,t.jsx)(r.p,{children:"Provides rich configuration items and a flexible plugin system to support in-depth customization of all features."}),"\n",(0,t.jsx)(r.p,{children:"For Builder, all building abilities are achieved through plugins:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Most of the plugins are lightweight, built in Builder, and developers can enable or disable them through configs."}),"\n",(0,t.jsx)(r.li,{children:"Some plugins are more complex and developed as independent npm packages, developers can install and use them as needed."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Builder also supports custom plugins, so framework developers can develop custom plugins to meet customized requirements."}),"\n",(0,t.jsxs)(r.h2,{id:"npm-packages",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-packages",children:"#"}),"npm packages"]}),"\n",(0,t.jsx)(r.p,{children:"Below is the npm package published by Builder."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Package"}),(0,t.jsx)(r.th,{children:"Version"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Core package of Builder"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-webpack-provider"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Provides webpack build ability"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-rspack-provider"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Provides Rspack build ability"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-swc"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"SWC Plugin"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-stylus"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Stylus Plugin"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-esbuild"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Esbuild Plugin"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-node-polyfill"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Node Polyfill Plugin"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-plugin-image-compress"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Image Compress Plugin"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-shared"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Shared modules of Builder"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"noopener noreferrer",children:"@modern-js/builder-doc"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),(0,t.jsx)(r.td,{children:"Documentation snippets of Builder"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["You can view the source code of these packages in the ",(0,t.jsx)(r.a,{href:"https://github.com/web-infra-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"noopener noreferrer",children:"packages/builder"})," directory of the modern.js repository."]}),"\n",(0,t.jsxs)(r.h2,{id:"next-step",children:[(0,t.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#next-step",children:"#"}),"Next Step"]}),"\n",(0,t.jsx)(r.p,{children:"You may want:"}),"\n","\n",(0,t.jsxs)(l.default,{children:[(0,t.jsx)(o.default,{href:"/guide/quick-start.html",title:"Quick Start",description:"Learn how to use Builder"}),(0,t.jsx)(o.default,{href:"/guide/features.html",title:"All Features",description:"Learn all features of Builder"}),(0,t.jsx)(o.default,{href:"/api/index.html",title:"API Reference",description:"View detailed API documentation"})]})]})}var p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.useMDXComponents)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},32747:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},toc:function(){return l},default:function(){return a}});var t=n("12151"),s=n("21447");let i=void 0,l=[];function o(e){let r=Object.assign({div:"div",p:"p",a:"a"},(0,s.useMDXComponents)(),e.components);return(0,t.jsxs)(r.div,{className:"modern-directive tip",children:[(0,t.jsx)(r.p,{className:"modern-directive-title",children:"What is Rspack"}),(0,t.jsxs)(r.div,{className:"modern-directive-content",children:[(0,t.jsxs)(r.p,{children:["\n",(0,t.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance Rust-based JavaScript bundler that offers strong interoperability with the webpack ecosystem, enabling faster development cycles and efficient collaboration between the two tools."]}),(0,t.jsx)(r.p,{children:"Rspack's build performance is significantly better than Webpack, not only due to the language benefits of Rust, but also due to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can deliver a 5-10x improvement in compilation performance."})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,s.useMDXComponents)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)}},70792:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});var t=n("12151"),s=n.ir(n("4446"));let i=e=>(0,t.jsx)("div",{className:s.default.nextSteps,children:e.children});var l=i},69571:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});var t=n("12151"),s=n("96924"),i=n.ir(n("82173"));let l=e=>(0,t.jsxs)("a",{className:i.default.step,href:(0,s.useUrl)(e.href),children:[(0,t.jsx)("p",{className:i.default.title,children:e.title}),(0,t.jsx)("p",{className:i.default.description,children:e.description})]});var o=l},44110:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.es(n("23447"),r)},96924:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useUrl",{enumerable:!0,get:function(){return s}});var t=n("12416");function s(e){let r=(0,t.useLang)();return(0,t.withBase)("zh"===r?e:"/en".concat(e))}},12416:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.es(n("44110"),r)}}]);