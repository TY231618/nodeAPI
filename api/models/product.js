let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  name: String,
  productType: String,
  price: Number,
  inStock: Boolean,
  dateAdded: {type: Date, default: Date.now()}
});

let product = mongoose.model('Product', productSchema);

module.exports = product;