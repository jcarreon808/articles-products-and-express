const express = require('express');
const pug = require ('pug');
const app = express();
const PORT = 3000;

app.set('view enging', 'pug');
app.set('views', './views');
app.use(express.static('./public'));

const server =  app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`);
});