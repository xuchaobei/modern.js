# @modern-js/builder-rspack-provider

## 2.9.0

### Patch Changes

- 76b26883bb: fix: rspack-provider swc plugin should not inject core-js in ssr.
  fix: rspack-provider swc 插件不应该在 SSR 下注入 core-js
- 07569e577e: fix(builder): add additional note about hashDigest in cssModuleLocalIdentName

  fix(builder): 添加 cssModuleLocalIdentName 中关于 hashDigest 的补充说明

- Updated dependencies [49bb8cd0ef]
  - @modern-js/server@2.9.0
  - @modern-js/builder-shared@2.9.0
  - @modern-js/e2e@2.9.0
  - @modern-js/types@2.9.0
  - @modern-js/utils@2.9.0

## 2.8.0

### Minor Changes

- 40f5039b17: feat(builder): update rspack to 0.1.0

  feat(builder): 升级 rspack 至 0.1.0

### Patch Changes

- bc943c9b04: fix: specify the resolve.conditionNames when target = node.
  fix: 当 target = node，指定 resolve.conditionNames
- 1242f5d8d6: fix(builder-rspack-provider): support entry mode polyfill

  fix(builder-rspack-provider): 支持 entry 模式的 polyfill 注入

- 457ee832b9: hotfix(builder): use community loader instead of Rspack unstable sass & less loader

  hotfix(builder): 使用社区 sass-loader 和 less-loader 替代 Rspack 非稳定的 sass 和 less loader

- Updated dependencies [ea7bb41e30]
- Updated dependencies [bd369a89a4]
- Updated dependencies [1104a9f18b]
- Updated dependencies [70d82e1408]
- Updated dependencies [2c1151271d]
- Updated dependencies [481461a61d]
- Updated dependencies [1f6ca2c7fb]
  - @modern-js/server@2.8.0
  - @modern-js/builder-shared@2.8.0
  - @modern-js/utils@2.8.0
  - @modern-js/types@2.8.0
  - @modern-js/e2e@2.8.0

## 2.7.0

### Patch Changes

- 206c806efa: fix(rspack-provider): missing tools.autoprefixer type

  fix(rspack-provider): 修复缺少 tools.autoprefixer 类型定义的问题

- 3a942a2472: feat: add Rspack provider swc options, add builder-plugin-swc overrideBrowserslist configuration, report warning when enable latestDecorator in builder-plugin-swc

  feat: 给 Rspack provider 增加 swc 相关配置项，增加 builder-plugin-swc overrideBrowserslist 配置，在 builder-plugin-swc 启用 latestDecorator 后增加 warning 报错

- 5f899af53a: feat(builder): support output.enableAssetFallback in rspack-provider

  feat(builder): 在 rspack-provider 中支持 output.enableAssetFallback 配置项

- 1b913372b4: feat: 增加 copy 配置以及对 core-js path 的 alias

  feat: support copy config and add alias of core-js

- Updated dependencies [206c806efa]
- Updated dependencies [6378e26bf9]
- Updated dependencies [0f15fc597c]
- Updated dependencies [5f899af53a]
- Updated dependencies [dcad887024]
- Updated dependencies [a4672f7c16]
- Updated dependencies [ebe0d2dd6e]
- Updated dependencies [7fff9020e1]
- Updated dependencies [1eea234fdd]
- Updated dependencies [84bfb439b8]
  - @modern-js/builder-shared@2.7.0
  - @modern-js/server@2.7.0
  - @modern-js/utils@2.7.0
  - @modern-js/types@2.7.0
  - @modern-js/e2e@2.7.0

## 2.6.0

### Patch Changes

- 0fe658a: feat(builder): support passing URL to html.favicon

  feat(builder): 支持在 html.favicon 中直接传入 URL

- Updated dependencies [b92d6db]
- Updated dependencies [ba6db6e]
- Updated dependencies [ba6db6e]
- Updated dependencies [e1f799e]
- Updated dependencies [107f674]
- Updated dependencies [7915ab3]
- Updated dependencies [03d7f7d]
- Updated dependencies [fae9d1b]
- Updated dependencies [49fa0b1]
- Updated dependencies [0fe658a]
- Updated dependencies [62930b9]
  - @modern-js/builder-shared@2.6.0
  - @modern-js/server@2.6.0
  - @modern-js/utils@2.6.0
  - @modern-js/types@2.6.0
  - @modern-js/e2e@2.6.0

## 2.5.0

### Minor Changes

- 28e7dc6: feat: more use bunlder chain to modify bundler config
  feat: 更多的使用 `bunlder chain` 去修改 bunlder 配置

### Patch Changes

- 30614fa: chore: modify package.json entry fields and build config
  chore: 更改 package.json entry 字段以及构建配置
- c4c10e7: refactor: refactor rules for static assets processing with rule.oneOf, reuse svg/font/image/media plugin

  refactor: 使用 oneOf 重构静态资源处理规则 & 复用 svg / font / media / img 插件

- 84c21f9: fix(builder-webpack-provider): correct mistaken compilerOptions usage in ts-loader options

  fix(builder-webpack-provider): 改正 ts-loader options 中错误的 compilerOptions

