let productRouter;

describe.only('Product Router', () => {
  // router Mocks
  let mockPut;
  let mockPost;
  let mockDelete;
  let mockGet;
  let mockRoute;
  let mockRouter;

  // productController Mocks
  let productControllerMock;
  let postProductMock;
  let getAllProductsMock;
  let findOneMock;
  let deleteProductMock;
  let updateProductMock;

  beforeAll(() => {

    mockPut = jest.fn();
    mockPost = jest.fn();
    mockDelete = jest.fn().mockReturnValue({
      put: mockPut
    });
    mockGet = jest.fn().mockReturnValue({
      post: mockPost,
      delete: mockDelete
    });
    mockRoute = jest.fn().mockReturnValue({
      get: mockGet
    })

    mockRouter = jest.mock('express', () => {
      return { Router: jest.fn().mockReturnValue({
        route: mockRoute
      })
      }
    });

    postProductMock = jest.fn();
    getAllProductsMock = jest.fn();
    findOneMock = jest.fn();
    deleteProductMock = jest.fn();
    updateProductMock = jest.fn();

    productControllerMock = jest.mock('../../api/controllers/productController', () => {
      return {
        getAllProducts: getAllProductsMock,
        postProduct: postProductMock,
        findOne: findOneMock,
        deleteProduct: deleteProductMock,
        updateProduct: updateProductMock
      }
    });

    productRouter = require('../../api/routes/productRoutes');
  });

  describe('/product routes', () => {
    test('should create a new default route', () => {
      expect(mockRoute).toHaveBeenCalledWith('/');
    });

    test('should have a GET method which calls productController.getAppProducts',() => {
      expect(mockGet).toHaveBeenCalledWith(getAllProductsMock);
    });

    test('should have a POST method which calls productController.postProduct',() => {
      expect(mockPost).toHaveBeenCalledWith(postProductMock);
    });
  });

  describe('/product/:productId routes', () => {
    test('should create a new /:productId route',() => {
      expect(mockRoute).toHaveBeenCalledWith('/:productId');
    });

    test('should have a GET method which calls productController.findOne',() => {
      expect(mockGet).toHaveBeenCalledWith(findOneMock);
    });

    test('should have a DELETE method which calls productController.deleteProduct',() => {
      expect(mockDelete).toHaveBeenCalledWith(deleteProductMock);
    });

    test('should have a PUT method which calls productController.updateProduct',() => {
      expect(mockPut).toHaveBeenCalledWith(updateProductMock);
    });
  });

});
