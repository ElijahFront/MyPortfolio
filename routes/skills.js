var SkillsData = require('../models/skills').Skills;

exports.post = function (req, res) {
    console.log('Got POST req on', req.url);
    console.log(req.body);

    var skills = new SkillsData(req.body);

    skills.save();

    res.end()
};