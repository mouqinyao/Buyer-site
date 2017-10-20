// create a new express router
const express = require('express'),
	  router = express.Router(),
	  mongoose = require('mongoose'),
	  CrabtreeProductModel = require('../models/crabtreeProduct'),
	  EsteelaunderProductModel = require('../models/esteelaunderProduct'),
	  FreshProductModel = require('../models/freshProduct'),
	  LancomeProductModel = require('../models/lancomeProduct'),
	  LoccitaneProductModel = require('../models/loccitaneProduct'),
	  KiehlsProductModel = require('../models/kiehlsProduct'),
	  OriginsProductModel = require('../models/originsProduct'),
	  SephoraProductModel = require('../models/sephoraProduct');

// Save individual product 
router.post('/saveProduct', function(req, res) {
	
	let lancomeProductModel = new LancomeProductModel({
	  'referenceNumber': 5,
	  'title': '悦木之源迷你面膜套装',
	  'price': 140,
	  'image': 'lancome-renergie-set.png',
	  'imageDetail': 'lancome-renergie-set.png'
	});

	//save the sample user
	lancomeProductModel.save(function(err) {
		if (err) res.send(err);

		//res.send('This product has been saved successfully.');

		console.log('This product has been saved successfully.');

	});
});

//Get all product
router.get('/allCrabtreeProducts', function(req, res) {

	CrabtreeProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allEsteelaunderProducts', function(req, res) {

	EsteelaunderProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allFreshProducts', function(req, res) {

	FreshProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allLancomeProducts', function(req, res) {

	LancomeProductModel.find(function(err, products) {
        if (err) res.send(err);

        res.send(products);
    });
});

router.get('/allLoccitaneProducts', function(req, res) {

	LoccitaneProductModel.find(function(err, products) {
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

