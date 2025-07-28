const express = require('express');
const router = express.Router();
const LuxurySection = require('../models/LuxurySection');

// In-memory storage for when MongoDB is not available
let inMemoryLuxurySection = {
  title: "Feel The Luxury in your hands",
  subtitle: "Luxury",
  products: [
    {
      _id: "1",
      name: "iPhone 16 Pro Max",
      image: "/product-images/16 pro.png",
      variants: [
        { storage: '128GB', price: 88400, mrp: 113400, stock: 10 },
        { storage: '256GB', price: 98400, mrp: 123400, stock: 5 },
        { storage: '512GB', price: 118400, mrp: 143400, stock: 3 }
      ],
      mrp: 113400,
      price: 88400,
      description: "Refurbish",
      colors: ["#000000", "#ff5ca7", "#00c97b", "#b5a642"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      _id: "2",
      name: "Samsung S24 Ultra",
      image: "/product-images/24 ultra.png",
      variants: [
        { storage: '128GB', price: 88400, mrp: 113400, stock: 8 },
        { storage: '256GB', price: 98400, mrp: 123400, stock: 4 },
        { storage: '512GB', price: 118400, mrp: 143400, stock: 2 }
      ],
      mrp: 113400,
      price: 88400,
      description: "Refurbish",
      colors: ["#000000", "#ff5ca7", "#00c97b", "#b5a642"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      _id: "3",
      name: "OnePlus 13R",
      image: "/product-images/oneplus 13 r.png",
      variants: [
        { storage: '128GB', price: 90400, mrp: 113400, stock: 12 },
        { storage: '256GB', price: 100400, mrp: 123400, stock: 6 },
        { storage: '512GB', price: 120400, mrp: 143400, stock: 4 }
      ],
      mrp: 113400,
      price: 90400,
      description: "Refurbish",
      colors: ["#000000", "#ff5ca7", "#00c97b", "#b5a642"],
      storage: ["128GB", "256GB", "512GB"]
    },
    {
      _id: "4",
      name: "iPhone 16",
      image: "/product-images/15.png",
      variants: [
        { storage: '128GB', price: 88400, mrp: 113400, stock: 15 },
        { storage: '256GB', price: 98400, mrp: 123400, stock: 8 },
        { storage: '512GB', price: 118400, mrp: 143400, stock: 5 }
      ],
      mrp: 113400,
      price: 88400,
      description: "Refurbish",
      colors: ["#000000", "#ff5ca7", "#00c97b", "#b5a642"],
      storage: ["128GB", "256GB", "512GB"]
    }
  ]
};

// Get luxury section content
router.get('/', async (req, res) => {
  try {
    // Try to get from MongoDB first
    const luxurySection = await LuxurySection.findOne({ isActive: true });
    if (luxurySection) {
      return res.json(luxurySection);
    }
    
    // If MongoDB is not available, return in-memory data
    res.json(inMemoryLuxurySection);
  } catch (error) {
    // If MongoDB fails, return in-memory data
    res.json(inMemoryLuxurySection);
  }
});

// Update luxury section content
router.put('/', async (req, res) => {
  try {
    const { title, subtitle, products } = req.body;
    
    // Try to update in MongoDB first
    let luxurySection = await LuxurySection.findOne({ isActive: true });
    
    if (luxurySection) {
      if (title) luxurySection.title = title;
      if (subtitle) luxurySection.subtitle = subtitle;
      if (products) luxurySection.products = products;
      
      await luxurySection.save();
      return res.json(luxurySection);
    }
    
    // If MongoDB is not available, update in-memory data
    if (title) inMemoryLuxurySection.title = title;
    if (subtitle) inMemoryLuxurySection.subtitle = subtitle;
    if (products) inMemoryLuxurySection.products = products;
    
    res.json(inMemoryLuxurySection);
  } catch (error) {
    // If MongoDB fails, update in-memory data
    const { title, subtitle, products } = req.body;
    if (title) inMemoryLuxurySection.title = title;
    if (subtitle) inMemoryLuxurySection.subtitle = subtitle;
    if (products) inMemoryLuxurySection.products = products;
    
    res.json(inMemoryLuxurySection);
  }
});

// Add a new product to luxury section
router.post('/products', async (req, res) => {
  try {
    const luxurySection = await LuxurySection.findOne({ isActive: true });
    if (!luxurySection) {
      return res.status(404).json({ message: 'Luxury section not found' });
    }
    
    luxurySection.products.push(req.body);
    await luxurySection.save();
    res.json(luxurySection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a specific product
router.put('/products/:productId', async (req, res) => {
  try {
    const luxurySection = await LuxurySection.findOne({ isActive: true });
    if (!luxurySection) {
      return res.status(404).json({ message: 'Luxury section not found' });
    }
    
    const product = luxurySection.products.id(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    Object.assign(product, req.body);
    await luxurySection.save();
    res.json(luxurySection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a product
router.delete('/products/:productId', async (req, res) => {
  try {
    const luxurySection = await LuxurySection.findOne({ isActive: true });
    if (!luxurySection) {
      return res.status(404).json({ message: 'Luxury section not found' });
    }
    
    luxurySection.products = luxurySection.products.filter(
      product => product._id.toString() !== req.params.productId
    );
    await luxurySection.save();
    res.json(luxurySection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 