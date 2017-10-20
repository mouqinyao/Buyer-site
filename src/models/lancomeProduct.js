var mongoose = require('mongoose'),
    increment = require('mongoose-increment');

var lancomeProductSchema = mongoose.Schema({
	referenceNumber: Number,
	title: String, 
    price: Number,
    brandName: String,
    brandDescription: String,
    image: String,
    imageDetail: String,
    updateDate: { 
    	type: Date, 
    	default: Date.now 
    },
    description: Array
});

lancomeProductSchema.plugin(increment, {
  modelName: 'lancomeProductModel',
  fieldName: 'referenceNumber',
  start: 1,
  increment: 1,
});

module.exports = mongoose.model('lancomeProductModel', lancomeProductSchema);