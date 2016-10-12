const express = require ('express');
const Articles = require('../db/articles');
const article = express.Router();

article.route('/')
.get((req,res)=>{
  let result = Articles.all();
  res.render('index', {
    result
  });
})

.post((req,res)=>{
  Articles.add(req.body);
  res.json({"success":true});
});

article.route('/:title')
.put((req, res)=>{
  req.body.title = req.params.title;
  Articles.editArticle(req.body);
  res.send({'success': true});
})
.delete((req,res)=>{
  Articles.deleteArticle(req.params.title);
  res.json({"success":true});
});

article.route("/:title/edit")
.post((req,res)=>{
  req.body.title = req.params.title;
  Articles.editArticle(req.body);
})
.get((req,res)=>{
  res.render('edit', {
    article: Articles.getOneArticle(req.params)
  });
});

article.route('/new')
.get((req, res)=>{
  res.render('new');
})
.post((req, res)=>{
  Articles.add(req.body);
});

module.exports = article;