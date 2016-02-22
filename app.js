"use strict"

const http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end({
        "message": "What's up? Node.js 4.3.1 LTS here!"
    })
}).listen(8080, "127.0.0.1")