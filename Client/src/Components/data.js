export const heroSlides = [
  {
    title: "Summer Collection 2025",
    subtitle: "Discover the latest trends",
    description: "Fresh styles that make you stand out",
    bgColor: "bg-purple-600",
    image: "🌸"
  },
  {
    title: "Tech Essentials",
    subtitle: "Power up your lifestyle",
    description: "Cutting-edge gadgets for modern living",
    bgColor: "bg-blue-600",
    image: "⚡"
  },
  {
    title: "Home & Living",
    subtitle: "Transform your space",
    description: "Beautiful designs for every room",
    bgColor: "bg-emerald-600",
    image: "🏠"
  }
];

export const categories = [
  { name: "Electronics", icon: "📱", color: "from-blue-500 to-purple-500", path: "/category/electronics" },
  { name: "Fashion", icon: "👗", color: "from-pink-500 to-rose-500", path: "/category/fashion" },
  { name: "Home & Garden", icon: "🏡", color: "from-green-500 to-emerald-500", path: "/category/home-and-garden" },
  { name: "Sports", icon: "⚽", color: "from-orange-500 to-red-500", path: "/category/sports" },
  { name: "Beauty", icon: "💄", color: "from-purple-500 to-pink-500", path: "/category/beauty" },
  { name: "Books", icon: "📚", color: "from-indigo-500 to-blue-500", path: "/category/books" },
  { name: "Toys & Games", icon: "🎮", color: "from-yellow-500 to-orange-500", path: "/category/toys-and-games" },
  { name: "Automotive", icon: "🚗", color: "from-gray-500 to-slate-500", path: "/category/automotive" },
  { name: "Health & Wellness", icon: "💊", color: "from-green-500 to-teal-500", path: "/category/health-and-wellness" },
  { name: "Food & Beverages", icon: "🍔", color: "from-red-500 to-pink-500", path: "/category/food-and-beverages" }
];

