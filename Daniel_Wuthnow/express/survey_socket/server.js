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


var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here
  socket.on("posting_form", function(data) {
  	let form_data = {
  		name: data[0].value,
  		loc: data[1].value,
  		language: data[2].value,
  		comment: data[3].value
  	}
  	let num = Math.floor(Math.random()*999)+1;
  	socket.emit('updated_message', form_data)
  	socket.emit("random_number",num )
  })
})
