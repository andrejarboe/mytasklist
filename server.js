



var express = require('express');
var path = require('path');
var bodyPrser = require('body-parser');


var index = require('.routes/index');
var tasks = require('.routes/tasks');

var port

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs');
app.engine('html', require('ejs').rinderFile);

//set Static Folder
app.use(express.static(path.join(__dirname), 'client'));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: fasle}));

app.use('/', index);
app.use('/api', tasks);

app.listen(;)