export const allProducts = [
  // Electronics Products
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 2847,
    thumbnailImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    badge: "Best Seller",
    category: "Electronics",
    description: "Experience premium sound quality with these wireless earbuds featuring active noise cancellation, 30-hour battery life, and crystal-clear audio.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80"
    ],
    colors: ["Black", "White", "Rose Gold"],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life with case",
      "IPX4 water resistance"
    ],
    specifications: {
      "Driver Size": "11mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "6h + 24h case"
    },
    inStock: true,
    stockCount: 25,
    seller: {
      name: "AudioTech Pro",
      rating: 4.9,
      memberSince: "2018"
    }
  },
  // Fashion Products
  {
    id: 201,
    name: "Designer Sneakers",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.6,
    reviews: 1523,
    thumbnailImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
    badge: "New",
    category: "Fashion",
    description: "Premium designer sneakers crafted with sustainable materials and innovative comfort technology.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80"
    ],
    colors: ["White", "Black", "Navy"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    features: [
      "Sustainable materials",
      "Memory foam insole",
      "Breathable mesh upper"
    ],
    specifications: {
      "Material": "Recycled canvas, vegan leather",
      "Sole": "EVA cushioning",
      "Weight": "9.5oz per shoe"
    },
    inStock: true,
    stockCount: 35,
    seller: {
      name: "Urban Footwear",
      rating: 4.7,
      memberSince: "2019"
    }
  },
  // Home & Garden Products
  {
    id: 301,
    name: "Smart Plant Watering System",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 1234,
    thumbnailImage: "https://images.unsplash.com/photo-1603204077084-24d8d9210d45?w=500&q=80",
    badge: "Smart Home",
    category: "Home & Garden",
    description: "Automated plant care system with moisture sensors, app control, and customizable watering schedules.",
    images: [
      "https://images.unsplash.com/photo-1603204077084-24d8d9210d45?w=500&q=80",
      "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=500&q=80"
    ],
    colors: ["Green", "White", "Black"],
    features: [
      "App-controlled watering",
      "Moisture sensors",
      "Customizable schedules"
    ],
    specifications: {
      "Water Capacity": "2L",
      "Battery Life": "3 months",
      "Connection": "Bluetooth 5.0, WiFi"
    },
    inStock: true,
    stockCount: 28,
    seller: {
      name: "GreenTech Solutions",
      rating: 4.6,
      memberSince: "2020"
    }
  },
  // Sports Products
  {
    id: 401,
    name: "Professional Soccer Ball",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 1847,
    thumbnailImage: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&q=80",
    badge: "FIFA Approved",
    category: "Sports",
    description: "Official size and weight soccer ball with durable construction and excellent flight characteristics.",
    images: [
      "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&q=80",
      "https://images.unsplash.com/photo-1614632537282-4f27f7d7e7b9?w=500&q=80"
    ],
    colors: ["White/Black", "Blue/Yellow", "Red/White"],
    features: [
      "FIFA approved",
      "Official size 5",
      "Durable construction"
    ],
    specifications: {
      "Size": "5",
      "Material": "Synthetic leather",
      "Panels": "32-panel design"
    },
    inStock: true,
    stockCount: 45,
    seller: {
      name: "Sports Elite",
      rating: 4.8,
      memberSince: "2017"
    }
  },
  // Beauty Products
  {
    id: 501,
    name: "Skincare Gift Set",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.9,
    reviews: 2341,
    thumbnailImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
    badge: "Limited Edition",
    category: "Beauty",
    description: "Complete skincare routine with cleanser, toner, serum, and moisturizer.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80"
    ],
    colors: ["Original", "Sensitive Skin", "Anti-Aging"],
    features: [
      "4-step skincare routine",
      "Natural ingredients",
      "All skin types"
    ],
    specifications: {
      "Contents": "4 products",
      "Size": "50ml each",
      "Ingredients": "Hyaluronic acid, vitamin C, retinol"
    },
    inStock: true,
    stockCount: 22,
    seller: {
      name: "Glow Beauty",
      rating: 4.9,
      memberSince: "2021"
    }
  },
  // Books Products
  {
    id: 601,
    name: "JavaScript: The Complete Guide",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 3456,
    thumbnailImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    badge: "Bestseller",
    category: "Books",
    description: "Comprehensive guide to modern JavaScript programming.",
    images: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80"
    ],
    colors: ["Hardcover", "Paperback", "Digital"],
    features: [
      "1200+ pages",
      "Modern JavaScript (ES6+)",
      "Practical examples"
    ],
    specifications: {
      "Pages": "1248",
      "Publisher": "Tech Publishing House",
      "Language": "English"
    },
    inStock: true,
    stockCount: 85,
    seller: {
      name: "BookSmart",
      rating: 4.8,
      memberSince: "2015"
    }
  },
  // Toys & Games Products
  {
    id: 701,
    name: "Educational STEM Building Kit",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 1876,
    thumbnailImage: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80",
    badge: "Educational",
    category: "Toys & Games",
    description: "Interactive building kit that teaches programming, robotics, and engineering concepts.",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80",
      "https://images.unsplash.com/photo-1569399078436-c035146eaa2f?w=500&q=80"
    ],
    colors: ["Multicolor", "Blue Edition", "Advanced Set"],
    features: [
      "STEM learning focused",
      "200+ building pieces",
      "App-guided tutorials"
    ],
    specifications: {
      "Pieces": "235",
      "Age Range": "8-14 years",
      "Battery": "3xAA (not included)"
    },
    inStock: true,
    stockCount: 38,
    seller: {
      name: "Learning Toys Inc.",
      rating: 4.9,
      memberSince: "2019"
    }
  },
  // Automotive Products
  {
    id: 801,
    name: "Car Phone Mount",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.6,
    reviews: 2134,
    thumbnailImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80",
    badge: "Universal",
    category: "Automotive",
    description: "Universal car phone mount with strong magnetic hold and 360-degree rotation.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80",
      "https://images.unsplash.com/photo-1605515298946-d0573716e250?w=500&q=80"
    ],
    colors: ["Black", "Silver", "Red"],
    features: [
      "Universal compatibility",
      "Strong magnetic hold",
      "360-degree rotation"
    ],
    specifications: {
      "Material": "ABS plastic, silicone",
      "Mount Type": "Air vent, dashboard",
      "Max Phone Size": "6.7 inches"
    },
    inStock: true,
    stockCount: 67,
    seller: {
      name: "AutoTech Gear",
      rating: 4.5,
      memberSince: "2020"
    }
  },
  // Health & Wellness Products
  {
    id: 901,
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1567,
    thumbnailImage: "https://images.unsplash.com/photo-1599447292461-69005a8d8f7f?w=500&q=80",
    badge: "Eco-Friendly",
    category: "Health & Wellness",
    description: "Premium yoga mat made from eco-friendly materials with excellent grip and cushioning.",
    images: [
      "https://images.unsplash.com/photo-1599447292461-69005a8d8f7f?w=500&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80"
    ],
    colors: ["Purple", "Blue", "Green", "Pink"],
    features: [
      "Eco-friendly material",
      "Non-slip surface",
      "6mm thick cushioning"
    ],
    specifications: {
      "Material": "TPE, natural rubber",
      "Thickness": "6mm",
      "Size": "72\" x 24\""
    },
    inStock: true,
    stockCount: 54,
    seller: {
      name: "Wellness Essentials",
      rating: 4.7,
      memberSince: "2018"
    }
  },
  // Food & Beverages Products
  {
    id: 1001,
    name: "Organic Coffee Beans",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 2845,
    thumbnailImage: "https://images.unsplash.com/photo-1559525839-2e7be4936ecc?w=500&q=80",
    badge: "Organic",
    category: "Food & Beverages",
    description: "Premium organic coffee beans sourced from sustainable farms.",
    images: [
      "https://images.unsplash.com/photo-1559525839-2e7be4936ecc?w=500&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80"
    ],
    colors: ["Light Roast", "Medium Roast", "Dark Roast"],
    features: [
      "100% organic certified",
      "Medium roast",
      "Single origin"
    ],
    specifications: {
      "Weight": "1 lb (454g)",
      "Origin": "Colombia",
      "Roast Level": "Medium"
    },
    inStock: true,
    stockCount: 78,
    seller: {
      name: "Organic Brew Co.",
      rating: 4.9,
      memberSince: "2017"
    }
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryName) => {
  return allProducts.filter(product => product.category === categoryName);
};

