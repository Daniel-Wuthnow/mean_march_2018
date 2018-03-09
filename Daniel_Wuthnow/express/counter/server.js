var express = require("express");
var app = express();

// new code:
var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption


app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function (req, res){
  if (req.session.count == undefined) {
  		req.session.count = 0;	
  } else {
  	req.session.count += 1;
  }
  res.render('index', {title: "Counter", count: req.session.count});
});
// route to process new user form data:
app.post('/', function (req, res){
	req.session.count += 1;
	res.redirect('/')
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
