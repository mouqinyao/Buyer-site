var mongoose = require('mongoose'),
    increment = require('mongoose-increment');

var sephoraProductSchema = mongoose.Schema({
	referenceNumber: Number,
	title: String, 
    price: Number,
    brandName: String,
    brandDescription: String,
    image: String,
    updateDate: { 
    	type: Date, 
    	default: Date.now 
    },
    description: Array
});

sephoraProductSchema.plugin(increment, {
  modelName: 'sephoraProductModel',
  fieldName: 'referenceNumber',
  start: 1,
  increment: 1,
});

module.exports = mongoose.model('sephoraProductModel', sephoraProductSchema);