// Helper function to get category info
export const getCategoryInfo = (categoryName) => {
  return categories.find(category => category.name === categoryName);
};

// Legacy exports for backward compatibility
export const electronicsProducts = getProductsByCategory("Electronics");
export const fashionProducts = getProductsByCategory("Fashion");
export const homeGardenProducts = getProductsByCategory("Home & Garden");
export const sportsProducts = getProductsByCategory("Sports");
export const beautyProducts = getProductsByCategory("Beauty");
export const booksProducts = getProductsByCategory("Books");
export const toysGamesProducts = getProductsByCategory("Toys & Games");
export const healthWellnessProducts = getProductsByCategory("Health & Wellness");
export const automotiveProducts = getProductsByCategory("Automotive");
export const foodBeveragesProducts = getProductsByCategory("Food & Beverages");

export const sellerProducts = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 1245,
    image: "🎧",
    thumbnailImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    badge: "Popular",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and long battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1548378329-437e1ef34263?w=500&q=80"
    ],
    colors: ["Black", "Silver", "White"],
    features: [
      "Noise cancellation",
      "20 hour battery life",
      "Foldable design"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "20 hours"
    },
    inStock: true,
    stockCount: 25,
    status: "active",
    seller: {
      name: "Audio Solutions",
      rating: 4.7,
      memberSince: "2019"
    }
  },
  {
    id: 2, 
    name: "Smart Watch", 
    price: 299.99, 
    originalPrice: 349.99,
    rating: 4.7,
    reviews: 876,
    image: "⌚",
    thumbnailImage: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
    badge: "Top Rated",
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring features and long battery life.",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
    ],
    colors: ["Black", "Silver", "Rose Gold"],
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "7-day battery life"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Water Resistance": "5 ATM",
      "Sensors": "Heart rate, accelerometer, gyroscope"
    },
    inStock: true,
    stockCount: 12,
    status: "active",
    seller: {
      name: "Tech Wearables",
      rating: 4.8,
      memberSince: "2020"
    }
  },
  {
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.4,
    reviews: 532,
    image: "🔊",
    thumbnailImage: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    badge: "Sale",
    category: "Electronics",
    description: "Portable Bluetooth speaker with rich sound and waterproof design.",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80"
    ],
    colors: ["Black", "Blue", "Red"],
    features: [
      "Waterproof IPX7",
      "10-hour battery life",
      "Built-in microphone"
    ],
    specifications: {
      "Power": "10W",
      "Battery": "2000mAh",
      "Connectivity": "Bluetooth 5.0, AUX"
    },
    inStock: false,
    stockCount: 0,
    status: "out_of_stock",
    seller: {
      name: "SoundBox Audio",
      rating: 4.5,
      memberSince: "2021"
    }
  }
];

export const generateDefaultProducts = (categoryName, categoryIcon) => [
  {
    id: 600,
    name: `Premium ${categoryName} Item`,
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 1234,
    image: categoryIcon,
    thumbnailImage: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&q=80",
    badge: "Featured",
    category: categoryName,
    description: `High-quality ${categoryName} product with premium features and modern design.`,
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&q=80",
      "https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?w=500&q=80"
    ],
    colors: ["Standard", "Premium", "Deluxe"],
    features: [
      "Premium quality",
      "Modern design",
      "Durable construction"
    ],
    specifications: {
      "Material": "Premium grade",
      "Weight": "Standard",
      "Warranty": "1 year"
    },
    inStock: true,
    stockCount: 30,
    seller: {
      name: "Premium Goods Inc.",
      rating: 4.8,
      memberSince: "2020"
    }
  }
];
