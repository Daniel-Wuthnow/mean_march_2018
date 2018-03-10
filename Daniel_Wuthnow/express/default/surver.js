var express = require("express")
var app = express()

var session = require('express-session')
var bodyParser = require('body-parser')

app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.use(bodyParser.urlencoded({extened: true}))
app.use(bodyParser.json())
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index')
})


app.listen(8000, function() {
  console.log("listening on port 8000");
})