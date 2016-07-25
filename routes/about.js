var SkillsData = require('../models/skills').Skills;

exports.get = function (req, res) {
    SkillsData.findOne({}).then(function (skills) {
        console.log(skills);

        res.render('about', {skills: skills})

    });
};