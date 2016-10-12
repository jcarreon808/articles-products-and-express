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

function editArticle(data){
  return articleArray = articleArray.map((element)=>{
    if(element.title === data.title){
      element.body = data.body;
      element.author = data.author;

    }
    return element;
  });
}

function deleteArticle(title){
  return articleArray = articleArray.filter((element)=>{
    return element.title !== title;
  });
}

function getOneArticle(data){
  return articleArray.find((element)=>{
    if (element.title === data.title){
      return element;
    }
  });
}

module.exports = {
  add,
  all,
  editArticle,
  deleteArticle,
  getOneArticle
};