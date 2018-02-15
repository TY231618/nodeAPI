let productController;

describe('Product Controller', () => {
  let mockFindById;
  let mockExec;
  let mockRes;
  let mockReq;
  let mockParams;
  let mockSend;
  let mockStatus;

  beforeAll(() => {

    mockExec = jest.fn();
    mockSend = jest.fn();
    mockStatus = jest.fn();

    mockParams = {};

    mockReq = {
      params: mockParams
    };

    mockRes = {
      send: mockSend,
      status: mockStatus
    };


    mockFindById = jest.fn().mockReturnValue({
      exec: mockExec
    });

    productModelMock = jest.mock('../../../api/models/productModel', () => {
      return {
        findById: mockFindById
      }
    });

    productController = require('../../../api/controllers/productController');
  })

  test('should create a 500 error if there is no result', (done) => {
    const mockError = "Error!";
    mockExec.mockReturnValue(Promise.reject(mockError));
    productController.findOne(mockReq, mockRes)
      .then(() => {
        expect(mockSend).toHaveBeenCalledWith(mockError);
        expect(mockStatus).toHaveBeenCalledWith(500);
        done();
      });
  });

  test('should return a list of products', (done) => {
    const mockFindObject = {
        foo: 'bar',
      };
    mockExec.mockReturnValue(Promise.resolve(mockFindObject));
    productController.findOne(mockReq, mockRes)
      .then(() => {
        expect(mockSend).toHaveBeenCalledWith(mockFindObject);
        expect(mockFindObject.foo).toEqual('bar');
        done();
      })
  });

})
