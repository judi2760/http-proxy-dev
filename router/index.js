'use strict'

const services = require('../services')
// const statics = require('./statics')

function onRequest(req, res){

	//change '/static' for static files 
	if(req.url.startsWith('/static')){
		// statics(req, res)
	}else{
		services(req, res)
	}

}

module.exports = onRequest
