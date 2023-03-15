(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_introduce_mdx"],{35321:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},title:function(){return c},default:function(){return a}});var r=n("12151");let i={sidebar_position:1},l=[{id:"生成器插件构成",text:"生成器插件构成",depth:2},{id:"生成器插件分类",text:"生成器插件分类",depth:2},{id:"类型定义",text:"类型定义",depth:3},{id:"扩展工程方案",text:"扩展工程方案",depth:4},{id:"创建工程方案场景",text:"创建工程方案场景",depth:4},{id:"自定义custom类型",text:"自定义(custom)类型",depth:3}],c="介绍";function o(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",ol:"ol",li:"li",h3:"h3",h4:"h4"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"介绍",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#介绍",children:"#"}),"介绍"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js 支持通过生成器插件的方式对提供的工程方案进行定制化或针对工程方案进行特定场景的定制化。"}),"\n",(0,r.jsxs)(e.h2,{id:"生成器插件构成",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生成器插件构成",children:"#"}),"生成器插件构成"]}),"\n",(0,r.jsxs)(e.p,{children:["生成器插件是一个模块，可以直接使用 Modern.js 的模块工程方案开发。当然，Modern.js 也提供了对应的生成器插件(",(0,r.jsx)(e.code,{children:"@modern-js/generator-plugin-plugin"}),")直接新建生成器插件项目。"]}),"\n",(0,r.jsx)(e.p,{children:"一个生成器插件项目目录如下："}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── README.md"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── package.json"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── src"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   ├── index.ts"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── modern-app-env.d.ts"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"├── templates"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"└── tsconfig.json"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"src/index.ts"})," 中为源码目录，用于开发生成器插件逻辑。插件默认导出一个函数，函数参数为 ",(0,r.jsx)(e.code,{children:"context"}),"，",(0,r.jsx)(e.code,{children:"context"})," 上提供一些方法可直接对当前项目进行操作，本章节后续将详细介绍这些方法。"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"templates"})," 目录为模板目录，用于存在生成器插件中需要使用的模板文件。"]}),"\n",(0,r.jsxs)(e.h2,{id:"生成器插件分类",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生成器插件分类",children:"#"}),"生成器插件分类"]}),"\n",(0,r.jsx)(e.p,{children:"生成器插件分为两种："}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"扩展工程方案：直接对默认提供的三大工程方案进行定制化"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"创建工程方案场景：基于默认的三大工程方案创建对应的工程方案场景"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"类型定义",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#类型定义",children:"#"}),"类型定义"]}),"\n",(0,r.jsxs)(e.p,{children:["生成器插件的分类通过 ",(0,r.jsx)(e.code,{children:"package.json"})," 中的 ",(0,r.jsx)(e.code,{children:"meta"})," 信息提供。"]}),"\n",(0,r.jsxs)(e.h4,{id:"扩展工程方案",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展工程方案",children:"#"}),"扩展工程方案"]}),"\n",(0,r.jsxs)(e.div,{className:"language-json",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extend"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"extend"})," 为扩展的工程方案名称，Modern.js 的工程方案名称分别为 ",(0,r.jsx)(e.code,{children:"mwa"}),"、",(0,r.jsx)(e.code,{children:"module"}),"、 ",(0,r.jsx)(e.code,{children:"monorepo"}),"。"]}),"\n",(0,r.jsxs)(e.h4,{id:"创建工程方案场景",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#创建工程方案场景",children:"#"}),"创建工程方案场景"]}),"\n",(0,r.jsxs)(e.div,{className:"language-json",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"key"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"new_solution"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"name"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"新工程方案"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"type"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"key"})," 为场景方案名称，值为字符串。\n",(0,r.jsx)(e.code,{children:"name"})," 为场景方案展示名称，用与使用时选项的展示，值为字符串。\n",(0,r.jsx)(e.code,{children:"type"})," 为工程方案类型，除了和 ",(0,r.jsx)(e.code,{children:"extend"})," 一样支持三种工程方案之外，还支持自定义(custom)类型。"]}),"\n",(0,r.jsxs)(e.h3,{id:"自定义custom类型",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义custom类型",children:"#"}),"自定义(custom)类型"]}),"\n",(0,r.jsxs)(e.p,{children:["自定义类型提供了完全自定义工程方案的实现能力，当使用该类型新建工程方案场景时，只提供了少量的开发层面的最佳实践的代码，比如 ",(0,r.jsx)(e.code,{children:".gitignore"}),"、",(0,r.jsx)(e.code,{children:".editorConfig"})," 等文件，具体为下方目录结构："]}),"\n",(0,r.jsxs)(e.div,{className:"language-text",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:".\n├── .editorconfig\n├── .gitignore\n├── .idea\n│   ├── codeStyles\n│   │   ├── Project.xml\n│   │   └── codeStyleConfig.xml\n│   ├── inspectionProfiles\n│   │   └── Project_Default.xml\n│   └── jsLinters\n│       └── eslint.xml\n├── .nvmrc\n└── .vscode\n    ├── extensions.json\n    └── settings.json\n"})})]})]}),"\n",(0,r.jsx)(e.p,{children:"自定义类型保证了可根据自身对工程方案的需求灵活进行配置。"})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(o,s)})):o(s)}}}]);