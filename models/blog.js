var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    date: String,
    text: String 
});

exports.Blog = mongoose.model('Blog', blogSchema);