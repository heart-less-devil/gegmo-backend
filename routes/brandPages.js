const express = require('express');
const router = express.Router();
const BrandPage = require('../models/BrandPage');

// Get all brand pages
router.get('/', async (req, res) => {
  try {
    const brandPages = await BrandPage.find().sort({ createdAt: -1 });
    res.json(brandPages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get brand page by brand name
router.get('/:brandName', async (req, res) => {
  try {
    const brandPage = await BrandPage.findOne({ 
      brandName: { $regex: new RegExp(req.params.brandName, 'i') },
      isActive: true 
    });
    
    if (!brandPage) {
      return res.status(404).json({ message: 'Brand page not found' });
    }
    
    res.json(brandPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new brand page
router.post('/', async (req, res) => {
  try {
    const brandPage = new BrandPage(req.body);
    const savedBrandPage = await brandPage.save();
    res.status(201).json(savedBrandPage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update brand page
router.put('/:id', async (req, res) => {
  try {
    const brandPage = await BrandPage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!brandPage) {
      return res.status(404).json({ message: 'Brand page not found' });
    }
    
    res.json(brandPage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete brand page
router.delete('/:id', async (req, res) => {
  try {
    const brandPage = await BrandPage.findByIdAndDelete(req.params.id);
    
    if (!brandPage) {
      return res.status(404).json({ message: 'Brand page not found' });
    }
    
    res.json({ message: 'Brand page deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle brand page active status
router.patch('/:id/toggle', async (req, res) => {
  try {
    const brandPage = await BrandPage.findById(req.params.id);
    
    if (!brandPage) {
      return res.status(404).json({ message: 'Brand page not found' });
    }
    
    brandPage.isActive = !brandPage.isActive;
    const updatedBrandPage = await brandPage.save();
    
    res.json(updatedBrandPage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 