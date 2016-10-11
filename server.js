const express = require('express');
const pug = require ('pug');
const app = express();
const PORT = 3000;
const bodyParser = require ('body-parser');
const products = require('./routes/products');
const articles = require('./routes/articles');


app.set('view engine', 'pug');

app.set('views', './templates');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/products', products);
app.use('/articles', articles);


const server =  app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`);
});