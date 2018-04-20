//手写koa
let koa = require('./koa/application')
let app = new koa()

app.use((req,res)=>{
    res.end('hello')
})

app.listen(8099)