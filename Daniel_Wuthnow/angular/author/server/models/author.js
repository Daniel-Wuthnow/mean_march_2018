var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Name is required."],
		minlength: [3, "Atleast 3 charactors are required"]
	},
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);