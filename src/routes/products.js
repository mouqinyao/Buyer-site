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
	
	let esteelaunderProductModel = new EsteelaunderProductModel({
	  'referenceNumber': 14,
	  'title': '科颜氏纯天然面膜套装',
	  'price': 75,
	  'image': 'estee-radiant-cream.png',
	  'imageDetail': 'estee-radiant-cream.png'
	});

	//save 
	esteelaunderProductModel.save(function(err) {
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

// Find single product 
router.get('/allCrabtreeProducts/:id', function(req, res) {

	CrabtreeProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allEsteelaunderProducts/:id', function(req, res) {

	EsteelaunderProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allFreshProducts/:id', function(req, res) {

	FreshProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allLancomeProducts/:id', function(req, res) {

	LancomeProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allLoccitaneProducts/:id', function(req, res) {

	LoccitaneProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allKiehlsProducts/:id', function(req, res) {

	KiehlsProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allOriginsProducts/:id', function(req, res) {

	OriginsProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});

router.get('/allSephoraProducts/:id', function(req, res) {

	SephoraProductModel.find({'referenceNumber': req.params.id}, function(err, product) {
		if (err) res.send(err);

		res.send(product);
	});
});


// export router
module.exports = router;

