let productArray = [];
let id = 1;

function add (newProduct){
  let productTemplate  = {
    id : id,
    name: newProduct.name,
    price: newProduct.price,
    inventory: newProduct.inventory
  };
  id++;
  productArray.push(productTemplate);

}

function all (){
 return productArray;
}

function deleteProduct(id){
  return productArray = productArray.filter((element)=>{
    return element.id !== parseFloat(id);
  });
}

function editProduct(data){
  return productArray = productArray.map((element)=>{
    if(element.id === parseFloat(data.id)){
      element.name = data.name;
      element.inventory= data.inventory;
      element.price = data.price;
    }
    return element;
  });
}

function getOneProduct(data){
  return productArray.find((element)=>{
    if(element.id === parseFloat(data.id)){
      return element;
    }
  });
}

module.exports = {
  add,
  all,
  deleteProduct,
  editProduct,
  getOneProduct
};