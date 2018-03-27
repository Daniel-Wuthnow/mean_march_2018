var Author = require('../models/author');

module.exports = {
	index: (req, res) => {
		Author.find({}, (err, authors) => {
			if (err) {
				return res.status(400).json(err)
			}
			console.log(authors)
			return res.json(authors);
		});
	},
	create: (req, res) => {
		const author = new Author(req.body)

		Author.findOne({name: req.body.name}, (err, name)=>{
			if (name) {
				console.log("found a name")
				return res.status(400).json(err)
			} else {
				author.save( (err) => {
				if (err) {
					console.log("error", err.message)
					return res.status(400).json(err);
				}
					return res.json(author);
				})
			}
		})
		
	},

	show: (req, res) => {
		Author.findOne({_id: req.params.id}, (err, author) =>{
			if (err) {
				return res.status(400).json(err);
			}

			return res.json(author)
		})
	},


	update: (req, res) => {
  let author = Author.findOne({_id: req.params.id}, (err, author) => {
    if (err) {
      res.status(400).json({message: 'Error', error: err});
    } else {
      author.name = req.body.name;
      author.save( (error) => {
        if (error) {
          res.status(400).json({messsage: 'Error', error: error});
        } else {
          res.json({message: 'Success', data: author});
        }
      })
    }
  })
},

	destroy: (req, res) => {
		Author.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log("destroy error", err)
			}
			return res.json()
		})
	}
}