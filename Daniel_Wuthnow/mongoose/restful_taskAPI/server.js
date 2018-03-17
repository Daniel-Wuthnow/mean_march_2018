let express = require('express');
	app = express();
	mongoose = require('mongoose');
	path = require('path');
	body_parser = require('body-parser');

mongoose.connect('mongodb://localhost/restful_task');
mongoose.Promise = global.Promise;
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

let Schema = mongoose.Schema;
let TaskSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, default: ""},
	completed: {type: Boolean, default: false}},
	{timestamp: true});

mongoose.model('Task', TaskSchema)

let Task = mongoose.model("Task")



app.get('/', (req, res) => {
	Task.find({}, (err, task) => {
		if (err) {
			res.json({message: "error", error: err})
		} else {
			res.json({message: "success", data: task});
		}
	});
});
app.get('/:id', (req, res) => {
	let task = Task.findOne({_id: req.params.id}, (err, task) => {
		if (err) {
			res.json({message: "error", error: err})
		} else {
			res.json({message: "success", data: task});
		}
	})
})


app.post('/:title', (req, res) => {
	let task = new Task({title: req.params.title});
	task.save((err) => {
		if (err) {
			res.json({message: "error", error: err})
		} else {
			res.json({message:"new task", data: task})
		}
	})
})

app.put('/:id/:title/:desc/:completed', (req, res) =>{
	Task.findOne({_id:req.params.id}, (err, task) => {
		if (err) {
			res.json({message:"update error", error: err})
		} else {
			res.json({message:"update task", data: task})
		}
	})
})

app.delete('/:id', (req, res) => {
	Task.remove({_id:req.params.id}, (err) => {
		if (err) {
			res.json({message: "Error", error: err})
		} else {
			res.redirect('/')
		}
	})
})

app.listen(8000, () => {
	console.log("listening on port 8000")
})
