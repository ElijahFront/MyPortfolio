var PostData = require('../models/blog').Blog;

exports.get = function (req, res) {
    PostData.find({}).then(function (posts) {

        res.render('blog', {posts: posts})

    });  
};