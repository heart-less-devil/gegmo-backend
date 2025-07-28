require('dotenv').config();
const mongoose = require('mongoose');
const FeaturedPhone = require('./models/FeaturedPhone');

const phones = [
  {
    name: 'Iphone 16 Pro Max',
    price: 76000,
    description: 'Refurbished, 64 Quality checkpoints',
    image: 'https://via.placeholder.com/120x160?text=Iphone+16+Pro+Max', // replace with your real image URL
  },
  {
    name: 'Samsung S24 Ultra',
    price: 88400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=Samsung+S24+Ultra', // replace with your real image URL
  },
  {
    name: 'OnePlus 13R',
    price: 90400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=OnePlus+13R', // replace with your real image URL
  },
  {
    name: 'Iphone 16',
    price: 88400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=Iphone+16', // replace with your real image URL
  },
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await FeaturedPhone.deleteMany(); // Optional: clear existing featured phones
    await FeaturedPhone.insertMany(phones);
    console.log('Featured phones seeded!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB error:', err);
    mongoose.disconnect();
  });