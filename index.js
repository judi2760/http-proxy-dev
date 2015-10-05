'use strict'

const http = require('http')
const router = require('./router')

const server = http.createServer()
const MAIN_PORT = process.env.PORT || 80

GLOBAL.services = {
    host: 'localhost',
    port: 9000
}

GLOBAL.staticPath = '/Users/wmanriques/Desktop/dev'

server.listen(MAIN_PORT)

server.on('request',router)
server.on('listening',onListening)


function onListening(){
	console.log(`Server running in port ${MAIN_PORT}`)
}
