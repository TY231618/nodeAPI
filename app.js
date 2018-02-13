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

app.use('/products', productRoutes);

app.listen(port, (err) => {
  if(err) return console.log(err);

  console.log('Running api on port: ', port);
});
