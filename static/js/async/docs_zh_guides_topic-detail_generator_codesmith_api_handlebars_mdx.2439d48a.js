(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_handlebars_mdx"],{34370:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return l},toc:function(){return i},title:function(){return o},default:function(){return t}});var n=r("12151");let l={sidebar_position:5},i=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"api",text:"API",depth:2},{id:"rendertemplate",text:"renderTemplate",depth:3},{id:"rendertemplatedir",text:"renderTemplateDir",depth:3}],o="@modern-js/codesmith-api-handlebars";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"modern-jscodesmith-api-handlebars",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-handlebars",children:"#"}),"@modern-js/codesmith-api-handlebars"]}),"\n",(0,n.jsxs)(s.p,{children:["微生成器中使用 ",(0,n.jsx)(s.a,{href:"https://handlebarsjs.com/",target:"_blank",rel:"nofollow",children:"handlebars"})," 进行文件操作的 API 封装，提供渲染单个模板文件和文件夹的方法。"]}),"\n",(0,n.jsxs)(s.h2,{id:"使用姿势",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { HandlebarsAPI } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-handlebars'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"handlebarApi"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HandlebarsAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(generator);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"handlebarsAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".renderTemplate"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"material"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/a.js'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     target: "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'b.js'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     { data"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"data"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"   );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"创建 HandlebarsAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看微生成器项目组成 。"}),"\n",(0,n.jsx)(s.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"api",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,n.jsxs)(s.h3,{id:"rendertemplate",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplate",children:"#"}),"renderTemplate"]}),"\n",(0,n.jsx)(s.p,{children:"渲染单个模板文件。"}),"\n",(0,n.jsx)(s.p,{children:"参数："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["templateResource: ",(0,n.jsx)(s.code,{children:"FsResource"})," 模板文件资源，通过 ",(0,n.jsx)(s.code,{children:"context.materials.get(<filename>)"})," 使用。"]}),"\n",(0,n.jsxs)(s.li,{children:["target: ",(0,n.jsx)(s.code,{children:"string"})," 目标文件路径名称。"]}),"\n",(0,n.jsxs)(s.li,{children:["parameters?: ",(0,n.jsx)(s.code,{children:"Record<string, string>"})," 渲染参数。"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"rendertemplatedir",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplatedir",children:"#"}),"renderTemplateDir"]}),"\n",(0,n.jsx)(s.p,{children:"渲染模板文件夹。"}),"\n",(0,n.jsx)(s.p,{children:"参数："}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["material: ",(0,n.jsx)(s.code,{children:"FsMaterial"})," 当前微生成器执行的 material 上下文。"]}),"\n",(0,n.jsxs)(s.li,{children:["findGlob: ",(0,n.jsx)(s.code,{children:"string"})," 模板文件匹配正则。"]}),"\n",(0,n.jsxs)(s.li,{children:["target: ",(0,n.jsx)(s.code,{children:"(globMatch: string) => string"})," 目标文件路径生成函数，参数为 ",(0,n.jsx)(s.code,{children:"resourceKey。"})]}),"\n",(0,n.jsxs)(s.li,{children:["options?: ",(0,n.jsx)(s.code,{children:"RenderTemplateDirOptions"})," glob 查找文件配置，具体函数可查看这里 ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"nofollow",children:"glob"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RenderTemplateDirOptions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  nodir"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  dot"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ignore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"readonly"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);