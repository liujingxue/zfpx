//主要应用
let http = require('http')
class koa{
    constructor(){
        this.callbackFn;
    }
    handleRequest(){
        return (req,res)=>{
            this.callbackFn(req,res)
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