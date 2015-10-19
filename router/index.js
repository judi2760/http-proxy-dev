'use strict'

const services = require('../services')
const statics = require('../statics')

function onRequest(req, res){

	if(req.url.startsWith(GLOBAL.stUrl)){
		statics(req, res)
	}else{
		services(req, res)
	}
}

module.exports = onRequest
