const fs = require('fs');

// Update these values with your actual MongoDB credentials
const DB_USERNAME = 'amankk0007'; // Replace with your actual username
const DB_PASSWORD = 'Wildboy07@';

fs.writeFileSync('.env', [
  `MONGO_URI=mongodb+srv://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD)}@cluster0.gimrcgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  'JWT_SECRET=your-super-secret-jwt-key-change-this-in-production',
  'PORT=5000',
  'RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID_HERE',
  'RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET_HERE'
].join('\n'));
console.log('✅ .env file written successfully!'); 