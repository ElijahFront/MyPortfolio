var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/portfolio');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var nconf = require('nconf');
var multer  = require('multer');

var port = process.env.PORT || 3033;

app.set('port', (port));

nconf.argv()
    .env()
    .file({ file: './config/config.json'});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: config.get('session:secret'),
    cookie: config.get('session:cookie'),
    resave: true, // добавил так как без этого была обибка
    saveUninitialized: true, // это тоже
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(express.static('build'));

app.set('views', './build');
app.set('view engine', 'jade');

require('./routes')(app);

var server = app.listen(app.get('port'), function () {
    console.log('Listening at port ' + app.get('port'));
});


