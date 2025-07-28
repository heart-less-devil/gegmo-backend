const express = require('express');
const router = express.Router();
const FeaturedPhone = require('../models/FeaturedPhone');

// GET all featured phones
router.get('/', async (req, res) => {
  const phones = await FeaturedPhone.find();
  res.json(phones);
});

// POST create a new featured phone
router.post('/', async (req, res) => {
  const { name, price, description, image } = req.body;
  const phone = new FeaturedPhone({ name, price, description, image });
  await phone.save();
  res.status(201).json(phone);
});

// PUT update a featured phone
router.put('/:id', async (req, res) => {
  const { name, price, description, image } = req.body;
  const phone = await FeaturedPhone.findByIdAndUpdate(
    req.params.id,
    { name, price, description, image },
    { new: true }
  );
  res.json(phone);
});

// DELETE a featured phone
router.delete('/:id', async (req, res) => {
  await FeaturedPhone.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router; 