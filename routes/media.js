const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const publicDir = path.join(__dirname, '../../frontend/public');
const brandLogosDir = path.join(publicDir, 'brand-logos');
const productImagesDir = path.join(publicDir, 'product-images');

// List brand logos
router.get('/brand-logos', (req, res) => {
  fs.readdir(brandLogosDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to list brand logos' });
    res.json(files.map(f => '/brand-logos/' + f));
  });
});

// List product images
router.get('/product-images', (req, res) => {
  fs.readdir(productImagesDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to list product images' });
    res.json(files.map(f => '/product-images/' + f));
  });
});

// Multer storage config - default to product images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, productImagesDir); // Default to product images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Upload image
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const type = req.body.type || 'product';
    let url = '';
    
    if (type === 'brand') {
      url = '/brand-logos/' + req.file.filename;
    } else {
      url = '/product-images/' + req.file.filename;
    }
    
    console.log(`File uploaded successfully: ${req.file.filename} to ${url}`);
    res.json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed', details: error.message });
  }
});

module.exports = router; 