'user strict'

const st = require('st')
const mount = st({path: GLOBAL.stPath, url: '/', cache: false})

function onSt(req , res){
	if(mount(req, res))return
}

module.exports = onSt