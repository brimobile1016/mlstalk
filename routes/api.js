__path = process.cwd()

// module
var express = require('express');
var fetch = require('node-fetch');
var router  = express.Router();
// Settings
const author = "King Of Bear"

// Mess err
mess = {
    error: {
        status: false,
        message: 'Error, Service Unavaible',
        maintanied_by: 'King Of Bear'
    },
    noturl: {
    	status: false,
    	message: 'Error, Invalid Url',
    	maintanied_by: 'King Of Bear'
    },
    notquery: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Query',
    	maintanied_by: 'King Of Bear'
    }
}
// Features
router.get('/ffstalk', async (req, res, next) => {
	var id = req.query.id
	if (!id) return res.json(mess.notid)
	let data = await fetchJson(`https://saipulanuar.eu.org/api/api.php/ffstalk2?id=${id}&apikey=bear`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
})

module.exports = router
