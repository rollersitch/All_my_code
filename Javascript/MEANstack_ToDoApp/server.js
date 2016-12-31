// Setup

var express = require('express');
var app = express();

var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// Connect to the remote MongoDB . This is free for 30 Days. Today is 31/12/2016
mongoose.connect('mongodb://nodeuser:scacchi64@waffle.modulusmongo.net:27017/s8asUzig');

// Config

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


// Model

var Todo = mongoose.model('Todo', {
	text: String
});


// Node API exposed to Angular on the frontend

// Get all the todos
app.get('/api/todos', function(req,res) {
	Todo.find(function(err,todos) {
		if(err)
			res.send(err);

		res.json(todos);
	});
});

// create a todo and send back all todos after creation
app.post('/api/todos', function(req,res) {

	// create a todo, info comes from AJAX request from Angular
	Todo.create({
		text: req.body.text,
		done: false
	}, function(err,todo) {
		if(err)
			res.send(err);

		// get and return all the todos after you create one
		Todo.find(function(err,todos) {
			if(err)
				res.send(err);
			res.json(todos);
		});
	});
});


// delete a todo
app.delete('/api/todos/:todo_id', function (req,res) {
	Todo.remove({
		_id: req.params.todo_id
	}, function(err,todo) {
		if(err)
			res.send(err);

		// get an return all the todos after you delete one
		Todo.find(function(err,todos) {
			if(err)
				res.send(err);
			res.json(todos);
		});
	});
});

app.get('*',function(req,res) {
	res.sendfile('./public/index.html');
});

// Listen

app.listen(8080);
console.log("App listening on port 8080");
