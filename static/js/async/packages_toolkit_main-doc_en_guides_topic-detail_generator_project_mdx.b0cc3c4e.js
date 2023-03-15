(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["packages_toolkit_main-doc_en_guides_topic-detail_generator_project_mdx"],{16011:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});!function(e,r){for(var n in r)Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}(r,{frontmatter:function(){return i},toc:function(){return s},title:function(){return t},default:function(){return d}});var a=n("41660");let i={sidebar_position:2},s=[{id:"use",text:"Use",depth:2},{id:"params",text:"Params",depth:2},{id:"projectdir",text:"[projectDir]",depth:3},{id:"--version",text:"--version",depth:3},{id:"--lang",text:"--lang",depth:3},{id:"-c---config",text:"-c, --config",depth:3},{id:"--no-need-install",text:"--no-need-install",depth:3},{id:"--dist-tag-disttag",text:"--dist-tag <distTag>",depth:3},{id:"--registry-registry",text:"--registry <registry/>",depth:3},{id:"--debug",text:"--debug",depth:3},{id:"--mwa",text:"--mwa",depth:3},{id:"--module",text:"--module",depth:3},{id:"--monorepo",text:"--monorepo",depth:3},{id:"--plugin-plugin",text:"--plugin <plugin>",depth:3},{id:"--generator-generator",text:"--generator <generator>",depth:3},{id:"--packages-packages",text:"--packages <packages>",depth:3}],t="Project Generator";function c(e){let r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2",div:"div",button:"button",pre:"pre",span:"span",h3:"h3"},e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"project-generator",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#project-generator",children:"#"}),"Project Generator"]}),"\n",(0,a.jsxs)(r.p,{children:["Modern.js provides ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," as a project generator for Modern.js project creation."]}),"\n",(0,a.jsxs)(r.h2,{id:"use",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#use",children:"#"}),"Use"]}),"\n",(0,a.jsxs)(r.p,{children:["There is no need to install ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," globally, just execute the tool directly with npx:"]}),"\n",(0,a.jsxs)(r.div,{className:"language-bash",children:[(0,a.jsx)(r.div,{className:""}),(0,a.jsxs)(r.div,{className:"modern-code-content",children:[(0,a.jsx)(r.button,{className:"copy"}),(0,a.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,a.jsxs)(r.code,{children:[(0,a.jsx)(r.span,{className:"line",children:(0,a.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create [projectDir]"})}),"\n",(0,a.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,a.jsxs)(r.div,{className:"modern-directive info",children:[(0,a.jsx)(r.p,{className:"modern-directive-title",children:"INFO"}),(0,a.jsx)(r.div,{className:"modern-directive-content",children:(0,a.jsxs)(r.p,{children:["\nUse npx to get the latest version of ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," every time."]})})]}),"\n",(0,a.jsxs)(r.h2,{id:"params",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"}),"Params"]}),"\n",(0,a.jsxs)(r.h3,{id:"projectdir",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#projectdir",children:"#"}),"[projectDir]"]}),"\n",(0,a.jsx)(r.p,{children:"Project directory name."}),"\n",(0,a.jsxs)(r.p,{children:["When executing the above command, the ",(0,a.jsx)(r.code,{children:"projectDir"})," folder will be created in the current directory by default, and the initialization project will be in this folder. When this parameter is empty, the initialization project will be directly generated in the current directory."]}),"\n",(0,a.jsxs)(r.h3,{id:"--version",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--version",children:"#"}),"--version"]}),"\n",(0,a.jsxs)(r.p,{children:["Get the ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," tool version."]}),"\n",(0,a.jsxs)(r.div,{className:"language-bash",children:[(0,a.jsx)(r.div,{className:""}),(0,a.jsxs)(r.div,{className:"modern-code-content",children:[(0,a.jsx)(r.button,{className:"copy"}),(0,a.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,a.jsxs)(r.code,{children:[(0,a.jsx)(r.span,{className:"line",children:(0,a.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"$ npx @modern-js/create --version"})}),"\n",(0,a.jsx)(r.span,{className:"line"}),"\n",(0,a.jsx)(r.span,{className:"line",children:(0,a.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"[INFO] @modern-js/create v2.0.0"})}),"\n",(0,a.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,a.jsxs)(r.h3,{id:"--lang",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--lang",children:"#"}),"--lang"]}),"\n",(0,a.jsxs)(r.p,{children:["Specifies the execution language, supports ",(0,a.jsx)(r.code,{children:"zh"})," and ",(0,a.jsx)(r.code,{children:"en"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["By default, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will automatically identify the user's system language, choose to use Chinese or English, if the recognition fails or you want to specify the language manually, you can use this parameter."]}),"\n",(0,a.jsxs)(r.h3,{id:"-c---config",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#-c---config",children:"#"}),"-c, --config"]}),"\n",(0,a.jsx)(r.p,{children:"Specifies the project default configuration."}),"\n",(0,a.jsxs)(r.p,{children:["By default, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will have interaction problems such as language selection and package managers during execution. When you need to specify these configuration contents in advance, you can pass in this field."]}),"\n",(0,a.jsx)(r.p,{children:"This field is a JSON character string, for example when running a package manager:"}),"\n",(0,a.jsxs)(r.div,{className:"language-bash",children:[(0,a.jsx)(r.div,{className:""}),(0,a.jsxs)(r.div,{className:"modern-code-content",children:[(0,a.jsx)(r.button,{className:"copy"}),(0,a.jsx)(r.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,a.jsxs)(r.code,{children:[(0,a.jsxs)(r.span,{className:"line",children:[(0,a.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"npx @modern-js/create --config "}),(0,a.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:'\'{"packageManager": "pnpm"}\''})]}),"\n",(0,a.jsx)(r.span,{className:"line"})]})})]})]}),"\n",(0,a.jsxs)(r.p,{children:["Specific configuration information viewable ",(0,a.jsx)(r.a,{href:"/en/guides/topic-detail/generator/config/common.html",children:"Project Configuration"}),"."]}),"\n",(0,a.jsxs)(r.h3,{id:"--no-need-install",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--no-need-install",children:"#"}),"--no-need-install"]}),"\n",(0,a.jsxs)(r.p,{children:["By default, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," automatically installs dependency after the project is created, use this parameter to ignore the install dependency step."]}),"\n",(0,a.jsxs)(r.h3,{id:"--dist-tag-disttag",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--dist-tag-disttag",children:"#"}),"--dist-tag <distTag>"]}),"\n",(0,a.jsx)(r.p,{children:"Specifies the generator and Modern.js dependency versions."}),"\n",(0,a.jsxs)(r.p,{children:["A smaller micro-generator will be executed during the execution of ",(0,a.jsx)(r.code,{children:"@modern-js/create"}),", and the version number of the micro-generator that can be executed with this parameter and the version number of the corresponding installation Modern.js related dependencies."]}),"\n",(0,a.jsxs)(r.h3,{id:"--registry-registry",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--registry-registry",children:"#"}),"--registry <registry/>"]}),"\n",(0,a.jsx)(r.p,{children:"Execute the npm registry to get the generator and npm packages."}),"\n",(0,a.jsxs)(r.h3,{id:"--debug",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--debug",children:"#"}),"--debug"]}),"\n",(0,a.jsx)(r.p,{children:"Displays debug log information during generator execution."}),"\n",(0,a.jsxs)(r.h3,{id:"--mwa",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--mwa",children:"#"}),"--mwa"]}),"\n",(0,a.jsx)(r.p,{children:"One-click to create an application engineering solution project."}),"\n",(0,a.jsxs)(r.p,{children:["With this parameter, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will create the application project with the configuration default value."]}),"\n",(0,a.jsxs)(r.h3,{id:"--module",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--module",children:"#"}),"--module"]}),"\n",(0,a.jsx)(r.p,{children:"One-click to create a module engineering solution project."}),"\n",(0,a.jsxs)(r.p,{children:["With this parameter, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will create the module project with the configuration default value."]}),"\n",(0,a.jsxs)(r.h3,{id:"--monorepo",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--monorepo",children:"#"}),"--monorepo"]}),"\n",(0,a.jsx)(r.p,{children:"One-click to create a Monorepo engineering solution project."}),"\n",(0,a.jsxs)(r.p,{children:["With this parameter, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will create the Monorepo project with the configuration default value."]}),"\n",(0,a.jsxs)(r.h3,{id:"--plugin-plugin",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--plugin-plugin",children:"#"}),"--plugin <plugin>"]}),"\n",(0,a.jsx)(r.p,{children:"Specifies the generator plugin."}),"\n",(0,a.jsx)(r.p,{children:"Modern.js support the use of the generator plug-in custom Modern.js the default project type or add the project type scenes, the parameter user specifies the customized generator plugin."}),"\n",(0,a.jsxs)(r.p,{children:["For custom generator plugins, please refer to ",(0,a.jsx)(r.a,{href:"/en/guides/topic-detail/generator/plugin/abstract.html",children:"Development Generator Plugin"}),"."]}),"\n",(0,a.jsxs)(r.h3,{id:"--generator-generator",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--generator-generator",children:"#"}),"--generator <generator>"]}),"\n",(0,a.jsx)(r.p,{children:"Specifies the microgenerator."}),"\n",(0,a.jsxs)(r.p,{children:["By default, ",(0,a.jsx)(r.code,{children:"@modern-js/create"})," will execute the microgenerator Modern.js framework build-in. If you need to execute a customized microgenerator, and you need to use the posture of ",(0,a.jsx)(r.code,{children:"npx @modern-js/create"}),", you can use this parameter directly."]}),"\n",(0,a.jsxs)(r.p,{children:["For custom microgenerators, please refer to ",(0,a.jsx)(r.a,{href:"/en/guides/topic-detail/generator/codesmith/introduce.html",children:"Develop Microgenerator"}),"."]}),"\n",(0,a.jsxs)(r.h3,{id:"--packages-packages",children:[(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#--packages-packages",children:"#"}),"--packages <packages>"]}),"\n",(0,a.jsx)(r.p,{children:"A project is created by specifying a specific package version dependency."}),"\n",(0,a.jsxs)(r.p,{children:["If you need to specify a specific package version when creating a project, you can use this parameter. This parameter will lock the package version number in the ",(0,a.jsx)(r.code,{children:"package.json"})," of the project root directory by configuration ",(0,a.jsx)(r.code,{children:"pnpm.overrides"})," (package manager selects pnpm) or ",(0,a.jsx)(r.code,{children:"resolutions"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"The parameter value is a JSON character string."})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=e.components||{};return r?(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}]);