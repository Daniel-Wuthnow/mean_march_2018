let express = require('express');
	app = express();
	mongoose = require('mongoose');
	path = require('path');
	body_parser = require('body-parser');

mongoose.connect('mongodb://localhost/1955_api');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

let Schema = mongoose.Schema;
let UserSchema = new mongoose.Schema({
	name: { type: String, required: true}},
	{timestamp: true})

mongoose.model('User', UserSchema)

let User = mongoose.model("User")

app.get('/', function(req, res) {
	User.find({}, function(err, users) {
		if (err){
			console.log("Returned errors", err);
			res.json({messages: "Error", error:  err})
		} else {
			res.json({messages: "Success", data: users})
		}
	})
})

app.get('/new/:name', function(req, res) {
	let user = new User();
	user.name = req.params.name;
	user.save(function(err){
		if(err){
			console.log(err)
		}
	})
	res.json({messages: "Success", data: user})
})

app.get('/:name', function(req, res) {
	User.findOne({name: req.params.name}, function(err, user){
		if(err){
			console.log(err)
		} else {
			res.json({messages: "found one", data: user})
		}
	})
})

app.get('/remove/:name', function(req, res){
	User.remove({name: req.params.name}, function(err){
		if (err) {
			console.log(err);
		} else {
			res.json({messages: "removed"})
		}
	});
});



app.listen(8000, function(){
	console.log("listening on port 8000")
})