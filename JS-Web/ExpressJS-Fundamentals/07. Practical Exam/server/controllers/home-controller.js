const Article = require('mongoose').model('Article');

module.exports = {
  index: (req, res) => {
      Article.find({}).sort('-date').limit(3).then((articles) => {
          let data = {
              articles: articles,
          };
          res.render('home/index', data);
      }).catch((err) => {
          console.log(err);
      });
  },
};
