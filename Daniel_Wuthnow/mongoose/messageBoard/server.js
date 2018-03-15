var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
 poster: { type: String, required: true },
 text: { type: String, required: true }, 
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
// The 'type' property of the object inside of the array is an attribute
// that tells Mongoose what to look for.
// What would we need to add to make the below snippet work properly? Read your console!
var CommentSchema = new mongoose.Schema({
 // since this is a reference to a different document, the _ is the naming convention!
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 commenter: { type: String, required: true },
 text: { type: String, required: true },
}, {timestamps: true });

var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	Post.find({}).populate('comments').exec(function (err, post) {
		if (err) {
			console.log(err);
		} else {
			console.log('succsess!')
			console.log(post)
			res.render('index', {post: post, error: err})
		}
	})
})

app.post('/posts', function(req, res) {
	var post = new Post();
	post.poster = req.body.name;
	post.text = req.body.message;
	post.save(function(err){
		console.log(err)
	})
	res.redirect('/')
})


app.post('/posts/:id', function (req, res){
    Post.findOne({_id: req.params.id}, function(error, post){
        // data from form on the front end
        console.log(post)
        var comment = new Comment(req.body);
    	comment._post = post._id;
   	 	// now save both to the DB
   		comment.save(function(err){
   			if (err) {
   				console.log('comment save err', err);
   			}
   			post.comments.push(comment);

            post.save(function(err){
                 if(err) {
                      console.log('Post save Error', err );
                 } else {
                      res.redirect('/');
                 }
             });
     	});
       
        //  set the reference like this:
       
    });
 });





app.listen(8000, function() {
    console.log("listening on port 8000");
})