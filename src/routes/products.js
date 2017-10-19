// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  SephoraProductModel = require('../models/sephoraProduct');

// Save individual product 
router.post('/saveProduct', function(req, res) {
	
	let sephoraProductModel = new SephoraProductModel({
	  'referenceNumber': 2,
	  'title': '丝芙兰热销唇膏套装',
	  'price': 68,
	  'image': 'sephora-lip-set.png'
	});

	//save the sample user
	sephoraProductModel.save(function(err) {
		if (err) res.send(err);

		//res.send('This product has been saved successfully.');

		console.log('This product has been saved successfully.');

	});
});

//Get all product
router.get('/allSephoraProducts', function(req, res) {

	SephoraProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

// export router
module.exports = router;

