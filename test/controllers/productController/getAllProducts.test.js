let productController;

describe ('Product Controller', () => {
    let mockQuery;
    let mockReq;
    let mockRes;
    let mockSend;
    let mockSendStatus
    let mockExec;
    let mockFind;

  beforeAll(() => {
    mockSend = jest.fn();
    mockSendStatus = jest.fn();
    mockExec = jest.fn();
    mockFind = jest.fn().mockReturnValue({
      exec: mockExec
    });

    mockQuery = {}

    mockReq = {
      query: mockQuery
    };

    mockRes = {
      send: mockSend,
      sendStatus: mockSendStatus
    }

    productModelMock = jest.mock('../../../api/models/productModel', () => {
      return {
        find: mockFind
      }
    });

    productController = require('../../../api/controllers/productController');
  });

  test('should create a 500 error if there are no results', (done) => {
    mockExec.mockReturnValue(Promise.reject());
    productController.getAllProducts(mockReq, mockRes)
      .then( () => {
        expect(mockSendStatus).toHaveBeenCalledWith(500);
        done();
      });
  });

  test('should return a list of products', (done) => {
    const mockFindObject = {
        foo: 'bar',
      };

    mockExec.mockReturnValue(Promise.resolve(mockFindObject));

    productController.getAllProducts(mockReq, mockRes)
    .then( () => {
      expect(mockSend).toHaveBeenCalledWith(mockFindObject);
      done();
    })
  });
});
