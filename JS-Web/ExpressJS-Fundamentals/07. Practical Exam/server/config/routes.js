const controllers = require('../controllers');
const auth = require('./auth');

module.exports = (app) => {
  app.get('/', controllers.home.index);

  app.get('/users/register', controllers.users.registerGet);
  app.post('/users/register', controllers.users.registerPost);
  app.get('/users/login', controllers.users.loginGet);
  app.post('/users/login', controllers.users.loginPost);
  app.post('/users/logout', controllers.users.logout);

  app.get('/articles/create', controllers.articles.createGet);
  app.post('/articles/create', controllers.articles.createPost);
  app.get('/articles/allArticles', controllers.articles.allArticles);
  app.get('/articles/edit/:id', controllers.articles.editGet);
  app.get('/articles/details/:id', controllers.articles.details);
  app.post('/articles/edit/:id', controllers.articles.editPost);
  app.get('/articles/search', controllers.articles.searchBox);
  app.get('/articles/latest', controllers.articles.getLatest);

  app.all('*', (req, res) => {
    res.status(404);
    res.send('404 Not Found!');
    res.end();
  });
};
