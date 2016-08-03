var Works = require('../models/works').Works;

exports.get = function (req, res) {
    Works.find({}).then(function (works) {
        console.log(works);

        res.render('works', {works: works})
        
    })

};