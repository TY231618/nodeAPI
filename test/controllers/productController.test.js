let productController = require('../../api/controllers/productController')
let http_mocks = require('node-mocks-http')


describe('Product Controller:', () => {

  test('to be defined', () => {
    expect(productController.getAllProducts).toBeDefined();
  });

  // test('getAllProducts', function(done) {
  //   let response = {};
  //   let request  = http_mocks.createRequest({
  //     method: 'GET',
  //     url: '/products',
  //   });

  //   productController.getAllProducts(request, response);

  //   expect(productController.getAllProducts).toHaveBeenCalled();
  // });
});