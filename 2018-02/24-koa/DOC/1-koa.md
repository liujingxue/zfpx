
## ctx是上下文对象

* ctx代表的是上下文，是koa自己创建的
* ctx.request 这是koa自己封装的request属性
* ctx.response
* ctx.req 原生的req对象
* ctx.res
* ctx有代理的作用
* 建议使用ctx.body

```
//ctx.body

let koa = require('koa')
let app = new koa()

app.use((ctx,next)=>{
    // ctx.body = 'heelo'
    ctx.res.write('hello')
    ctx.res.end('world')
})

app.listen(8099)

```

## 其他的ctx方法

* ctx.header  //取头
* ctx.headers
* ctx.method
* ctx.metthod=
* ctx.url
* ctx.url=
* ctx.originalUrl
* ctx.origin
* ctx.href
* ctx.path
* ctx.path=
* ctx.query
* ctx.query=
* ctx.querystring
* ctx.querystring=
* ctx.host
* ctx.hostname
* ctx.fresh
* ctx.stale
* ctx.socket
* ctx.protocol
* ctx.secure
* ctx.ip
* ctx.ips
* ctx.subdomains
* ctx.is()
* ctx.accepts()
* ctx.acceptsEncodings()
* ctx.acceptsCharsets()
* ctx.acceptsLanguages()
* ctx.get()

## ctx是怎么诞生的， ctx只是用来实现代理req和request的



