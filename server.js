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



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json({type: 'application/json'}));

app.use(express.static('build'));

app.set('view engine', 'jade');


app.get('/*', function (req, res) {
    res.setHeader('Content-Type', 'text/html; encoding: utf-8;');
    console.log('Got new request at', req.url);
    var fileName = './build/'+ req.url;
    var content = fs.readFileSync(fileName, {encoding: 'utf-8'});
    console.log('Server running');
    res.write(content);
    res.end();
});


app.post('/skillsPost', bodyParser.json(), function (req, res) {
   console.log('Got POST req on', req.url);
    console.log(req.body);

    // var skills = new SkillData(req.body);
    //
    // skills.save();
    //
    res.end()

});

app.listen(3033);

