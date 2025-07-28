require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const BrandPage = require('./models/BrandPage');

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gegmo-clone';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected for seeding')).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

const brandPagesData = [
  {
    brandName: 'Apple',
    brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    heroTitle: 'Gegmo Refurbished',
    heroSubtitle: 'Certified Product',
    series: [
      { name: '16 Series', image: '/iphones store/iphone16prmax.png', key: '16' },
      { name: '15 Series', image: '/iphones store/Iphone15 Pro max.png', key: '15' },
      { name: '14 Series', image: '/iphones store/Iphone 14 Pro max.png', key: '14' },
      { name: '13 Series', image: '/iphones store/Iphone 13 Pro max.png', key: '13' },
      { name: '12 Series', image: '/iphones store/Iphone 12 Pro max.png', key: '12' },
      { name: '11 Series', image: '/iphones store/Iphone 11 Pro max.png', key: '11' },
      { name: 'X Series', image: '/iphones store/Iphone XS max.png', key: 'x' }
    ],
    products: [
      // 16 Series
      { seriesName: '16 Series', id: '16-pro-max', name: 'Iphone16 Pro max', image: '/iphones store/iphone16prmax.png', price: 98999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A18 Pro chip', 'Operating System: iOS 18', 'Camera: 48MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'], reviews: [{ user: 'Amit James', product: 'Iphone 16 Pro Max', variant: '16 Pro Max (128)/Titanium Black', comment: 'Very premium design and premium hand feel battery performance was absolutely best no heating issue display performance mind blowing compact device. I switch s24 ultra to 16 Pro Max and I am very satisfied with Gegmo..!!!!', images: ['/iphones store/iphone16prmax.png', '/iphones store/iphone16prmax.png', '/iphones store/iphone16prmax.png'] }, { user: 'Rohit Desale', product: 'Iphone 16 Pro Max', variant: '16 Pro Max (512)/Linear Pink', comment: 'Really Nice phone Natural Titanium color too good and camera mind-blowing performance too good. Today received this phone genuinely original product received. Thank you Gegmo and yours team. Thank you soo much.❤️❤️', images: ['/iphones store/iphone16prmax.png', '/iphones store/iphone16prmax.png', '/iphones store/iphone16prmax.png'] }] },
      { seriesName: '16 Series', id: '16-pro', name: 'Iphone16 Pro', image: '/iphones store/iphone16pro.png', price: 90999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A18 Pro chip', 'Operating System: iOS 18', 'Camera: 48MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '16 Series', id: '16', name: 'Iphone16', image: '/iphones store/iphone16.png', price: 71999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A18 chip', 'Operating System: iOS 18', 'Camera: 48MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // 15 Series
      { seriesName: '15 Series', id: '15-pro-max', name: 'Iphone15 Pro max', image: '/iphones store/Iphone15 Pro max.png', price: 80999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A17 Pro chip', 'Operating System: iOS 17', 'Camera: 48MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'], reviews: [{ user: 'Priya Sharma', product: 'Iphone 15 Pro Max', variant: '15 Pro Max (256)/Natural Titanium', comment: 'Amazing phone! The camera quality is outstanding and battery life is incredible. Very happy with my purchase from Gegmo. Highly recommended!', images: ['/iphones store/Iphone15 Pro max.png', '/iphones store/Iphone15 Pro max.png', '/iphones store/Iphone15 Pro max.png'] }] },
      { seriesName: '15 Series', id: '15-plus', name: 'Iphone 15 plus', image: '/iphones store/Iphone 15 plus.png', price: 65999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A16 Bionic chip', 'Operating System: iOS 17', 'Camera: 48MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '15 Series', id: '15', name: 'Iphone 15', image: '/iphones store/Iphone 15.png', price: 45999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A16 Bionic chip', 'Operating System: iOS 17', 'Camera: 48MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // 14 Series
      { seriesName: '14 Series', id: '14-pro-max', name: 'Iphone 14 Pro max', image: '/iphones store/Iphone 14 Pro max.png', price: 65999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A16 Bionic chip', 'Operating System: iOS 16', 'Camera: 48MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '14 Series', id: '14-plus', name: 'Iphone 14 Plus', image: '/iphones store/Iphone 14 Plus.png', price: 45999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A15 Bionic chip', 'Operating System: iOS 16', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '14 Series', id: '14', name: 'Iphone 14', image: '/iphones store/Iphone 14.png', price: 38999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A15 Bionic chip', 'Operating System: iOS 16', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // 13 Series
      { seriesName: '13 Series', id: '13-pro-max', name: 'Iphone 13 Pro max', image: '/iphones store/Iphone 13 Pro max.png', price: 55999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A15 Bionic chip', 'Operating System: iOS 15', 'Camera: 12MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '13 Series', id: '13-pro', name: 'Iphone 13 Pro', image: '/iphones store/Iphone 13 Pro.png', price: 43999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A15 Bionic chip', 'Operating System: iOS 15', 'Camera: 12MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '13 Series', id: '13', name: 'Iphone 13', image: '/iphones store/Iphone 13.png', price: 37999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A15 Bionic chip', 'Operating System: iOS 15', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // 12 Series
      { seriesName: '12 Series', id: '12-pro-max', name: 'Iphone 12 Pro max', image: '/iphones store/Iphone 12 Pro max.png', price: 45999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A14 Bionic chip', 'Operating System: iOS 14', 'Camera: 12MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '12 Series', id: '12-mini', name: 'Iphone 12 mini', image: '/iphones store/Iphone 12 mini.webp', price: 36999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 5.4-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A14 Bionic chip', 'Operating System: iOS 14', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '12 Series', id: '12', name: 'Iphone 12', image: '/iphones store/Iphone 12.png', price: 31999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A14 Bionic chip', 'Operating System: iOS 14', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: MagSafe wireless charging up to 15W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // 11 Series
      { seriesName: '11 Series', id: '11-pro-max', name: 'Iphone 11 Pro max', image: '/iphones store/Iphone 11 Pro max.png', price: 23999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.5-inch all-screen LCD display', 'Processor: Apple A13 Bionic chip', 'Operating System: iOS 13', 'Camera: 12MP Main + 12MP Ultra Wide + 12MP Telephoto', 'Battery: Wireless charging up to 7.5W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: '11 Series', id: '11', name: 'Iphone 11', image: '/iphones store/Iphone 11.png', price: 18999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.1-inch all-screen LCD display', 'Processor: Apple A13 Bionic chip', 'Operating System: iOS 13', 'Camera: 12MP Main + 12MP Ultra Wide', 'Battery: Wireless charging up to 7.5W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      
      // X Series
      { seriesName: 'X Series', id: 'xs-max', name: 'Iphone XS max', image: '/iphones store/Iphone XS max.png', price: 18999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.5-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A12 Bionic chip', 'Operating System: iOS 12', 'Camera: 12MP Main + 12MP Telephoto', 'Battery: Wireless charging up to 7.5W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] },
      { seriesName: 'X Series', id: 'x', name: 'Iphone X', image: '/iphones store/Iphone X.png', price: 11999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 5.8-inch all-screen OLED display (Super Retina XDR display)', 'Processor: Apple A11 Bionic chip', 'Operating System: iOS 11', 'Camera: 12MP Main + 12MP Telephoto', 'Battery: Wireless charging up to 7.5W', 'Highlights: Apple Intelligence, IP68 Splash, Water and Dust Resistant, Crash Detection'] }
    ]
  },
  {
    brandName: 'Samsung',
    brandLogo: '/brand-logos/samsung.png',
    heroTitle: 'Gegmo Refurbished',
    heroSubtitle: 'Certified Product',
    series: [
      { name: 'S24 Series', image: '/product-images/24 ultra.png', key: 's24' },
      { name: 'S23 Series', image: '/product-images/15.png', key: 's23' },
      { name: 'S22 Series', image: '/product-images/14.png', key: 's22' }
    ],
    products: [
      { seriesName: 'S24 Series', id: 's24-ultra', name: 'Samsung S24 Ultra', image: '/product-images/24 ultra.png', price: 89999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.8-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: Android 14 with One UI 6.1', 'Camera: 200MP Main + 12MP Ultra Wide + 50MP Telephoto', 'Battery: 5000mAh with 45W fast charging', 'Highlights: S Pen, IP68 Water and Dust Resistant, Wireless PowerShare'], reviews: [{ user: 'Arjun Patel', product: 'Samsung S24 Ultra', variant: 'S24 Ultra (256)/Titanium Gray', comment: 'The S Pen is a game changer! Camera quality is exceptional and the battery lasts all day. Great refurbished product from Gegmo.', images: ['/product-images/24 ultra.png', '/product-images/24 ultra.png', '/product-images/24 ultra.png'] }] },
      { seriesName: 'S24 Series', id: 's24-plus', name: 'Samsung S24 Plus', image: '/product-images/15.png', price: 69999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: Android 14 with One UI 6.1', 'Camera: 50MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 4900mAh with 45W fast charging', 'Highlights: IP68 Water and Dust Resistant, Wireless PowerShare'] },
      { seriesName: 'S23 Series', id: 's23-ultra', name: 'Samsung S23 Ultra', image: '/product-images/15.png', price: 79999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.8-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: Android 13 with One UI 5.1', 'Camera: 200MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 5000mAh with 45W fast charging', 'Highlights: S Pen, IP68 Water and Dust Resistant, Wireless PowerShare'] },
      { seriesName: 'S22 Series', id: 's22-ultra', name: 'Samsung S22 Ultra', image: '/product-images/14.png', price: 59999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.8-inch Dynamic AMOLED 2X display', 'Processor: Snapdragon 8 Gen 1', 'Operating System: Android 12 with One UI 4.1', 'Camera: 108MP Main + 12MP Ultra Wide + 10MP Telephoto', 'Battery: 5000mAh with 45W fast charging', 'Highlights: S Pen, IP68 Water and Dust Resistant, Wireless PowerShare'] }
    ]
  },
  {
    brandName: 'OnePlus',
    brandLogo: '/brand-logos/oneplus.png',
    heroTitle: 'Gegmo Refurbished',
    heroSubtitle: 'Certified Product',
    series: [
      { name: '13 Series', image: '/product-images/oneplus 13 r.png', key: '13' },
      { name: '12 Series', image: '/product-images/16 pro.png', key: '12' },
      { name: 'Nord Series', image: '/product-images/nord 4.png', key: 'nord' }
    ],
    products: [
      { seriesName: '13 Series', id: '13-r', name: 'OnePlus 13R', image: '/product-images/oneplus 13 r.png', price: 49999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.78-inch LTPO AMOLED display', 'Processor: Snapdragon 8 Gen 3', 'Operating System: OxygenOS 14 based on Android 14', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5500mAh with 100W SUPERVOOC charging', 'Highlights: Alert Slider, IP68 Water and Dust Resistant, Hasselblad Camera'] },
      { seriesName: '12 Series', id: '12-r', name: 'OnePlus 12R', image: '/product-images/16 pro.png', price: 39999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.78-inch LTPO AMOLED display', 'Processor: Snapdragon 8 Gen 2', 'Operating System: OxygenOS 13 based on Android 13', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5000mAh with 100W SUPERVOOC charging', 'Highlights: Alert Slider, IP68 Water and Dust Resistant, Hasselblad Camera'] },
      { seriesName: 'Nord Series', id: 'nord-4', name: 'OnePlus Nord 4', image: '/product-images/nord 4.png', price: 29999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.74-inch AMOLED display', 'Processor: Snapdragon 7+ Gen 2', 'Operating System: OxygenOS 13 based on Android 13', 'Camera: 50MP Main + 8MP Ultra Wide + 2MP Macro', 'Battery: 5000mAh with 80W SUPERVOOC charging', 'Highlights: Alert Slider, IP54 Water and Dust Resistant'] }
    ]
  },
  {
    brandName: 'Google',
    brandLogo: '/brand-logos/google.png',
    heroTitle: 'Gegmo Refurbished',
    heroSubtitle: 'Certified Product',
    series: [
      { name: 'Pixel 8 Series', image: '/product-images/13.png', key: 'pixel8' },
      { name: 'Pixel 7 Series', image: '/product-images/12.png', key: 'pixel7' }
    ],
    products: [
      { seriesName: 'Pixel 8 Series', id: 'pixel-8-pro', name: 'Google Pixel 8 Pro', image: '/product-images/13.png', price: 59999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.7-inch LTPO OLED display', 'Processor: Google Tensor G3', 'Operating System: Android 14 with Pixel UI', 'Camera: 50MP Main + 48MP Ultra Wide + 48MP Telephoto', 'Battery: 4950mAh with 30W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser'] },
      { seriesName: 'Pixel 7 Series', id: 'pixel-7', name: 'Google Pixel 7', image: '/product-images/12.png', price: 39999, mrp: 129999, colors: ['#232323', '#e6e6e6', '#b6b16e'], variants: ['128', '256'], specifications: ['Display: 6.3-inch OLED display', 'Processor: Google Tensor G2', 'Operating System: Android 13 with Pixel UI', 'Camera: 50MP Main + 12MP Ultra Wide', 'Battery: 4355mAh with 20W fast charging', 'Highlights: Google AI, IP68 Water and Dust Resistant, Magic Eraser'] }
    ]
  }
];

async function seedBrandPages() {
  try {
    // Clear existing data
    await BrandPage.deleteMany({});
    console.log('Cleared existing brand pages');

    // Insert new data
    const insertedBrandPages = await BrandPage.insertMany(brandPagesData);
    console.log(`Successfully seeded ${insertedBrandPages.length} brand pages`);

    // Log the created brand pages
    insertedBrandPages.forEach(brandPage => {
      console.log(`- ${brandPage.brandName}: ${brandPage.products.length} products`);
    });

  } catch (error) {
    console.error('Error seeding brand pages:', error);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedBrandPages(); 