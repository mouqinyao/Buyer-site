var mongoose = require('mongoose'),
    increment = require('mongoose-increment');

var originsProductSchema = mongoose.Schema({
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

originsProductSchema.plugin(increment, {
  modelName: 'originsProductModel',
  fieldName: 'referenceNumber',
  start: 1,
  increment: 1,
});

module.exports = mongoose.model('originsProductModel', originsProductSchema);