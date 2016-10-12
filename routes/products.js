const express = require ('express');
const Products = require ('../db/products');
const product = express.Router();

product.route('/')
.get((req, res)=>{
  let result = Products.all();
  res.render('index',{
    page: 'Product Page',
    result
  });
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

product.route('/:id/edit')
.post((req,res)=>{
  req.body.id = req.params.id;
  Products.editProduct(req.body);
})
.get((req,res)=>{
  res.render('edit',{
    page: 'Product Page',
    product: Products.getOneProduct(req.params)
  });
});

product.route('/new')
.get((req,res)=>{
  res.render('new', {
    page: 'Product Page'
  });
})
.post((req, res)=>{
  Products.add(req.body);
});

module.exports = product;