var SkillsData = require('../models/skills').Skills;

exports.post = function (req, res, next) {

    console.log('Got POST req on', req.url);
    console.log(req.body);

    SkillsData.findOne({}, function (err, skill) {
        if (err) return next(err);

        if (skill){
            var id = skill._id;
            SkillsData.findByIdAndUpdate(id, {
                html: req.body.html,
                css: req.body.css,
                js: req.body.js,
                php: req.body.php,
                node: req.body.node,
                mongo: req.body.mongo,
                git: req.body.git,
                gulp: req.body.gulp,
                bower: req.body.bower
            }, function (er) {
                if (er) return next(er);
                res.sendStatus(200)
            })
        } else {
            var skills = new SkillsData(req.body);

            skills.save(function (e) {
                if (e) return next(e);
                res.sendStatus(200)
            });
        }
    });


};