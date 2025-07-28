const mongoose = require('mongoose');

const luxurySectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "Feel The Luxury in your hands"
  },
  subtitle: {
    type: String,
    default: "Luxury"
  },
  products: [{
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    // Variant-specific pricing
    variants: [{
      storage: { type: String, required: true }, // '128GB', '256GB', '512GB'
      price: { type: Number, required: true },
      mrp: { type: Number, required: true },
      stock: { type: Number, default: 0 }
    }],
    // Legacy fields for backward compatibility
    mrp: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      default: "Refurbish"
    },
    colors: [{
      type: String,
      default: ["#000000", "#ff5ca7", "#00c97b", "#b5a642"]
    }],
    storage: [{
      type: String,
      default: ["128", "256", "512"]
    }],
    isActive: {
      type: Boolean,
      default: true
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('LuxurySection', luxurySectionSchema); 