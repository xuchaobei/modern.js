/**
 * 默认配置
 *
 * @example
// 本文件是 gulu 的 配置文件。
// 在eslint的jsdoc中@example下面必须填写调用示例
// jsdoc 原本的意图是在@example的注解下方展示可行的调用方法以及返回结果
// 可行的调用方法必须符合js规范（例如末尾要有分号）
// 返回结果用 // 进行注释（也是为了符合 js 规范，同时由于多行注释符号不能嵌套，因此不可用）
// 参考 https://jsdoc.app/tags-example.html
// 而此处只是返回一个配置对象，所以不需要填写调用参数和返回结果示例
// 返回内容可参考本文件夹下的 config.default.ts 文件
// 具体可以参考 https://nodejs.bytedance.net/docs/63/3307/24016/
 */
export default () => {
  return {
    psm: 'p.s.m',
    middleware: [],
    plugin: [
      /**
       * 基础运行时插件[runtime-base](https://code.byted.org/nodejs/gulu/tree/master/packages/byted-gulu-runtime-base)
       * 该插件集成了常用的中间件和插件，如下：
       * koa-body中间件：默认开启`multipart`
       * ms-metrics插件：用于记录请求打点，对接MS平台，便于监控服务运行情况；
       * access-log插件：用于记录请求的访问日志；
       * ms-logger插件：提供日志器，通过日志器打印的日志会上报至MS平台，便于监控日志；
       * metrics插件：提供metrics实例，便于业务打点；
       * env插件：提供env实例，便于访问线上环境信息；
       * views插件：用于后端模板渲染；
       * static插件：用于静态资源服务；
       * onerror插件：用于进行统一的错误处理，可根据不同的请求类型返回不同的错误信息；
       * security插件：安全套件插件，提供 Web 安全基础能力；
       * [更多功能插件](https://code.byted.org/nodejs/gulu)
       */
      '@gulu/runtime-base',
    ],
  };
};
