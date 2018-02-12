let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let Product = require('./api/models/productModel');

let productRoutes = require('./api/routes/productRoutes');

let port = process.env.PORT || 3000;

let db = mongoose.connect('mongodb://localhost:27017/node-api', (err) => {
  if(err) return console.log(err);

  console.log('mongoose connected');
});

//MiddleWare; allowing Express to read the body
app.use(bodyParser.json());
//TODO: readup 
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {

  res.send('hello');
});

productRoutes(app);

// app.get('/products/:productId', (req, res) => {

//   Product.findById({_id: req.params.productId}, (err, product) => {
//     if(err) return res.status(500).send(err);

//     res.send(product);
//   })
// });

// //Take res and create a mongoose product object 
// app.post('/products', (req, res) => {
//   let product = new Product(req.body);

//   product.save((err) => {
//     if(err) return console.log(err);
//     res.send(product);
//   });
// });

// //Take product Id and delete it from the db
// app.delete('/products/:productId', (req, res) => {
//   Product.findByIdAndRemove({_id: req.params.productId}, (err) => {
//     if(err) return console.log(err); 

//     res.status(204).send("Deleted");
//   });
// }); 

app.listen(port, (err) => {
  if(err) return console.log(err);

  console.log('Running api on port: ', port);
});
