// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  FreshProductModel = require('../models/freshProduct'),
	  KiehlsProductModel = require('../models/kiehlsProduct'),
	  OriginsProductModel = require('../models/originsProduct'),
	  SephoraProductModel = require('../models/sephoraProduct');

// Save individual product 
router.post('/saveProduct', function(req, res) {
	
	let kiehlsProductModel = new KiehlsProductModel({
	  'referenceNumber': 5,
	  'title': '悦木之源迷你面膜套装',
	  'price': 28,
	  'image': 'kiehls-healthy-set.png',
	  'imageDetail': 'kiehls-healthy-set-detail.png'
	});

	//save the sample user
	kiehlsProductModel.save(function(err) {
		if (err) res.send(err);

		//res.send('This product has been saved successfully.');

		console.log('This product has been saved successfully.');

	});
});

//Get all product
router.get('/allFreshProducts', function(req, res) {

	FreshProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allKiehlsProducts', function(req, res) {

	KiehlsProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allOriginsProducts', function(req, res) {

	OriginsProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allSephoraProducts', function(req, res) {

	SephoraProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});




// export router
module.exports = router;

