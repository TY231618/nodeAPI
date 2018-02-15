let Product = require('../models/productModel');

module.exports = {
  getAllProducts(req, res) {
    let query = {};

    if(req.query.productType) {
      query.productType = req.query.productType; //adding the object to the query object
    }

    return Product.find()
    .exec()
    .then(products => res.send(products))
    .catch(() => res.sendStatus(500))
  },

  findOne(req, res) {

    return Product.findById({_id: req.params.productId})
      .exec()
      .then(product => res.send(product))
      .catch((err) => {
        res.status(500);
        res.send(err);
      });
  },

  postProduct(req, res) {

    let product = new Product(req.body);

    product.save((err) => {
      if(err) return console.log(err);

      res.send(product);
    });
  },

  deleteProduct(req, res) {
    Product.findByIdAndRemove({_id: req.params.productId}, (err) => {
      if(err) return console.log(err);

      res.status(204).send("Deleted");
    });
  },

  updateProduct(req, res) {

    Product.findById({_id: req.params.productId}, (err, product) => {
      if(err) return res.status(500).send(err);

      product.name = req.body.name;
      product.productType = req.body.productType;
      product.price = req.body.price;
      product.dateAdded = req.body.dateAdded;
      product.inStock = req.body.inStock;

      product.save((err) => {
        if(err) return res.status(500).send(err);

        res.send(product);

      });
    });
  }
};
