const mongoose = require('mongoose');

const BrandProductSchema = new mongoose.Schema({
  brandName: { type: String, required: true }, // 'Samsung', 'Google', 'OnePlus', etc.
  series: { type: String, required: true }, // 'S24 Series', 'Pixel Series', 'OnePlus Series', etc.
  name: { type: String, required: true }, // 'Samsung S24 Ultra', 'Google Pixel 8 Pro', etc.
  image: { type: String, required: true },
  // Variant-specific pricing
  variants: [{
    storage: { type: String, required: true }, // '128GB', '256GB', '512GB'
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    stock: { type: Number, default: 0 }
  }],
  // Color variants with different images
  colorVariants: [{
    color: { type: String, required: true }, // Hex color code
    colorName: { type: String, required: true }, // 'Black', 'Blue', etc.
    image: { type: String, required: true }, // Image URL for this color
    stock: { type: Number, default: 0 }
  }],
  // Legacy fields for backward compatibility
  price: { type: Number, required: true },
  mrp: { type: Number, required: true },
  colors: [{ type: String }], // Array of color hex codes
  storage: [{ type: String }], // Array of storage options like ['128GB', '256GB']
  description: { type: String },
  specifications: [{ type: String }], // Array of specifications
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BrandProduct', BrandProductSchema); 