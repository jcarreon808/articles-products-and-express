let articleArray =[];
let id = 1;

function add(newArticle){
  let articleTemplate = {

    title: newArticle.title,
    body: newArticle.body,
    author: newArticle.author,
    urlTitle : encodeURI(newArticle.title)

  };
  articleArray.push(articleTemplate);
}

function all (){
  return articleArray;
}

module.exports = {
  add,
  all,
}