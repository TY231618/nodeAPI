let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let Product = require('./api/models/productModel');

let port = process.env.PORT || 3000;

let db = mongoose.connect('mongodb://localhost:27017/node-api', (err) => {
  if(err) console.log(err);

  console.log('mongoose connected');
});

//MiddleWare; allowing Express to read the body
app.use(bodyParser.json());
//TODO: readup 
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {

  res.send('hello');
});

// app.get('/createProducts', (req, res) => {

//   let productList = [
//     {
//       'name': 'nike top',
//       'productType': 't-shirt',
//       'price': 10.99,
//       'inStock': true,
//       'dateAdded': Date.now()
//     },
//     {
//       'name': 'hat',
//       'productType': 'big hat',
//       'price': 20.99,
//       'inStock': true,
//       'dateAdded': Date.now()
//     },
//     {
//       'name': 'high tops',
//       'productType': 'shoes',
//       'price': 60.99,
//       'inStock': true,
//       'dateAdded': Date.now()
//     },
//     {
//       'name': 'socks',
//       'productType': 'socks',
//       'price': 1.99,
//       'inStock': false,
//       'dateAdded': Date.now()
//     }
//   ];

//   Product.create(productList, (err, products) => {
//     // if(err) res.sendStatus(500);
//   });
// });

app.get('/products', (req, res) => {

  let query = {};

  if(req.query.productType) {
    query.productType = req.query.productType; //adding the object to the query object
  } 

  Product.find(query, (err, products) => {
    if(err) res.sendStatus(500);
    res.send(products);
  });
});

app.get('/products/:productId', (req, res) => {

  Product.findById({_id: req.params.productId}, (err, product) => {
    if(err) res.status(500).send(err);

    res.send(product);
  })
});

//Take res and create a mongoose product object 
app.post('/products', (req, res) => {
  let product = new Product(req.body);

  product.save((err) => {
    if(err) console.log(err); 
    res.send(product);
  });
});

//Take product Id and delete it from the db
app.delete('/products/:productId', (req, res) => {
  Product.findByIdAndRemove({_id: req.params.productId}, (err) => {
    if(err)console.log(err); 

    res.status(204).send("Deleted");
  });
}); 

app.listen(port, (err) => {
  if(err) console.log(err);

  console.log('Running api on port: ', port);
});
