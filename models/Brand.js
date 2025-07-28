const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
  _id: { type: String, default: () => Math.random().toString(36).substr(2, 9) },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number },
  description: { type: String },
});

const BrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  phones: [PhoneSchema],
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Brand', BrandSchema); 