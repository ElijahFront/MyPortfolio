var WorksData = require('../models/works').Works;

exports.get = function (req, res) {
    WorksData.find({}, function (works) {

        res.render('works', {works: works})
    })
};