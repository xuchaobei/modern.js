(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_topic-detail_generator_codesmith_api_ejs_mdx"],{39905:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return l},toc:function(){return i},title:function(){return o},default:function(){return a}});var n=r("41660");let l={sidebar_position:6},i=[{id:"use",text:"Use",depth:2},{id:"api",text:"API",depth:2},{id:"rendertemplate",text:"renderTemplate",depth:3},{id:"rendertemplatedir",text:"renderTemplateDir",depth:3}],o="@modern-js/codesmith-api-ejs";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"modern-jscodesmith-api-ejs",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-ejs",children:"#"}),"@modern-js/codesmith-api-ejs"]}),"\n",(0,n.jsxs)(s.p,{children:["An API wrapper for file operations using [ejs] (",(0,n.jsx)(s.a,{href:"https://ejs.co/",target:"_blank",rel:"nofollow",children:"https://ejs.co/"}),") in microgenerators, providing a way to render individual template files and folders."]}),"\n",(0,n.jsxs)(s.h2,{id:"use",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"}),"Use"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { EjsAPI } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-ejs'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ejsAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"EjsAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(generator);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ejsAPI"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".renderTemplate"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"material"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'templates/a.js'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     target: "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'b.js'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     { data"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"data"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"   );"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Create EjsAPI instance, the parameter is the generator of the microgenerator function parameter, please see the composition of the microgenerator project for details."}),"\n",(0,n.jsx)(s.li,{children:"Just call the API on its example."}),"\n"]}),"\n",(0,n.jsxs)(s.h2,{id:"api",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,n.jsxs)(s.h3,{id:"rendertemplate",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplate",children:"#"}),"renderTemplate"]}),"\n",(0,n.jsx)(s.p,{children:"Render a single template file."}),"\n",(0,n.jsx)(s.p,{children:"Parameter:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["templateResource: ",(0,n.jsx)(s.code,{children:"FsResource"}),". Template file resource, used by ",(0,n.jsx)(s.code,{children:"context.materials.get(<filename>)"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["target: ",(0,n.jsx)(s.code,{children:"string"}),". Target file path name."]}),"\n",(0,n.jsxs)(s.li,{children:["parameters?: ",(0,n.jsx)(s.code,{children:"Record<string, string>"}),". Render parameter."]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"rendertemplatedir",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#rendertemplatedir",children:"#"}),"renderTemplateDir"]}),"\n",(0,n.jsx)(s.p,{children:"Render template folder."}),"\n",(0,n.jsx)(s.p,{children:"Parameter:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["material: ",(0,n.jsx)(s.code,{children:"FsMaterial"}),". The material context of the current microgenerator execution."]}),"\n",(0,n.jsxs)(s.li,{children:["findGlob: ",(0,n.jsx)(s.code,{children:"string"}),". Template file matches the regular."]}),"\n",(0,n.jsxs)(s.li,{children:["target: ",(0,n.jsx)(s.code,{children:"(globMatch: string) => string"}),". The target file path generation function, the parameter is ",(0,n.jsx)(s.code,{children:"resourceKey."})]}),"\n",(0,n.jsxs)(s.li,{children:["options?: ",(0,n.jsx)(s.code,{children:"RenderTemplateDirOptions"}),". Glob Find the file configuration, the specific function viewable is here [glob] (",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/glob",target:"_blank",rel:"nofollow",children:"https://www.npmjs.com/package/glob"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RenderTemplateDirOptions"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  nodir"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  dot"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ignore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"readonly"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"[];"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);