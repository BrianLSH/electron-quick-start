### render和主进程通信
```js
主进程配置预加载脚本, 预加载脚本有node权限去操作底层api
预加载脚本通过暴露的方式和渲染渲染线程共享资源
render线程通过调用预加载去和主进程通信
```