//context 代理request和response属性
//设置getter和setter
let proto = {

}
function delateGetter(property,name){

}
//让proto 代理request上的query属性
delateGetter('request','query')
module.exports = proto