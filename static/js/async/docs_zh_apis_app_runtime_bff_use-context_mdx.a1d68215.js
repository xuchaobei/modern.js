(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_app_runtime_bff_use-context_mdx"],{20037:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return l},default:function(){return t}});var r=n("12151");let o={title:"useContext"},i=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"函数签名",text:"函数签名",depth:2},{id:"示例",text:"示例",depth:2}],l="useContext";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"usecontext",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#usecontext",children:"#"}),"useContext"]}),"\n",(0,r.jsx)(s.p,{children:"用于在一体化 BFF 函数中获取请求上下文。"}),"\n",(0,r.jsxs)(s.h2,{id:"使用姿势",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsx)(s.p,{children:"根据使用的框架拓展插件，从对应的命名空间中导出："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { useContext } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/{namespace}'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"函数签名",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#函数签名",children:"#"}),"函数签名"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"function useContext(): any"})}),"\n",(0,r.jsxs)(s.h2,{id:"示例",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(s.p,{children:["开发者可以通过 ",(0,r.jsx)(s.code,{children:"context"})," 获取更多的请求信息，例如获取请求 UA（示例为使用 koa 框架时）："]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { useContext } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/koa'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ctx"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useContext"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ctx"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"req"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".headers["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'user-agent'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive caution",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"注意"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\n只有在一体化 BFF 函数中，你才可以使用 ",(0,r.jsx)(s.code,{children:"useContext"})," API 。"]})})]}),"\n",(0,r.jsxs)(s.p,{children:["使用不同的运行时框架时，虽然均支持 ",(0,r.jsx)(s.code,{children:"useContext"})," API，但它们的返回值的类型是不同的。"]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);