const Promise = require('bluebird');

const pgp = require ('pg-promise')({
  promiseLib: Promise
});

let db = pgp('postgres://ape_user:1234@localhost:5432/articles_products_and_express');

db.query('SELECT * FROM articles')
.then( articles=> {
  console.log(articles);
})
.catch(error=>{
  console.error(error);
});

let newArticle = {
  title:'My First Article',
  body: 'Blah',
  author:'Ray',
  url_title: 'My%20First%20Article'
};

db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${url_title})',
  newArticle)
.then(console.log)
.catch(error=>{
  console.error(error);
});