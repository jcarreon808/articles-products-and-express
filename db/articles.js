const db =require ('./connection');

let id = 1;

function add(newArticle){
  let articleTemplate = {
    title: newArticle.title,
    body: newArticle.body,
    author: newArticle.author,
    url_title : encodeURI(newArticle.title)

  };
  return db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${url_title})',
  articleTemplate)
  // .then(success=>{

  // })
  .catch(error=>{
    console.error(error);
  });

}

function all (){
  return db.query('SELECT * FROM articles')
  .catch(error=>{
    console.error(error);
  });
}

function editArticle(data){
  return db.query('UPDATE articles SET body = ${body},author = ${author} WHERE title = ${title}', data)
   .catch(error=>{
    console.error(error);
  });
}

function deleteArticle(title){
  console.log(title);
  return db.query('DELETE FROM articles WHERE title=\'$1#\'',title)
  .catch(error=>{
    console.error(error);
  });

}

function getOneArticle(data){
  return db.query('SELECT * FROM articles WHERE title=title', data)
  .catch(error=>{
    console.error(error);
  });
}

module.exports = {
  add,
  all,
  editArticle,
  deleteArticle,
  getOneArticle
};