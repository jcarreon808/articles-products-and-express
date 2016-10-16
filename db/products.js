const db =require ('./connection');



let id = 1;

function add (newProduct){
  let productTemplate  = {
    name: newProduct.name,
    price: newProduct.price,
    inventory: newProduct.inventory
  };
   return db.query('INSERT INTO products (name, price, inventory) VALUES (${name}, ${price}, ${inventory})',
  productTemplate)
   .catch(error=>{
    console.error(error);
  });

}

function all (){
  return db.query('SELECT * FROM products')
  .catch(error=>{
    console.error(error);
  });
}

function deleteProduct(id){
  return db.query('DELETE FROM products WHERE id=\'$1#\'',id)
  .catch(error=>{
    console.error(error);
  });
}

function editProduct(data){
  console.log(data);
    return db.query('UPDATE products SET name=${name},price=${price}, inventory=${inventory} WHERE id=${id}', data)
   .catch(error=>{
    console.error(error);
  });
}

function getOneProduct(data){
  return db.query('SELECT * FROM products WHERE id=id', data)
  .catch(error=>{
    console.error(error);
  });
}

module.exports = {
  add,
  all,
  deleteProduct,
  editProduct,
  getOneProduct
};