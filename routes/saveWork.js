var Work = require('../models/works').Works;

exports.post = function (req, res, next){

    var title = req.body.work__project-name,
        techs = req.body.work__project-techs,
        pict = req.file.path;

    var work = new Work({
        title:title,
        techs:techs,
        picture:pict
    });

    work.save(function (err) {
        if (err) return next(err);
    })

};
