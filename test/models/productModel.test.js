const productModel = require('../../api/models/productModel');

let product = new productModel({
  name: 'Nike',
  productType: 'jumper',
  price:10,
  inStock: true,
  dateAdded: Date.now()
});

describe('Product Model', () => {
  test('has multiple properties', () => {
    console.log(product);
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('productType');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('inStock');
    expect(product).toHaveProperty('dateAdded');
  });

  test('dateAdded property is of type Date', () => {
    expect(product.dateAdded).toBeInstanceOf(Date);
  });

  test('name property is required', () => {
    expect(product.name).toBeDefined();
  });
});
