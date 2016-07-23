var SkillsData = require('../models/skills').Skills;

exports.get = function (req, res) {
    SkillsData.find({}).then(function (skills) {

        res.render('about', {skills: skills})

    });
};