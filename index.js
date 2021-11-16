//Dependencies
const Ping_Url = require("ping-url")

//Main
function ping(url){
    Ping_Url.default.check(url, function(res){
        return res
    }, res=>{
        return res
    })
}

//Exporter
module.exports = {
    ping: ping
}
