let express = require('express');
let app = express();
let mongoose = require('mongoose');

let Product = require('./api/models/productModel');

let port = process.env.PORT || 3000;

let db = mongoose.connect('mongodb://localhost:27017/node-api', (err) => {
  if(err) console.log(err);

  console.log('mongoose connected');
});

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

  Product.find((err, products) => {
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

app.listen(port, (err) => {
  if(err) console.log(err);

  console.log('Running api on port: ', port);
});
