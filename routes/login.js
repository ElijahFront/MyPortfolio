exports.post = function (req, res) {

    console.log('got Post req at' + req.url);

    var login = req.body.login,
        password = req.body.password;
    console.log(req.body);

    if (login == 'Elijah' && password == 'password'){
        req.session.user = 'Elijah';
        res.sendStatus(200)
    } else{
        res.sendStatus(403)
    }
    // res.end()

};
