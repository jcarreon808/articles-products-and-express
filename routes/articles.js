const express = require ('express');
const Articles = require('../db/articles');
const article = express.Router();

article.route('/')
.get((req,res)=>{
  Articles.all()
  .then(result => {
    res.render('index', {
      result
    });
  });
})

.post((req,res)=>{
  Articles.add(req.body)
    .then(() => {
      res.json({"success":true});
    });
});

article.route('/:title')
.put((req, res)=>{
  req.body.title = req.params.title;
  Articles.editArticle(req.body)
  .then(()=>{
    res.send({'success': true});
  });
})
.delete((req,res)=>{
  Articles.deleteArticle(req.params.title)
  .then(()=>{
    res.json({"success":true});
  });
});

article.route("/:title/edit")
.post((req,res)=>{
  req.body.title = req.params.title;
    Articles.editArticle(req.body)
  .then(()=>{
    res.send({'success': true});
  });
})
.get((req,res)=>{
  req.body.title = req.params.title;
  Articles.getOneArticle(req.body)
  .then((article)=>{
    res.render('edit', {
      article: article[0]
    });
  });
});

article.route('/new')
.get((req, res)=>{
  res.render('new');
})
.post((req, res)=>{
  Articles.add(req.body)
    .then(() => {
      res.json({"success":true});
    });
});

module.exports = article;