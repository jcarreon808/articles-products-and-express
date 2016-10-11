const express = require ('express');
const Products = require ('../db/products');
const product = express.Router();

product.route('/')
.get((req, res)=>{
  let result = Products.all();
  res.send(result);
})
.post((req, res)=>{
  Products.add(req.body);
  res.json({"success": true});
});

product.route('/:id')
.put ((req,res)=>{
  req.body.id = req.params.id;
  Products.editProduct(req.body);
  res.json({"success":true});
})

.delete((req,res)=>{
  Products.deleteProduct(req.params.id);
  res.json({"success":true});
});

module.exports = product;