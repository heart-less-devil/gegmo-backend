require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Connect to MongoDB
console.log('MONGO_URI from env:', process.env.MONGO_URI);
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gegmo-clone';
console.log('Using mongoURI:', mongoURI);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // 5 second timeout
  socketTimeoutMS: 45000, // 45 second timeout
}).then(() => console.log('MongoDB connected')).catch(err => {
  console.error('MongoDB error:', err);
  console.log('Starting server without MongoDB...');
  // Set a flag to indicate MongoDB is not available
  global.mongoConnected = false;
});

// Routes
app.use('/api/featured-phones', require('./routes/featuredPhones'));
app.use('/api/brands', require('./routes/brands'));
app.use('/api/brand-products', require('./routes/brandProducts'));
app.use('/api/brand-pages', require('./routes/brandPages'));
app.use('/api/media', require('./routes/media'));
app.use('/api/luxury-section', require('./routes/luxurySection'));
app.use('/api/users', require('./routes/users'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/sms', require('./routes/sms'));
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
