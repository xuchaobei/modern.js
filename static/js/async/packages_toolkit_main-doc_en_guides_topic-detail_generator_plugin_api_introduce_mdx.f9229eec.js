(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_topic-detail_generator_plugin_api_introduce_mdx"],{81575:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return r},toc:function(){return o},title:function(){return t},default:function(){return c}});var i=s("41660");let r={sidebar_position:1},o=[{id:"generator-plugin-composition",text:"Generator plugin composition",depth:2},{id:"classification",text:"Classification",depth:2},{id:"type-definition",text:"Type definition",depth:3},{id:"extended-engineering",text:"Extended engineering",depth:4},{id:"create-engineering-scenes",text:"Create engineering scenes",depth:4},{id:"custom-type",text:"Custom type",depth:3}],t="Introduction";function l(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",ol:"ol",li:"li",h3:"h3",h4:"h4"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"introduction",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#introduction",children:"#"}),"Introduction"]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js supports the customization of the provided engineering solutions by means of generator plugins or the customization of specific scenarios for engineering solutions."}),"\n",(0,i.jsxs)(n.h2,{id:"generator-plugin-composition",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#generator-plugin-composition",children:"#"}),"Generator plugin composition"]}),"\n",(0,i.jsxs)(n.p,{children:["The generator plugin is a module that can be developed directly using Modern.js module engineering solutions. Of course, Modern.js also provides the corresponding generator plugin (",(0,i.jsx)(n.code,{children:"@modern-js/generator-plugin-plugin"}),") to directly create a new generator plugin project."]}),"\n",(0,i.jsx)(n.p,{children:"A generator plugin project directory is as follows:"}),"\n",(0,i.jsxs)(n.div,{className:"language-bash",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"├── README.md"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"├── package.json"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"├── src"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│   ├── index.ts"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"│   └── modern-app-env.d.ts"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"├── templates"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"└── tsconfig.json"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"src/index.ts"})," is the source code directory, which is used to develop the generator plugin logic. The plugin exports a function by default, and the function parameter is ",(0,i.jsx)(n.code,{children:"context"}),". Some methods are provided on the ",(0,i.jsx)(n.code,{children:"context"})," to directly operate the current project. These methods will be introduced in detail later in this chapter."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"templates"})," directory is the template directory used to store template files that need to be used in the generator plugin."]}),"\n",(0,i.jsxs)(n.h2,{id:"classification",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#classification",children:"#"}),"Classification"]}),"\n",(0,i.jsx)(n.p,{children:"There are two types of generator plugins:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extended engineering: directly customize the three major engineering provided by default."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create engineering scenes: Create corresponding engineering scenes based on the default three major engineering schemes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"type-definition",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definition",children:"#"}),"Type definition"]}),"\n",(0,i.jsxs)(n.p,{children:["The classification of the generator plugin is provided by the meta information in the ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsxs)(n.h4,{id:"extended-engineering",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#extended-engineering",children:"#"}),"Extended engineering"]}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"extend"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// The three engineering is mwa, module, monorepo"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h4,{id:"create-engineering-scenes",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-engineering-scenes",children:"#"}),"Create engineering scenes"]}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"meta"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"key"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"new_solution"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"name"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"New Solution"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:'"type"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mwa"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// In addition to the three major engineering solutions, the type here also supports the customize (custom) type"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"key"})," is the scene scheme name and the value is a character string.\n",(0,i.jsx)(n.code,{children:"name"})," is the display name of the scene scheme, used for the display of the option when used, and the value is a character string.\n",(0,i.jsx)(n.code,{children:"type"})," is the project solution type. In addition to supporting three project solutions like ",(0,i.jsx)(n.code,{children:"extend"}),", it also supports the customize (custom) type."]}),"\n",(0,i.jsxs)(n.h3,{id:"custom-type",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-type",children:"#"}),"Custom type"]}),"\n",(0,i.jsxs)(n.p,{children:["The customize type provides the implementation capability of the full custom project solution. When using this type to create a new project solution scenario, only a small amount of code for best practices at the development level is provided, such as ",(0,i.jsx)(n.code,{children:".gitignore"}),", ",(0,i.jsx)(n.code,{children:".editorConfig"})," and other files, specifically for the following directory structure:"]}),"\n",(0,i.jsxs)(n.div,{className:"language-text",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:".\n├── .editorconfig\n├── .gitignore\n├── .idea\n│   ├── codeStyles\n│   │   ├── Project.xml\n│   │   └── codeStyleConfig.xml\n│   ├── inspectionProfiles\n│   │   └── Project_Default.xml\n│   └── jsLinters\n│       └── eslint.xml\n├── .nvmrc\n└── .vscode\n    ├── extensions.json\n    └── settings.json\n"})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Customized types ensure flexible configuration according to their needs for engineering solutions."})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=e.components||{};return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);