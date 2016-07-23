var checkAuth = require('./auth');

module.exports = function (app) {
    app.post('/login', require('./login').post);
    app.post('/skillsPost', require('./skills').post);
    app.post('/saveBlogArticles', require('./savePost').post);
    app.post('/logout', require('./logout').post);
    
    app.get('/blog', require('./blog').get);
    app.get(['/', '/index'], require('./main').get);
    app.get('/about', require('./about').get);
    app.get('/works', require('./works').get);
    app.get('/admin', checkAuth, require('./admin').get);
};