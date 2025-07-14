const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // URL to food image
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
