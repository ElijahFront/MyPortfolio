var checkAuth = require('./auth');
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp/my-works')
    },
    filename: function (req, file, cb) {
        var name = file.originalname.replace((/\s+/g, ''));
        cb(null, Date.now() + '_' + name)
    }
});
var uploadWork = multer({ storage: storage });


module.exports = function (app) {
    app.post('/login', require('./login').post);
    app.post('/skillsPost', require('./skills').post);
    app.post('/saveBlogArticles', require('./savePost').post);
    app.post('/logout', require('./logout').post);
    app.post('/saveWorks', uploadWork.single('uploadWorkImg'), require('./saveWork').post);
    
    app.get('/blog', require('./blog').get);
    app.get(['/', '/index'], require('./main').get);
    app.get('/about', require('./about').get);
    app.get('/works', require('./works').get);
    app.get('/admin', checkAuth, require('./admin').get);
};