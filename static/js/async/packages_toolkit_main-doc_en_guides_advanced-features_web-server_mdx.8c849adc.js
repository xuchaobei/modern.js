(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_advanced-features_web-server_mdx"],{26554:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return l},default:function(){return c}});var n=r("41660");let o={title:"Custom Web Server",sidebar_position:3},i=[{id:"extending-web-server-with-api",text:"Extending Web Server with API",depth:2},{id:"hook",text:"Hook",depth:3},{id:"middleware",text:"Middleware",depth:3},{id:"managed-page-requests-with-bff",text:"Managed Page Requests with BFF",depth:2},{id:"fully-customized-web-server",text:"Fully Customized Web Server",depth:2}],l="Custom Web Server";function t(e){let s=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ol:"ol",li:"li"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"custom-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-web-server",children:"#"}),"Custom Web Server"]}),"\n",(0,n.jsx)(s.p,{children:"As a client side-centric development framework, Modern.js has weak customization capabilities on the server side. In some development scenarios, special server level logic needs to be customized, such as user authentication, request preprocessing, and adding page rendering skeletons."}),"\n",(0,n.jsxs)(s.p,{children:["Some developers may be wondering, Modern.js already provides ",(0,n.jsx)(s.a,{href:"/en/guides/advanced-features/bff/function.html",children:"BFF"}),", why do you need ",(0,n.jsx)(s.strong,{children:"Custom Web Server"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Because by default, page routing does not go through BFF, it has no way to provide server-side custom logic for page access. The reason for this design is that we do not want the service that controls the page to be bound to the BFF service, so as to avoid the BFF framework restricting how the page is deployed."}),"\n",(0,n.jsx)(s.p,{children:"For example, hosting pages separately from BFF, deploying page services to non-Node environments, or customizing for deployment platforms, etc."}),"\n",(0,n.jsx)(s.p,{children:"For the above reasons, Modern.js provides three ways that projects can customize server level capabilities progressively according to their needs."}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive warning",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"WARNING"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\nThe three extension methods cannot work at the same time, and developers need to choose the appropriate method according to the scenario."})})]}),"\n",(0,n.jsxs)(s.h2,{id:"extending-web-server-with-api",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#extending-web-server-with-api",children:"#"}),"Extending Web Server with API"]}),"\n",(0,n.jsx)(s.p,{children:"The first way is to customize the server level at a specific life cycle through the server level runtime API provided by Modern.js. The purpose of providing this way is that in some cases, developers do not need to control the full Web Server, but only need to add server level logic."}),"\n",(0,n.jsxs)(s.p,{children:["Because the full web server cannot be controlled this way, and the extension logic ",(0,n.jsx)(s.strong,{children:"only takes effect when the page is requested"}),". Therefore, it is relatively simple to apply to server level logic, and you do not want to create additional BFFs or BFFs and pages without common server level logic scenarios."]}),"\n",(0,n.jsx)(s.p,{children:"You can execute the'pnpm run new 'command in the project root directory to enable the \"Custom Web Serve\" function:"}),"\n",(0,n.jsxs)(s.div,{className:"language-bash",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Action Create project element"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" New "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Custom Web Server"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" code directory"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["After executing the command, register the ",(0,n.jsx)(s.code,{children:"@modern-js/plugin-server"})," plugin in ",(0,n.jsx)(s.code,{children:"modern.config.ts"}),":"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" serverPlugin "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/plugin-server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  plugins"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"serverPlugin"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["After the function is turned on, the ",(0,n.jsx)(s.code,{children:"server/index.ts"})," file will be automatically created in the project directory, and custom logic can be written in this file. Modern.js provides two types of APIs, ",(0,n.jsx)(s.strong,{children:"Hook"})," and ",(0,n.jsx)(s.strong,{children:"Middleware"}),", to extend Web Server."]}),"\n",(0,n.jsxs)(s.h3,{id:"hook",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#hook",children:"#"}),"Hook"]}),"\n",(0,n.jsx)(s.p,{children:"The Hook provided by Modern.js is used to control the built-in logic in the Web Server, and all page requests go through the Hook."}),"\n",(0,n.jsxs)(s.p,{children:["There are currently two Hooks provided, namely ",(0,n.jsx)(s.code,{children:"AfterMatch"})," and ",(0,n.jsx)(s.code,{children:"AfterRender"}),", which can be used to modify the rendering results. It can be written in ",(0,n.jsx)(s.code,{children:"server/index.ts"})," like this:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { AfterMatchHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" AfterRenderHook } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"afterMatch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AfterMatchHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"afterRender"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AfterRenderHook"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(s.p,{children:"Projects should have the following best practices when using Hook:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Permission verification in afterMatch."}),"\n",(0,n.jsx)(s.li,{children:"Do Rewrite and Redirect in afterMatch."}),"\n",(0,n.jsx)(s.li,{children:"Do HTML content injection in afterRender."}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\nFor more detail, see ",(0,n.jsx)(s.a,{href:"/en/apis/app/runtime/web-server/hook.html",children:"Hook"}),"."]})})]}),"\n",(0,n.jsxs)(s.h3,{id:"middleware",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"}),"Middleware"]}),"\n",(0,n.jsx)(s.p,{children:"For some projects, there may be more requirements at the server level, Modern.js provides Middleware to add pre-middleware for Web Server. It can only run in a Node environment, so if the project is deployed to another environment, such as a Worker environment, Middleware cannot be used."}),"\n",(0,n.jsx)(s.p,{children:"Modern.js provides a set of APIs by default for projects to use:"}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Middlewre } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { source: { "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"req"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"res"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" context;"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"req"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".url);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\nFor more detail, see [Middleware] (/apis/app/runtime/web-server/middleware)."})})]}),"\n",(0,n.jsx)(s.p,{children:"Projects should have the following best practices when using Middleware:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"In Middleware, you can directly operate origin request and response objects, do event tracking, and inject Node services (databases, Redis, etc.) that may be used for SSR rendering."}),"\n",(0,n.jsx)(s.li,{children:"Marking and crawler optimization can be done in Middleware."}),"\n",(0,n.jsx)(s.li,{children:"In Middleware, you can ignore the default rendering and customize the rendering process."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"In general, in CSR projects, using Hook can basically meet all the needs of simple scenarios. In SSR projects, Middleware can be used for more complex Node extensions."})}),"\n",(0,n.jsxs)(s.h2,{id:"managed-page-requests-with-bff",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#managed-page-requests-with-bff",children:"#"}),"Managed Page Requests with BFF"]}),"\n",(0,n.jsx)(s.p,{children:"The second way is to use BFF to Managed page rendering. In this way, all requests will first hit the BFF service."}),"\n",(0,n.jsx)(s.p,{children:"This method can uniformly control the server level logic of all requests through BFF. Therefore, it is suitable for scenarios where the server level logic is complex, and BFF and pages need common server level logic. But it still relies on the Web Server of Modern.js as a whole, and cannot run the logic on existing services."}),"\n",(0,n.jsxs)(s.p,{children:['To use this method, we need to first enable the "BFF" function through ',(0,n.jsx)(s.code,{children:"pnpm new"}),". Then add ",(0,n.jsx)(s.a,{href:"/en/configure/app/bff/enable-handle-web.html",children:(0,n.jsx)(s.code,{children:"bff.enableHandleWeb"})})," configuration in the configuration file:"]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  bff"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableHandleWeb"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.p,{children:["When this value is set to ",(0,n.jsx)(s.code,{children:"true"}),", page request traffic also goes through the BFF, and the logic built into Modern.js for page rendering defaults to running as the last middleware for the BFF service."]}),"\n",(0,n.jsxs)(s.h2,{id:"fully-customized-web-server",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#fully-customized-web-server",children:"#"}),"Fully Customized Web Server"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\nComming soon.."})})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(t,e)})):t(e)}}}]);