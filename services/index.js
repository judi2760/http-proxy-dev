'use strict'

const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({})

function onErrorFunc(err, req, res){

	res.writeHead(500, {'Content-Type': 'text/plain'});
  	res.end(JSON.stringify(err));
}

proxy.on('error', onErrorFunc);

function onServices(req, res){
	
	proxy.web(req, res, {
		target : GLOBAL.services
	})
}

module.exports = onServices
