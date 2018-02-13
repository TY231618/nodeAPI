let express = require('express');
let productRoutes = express.Router();
let productController = require('../controllers/productController');

productRoutes.route('/')
  .get(productController.getAllProducts)
  .post(productController.postProduct);

productRoutes.route('/:productId')
  .get(productController.findOne)
  .delete(productController.deleteProduct)
  .put(productController.updateProduct);

module.exports = productRoutes;