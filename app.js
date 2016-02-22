"use strict"

const port = process.env.PORT = 8080
const ip = process.env.IP = "localhost"

const http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end({
        "message": "What's up? Node.js 4.3.1 LTS here!"
    })
}).listen(port, ip)