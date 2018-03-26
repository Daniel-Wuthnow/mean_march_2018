let express = require('express'),
	port = 8000,
	app = express(),
	path = require('path'),
	session = require('express-session'),
	body_parser = require('body-parser'),
	mongoose = require('mongoose')
	routes = require('./server/config/routes.js');

mongoose.connect('mongodb://localhost/ng_tasks');

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

app.use(express.static(path.join(__dirname + '/client/dist')));

app.use(session({
	secret: '982340ojfadosiaf-o3rfad-s0aifk3k-9dk-sfoak-402kf0kda-f0',
	proxy: true,
	resave: false,
	saveUninitialized: true
}));

routes(app);

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})