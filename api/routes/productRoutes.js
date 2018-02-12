let productController = require('../controllers/productController');

module.exports = (app) => {

  app.route('/products')
    .get(productController.getAllProducts)
    .post(productController.postProduct);
  

  app.route('/products/:productId')
    .get(productController.findOne)
    .delete(productController.deleteProduct)
    .put(productController.updateProduct);
};

 


