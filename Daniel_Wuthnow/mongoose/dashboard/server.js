var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var CatSchema = new mongoose.Schema({ 
	name: { type: String, required: true}},
	{timestamps: true})
mongoose.model("Cat", CatSchema);

var Cat = mongoose.model("Cat")

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	Cat.find({}, function(err, cats) {
		if (err) {
			console.log(err)
		} else {
			console.log("Success!")
		}
		res.render('index', {cats: cats});
	})
})

app.get('/cats/new', function(req, res) {
	res.render('new')
})

app.post('/cats', function(req, res) {
	console.log(req.body)
	var kitty = new Cat();
	kitty.name = req.body.name;
	kitty.save(function (err){
		console.log(err)
	})
	res.redirect('/')
})

app.get('/cats/:id', function(req, res) {
	Cat.findOne({_id: req.params.id},  function(err, cats){
	res.render('profile', {cat: cats})
		
	})
	
})

app.get('/cats/edit/:id', function(req, res) {
	Cat.findOne({_id: req.params.id},  function(err, cats){
	res.render('edit', {cat: cats})
		
	})
})

app.post('/cats/:id', function(req, res) {
	Cat.update({_id:req.params.id}, {name: req.body.name}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
    res.redirect('/')
})

app.post('/cats/destroy/:id', function (req, res) {
	console.log(req.params.id)
	Cat.remove({_id: req.params.id}, function(err){
		console.log(err)
 // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}

 	res.redirect('/')
})
})


app.listen(3002, function() {
    console.log("listening on port 3002");
})