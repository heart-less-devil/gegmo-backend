require('dotenv').config();
const mongoose = require('mongoose');
const Brand = require('./models/Brand');

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

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Brand.deleteMany(); // Optional: clear existing brands
    await Brand.insertMany(brands);
    console.log('Brands seeded!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('MongoDB error:', err);
    mongoose.disconnect();
  }); 