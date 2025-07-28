const mongoose = require('mongoose');

const brandPageSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  brandLogo: {
    type: String,
    required: true
  },
  heroTitle: {
    type: String,
    required: true,
    default: "Gegmo Refurbished"
  },
  heroSubtitle: {
    type: String,
    required: true,
    default: "Certified Product"
  },
  series: [{
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    key: {
      type: String,
      required: true
    }
  }],
  products: [{
    seriesName: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    mrp: {
      type: Number,
      required: true
    },
    colors: [{
      type: String
    }],
    variants: [{
      type: String
    }],
    specifications: [{
      type: String
    }]
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
brandPageSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('BrandPage', brandPageSchema); 