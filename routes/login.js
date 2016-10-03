exports.post = function (req, res) {

    var login = req.body.login,
        password = req.body.password;

    if (login == 'Elijah' && password == 'password'){
        req.session.user = 'Elijah';
        res.sendStatus(200)
    } else{
        res.sendStatus(403)
    }
    // res.end()

};
