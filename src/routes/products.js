// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  SephoraProductModel = require('../models/sephoraProduct');

router.post('/saveProduct', function(req, res) {
	let sephoraProductModel = new SephoraProductModel({
	  'referenceNumber': 1,
	  'title': 'tokyo'
	});

	//save the sample user
	sephoraProductModel.save(function(err) {
		if (err) res.send(err);

		res.send('This product has been saved successfully.');

		//console.log('This product has been saved successfully.');

	});
});

// export router
module.exports = router;

