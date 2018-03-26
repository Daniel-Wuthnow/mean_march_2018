var Task = require('../models/task');

module.exports = {
	index: (req, res) => {
		Task.find({}, (err, tasks) => {
			if (err) {
				return res.status(400).json(err)
			}
			console.log(tasks)
			return res.json(tasks);
		});
	},
	create: (req, res) => {
		const task = new Task(req.body)

		Task.findOne({title: req.body.title}, (err, title)=>{
			if (title) {
				console.log("found a title")
				return res.status(400).json(err)
			} else {
				task.save( (err) => {
				if (err) {
					console.log(err.message)
					return res.status(400).json(err);
				}
					return res.json(task);
				})
			}
		})
		
	},

	show: (req, res) => {
		Task.findOne({_id: req.params.id}, (err, task) =>{
			if (err) {
				return res.status(400).json(err);
			}

			return res.json(task)
		})
	},

	update: (req, res) => {
		Task.update({_id: req.params.id}, {title: req.body.title, description: req.body.description}, {runValidators: true}, (err, task) => {
			if (err) {
				console.log(err)
			} 
			return res.json(task)
		})
	},

	destroy: (req, res) => {
		Task.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log("destroy error", err)
			}
			return res.json()
		})
	}
}