exports.post = function (req, res) {
    //console.log('logging out');
    req.session.destroy();
    //res.redirect('/');
    res.sendStatus(200);
    res.end()
};