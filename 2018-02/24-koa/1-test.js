//手写koa
let koa = require('./koa/application')
let app = new koa()

app.use((ctx)=>{
    console.log(ctx.query);
    console.log(ctx.request.query);
})

app.listen(8099)