
//Here is where you create all the functions that will do the routing for your app, and the logic of each route.

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

var app = express();
//Add all routers below


// router.get('/', function(req,res) {
// 	res.redirect('/burger')
// });


// app.get('/', function(req, res) {
// 	res.send ('<h2> This is working! Cool mon!</2>');
// });

module.exports = router;
