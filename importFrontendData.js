const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

// Import models
const Brand = require('./models/Brand');
const BrandProduct = require('./models/BrandProduct');
const BrandPage = require('./models/BrandPage');
const FeaturedPhone = require('./models/FeaturedPhone');

// Frontend data
const frontendProducts = [
  // 16 Series
  {
    id: "iphone-16-pro-max",
    name: "Iphone 16 Pro max",
    price: 98999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/16 pro.png",
  },
  {
    id: "iphone-16-pro",
    name: "Iphone 16 Pro",
    price: 90999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/16 pro.png",
  },
  {
    id: "iphone-16",
    name: "Iphone 16",
    price: 71999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/16 pro.png",
  },
  // 15 Series
  {
    id: "iphone-15-pro-max",
    name: "Iphone15 Pro max",
    price: 80999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/15.png",
  },
  {
    id: "iphone-15-plus",
    name: "Iphone 15 plus",
    price: 65999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/15 plus.png",
  },
  {
    id: "iphone-15",
    name: "Iphone 15",
    price: 45999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/15.png",
  },
  // 14 Series
  {
    id: "iphone-14-pro-max",
    name: "Iphone 14 Pro max",
    price: 65999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/14.png",
  },
  {
    id: "iphone-14-plus",
    name: "Iphone 14 Plus",
    price: 45999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/14.png",
  },
  {
    id: "iphone-14",
    name: "Iphone 14",
    price: 38999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/14.png",
  },
  // 13 Series
  {
    id: "iphone-13-pro-max",
    name: "Iphone 13 Pro max",
    price: 55999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/13.png",
  },
  {
    id: "iphone-13-pro",
    name: "Iphone 13 Pro",
    price: 43999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/13.png",
  },
  {
    id: "iphone-13",
    name: "Iphone 13",
    price: 37999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/13.png",
  },
  // 12 Series
  {
    id: "iphone-12-pro-max",
    name: "Iphone 12 Pro max",
    price: 45999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/12.png",
  },
  {
    id: "iphone-12-mini",
    name: "Iphone 12 mini",
    price: 36999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/12.png",
  },
  {
    id: "iphone-12",
    name: "Iphone 12",
    price: 31999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/12.png",
  },
  // 11 Series
  {
    id: "iphone-11-pro-max",
    name: "Iphone 11 Pro max",
    price: 23999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/11.png",
  },
  {
    id: "iphone-11",
    name: "Iphone 11",
    price: 18999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/11.png",
  },
  // X Series
  {
    id: "iphone-xs-max",
    name: "Iphone XS max",
    price: 18999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/x.png",
  },
  {
    id: "iphone-x",
    name: "Iphone X",
    price: 11999,
    mrp: 129999,
    colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
    variants: [128, 256, 512],
    description: "Refurbished, 64 Quality checkpoints",
    image: "/product-images/x.png",
  },
];

// Default brands data
const defaultBrands = [
  {
    name: 'Apple',
    logo: '/brand-logos/apple.jpg',
    status: 'Active',
    phones: [
      {
        name: 'iPhone 16 Pro Max',
        image: '/product-images/16 pro.png',
        price: 98999,
        description: 'Refurbished, 64 Quality checkpoints',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: '/product-images/15.png',
        price: 80999,
        description: 'Refurbished, 64 Quality checkpoints',
      },
      {
        name: 'iPhone 14 Pro Max',
        image: '/product-images/14.png',
        price: 65999,
        description: 'Refurbished, 64 Quality checkpoints',
      },
    ],
  },
  {
    name: 'Samsung',
    logo: '/brand-logos/samsung.png',
    status: 'Active',
    phones: [
      {
        name: 'Samsung S24 Ultra',
        image: '/product-images/24 ultra.png',
        price: 88400,
        description: 'Refurbished, Gegmo Certified',
      },
      {
        name: 'Samsung S23',
        image: '/product-images/25.png',
        price: 65000,
        description: 'Flagship, 1 year warranty',
      },
    ],
  },
  {
    name: 'OnePlus',
    logo: '/brand-logos/oneplus.png',
    status: 'Active',
    phones: [
      {
        name: 'OnePlus 12',
        image: '/product-images/nord 4.png',
        price: 58000,
        description: 'Latest, Fast charging',
      },
      {
        name: 'OnePlus 13R',
        image: '/product-images/oneplus 13 r.png',
        price: 45000,
        description: 'Gaming focused, 120Hz display',
      },
    ],
  },
];

