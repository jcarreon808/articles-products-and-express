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

})
.delete((req,res)=>{

});

module.exports = article;