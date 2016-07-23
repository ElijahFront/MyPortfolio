var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var skillsSchema = new Schema({
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

exports.Skills = mongoose.model('Skills', skillsSchema);
