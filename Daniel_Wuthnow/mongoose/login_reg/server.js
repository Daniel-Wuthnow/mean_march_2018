let express = require('express');
	app = express();
	mongoose = require('mongoose');
	path = require('path');
	session = require('express-session');
	body_parser = require('body-parser');
	bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/log_reg');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './static')));


mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
	first_name:{
		type: String,
		required: [true, "first name required"],
		trim: true,
		minlength: 2,
	},
	last_name:{
		type: String,
		required: [true, "last name required"],
		trim: true,
		minlength: 2,
	},
	email:{
		type: String,
		required: [true, "email required"],
		unique: true,
	},
	password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 65,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        },
      },
	bday: {
		type: Date,
		required: [true, "Please add a birthday"],
	},
});
mongoose.model("User", UserSchema);
var User = mongoose.model("User")

app.get('/', (req, res) => {
	res.render('index')
});

app.get('/success', (req, res) => {
	res.render('success', {user: session.user})
});



app.post('/register', (req, res) => {
	let user = new User(req.body);
	console.log(typeof user.password)
	bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(error, hash) {
        if (error) {
        	console.log("password not hashed");
        } else {
        	user.password = hash;
        	user.save((err) => {
        		if (err) {
        			console.log("user error ", user);
        			res.render('index', {errors: err})
        		} else {
        			session.user = user;
        			res.redirect('/success')
        		}
        	})
        }
    });
});
});

app.post('/login', (request, responce) => {
	let user = User.findOne({email: request.body.email}, (err,user) => {
		if (err) {
			console.log("email not found");
			responce.render('index')
		} else {
			console.log(user.password)
			bcrypt.compare(request.body.password, user.password, (err, responce) => {
			if (responce == true) {
					session.user = user;
					console.log("correct password")
					responce.redirect('success')
			} else {
					responce.render('index',{errors: err})
					}
				} 
			)
		}		
})
})
		


app.listen(6789, () =>{
	console.log("Running on port 6789");
});