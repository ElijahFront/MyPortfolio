var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var worksSchema = new Schema({
    
});

exports.Works = mongoose.model('Works', worksSchema);