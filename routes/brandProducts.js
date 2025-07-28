const express = require('express');
const router = express.Router();
const BrandProduct = require('../models/BrandProduct');

// Get all brand products
router.get('/', async (req, res) => {
  try {
    const products = await BrandProduct.find({ status: 'Active' });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get products by brand
router.get('/brand/:brandName', async (req, res) => {
  try {
    const products = await BrandProduct.find({ 
      brandName: req.params.brandName,
      status: 'Active' 
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get products by series
router.get('/series/:series', async (req, res) => {
  try {
    const products = await BrandProduct.find({ 
      series: req.params.series,
      status: 'Active' 
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new brand product
router.post('/', async (req, res) => {
  const product = new BrandProduct({
    brandName: req.body.brandName,
    series: req.body.series,
    name: req.body.name,
    image: req.body.image,
    variants: req.body.variants || [],
    colorVariants: req.body.colorVariants || [],
    price: req.body.price,
    mrp: req.body.mrp,
    colors: req.body.colors || [],
    storage: req.body.storage || [],
    description: req.body.description,
    specifications: req.body.specifications || []
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update brand product
router.put('/:id', async (req, res) => {
  try {
    const product = await BrandProduct.findById(req.params.id);
    if (product) {
      product.brandName = req.body.brandName || product.brandName;
      product.series = req.body.series || product.series;
      product.name = req.body.name || product.name;
      product.image = req.body.image || product.image;
      product.variants = req.body.variants || product.variants;
      product.colorVariants = req.body.colorVariants || product.colorVariants;
      product.price = req.body.price || product.price;
      product.mrp = req.body.mrp || product.mrp;
      product.colors = req.body.colors || product.colors;
      product.storage = req.body.storage || product.storage;
      product.description = req.body.description || product.description;
      product.specifications = req.body.specifications || product.specifications;
      product.status = req.body.status || product.status;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete brand product (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const product = await BrandProduct.findById(req.params.id);
    if (product) {
      product.status = 'Inactive';
      await product.save();
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 