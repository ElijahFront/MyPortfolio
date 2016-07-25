var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var worksSchema = new Schema({
    title: String,
    techs: String,
    picture: String
});

exports.Works = mongoose.model('Works', worksSchema);