// Featured phones data
const featuredPhones = [
  {
    name: 'iPhone 16 Pro Max',
    price: 98999,
    description: 'Refurbished, 64 Quality checkpoints',
    image: '/product-images/16 pro.png',
  },
  {
    name: 'Samsung S24 Ultra',
    price: 88400,
    description: 'Refurbished, Gegmo Certified',
    image: '/product-images/24 ultra.png',
  },
  {
    name: 'OnePlus 12',
    price: 58000,
    description: 'Latest, Fast charging',
    image: '/product-images/nord 4.png',
  },
];

// Brand pages data
const brandPages = [
  {
    brandName: 'Apple',
    brandLogo: '/brand-logos/apple.jpg',
    heroTitle: 'Gegmo Refurbished iPhones',
    heroSubtitle: 'Certified Apple Products',
    series: [
      {
        name: 'iPhone 16 Series',
        image: '/product-images/16 pro.png',
        key: 'iphone-16'
      },
      {
        name: 'iPhone 15 Series',
        image: '/product-images/15.png',
        key: 'iphone-15'
      },
      {
        name: 'iPhone 14 Series',
        image: '/product-images/14.png',
        key: 'iphone-14'
      },
      {
        name: 'iPhone 13 Series',
        image: '/product-images/13.png',
        key: 'iphone-13'
      },
      {
        name: 'iPhone 12 Series',
        image: '/product-images/12.png',
        key: 'iphone-12'
      },
      {
        name: 'iPhone 11 Series',
        image: '/product-images/11.png',
        key: 'iphone-11'
      },
      {
        name: 'iPhone X Series',
        image: '/product-images/x.png',
        key: 'iphone-x'
      }
    ],
    products: frontendProducts.filter(p => p.name.toLowerCase().includes('iphone')).map(product => ({
      seriesName: product.name.includes('16') ? 'iPhone 16 Series' : 
                  product.name.includes('15') ? 'iPhone 15 Series' :
                  product.name.includes('14') ? 'iPhone 14 Series' :
                  product.name.includes('13') ? 'iPhone 13 Series' :
                  product.name.includes('12') ? 'iPhone 12 Series' :
                  product.name.includes('11') ? 'iPhone 11 Series' :
                  'iPhone X Series',
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      mrp: product.mrp,
      colors: product.colors,
      variants: product.variants.map(v => `${v}GB`),
      specifications: ['Refurbished', '64 Quality checkpoints', '1 year warranty']
    })),
    isActive: true
  },
  {
    brandName: 'Samsung',
    brandLogo: '/brand-logos/samsung.png',
    heroTitle: 'Gegmo Refurbished Samsung',
    heroSubtitle: 'Certified Samsung Products',
    series: [
      {
        name: 'Galaxy S Series',
        image: '/product-images/24 ultra.png',
        key: 'galaxy-s'
      }
    ],
    products: [
      {
        seriesName: 'Galaxy S Series',
        id: "samsung-s24-ultra",
        name: "Samsung S24 Ultra",
        price: 88400,
        mrp: 129999,
        colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
        variants: ["128GB", "256GB", "512GB"],
        specifications: ["Refurbished", "Gegmo Certified", "1 year warranty"],
        image: "/product-images/24 ultra.png",
      },
      {
        seriesName: 'Galaxy S Series',
        id: "samsung-s23",
        name: "Samsung S23",
        price: 65000,
        mrp: 99999,
        colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
        variants: ["128GB", "256GB", "512GB"],
        specifications: ["Flagship", "1 year warranty", "Fast charging"],
        image: "/product-images/25.png",
      }
    ],
    isActive: true
  },
  {
    brandName: 'OnePlus',
    brandLogo: '/brand-logos/oneplus.png',
    heroTitle: 'Gegmo Refurbished OnePlus',
    heroSubtitle: 'Certified OnePlus Products',
    series: [
      {
        name: 'OnePlus Series',
        image: '/product-images/nord 4.png',
        key: 'oneplus'
      }
    ],
    products: [
      {
        seriesName: 'OnePlus Series',
        id: "oneplus-12",
        name: "OnePlus 12",
        price: 58000,
        mrp: 89999,
        colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
        variants: ["128GB", "256GB", "512GB"],
        specifications: ["Latest", "Fast charging", "120Hz display"],
        image: "/product-images/nord 4.png",
      },
      {
        seriesName: 'OnePlus Series',
        id: "oneplus-13r",
        name: "OnePlus 13R",
        price: 45000,
        mrp: 69999,
        colors: ["#232323", "#ff5ca7", "#00c97b", "#b5a642"],
        variants: ["128GB", "256GB", "512GB"],
        specifications: ["Gaming focused", "120Hz display", "Fast charging"],
        image: "/product-images/oneplus 13 r.png",
      }
    ],
    isActive: true
  }
];

