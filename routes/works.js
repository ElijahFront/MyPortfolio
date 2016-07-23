var WorksData = require('../models/works').Works;

exports.get = function (req, res) {
    WorksData.find({}).then(function (works) {

        res.render('works', {works: works})
    })
};