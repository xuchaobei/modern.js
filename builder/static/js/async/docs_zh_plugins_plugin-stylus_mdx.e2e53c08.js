(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_plugins_plugin-stylus_mdx"],{74093:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return o},title:function(){return c},default:function(){return t}});var l=n("12151"),r=n("21447");let i=void 0,o=[{id:"快速开始",text:"快速开始",depth:2},{id:"安装插件",text:"安装插件",depth:3},{id:"注册插件",text:"注册插件",depth:3},{id:"示例",text:"示例",depth:2},{id:"配置",text:"配置",depth:2},{id:"stylusoptions",text:"stylusOptions",depth:3},{id:"sourcemap",text:"sourceMap",depth:3}],c="Stylus 插件";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",strong:"strong"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"stylus-插件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#stylus-插件",children:"#"}),"Stylus 插件"]}),"\n",(0,l.jsx)(e.p,{children:"Stylus 是一个富于表现力、动态的、健壮的 CSS 预处理器，本章节介绍如何在 Builder 中使用 Stylus。"}),"\n",(0,l.jsxs)(e.h2,{id:"快速开始",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"}),"快速开始"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsx)(e.p,{children:"\n在使用 Rspack 作为打包工具时，Stylus 插件暂不支持使用。"})})]}),"\n",(0,l.jsxs)(e.h3,{id:"安装插件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"}),"安装插件"]}),"\n",(0,l.jsx)(e.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# npm"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install @modern-js/builder-plugin-stylus -D"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# yarn"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"yarn add @modern-js/builder-plugin-stylus -D"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# pnpm"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm install @modern-js/builder-plugin-stylus -D"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"注册插件",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"}),"注册插件"]}),"\n",(0,l.jsxs)(e.p,{children:["在 ","Modern.js"," / EdenX 等上层框架中，你可以通过 ",(0,l.jsx)(e.code,{children:"builderPlugins"})," 配置项来注册 Stylus 插件："]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginStylus } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-stylus'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginStylus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,l.jsx)(e.code,{children:"addPlugins"})," 方法来注册 Stylus 插件："]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginStylus } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-stylus'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 往 builder 实例上添加插件"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginStylus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"示例",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,l.jsxs)(e.p,{children:["安装完插件后，你可以直接在代码中引入 ",(0,l.jsx)(e.code,{children:"*.styl"})," 或 ",(0,l.jsx)(e.code,{children:"*.module.styl"})," 文件，无须添加其他配置。"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"normalize.styl"}),":"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-styl",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"color"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"#000"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"font"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"14"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"px"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:" Arial, sans-serif"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"title.module.styl"}),":"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-styl",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".title"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"font-size"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:" 14"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"px"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"index.js"}),":"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./normalize.styl'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" style "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./title.module.styl'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"style"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".title);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"配置",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置",children:"#"}),"配置"]}),"\n",(0,l.jsx)(e.p,{children:"如果你需要自定义 Stylus 的编译行为，可以使用以下配置项。"}),"\n",(0,l.jsxs)(e.h3,{id:"stylusoptions",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#stylusoptions",children:"#"}),"stylusOptions"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.strong,{children:"类型："})}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"StylusOptions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  use"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  include"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  resolveURL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  lineNumbers"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  hoistAtrules"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"默认值："})," ",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["传递给 Stylus 的选项，请查阅 ",(0,l.jsx)(e.a,{href:"https://stylus-lang.com/docs/js.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus 文档"})," 来了解具体用法。"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginStylus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  stylusOptions"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    lineNumbers"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"sourcemap",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#sourcemap",children:"#"}),"sourceMap"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"类型："})," ",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"默认值："})," ",(0,l.jsx)(e.code,{children:"isDev"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"是否生成 Source Map，默认在开发环境下启用。"}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginStylus"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  sourceMap"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(a,s)})):a(s)}}}]);