async function importData() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/gegmo-clone';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await Brand.deleteMany({});
    await BrandProduct.deleteMany({});
    await BrandPage.deleteMany({});
    await FeaturedPhone.deleteMany({});
    console.log('✅ Cleared existing data');

    // Import Brands
    console.log('📱 Importing brands...');
    const createdBrands = await Brand.insertMany(defaultBrands);
    console.log(`✅ Imported ${createdBrands.length} brands`);

    // Import Brand Products
    console.log('📦 Importing brand products...');
    const brandProducts = frontendProducts.map(product => ({
      brandName: 'Apple', // All products are Apple for now
      series: product.name.includes('16') ? 'iPhone 16 Series' : 
              product.name.includes('15') ? 'iPhone 15 Series' :
              product.name.includes('14') ? 'iPhone 14 Series' :
              product.name.includes('13') ? 'iPhone 13 Series' :
              product.name.includes('12') ? 'iPhone 12 Series' :
              product.name.includes('11') ? 'iPhone 11 Series' :
              'iPhone X Series',
      name: product.name,
      image: product.image,
      price: product.price,
      mrp: product.mrp,
      colors: product.colors.join(','),
      storage: product.variants.join(','),
      description: product.description,
      specifications: 'Refurbished, 64 Quality checkpoints, 1 year warranty',
      variants: product.variants.map(variant => ({
        storage: `${variant}GB`,
        price: product.price,
        mrp: product.mrp,
        stock: 10
      })),
      colorVariants: product.colors.map(color => ({
        color: color,
        colorName: color === '#232323' ? 'Black' : 
                   color === '#ff5ca7' ? 'Pink' :
                   color === '#00c97b' ? 'Green' :
                   color === '#b5a642' ? 'Gold' : 'Black',
        image: product.image,
        thumbnails: [product.image, product.image, product.image, product.image],
        stock: 5
      }))
    }));

    const createdBrandProducts = await BrandProduct.insertMany(brandProducts);
    console.log(`✅ Imported ${createdBrandProducts.length} brand products`);

    // Import Brand Pages
    console.log('🏪 Importing brand pages...');
    const createdBrandPages = await BrandPage.insertMany(brandPages);
    console.log(`✅ Imported ${createdBrandPages.length} brand pages`);

    // Import Featured Phones
    console.log('⭐ Importing featured phones...');
    const createdFeaturedPhones = await FeaturedPhone.insertMany(featuredPhones);
    console.log(`✅ Imported ${createdFeaturedPhones.length} featured phones`);

    console.log('\n🎉 Data import completed successfully!');
    console.log(`📊 Summary:`);
    console.log(`   - Brands: ${createdBrands.length}`);
    console.log(`   - Brand Products: ${createdBrandProducts.length}`);
    console.log(`   - Brand Pages: ${createdBrandPages.length}`);
    console.log(`   - Featured Phones: ${createdFeaturedPhones.length}`);

  } catch (error) {
    console.error('❌ Error importing data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the import
importData(); 