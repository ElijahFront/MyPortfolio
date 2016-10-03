var PostData = require('../models/blog').Blog;

exports.post = function (req, res) {

   // console.log('Got POST req on', req.url);
    //console.log(req.body);

    var post = new PostData(req.body);

    post.save();

    res.end()
};
