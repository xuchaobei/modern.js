(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_plugin_api_hook_onForged_mdx"],{2092:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return l},default:function(){return t}});var r=n("12151");let o={sidebar_position:1},i=[{id:"func",text:"func",depth:2},{id:"api",text:"api",depth:3},{id:"inputdata",text:"inputData",depth:3}],l="OnForged";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",button:"button",pre:"pre",span:"span",h2:"h2",h3:"h3"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"onforged",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#onforged",children:"#"}),"OnForged"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"onForged"})," 函数为生成器插件生命周期函数，其通常用于定义文件类型操作，这些操作将在 base 的工程方案文件操作完成后进行。"]}),"\n",(0,r.jsx)(s.p,{children:"该方法可直接在 context 上获取。"}),"\n",(0,r.jsx)(s.p,{children:"其类型定义为："}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PluginForgedFunc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  api"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ForgedAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  inputData"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Record"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Promise"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IPluginContext"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onForged"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (func"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PluginForgedFunc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h2,{id:"func",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#func",children:"#"}),"func"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"onForged"})," 参数是一个回调函数，函数参数为 api 和 inputData。"]}),"\n",(0,r.jsxs)(s.h3,{id:"api",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"api"]}),"\n",(0,r.jsxs)(s.p,{children:["在 ",(0,r.jsx)(s.code,{children:"onForged"})," 生命周期中支持的函数列表，具体可查看",(0,r.jsx)(s.a,{href:"/guides/topic-detail/generator/plugin/api/file/introduce.html",children:"文件操作 API"})," 和",(0,r.jsx)(s.a,{href:"/guides/topic-detail/generator/plugin/api/new/introduce.html",children:"启用功能 API"}),"。"]}),"\n",(0,r.jsxs)(s.h3,{id:"inputdata",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#inputdata",children:"#"}),"inputData"]}),"\n",(0,r.jsx)(s.p,{children:"当前用户输入，可用于获取用户当前的输入信息及配置信息。"})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);