- 1b0ce87: chore: bump caniuse-lite to latest version

  chore: 升级 caniuse-lite 到最新版

- c5ea222: feat(builder): support mergeConfig util in tools.webpack

  feat(builder): 支持在 tools.webpack 中使用 mergeConfig 工具函数

- 40230b3: feat(builder): enable postcss plugins based on browserslist

  feat(builder): 基于 browserslist 来启用需要的 postcss 插件

- Updated dependencies [58a9918]
- Updated dependencies [89ca6cc]
- Updated dependencies [7cb8bb4]
- Updated dependencies [bb4e712]
- Updated dependencies [6fca567]
- Updated dependencies [30614fa]
- Updated dependencies [c4c10e7]
- Updated dependencies [1b0ce87]
- Updated dependencies [11c053b]
- Updated dependencies [f0b3d8c]
- Updated dependencies [28e7dc6]
- Updated dependencies [40230b3]
  - @modern-js/builder-shared@2.5.0
  - @modern-js/server@2.5.0
  - @modern-js/types@2.5.0
  - @modern-js/utils@2.5.0
  - @modern-js/e2e@2.5.0

## 2.4.0

### Minor Changes

- a5572b8: feat: more plugin rebase in `builder-shared`
  feat: 更多 plugin 下沉到 `builder-shared`
- a914be8: feat: modern-js support Rspack bundler
  feat: modern-js 支持 Rspack 构建工具

### Patch Changes

- 6f83037: fix: change the builder resolve plugin
  fix: 修复 builder resolve 插件
- 014d06b: feat: reuse bundleAnalyzer plugin, support performance.bundleAnalyze config in rspack-provider

  feat: 复用 bundleAnalyzer 插件，在 rspack-provider 中支持 performance.bundleAnalyze 配置项

- 48b036e: fix(builder): should not generate cache when build failed

  fix(builder): 修复构建失败时会生成无效编译缓存的问题

- 8c2db5f: feat(core): improve support for exporting a function in config file

  feat(core): 完善对配置文件中导出函数的支持

- Updated dependencies [d19484c]
- Updated dependencies [6f83037]
- Updated dependencies [014d06b]
- Updated dependencies [98a2733]
- Updated dependencies [a5572b8]
- Updated dependencies [a914be8]
- Updated dependencies [8c2db5f]
  - @modern-js/server@2.4.0
  - @modern-js/builder-shared@2.4.0
  - @modern-js/utils@2.4.0
  - @modern-js/e2e@2.4.0
  - @modern-js/types@2.4.0

## 2.3.0

### Patch Changes

- 7cd8185: chore: reuse splitChunks plugin between rspack-provider and webpack-provider

  chore: 在 rspack-provider 和 webpack-provider 间复用 splitChunks plugin

- 4dfe1bf: feat(rspack-builder): add Rspack minimize plugin

  feat(rspack-builder): 添加 Rspack minimize 插件

- Updated dependencies [fd5a3ed]
- Updated dependencies [67ba34a]
- Updated dependencies [2ad9fdf]
- Updated dependencies [f9a26fe]
- Updated dependencies [6ca1c0b]
- Updated dependencies [89b6739]
- Updated dependencies [ff48fc2]
  - @modern-js/utils@2.3.0
  - @modern-js/builder-shared@2.3.0
  - @modern-js/server@2.3.0
  - @modern-js/e2e@2.3.0
  - @modern-js/types@2.3.0

## 2.2.0

### Patch Changes

- f2f8a83: chore: reuse rem AutoSetRootFontSizePlugin between rspack-provider and webpack-provider

  chore: 在 rspack-provider 和 webpack-provider 间复用 rem AutoSetRootFontSizePlugin

- cb12ee7: chore: remove some unused deps, bump postcss version

  chore: 移除未使用的依赖, 升级 postcss 版本

- 16bdc0a: chore: adjust builder plugin name

  chore: 调整 builder 插件命名格式

- Updated dependencies [f2f8a83]
- Updated dependencies [49eff0c]
- Updated dependencies [9fc6de9]
- Updated dependencies [19bb384]
  - @modern-js/builder-shared@2.2.0
  - @modern-js/utils@2.2.0
  - @modern-js/server@2.2.0
  - @modern-js/types@2.2.0
  - @modern-js/e2e@2.2.0

## 2.1.0

### Patch Changes

- 3ad26c2: feat: add util `mergeBuilderConfig` for `modifyBuilderConfig` hook

  feat: `modifyBuilderConfig` 钩子回调提供工具函数 `mergeBuilderConfig`

- 5b54418: fix(builder): no longer remove comments of HTML

  fix(builder): 不再默认移除 HTML 中的注释

- Updated dependencies [837620c]
- Updated dependencies [3d0fb38]
- Updated dependencies [3ad26c2]
- Updated dependencies [5b54418]
- Updated dependencies [ccbac43]
- Updated dependencies [8a9482c]
- Updated dependencies [679296d]
  - @modern-js/utils@2.1.0
  - @modern-js/server@2.1.0
  - @modern-js/builder-shared@2.1.0
  - @modern-js/e2e@2.1.0
  - @modern-js/types@2.1.0

## 2.0.0

### Major Changes

Initial Release
