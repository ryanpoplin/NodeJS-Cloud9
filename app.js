"use strict"

const port = process.env.PORT = 8080
const ip = process.env.IP = "localhost"

const http = require("http")
const router = require("./router")

http.createServer(router.process).listen(port, ip)
console.log("API")