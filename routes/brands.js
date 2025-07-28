const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Brand = require('../models/Brand');

// Get all brands
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    console.error('MongoDB error:', error);
    // Return empty array if MongoDB is not connected
    res.json([]);
  }
});

// Get a single brand
router.get('/:id', async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  res.json(brand);
});

// Create a new brand
router.post('/', async (req, res) => {
  try {
    const { name, logo, phones, status, created } = req.body;
    const brand = new Brand({ name, logo, phones: phones || [], status, created });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    console.error('MongoDB error:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Update a brand
router.put('/:id', async (req, res) => {
  try {
    const { name, logo, phones, status } = req.body;
    
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      // If it's not a valid ObjectId, try to find by name instead
      const brand = await Brand.findOneAndUpdate(
        { name: req.params.id },
        { name, logo, phones, status },
        { new: true }
      );
      if (!brand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
      return res.json(brand);
    }
    
    // If it's a valid ObjectId, use findByIdAndUpdate
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      { name, logo, phones, status },
      { new: true }
    );
    
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    
    res.json(brand);
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ error: 'Failed to update brand' });
  }
});

// Delete a brand
router.delete('/:id', async (req, res) => {
  try {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      // If it's not a valid ObjectId, try to find by name instead
      const brand = await Brand.findOneAndDelete({ name: req.params.id });
      if (!brand) {
        return res.status(404).json({ error: 'Brand not found' });
      }
      return res.json({ success: true });
    }
    
    // If it's a valid ObjectId, use findByIdAndDelete
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting brand:', error);
    res.status(500).json({ error: 'Failed to delete brand' });
  }
});

// Add a phone to a brand
router.post('/:id/phones', async (req, res) => {
  try {
    const { name, image, price, description } = req.body;
    
    let brand;
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      // If it's not a valid ObjectId, try to find by name instead
      brand = await Brand.findOne({ name: req.params.id });
    } else {
      brand = await Brand.findById(req.params.id);
    }
    
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    
    brand.phones.push({ name, image, price, description });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    console.error('Error adding phone to brand:', error);
    res.status(500).json({ error: 'Failed to add phone to brand' });
  }
});

// Update a phone in a brand
router.put('/:brandId/phones/:phoneId', async (req, res) => {
  const { name, image, price, description } = req.body;
  const brand = await Brand.findById(req.params.brandId);
  const phone = brand.phones.id(req.params.phoneId);
  if (phone) {
    phone.name = name;
    phone.image = image;
    phone.price = price;
    phone.description = description;
    await brand.save();
    res.json(brand);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

// Delete a phone from a brand
router.delete('/:brandId/phones/:phoneId', async (req, res) => {
  const brand = await Brand.findById(req.params.brandId);
  brand.phones.pull(req.params.phoneId);
  await brand.save();
  res.json(brand);
});

module.exports = router; 