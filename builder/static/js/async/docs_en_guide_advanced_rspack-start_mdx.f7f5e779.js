(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_advanced_rspack-start_mdx"],{20623:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},toc:function(){return a},title:function(){return c},default:function(){return d}});var i=s("12151"),r=s("21447"),o=s.ir(s("32747"));let l=void 0,a=[{id:"enable-rspack",text:"Enable Rspack",depth:2},{id:"enable-in-modernjs-framework",text:"Enable in Modern.js framework",depth:3},{id:"use-builder-in-a-front-end-framework",text:"Use Builder in a front-end framework",depth:3},{id:"migrating-from-webpack-to-rspack",text:"Migrating from webpack to Rspack",depth:2},{id:"configuration-differences",text:"Configuration differences",depth:3},{id:"source-config",text:"Source Config",depth:4},{id:"html-config",text:"Html Config",depth:4},{id:"security-config",text:"Security Config",depth:4},{id:"dev-config",text:"Dev Config",depth:4},{id:"output-config",text:"Output Config",depth:4},{id:"experiments-config",text:"Experiments Config",depth:4},{id:"performance-config",text:"Performance Config",depth:4},{id:"tools-config",text:"Tools Config",depth:4},{id:"modify-the-rspack-configuration-object",text:"Modify the Rspack Configuration Object",depth:3},{id:"a-more-flexible-way-to-modify-rspack-configuration",text:"A more flexible way to modify Rspack configuration",depth:3}],c="Using Rspack";function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",ul:"ul",h4:"h4",blockquote:"blockquote",strong:"strong"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"using-rspack",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-rspack",children:"#"}),"Using Rspack"]}),"\n",(0,i.jsx)(n.p,{children:"This document will show you how to enable Rspack build mode in the Builder."}),"\n","\n",(0,i.jsx)(o.default,{}),"\n",(0,i.jsxs)(n.h2,{id:"enable-rspack",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-rspack",children:"#"}),"Enable Rspack"]}),"\n",(0,i.jsxs)(n.h3,{id:"enable-in-modernjs-framework",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#enable-in-modernjs-framework",children:"#"}),"Enable in Modern.js framework"]}),"\n",(0,i.jsxs)(n.p,{children:["We recommend enabling Rspack as the bundler for Modern.js framework through the ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/en/guides/advanced-features/rspack-start.html#initializing-an-rspack-project",target:"_blank",rel:"noopener noreferrer",children:"Modern.js generator"})," if you prefer it over the default webpack bundler."]}),"\n",(0,i.jsx)(n.p,{children:"Of course, you can also access it manually by following the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"（The version needs to be the same as the Modern.js version)."]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-text",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pnpm add @modern-js/builder-rspack-provider -D\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Confirm the Modern.js version via package.json or lock file:"}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"package.json"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"devDependencies"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"@modern-js/app-tools"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"2.8.0"'})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Declare the use of Rspack in the Modern.js configuration file:"}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-diff",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"import appTools, { defineConfig } from '@modern-js/app-tools';"})}),"\n",(0,i.jsx)(n.span,{className:"line"}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#4AB576"},children:"+ export default defineConfig<'rspack'>({"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins: ["})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    appTools({"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#4AB576"},children:"+     bundler: 'experimental-rspack',"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }),"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ],"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"use-builder-in-a-front-end-framework",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-builder-in-a-front-end-framework",children:"#"}),"Use Builder in a front-end framework"]}),"\n",(0,i.jsxs)(n.p,{children:["Integrating rspack-provider into a frontend framework is similar to integrating webpack-provider. You only need to change the dependency from ",(0,i.jsx)(n.code,{children:"@modern-js/builder-webpack-provider"})," to ",(0,i.jsx)(n.code,{children:"@modern-js/builder-rspack-provider"}),"."]}),"\n",(0,i.jsxs)(n.div,{className:"language-ts",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { createBuilder } "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { builderRspackProvider } "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-rspack-provider'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(n.span,{className:"line"}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"provider"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"builderRspackProvider"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  builderConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// some configs"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"migrating-from-webpack-to-rspack",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#migrating-from-webpack-to-rspack",children:"#"}),"Migrating from webpack to Rspack"]}),"\n",(0,i.jsx)(n.p,{children:"Builder aims to eliminate the main differences between different bundlers and help users migrate at a lower cost. However, due to the different capabilities of each bundler, you still need to be aware of some differences."}),"\n",(0,i.jsxs)(n.p,{children:["This article will introduce the differences between webpack and Rspack from the perspective of Builder. If you need to know more in-depth differences, please refer to the ",(0,i.jsx)(n.a,{href:"http://rspack.dev/guide/migrate-from-webpack.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack documentation"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"configuration-differences",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration-differences",children:"#"}),"Configuration differences"]}),"\n",(0,i.jsx)(n.p,{children:"Currently, most of configuration options in Builder have been adapted for Rspack.\nThroughout this process, Builder's work includes but is not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace features that rely on webpack loader/plugin (which are not supported in Rspack) with alternative solutions provided by Rspack. For example, use ",(0,i.jsx)(n.code,{children:"css/module"})," instead of ",(0,i.jsx)(n.code,{children:"css-loader"})," modules."]}),"\n",(0,i.jsxs)(n.li,{children:["Validating and encapsulating webpack plugins such as ",(0,i.jsx)(n.code,{children:"@svgr/webpack"})," and ",(0,i.jsx)(n.code,{children:"webpack-bundle-analyzer"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["Encapsulating Rspack built-in features such as ",(0,i.jsx)(n.code,{children:"css"})," and ",(0,i.jsx)(n.code,{children:"minify"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"source-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#source-config",children:"#"}),"Source Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Source code parsing and compilation related configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-source.html#sourcemodulescopes",children:"source.moduleScopes"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"html-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-config",children:"#"}),"Html Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"HTML related configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All configurations and capabilities under html are available within rspack."}),"\n",(0,i.jsxs)(n.h4,{id:"security-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#security-config",children:"#"}),"Security Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Security related configurations in Builder."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All configurations and capabilities under security are ",(0,i.jsx)(n.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,i.jsxs)(n.h4,{id:"dev-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"}),"Dev Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Dev related configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All configurations and capabilities under dev are available within rspack."}),"\n",(0,i.jsxs)(n.h4,{id:"output-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#output-config",children:"#"}),"Output Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Output related configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputassetsretry",children:"output.assetsRetry"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputdisablecssextract",children:"output.disableCssExtract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputenableassetmanifest",children:"output.enableAssetManifest"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputenablecssmoduletsdeclaration",children:"output.enableCssModuleTSDeclaration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputlegalcomments",children:"output.legalComments"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputenableinlinescripts",children:"output.enableInlineScripts"})}),"\n",(0,i.jsxs)(n.li,{children:["tsChecker ability","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-output.html#outputdisabletschecker",children:"output.disableTsChecker"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"experiments-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#experiments-config",children:"#"}),"Experiments Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Experimental related configurations in the Builder"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All configurations and capabilities under experiments are ",(0,i.jsx)(n.strong,{children:"not supported"})," for use within rspack."]}),"\n",(0,i.jsxs)(n.h4,{id:"performance-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#performance-config",children:"#"}),"Performance Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Performance related configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-performance.html#performanceprofile",children:"performance.profile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-performance.html#performanceremovemomentlocale",children:"performance.removeMomentLocale"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-performance.html#performancebuildcache",children:"performance.buildCache"})}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"tools-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tools-config",children:"#"}),"Tools Config"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Low-level tools configurations in Builder."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Unsupported configurations and capabilities include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsterser",children:"tools.terser"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsbabel",children:"tools.babel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolscssextract",children:"tools.cssExtract"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolscssloader",children:"tools.cssLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsinspector",children:"tools.inspector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsminifycss",children:"tools.minifyCss"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolspug",children:"tools.pug"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsstyleloader",children:"tools.styleLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsstyledcomponents",children:"tools.styledComponents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolstsloader",children:"tools.tsLoader"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolstschecker",children:"tools.tsChecker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolswebpack",children:"tools.webpack"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolswebpackchain",children:"tools.webpackChain"})}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsx)(n.p,{children:"\nIn addition to the above configurations, some of the supported configurations may have differences in their capabilities. For specific differences in configurations, please refer to the corresponding API for each configuration."})})]}),"\n",(0,i.jsxs)(n.h3,{id:"modify-the-rspack-configuration-object",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modify-the-rspack-configuration-object",children:"#"}),"Modify the Rspack Configuration Object"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolsrspack",children:"tools.rspack"})," to modify the Rspack configuration object."]}),"\n",(0,i.jsxs)(n.div,{className:"language-ts",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"rspack"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (config"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"config"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".devtool "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cheap-module-eval-source-map'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" config;"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["More information about Rspack, please refer to the ",(0,i.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack website"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"a-more-flexible-way-to-modify-rspack-configuration",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#a-more-flexible-way-to-modify-rspack-configuration",children:"#"}),"A more flexible way to modify Rspack configuration"]}),"\n",(0,i.jsx)(n.p,{children:"Currently, Builder does not provide a flexible way for modifying Rspack config similar to webpack-chain."}),"\n",(0,i.jsxs)(n.p,{children:["If there is a need to add or remove plugins/rules, you can use utility methods such as ",(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#prependplugins",children:"prependPlugins"})," or ",(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#addrules",children:"addRules"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If there is a need to modify existing plugins/rules, it is recommended to use existing configuration options provided by the builder first.\nFor example, to modify html configuration, you should first check if there is a corresponding configuration item under ",(0,i.jsx)(n.a,{href:"/builder/en/api/config-html.html",children:"html config"}),". If the html config does not support the required modifications, the ",(0,i.jsx)(n.a,{href:"/builder/en/api/config-tools.html#toolshtmlplugin",children:"tools.htmlPlugin"})," configuration option can be used."]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},32747:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},toc:function(){return l},default:function(){return c}});var i=s("12151"),r=s("21447");let o=void 0,l=[];function a(e){let n=Object.assign({div:"div",p:"p",a:"a"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(n.div,{className:"modern-directive tip",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"What is Rspack"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:[(0,i.jsxs)(n.p,{children:["\n",(0,i.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," is a high performance Rust-based JavaScript bundler that offers strong interoperability with the webpack ecosystem, enabling faster development cycles and efficient collaboration between the two tools."]}),(0,i.jsx)(n.p,{children:"Rspack's build performance is significantly better than Webpack, not only due to the language benefits of Rust, but also due to its parallel architecture and incremental compilation features. Benchmarking has shown that Rspack can deliver a 5-10x improvement in compilation performance."})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);