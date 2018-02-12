let Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {

  let query = {};

  if(req.query.productType) {
    query.productType = req.query.productType; //adding the object to the query object
  } 

  Product.find(query, (err, products) => {
    if(err) return res.sendStatus(500);

    res.send(products);
  });
};