let koa = require('koa')
let app = new koa()

app.use((ctx,next)=>{
    // ctx.body = 'heelo'
    // ctx.res.write('hello')
    // ctx.res.end('world')
    console.log(ctx.url,ctx.request.url,ctx.req.url);
    console.log(ctx.method,ctx.request.method);
    console.log(ctx.query); // query
    console.log(ctx.path); //pathname
    console.log(ctx.querystring);  //a=1&&b=2
    ctx.body = 'hello'
})

app.listen(8099)