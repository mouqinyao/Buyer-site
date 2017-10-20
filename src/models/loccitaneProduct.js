var mongoose = require('mongoose'),
    increment = require('mongoose-increment');

var loccitaneProductSchema = mongoose.Schema({
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

loccitaneProductSchema.plugin(increment, {
  modelName: 'loccitaneProductModel',
  fieldName: 'referenceNumber',
  start: 1,
  increment: 1,
});

module.exports = mongoose.model('loccitaneProductModel', loccitaneProductSchema);