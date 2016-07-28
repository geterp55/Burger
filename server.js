var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();//Creates app

//serve static content for the app 'public' 
app.use(express.static(__dirname + '/public'));


//parse application /x-www-form-urlencoded. Allows to encode  our URL's formatting
app.use(bodyParser.urlencoded({
	extended: false
}))


//Remember: a form can only GET OR POST, this method allows us to usre PUT or DELETE - ability to alter the form contents
//When the _method is used in api endpoint this library will be triggered
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

//requiring handlebars and then asking the app to set handlebars for layout
app.set('view engine', 'handlebars');



//----------------------------------------------------
//when the '/' is used in localhost it will pll all routes which are housed in the burger_controller.js file
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);















var port = 3000;
app.listen(port);