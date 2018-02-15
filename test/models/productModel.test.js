const productModel = require('../../api/models/productModel');

let product = new productModel({
  name: 'Nike',
  productType: 'jumper',
  price:10,
  inStock: true,
  dateAdded: Date.now()
});

describe('Product Model', () => {
  test('should have multiple properties', () => {
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('productType');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('inStock');
    expect(product).toHaveProperty('dateAdded');
  });

  test('dateAdded property should be type of type Date', () => {
    expect(product.dateAdded).toBeInstanceOf(Date);
  });

  test('name property should be required', () => {
    expect(product.name).toBeDefined();
  });
});
