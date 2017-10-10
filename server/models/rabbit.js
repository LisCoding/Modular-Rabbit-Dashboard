// require mongoose
var mongoose = require('mongoose');
//create schema
var RabbitSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 age: { type: Number, required: true},
 color: { type: String, required: true},
 cuteness_level: { type: Number, required: true},
 added_by: { type: String, required: true},
},{timestamps: true });


// register the schema as a model
// We are setting this Schema in our Models as 'Rabbit'
 var Rabbit = mongoose.model('Rabbit', RabbitSchema);
