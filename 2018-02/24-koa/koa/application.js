//主要应用
let http = require('http')
let context = require('./context')
let request = require('./request')
class koa{
    constructor(){
        this.callbackFn;
        this.context = context
        this.request = request
    }
    createContext(req,res){
        //创建上下文
        let ctx = Object.create(this.context)
        //创建request
        ctx.request = Object.create(this.request)
        ctx.req = ctx.request.req = req;
        return ctx
    }
    handleRequest(){
        return (req,res)=>{
            //创建上下文对象
            let ctx = this.createContext(req,res)
            this.callbackFn(ctx)
        }
    }
    listen(){
        let server = http.createServer(this.handleRequest())
        server.listen(...arguments)
    }
    use(fn){
        this.callbackFn = fn;
    }
}
module.exports = koa