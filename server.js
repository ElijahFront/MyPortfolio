var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/skillsDB');

var SkillData = mongoose.model('SkillData', {
    html: String,
    css: String,
    js: String,
    php: String,
    node: String,
    mongo: String,
    git: String,
    gulp: String,
    bower: String

});

var PostData = mongoose.model('PostData', {
    title: String,
    date: String,
    text: String
});



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static('build'));

app.set('views', './build');
app.set('view engine', 'jade');


app.get('/*', function (req, res) {

    console.log('Got new request at', req.url);

    var adr = req.url.slice(1);

    res.render(adr);

    //res.setHeader('Content-Type', 'text/html; encoding: utf-8;');

    res.end();
});


app.post('/skillsPost', function (req, res) {
   console.log('Got POST req on', req.url);
    console.log(req.body);

    var skills = new SkillData(req.body);
    
    skills.save();
    
    res.end()

});

app.post('/saveBlogArticles', function (req, res) {

    console.log('Got POST req on', req.url);
    console.log(req.body);

    var post = new PostData(req.body);

    post.save();

    res.end()

});

app.listen(3033);

