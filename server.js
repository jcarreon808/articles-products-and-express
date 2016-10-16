const express = require('express');
const pug = require ('pug');
const app = express();
const PORT = 3000;
const bodyParser = require ('body-parser');
const products = require('./routes/products');
const articles = require('./routes/articles');
const fs = require('fs');

app.use( '/*', function ( req, res, next ) {
  let newDate = new Date();
  let logDate = (newDate.getMonth() + 1) +
    '-' + newDate.getDate() +
    '-' + newDate.getFullYear();
  let logMessage =
 `[Method]: ${req.method}
  [URI]:${req.params['0']}
  [Timestamp]:${newDate}

  `;

  fs.appendFile( './logs/' + logDate + '.log', logMessage, function ( err ) {
      if ( err ) console.log ( err );
    });
  next();
});

app.set('view engine', 'pug');

app.set('views', './templates');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use('/products', products);
app.use('/articles', articles);


const server =  app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`);
});