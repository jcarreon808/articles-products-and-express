const express = require ('express');
const Articles = require('../db/articles');
const article = express.Router();

article.route('/')
.get((req,res)=>{
  let result = Articles.all();
  res.send(result);
})

.post((req,res)=>{
  Articles.add(req.body);
  res.json({"success":true});
});

article.route('/:title')
.put((req, res)=>{
  console.log(req.params.title);
  req.body.title = req.params.title;
  Articles.editArticle(req.body);
  res.send({'success': true});
})
.delete((req,res)=>{
  Articles.deleteArticle(req.params.title);
  res.json({"success":true});
});

module.exports = article;