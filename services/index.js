'use strict'

const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer({})

proxy.on('error', function (err, req, res) {

  	res.writeHead(500, {'Content-Type': 'text/plain'});
  	res.end(JSON.stringify(err));
});

function onServices(req, res){
	proxy.web(req, res, {
		target : GLOBAL.services
	})
}

module.exports = onServices
