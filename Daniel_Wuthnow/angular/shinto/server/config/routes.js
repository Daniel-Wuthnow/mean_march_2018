var path = require('path'),
	tasks = require("../controllers/tasks")

module.exports = (app) => {
	


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}