require('dotenv').config();
const mongoose = require('mongoose');
const Brand = require('./models/Brand');
const FeaturedPhone = require('./models/FeaturedPhone');

const brands = [
  {
    name: 'Apple',
    logo: '/brand-logos/apple.jpg',
    status: 'Active',
    created: new Date(),
    phones: []
  },
  {
    name: 'Samsung',
    logo: '/brand-logos/samsung.png',
    status: 'Active',
    created: new Date(),
    phones: []
  },
  {
    name: 'OnePlus',
    logo: '/brand-logos/oneplus.png',
    status: 'Active',
    created: new Date(),
    phones: []
  },
  {
    name: 'Google',
    logo: '/brand-logos/google.png',
    status: 'Active',
    created: new Date(),
    phones: []
  }
];

const phones = [
  {
    name: 'Iphone 16 Pro Max',
    price: 76000,
    description: 'Refurbished, 64 Quality checkpoints',
    image: 'https://via.placeholder.com/120x160?text=Iphone+16+Pro+Max',
  },
  {
    name: 'Samsung S24 Ultra',
    price: 88400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=Samsung+S24+Ultra',
  },
  {
    name: 'OnePlus 13R',
    price: 90400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=OnePlus+13R',
  },
  {
    name: 'Iphone 16',
    price: 88400,
    description: 'Refurbished, Gegmo Certified',
    image: 'https://via.placeholder.com/120x160?text=Iphone+16',
  },
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Brand.deleteMany();
    await Brand.insertMany(brands);
    console.log('Brands seeded!');
    await FeaturedPhone.deleteMany();
    await FeaturedPhone.insertMany(phones);
    console.log('Featured phones seeded!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB error:', err);
    mongoose.disconnect();
  }); 