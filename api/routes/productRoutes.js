let productController = require('../controllers/productController');

module.exports = (app) => {

  app.route('/products')
   .get(productController.getAllProducts)
   .post(productController.postProduct)
};


