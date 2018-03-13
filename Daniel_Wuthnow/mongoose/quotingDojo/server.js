var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
	name: { type: String, required: true},
	quote: { type: String, required: true, minlength: 15}},
	{timestamps: true})
mongoose.model("Quote", QuoteSchema);

var Quote = mongoose.model("Quote")

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
})

app.post("/quotes", function (req, res) {
	console.log("post data", req.body)
	var quoteInstance = new Quote()
	quoteInstance.name = req.body.name;
	quoteInstance.quote = req.body.quote;
	quoteInstance.save(function (err){
		console.log(quoteInstance)
	})
	res.redirect('/quotes')
})

app.get("/quotes", function(req, res){
	Quote.find({}, function (err, quotes){
		if (err) {
			console.log(err)
		} else {
			console.log("Success!")
		}
		console.log(quotes)
		res.render('quotes', {quotes: quotes});
	})
	
})

app.listen(3000, function() {
    console.log("listening on port 3000");
})