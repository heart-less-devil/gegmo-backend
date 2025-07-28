const mongoose = require('mongoose');
const BrandProduct = require('./models/BrandProduct');

require('dotenv').config({ path: './.env' });

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gegmo-clone';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected for seeding')).catch(err => console.error('MongoDB error:', err));

const samsungProducts = [
  {
    brandName: 'Samsung',
    series: 'S24 Series',
    name: 'Samsung S24 Ultra',
    image: '/product-images/24 ultra.png',
    price: 89999,
    mrp: 129999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB', '512GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.8-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: Android 14 with One UI 6.1', 'Camera: 200MP Main + 12MP Ultra Wide + 50MP Telephoto', 'Battery: 5000mAh with 45W fast charging', 'Highlights: S Pen, IP68 Water and Dust Resistant, Wireless PowerShare']
  },
  {
    brandName: 'Samsung',
    series: 'S24 Series',
    name: 'Samsung S24 Plus',
    image: '/product-images/24 ultra.png',
    price: 69999,
    mrp: 109999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.7-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: Android 14 with One UI 6.1', 'Camera: 50MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 4900mAh with 45W fast charging', 'Highlights: IP68 Water and Dust Resistant, Wireless PowerShare']
  },
  {
    brandName: 'Samsung',
    series: 'S24 Series',
    name: 'Samsung S24',
    image: '/product-images/24 ultra.png',
    price: 59999,
    mrp: 89999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.2-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: Android 14 with One UI 6.1', 'Camera: 50MP Main + 12MP Ultra Wide', 'Battery: 4000mAh with 25W fast charging', 'Highlights: IP68 Water and Dust Resistant, Wireless PowerShare']
  },
  {
    brandName: 'Samsung',
    series: 'S23 Series',
    name: 'Samsung S23 Ultra',
    image: '/product-images/24 ultra.png',
    price: 79999,
    mrp: 119999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB', '512GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.8-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: Android 13 with One UI 5.1', 'Camera: 200MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 5000mAh with 45W fast charging', 'Highlights: S Pen, IP68 Water and Dust Resistant, Wireless PowerShare']
  },
  {
    brandName: 'Samsung',
    series: 'S23 Series',
    name: 'Samsung S23 Plus',
    image: '/product-images/24 ultra.png',
    price: 59999,
    mrp: 99999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.6-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: Android 13 with One UI 5.1', 'Camera: 50MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 4700mAh with 45W fast charging', 'Highlights: IP68 Water and Dust Resistant, Wireless PowerShare']
  }
];

const googleProducts = [
  {
    brandName: 'Google',
    series: 'Pixel Series',
    name: 'Google Pixel 8 Pro',
    image: '/product-images/13.png',
    price: 69999,
    mrp: 99999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.7-inch LTPO OLED display', 'Processor: Google Tensor G3', 'Operating System: Android 14 with Pixel UI', 'Camera: 50MP Main + 48MP Ultra Wide + 48MP Telephoto', 'Battery: 4950mAh with 30W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser']
  },
  {
    brandName: 'Google',
    series: 'Pixel Series',
    name: 'Google Pixel 8',
    image: '/product-images/12.png',
    price: 49999,
    mrp: 79999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.2-inch OLED display', 'Processor: Google Tensor G3', 'Operating System: Android 14 with Pixel UI', 'Camera: 50MP Main + 12MP Ultra Wide', 'Battery: 4575mAh with 27W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser']
  },
  {
    brandName: 'Google',
    series: 'Pixel Series',
    name: 'Google Pixel 7 Pro',
    image: '/product-images/13.png',
    price: 59999,
    mrp: 89999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.7-inch LTPO OLED display', 'Processor: Google Tensor G2', 'Operating System: Android 13 with Pixel UI', 'Camera: 50MP Main + 12MP Ultra Wide + 48MP Telephoto', 'Battery: 5000mAh with 23W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser']
  },
  {
    brandName: 'Google',
    series: 'Pixel Series',
    name: 'Google Pixel 7',
    image: '/product-images/12.png',
    price: 39999,
    mrp: 69999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.3-inch OLED display', 'Processor: Google Tensor G2', 'Operating System: Android 13 with Pixel UI', 'Camera: 50MP Main + 12MP Ultra Wide', 'Battery: 4355mAh with 20W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser']
  }
];

const onePlusProducts = [
  {
    brandName: 'OnePlus',
    series: 'OnePlus Series',
    name: 'OnePlus 13R',
    image: '/product-images/oneplus 13 r.png',
    price: 49999,
    mrp: 79999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.78-inch LTPO AMOLED display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: OxygenOS 14 based on Android 14', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5500mAh with 100W SUPERVOOC charging', 'Highlights: Alert Slider, IP68 Water and Dust Resistant, Hasselblad Camera']
  },
  {
    brandName: 'OnePlus',
    series: 'OnePlus Series',
    name: 'OnePlus 12R',
    image: '/product-images/16 pro.png',
    price: 39999,
    mrp: 69999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.78-inch LTPO AMOLED display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: OxygenOS 13 based on Android 13', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5000mAh with 100W SUPERVOOC charging', 'Highlights: Alert Slider, IP68 Water and Dust Resistant, Hasselblad Camera']
  },
  {
    brandName: 'OnePlus',
    series: 'OnePlus Series',
    name: 'OnePlus Nord 4',
    image: '/product-images/nord 4.png',
    price: 29999,
    mrp: 49999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.74-inch AMOLED display', 'Processor: Snapdragon 7+ Gen 2', 'Operating System: OxygenOS 13 based on Android 13', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5000mAh with 80W SUPERVOOC charging', 'Highlights: Alert Slider, IP54 Water and Dust Resistant']
  },
  {
    brandName: 'OnePlus',
    series: 'OnePlus Series',
    name: 'OnePlus 11',
    image: '/product-images/oneplus 13 r.png',
    price: 34999,
    mrp: 59999,
    colors: ['#000000', '#007AFF', '#00FF00', '#FFD700'],
    storage: ['128GB', '256GB'],
    description: 'Refurbished',
    specifications: ['Display: 6.7-inch LTPO AMOLED display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: OxygenOS 13 based on Android 13', 'Camera: 50MP Main + 48MP Ultra Wide + 32MP Telephoto', 'Battery: 5000mAh with 100W SUPERVOOC charging', 'Highlights: Alert Slider, IP68 Water and Dust Resistant, Hasselblad Camera']
  }
];

async function seedBrandProducts() {
  try {
    // Clear existing data
    await BrandProduct.deleteMany({});
    console.log('Cleared existing brand products');

    // Insert Samsung products
    await BrandProduct.insertMany(samsungProducts);
    console.log('Samsung products seeded');

    // Insert Google products
    await BrandProduct.insertMany(googleProducts);
    console.log('Google products seeded');

    // Insert OnePlus products
    await BrandProduct.insertMany(onePlusProducts);
    console.log('OnePlus products seeded');

    console.log('All brand products seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding brand products:', error);
    process.exit(1);
  }
}

seedBrandProducts(); 