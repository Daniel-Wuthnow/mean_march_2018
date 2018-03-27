var path = require('path'),
	authors = require("../controllers/authors")

module.exports = (app) => {
	app.get('/authors', authors.index);
	app.post('/authors', authors.create);
	app.get('/authors/:id', authors.show);
	app.put('/edit/:id', authors.update);
	app.delete('/authors/:id', authors.destroy);


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}