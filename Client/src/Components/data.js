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
    image: "🎧",
    badge: "Best Seller",
    category: "Electronics",
    description: "Experience premium sound quality with these wireless earbuds featuring active noise cancellation, 30-hour battery life, and crystal-clear audio. Perfect for music lovers, commuters, and fitness enthusiasts.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    ],
    colors: ['Black', 'White', 'Rose Gold'],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life with case",
      "IPX4 water resistance",
      "Wireless charging case",
      "Touch controls",
      "Quick charge: 15 mins = 3 hours"
    ],
    specifications: {
      "Driver Size": "11mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "6h + 24h case",
      "Charging": "USB-C, Wireless",
      "Connectivity": "Bluetooth 5.2",
      "Weight": "4.5g each"
    },
    inStock: true,
    stockCount: 25,
    seller: {
      name: "AudioTech Pro",
      rating: 4.9,
      totalProducts: 850,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 3241,
    image: "⌚",
    badge: "Hot Deal",
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and 7-day battery life. Track workouts, monitor heart rate, and stay connected with smart notifications.",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80"
    ],
    colors: ['Black', 'Silver', 'Gold', 'Blue'],
    sizes: ['38mm', '42mm', '46mm'],
    features: [
      "7-day battery life",
      "GPS + Cellular",
      "Health monitoring sensors",
      "100+ workout modes",
      "Sleep tracking",
      "Water resistant 50m"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Resolution": "454 x 454",
      "Storage": "32GB",
      "Sensors": "Heart rate, SpO2, GPS",
      "Connectivity": "Bluetooth 5.0, WiFi",
      "Battery": "7 days typical use"
    },
    inStock: true,
    stockCount: 15,
    seller: {
      name: "SmartTech Solutions",
      rating: 4.8,
      totalProducts: 1200,
      memberSince: "2017",
      location: "Texas, USA",
      verified: true
    }
  },
  {
    id: 3,
    name: "Gaming Laptop Ultra",
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.9,
    reviews: 1847,
    image: "💻",
    badge: "Gaming",
    category: "Electronics",
    description: "High-performance gaming laptop with RTX 4060 graphics, Intel i7 processor, and 144Hz display. Built for gaming, streaming, and content creation with advanced cooling system.",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80"
    ],
    colors: ['Black', 'Silver'],
    features: [
      "RTX 4060 Graphics Card",
      "Intel Core i7-13700H",
      "16GB DDR5 RAM",
      "1TB NVMe SSD",
      "144Hz IPS Display",
      "Advanced cooling system"
    ],
    specifications: {
      "Processor": "Intel i7-13700H",
      "Graphics": "RTX 4060 8GB",
      "RAM": "16GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" 144Hz FHD",
      "Weight": "2.3kg"
    },
    inStock: true,
    stockCount: 8,
    seller: {
      name: "Gaming Central",
      rating: 4.9,
      totalProducts: 650,
      memberSince: "2019",
      location: "Nevada, USA",
      verified: true
    }
  },
  {
    id: 4,
    name: "4K Webcam Pro",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 923,
    image: "📹",
    badge: "Professional",
    category: "Electronics",
    description: "Professional 4K webcam with auto-focus, noise-canceling microphone, and wide-angle lens. Perfect for streaming, video calls, and content creation.",
    images: [
      "https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=500&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&q=80"
    ],
    colors: ['Black'],
    features: [
      "4K Ultra HD recording",
      "Auto-focus technology",
      "Dual stereo microphones",
      "90° field of view",
      "Privacy shutter",
      "Plug and play setup"
    ],
    specifications: {
      "Resolution": "4K @ 30fps",
      "Lens": "Fixed focus",
      "Field of View": "90°",
      "Microphone": "Dual stereo",
      "Connectivity": "USB 3.0",
      "Compatibility": "Windows, Mac, Linux"
    },
    inStock: true,
    stockCount: 32,
    seller: {
      name: "ProTech Store",
      rating: 4.7,
      totalProducts: 450,
      memberSince: "2020",
      location: "New York, USA",
      verified: true
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
    image: "👟",
    badge: "New",
    category: "Fashion",
    description: "Premium designer sneakers crafted with sustainable materials and innovative comfort technology. Features breathable mesh upper, responsive cushioning, and timeless style.",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&q=80"
    ],
    colors: ['White', 'Black', 'Navy', 'Gray'],
    sizes: ['US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
    features: [
      "Sustainable materials",
      "Memory foam insole",
      "Breathable mesh upper",
      "Slip-resistant outsole",
      "Lightweight design",
      "Machine washable"
    ],
    specifications: {
      "Material": "Recycled mesh & leather",
      "Sole": "Rubber with grip pattern",
      "Insole": "Memory foam",
      "Weight": "280g per shoe",
      "Care": "Machine washable",
      "Origin": "Ethically made"
    },
    inStock: true,
    stockCount: 35,
    seller: {
      name: "Urban Style Co",
      rating: 4.7,
      totalProducts: 890,
      memberSince: "2018",
      location: "Los Angeles, USA",
      verified: true
    }
  },
  {
    id: 202,
    name: "Summer Dress",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 892,
    image: "👗",
    badge: "Trending",
    category: "Fashion",
    description: "Elegant summer dress in breathable cotton blend with floral pattern. Perfect for casual outings, date nights, or vacation wear. Features adjustable straps and flowing silhouette.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&q=80"
    ],
    colors: ['Floral Blue', 'Floral Pink', 'Solid Black', 'Solid White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    features: [
      "100% cotton blend",
      "Adjustable straps",
      "Flowing A-line silhouette",
      "Side pockets",
      "Midi length",
      "Easy care fabric"
    ],
    specifications: {
      "Material": "70% Cotton, 30% Polyester",
      "Length": "Midi (below knee)",
      "Fit": "A-line, relaxed",
      "Neckline": "V-neck",
      "Care": "Machine wash cold",
      "Season": "Spring/Summer"
    },
    inStock: true,
    stockCount: 42,
    seller: {
      name: "Bella Fashion",
      rating: 4.8,
      totalProducts: 1150,
      memberSince: "2017",
      location: "New York, USA",
      verified: true
    }
  },
  {
    id: 203,
    name: "Leather Jacket",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 654,
    image: "🧥",
    badge: "Premium",
    category: "Fashion",
    description: "Premium genuine leather jacket with classic biker style. Features asymmetric zipper, quilted shoulders, and multiple pockets. Timeless piece that elevates any outfit.",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&q=80"
    ],
    colors: ['Black', 'Brown', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    features: [
      "100% genuine leather",
      "Asymmetric front zipper",
      "Quilted shoulder detail",
      "Multiple zippered pockets",
      "Fully lined interior",
      "Classic biker style"
    ],
    specifications: {
      "Material": "100% Genuine leather",
      "Lining": "Polyester satin",
      "Hardware": "YKK zippers",
      "Fit": "Regular, slightly fitted",
      "Care": "Professional leather care",
      "Origin": "Italian leather"
    },
    inStock: true,
    stockCount: 18,
    seller: {
      name: "Luxury Leather Co",
      rating: 4.9,
      totalProducts: 320,
      memberSince: "2015",
      location: "Milan, Italy",
      verified: true
    }
  },
  {
    id: 204,
    name: "Designer Handbag",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 1234,
    image: "👜",
    badge: "Luxury",
    category: "Fashion",
    description: "Elegant designer handbag crafted from premium leather with gold-tone hardware. Features spacious main compartment, interior organization pockets, and detachable shoulder strap.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500&q=80"
    ],
    colors: ['Black', 'Brown', 'Beige', 'Navy'],
    features: [
      "Premium leather construction",
      "Gold-tone hardware",
      "Multiple interior pockets",
      "Detachable shoulder strap",
      "Magnetic snap closure",
      "Dust bag included"
    ],
    specifications: {
      "Material": "Saffiano leather",
      "Dimensions": "32 x 25 x 12 cm",
      "Handle Drop": "15 cm",
      "Strap Length": "120 cm adjustable",
      "Hardware": "Gold-tone",
      "Care": "Leather conditioner recommended"
    },
    inStock: true,
    stockCount: 28,
    seller: {
      name: "Elite Accessories",
      rating: 4.8,
      totalProducts: 560,
      memberSince: "2016",
      location: "Paris, France",
      verified: true
    }
  },
  
  // Home & Garden Products
  {
    id: 301,
    name: "Smart LED Light Bulbs",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 1456,
    image: "💡",
    badge: "Smart Home",
    category: "Home & Garden",
    description: "Smart LED light bulbs with WiFi connectivity and voice control. Features 16 million colors, dimming capabilities, and energy-efficient design. Control from anywhere with smartphone app.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80"
    ],
    colors: ['Warm White', 'Cool White', 'RGB Multi-color'],
    features: [
      "WiFi connectivity",
      "Voice control compatible",
      "16 million colors",
      "Dimmable brightness",
      "Energy efficient LED",
      "25,000 hour lifespan"
    ],
    specifications: {
      "Wattage": "9W (60W equivalent)",
      "Base Type": "E26/E27",
      "Lumens": "800lm",
      "Color Temperature": "2700K-6500K",
      "Connectivity": "WiFi 2.4GHz",
      "Lifespan": "25,000 hours"
    },
    inStock: true,
    stockCount: 75,
    seller: {
      name: "Smart Home Solutions",
      rating: 4.6,
      totalProducts: 450,
      memberSince: "2020",
      location: "Seattle, USA",
      verified: true
    }
  },
  {
    id: 302,
    name: "Indoor Plant Collection",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 892,
    image: "🪴",
    badge: "Air Purifying",
    category: "Home & Garden",
    description: "Beautiful collection of air-purifying indoor plants perfect for home and office. Includes snake plant, pothos, and peace lily with decorative planters and care instructions.",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80",
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
      "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=500&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80"
    ],
    colors: ['Natural Green', 'Variegated', 'Dark Green'],
    sizes: ['Small (4")', 'Medium (6")', 'Large (8")'],
    features: [
      "Air purifying plants",
      "Low maintenance care",
      "Decorative planters included",
      "Care instruction guide",
      "Pet-safe varieties",
      "Improves air quality"
    ],
    specifications: {
      "Plant Count": "3 plants",
      "Pot Size": "6 inches",
      "Plant Types": "Snake, Pothos, Peace Lily",
      "Light Requirements": "Low to medium",
      "Watering": "Weekly",
      "Air Purification": "NASA approved"
    },
    inStock: true,
    stockCount: 28,
    seller: {
      name: "Green Thumb Gardens",
      rating: 4.9,
      totalProducts: 680,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 303,
    name: "Kitchen Knife Set",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 1234,
    image: "🔪",
    badge: "Professional",
    category: "Home & Garden",
    description: "Professional 8-piece kitchen knife set with high-carbon stainless steel blades. Includes chef's knife, paring knife, bread knife, and utility knives with wooden block storage.",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&q=80",
      "https://images.unsplash.com/photo-1567958674665-ad03e2c22d7c?w=500&q=80",
      "https://images.unsplash.com/photo-1565895405229-71526927f1cb?w=500&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80"
    ],
    colors: ['Stainless Steel', 'Black Handle'],
    features: [
      "High-carbon stainless steel",
      "Ergonomic handles",
      "Full tang construction",
      "Precision ground edges",
      "Wooden storage block",
      "Professional grade"
    ],
    specifications: {
      "Set Includes": "8 knives + block",
      "Blade Material": "High-carbon steel",
      "Handle Material": "Triple-riveted polymer",
      "Chef Knife": "8 inch",
      "Care": "Hand wash recommended",
      "Warranty": "Lifetime"
    },
    inStock: true,
    stockCount: 15,
    seller: {
      name: "Culinary Professionals",
      rating: 4.8,
      totalProducts: 320,
      memberSince: "2017",
      location: "New York, USA",
      verified: true
    }
  },
  {
    id: 304,
    name: "Decorative Throw Pillows",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.6,
    reviews: 756,
    image: "🪄",
    badge: "Cozy",
    category: "Home & Garden",
    description: "Set of 4 decorative throw pillows with premium velvet covers and down-alternative filling. Features elegant patterns and colors to complement any home decor style.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80"
    ],
    colors: ['Navy Blue', 'Cream', 'Burgundy', 'Forest Green'],
    sizes: ['18" x 18"', '20" x 20"', '16" x 24"'],
    features: [
      "Premium velvet covers",
      "Down-alternative filling",
      "Hidden zipper closure",
      "Machine washable covers",
      "Hypoallergenic fill",
      "Elegant patterns"
    ],
    specifications: {
      "Set Count": "4 pillows",
      "Cover Material": "100% Velvet",
      "Fill Material": "Down-alternative",
      "Closure": "Hidden zipper",
      "Care": "Machine wash covers",
      "Style": "Contemporary"
    },
    inStock: true,
    stockCount: 42,
    seller: {
      name: "Home Comfort Co",
      rating: 4.5,
      totalProducts: 890,
      memberSince: "2019",
      location: "Texas, USA",
      verified: true
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
    image: "⚽",
    badge: "FIFA Approved",
    category: "Sports",
    description: "FIFA-approved professional soccer ball with superior flight characteristics and durability. Features 32-panel design, latex bladder, and machine-stitched construction for optimal performance.",
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500&q=80",
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&q=80",
      "https://images.unsplash.com/photo-1614632537190-23e4b2e69315?w=500&q=80",
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500&q=80"
    ],
    colors: ['Classic White/Black', 'Official Match', 'Training Orange'],
    sizes: ['Size 3', 'Size 4', 'Size 5'],
    features: [
      "FIFA approved design",
      "32-panel construction",
      "Latex bladder technology",
      "Machine-stitched panels",
      "Superior flight stability",
      "Professional grade"
    ],
    specifications: {
      "Size": "Size 5 (Official)",
      "Weight": "410-450 grams",
      "Circumference": "68-70 cm",
      "Material": "Synthetic leather",
      "Bladder": "Latex",
      "Certification": "FIFA Quality Pro"
    },
    inStock: true,
    stockCount: 45,
    seller: {
      name: "Sports Authority Pro",
      rating: 4.8,
      totalProducts: 1200,
      memberSince: "2015",
      location: "Manchester, UK",
      verified: true
    }
  },
  {
    id: 402,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 2341,
    image: "🧘",
    badge: "Eco-Friendly",
    category: "Sports",
    description: "Premium eco-friendly yoga mat made from natural rubber with superior grip and cushioning. Non-slip surface, extra thickness for comfort, and includes carrying strap.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      "https://images.unsplash.com/photo-1506629905607-41ba4b2d5e57?w=500&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80"
    ],
    colors: ['Purple', 'Teal', 'Pink', 'Black', 'Natural'],
    sizes: ['Standard (68")', 'Long (72")', 'Extra Long (84")'],
    features: [
      "Natural rubber material",
      "6mm extra thickness",
      "Non-slip surface",
      "Eco-friendly production",
      "Free carrying strap",
      "Easy to clean"
    ],
    specifications: {
      "Material": "Natural rubber + TPE",
      "Thickness": "6mm",
      "Dimensions": "183 x 61 cm",
      "Weight": "1.2 kg",
      "Grip": "Non-slip both sides",
      "Eco-Rating": "100% recyclable"
    },
    inStock: true,
    stockCount: 65,
    seller: {
      name: "Zen Fitness Co",
      rating: 4.9,
      totalProducts: 450,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 403,
    name: "Basketball Official",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 923,
    image: "🏀",
    badge: "NBA Grade",
    category: "Sports",
    description: "Official NBA-grade basketball with premium leather construction and deep channel design. Features superior grip, consistent bounce, and durability for indoor and outdoor play.",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80",
      "https://images.unsplash.com/photo-1593786481097-188816fe4795?w=500&q=80",
      "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=500&q=80",
      "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=500&q=80"
    ],
    colors: ['Classic Orange', 'Outdoor Composite'],
    sizes: ['Youth (27.5")', 'Women (28.5")', 'Official (29.5")'],
    features: [
      "NBA official size",
      "Premium leather construction",
      "Deep channel design",
      "Superior grip technology",
      "Consistent bounce",
      "Indoor/outdoor use"
    ],
    specifications: {
      "Size": "Official (29.5\")",
      "Weight": "600 grams",
      "Material": "Full-grain leather",
      "Channels": "Deep channel design",
      "Inflation": "7-9 PSI",
      "Grade": "NBA Official"
    },
    inStock: true,
    stockCount: 38,
    seller: {
      name: "Court Kings Sports",
      rating: 4.7,
      totalProducts: 680,
      memberSince: "2017",
      location: "Chicago, USA",
      verified: true
    }
  },
  {
    id: 404,
    name: "Tennis Racket Pro",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 756,
    image: "🎾",
    badge: "Tournament",
    category: "Sports",
    description: "Professional tournament-grade tennis racket with carbon fiber frame and advanced string technology. Perfect balance of power and control for competitive players.",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&q=80",
      "https://images.unsplash.com/photo-1520067669742-1cefd9ea3a77?w=500&q=80",
      "https://images.unsplash.com/photo-1551780618-6ba5d6cbf5a6?w=500&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80"
    ],
    colors: ['Black/Red', 'Blue/White', 'Classic Black'],
    sizes: ['Grip 2 (4 1/4")', 'Grip 3 (4 3/8")', 'Grip 4 (4 1/2")'],
    features: [
      "Carbon fiber frame",
      "Tournament approved",
      "Advanced string pattern",
      "Vibration dampening",
      "Optimized balance",
      "Professional grip"
    ],
    specifications: {
      "Weight": "300 grams",
      "Head Size": "100 sq inches",
      "String Pattern": "16x19",
      "Balance": "32 cm",
      "Frame Material": "Carbon fiber",
      "Tension Range": "50-65 lbs"
    },
    inStock: true,
    stockCount: 22,
    seller: {
      name: "Ace Tennis Pro",
      rating: 4.9,
      totalProducts: 320,
      memberSince: "2016",
      location: "Florida, USA",
      verified: true
    }
  },
  
  // Beauty Products
  {
    id: 501,
    name: "Luxury Lipstick Set",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 2847,
    image: "💄",
    badge: "Bestseller",
    category: "Beauty",
    description: "Premium luxury lipstick collection featuring 6 classic shades with long-lasting formula and moisturizing ingredients. Rich pigmentation, comfortable wear, and elegant packaging.",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80"
    ],
    colors: ['Classic Red', 'Nude Pink', 'Berry', 'Coral', 'Deep Rose', 'Wine'],
    features: [
      "6 premium shades",
      "Long-lasting formula",
      "Moisturizing ingredients",
      "Rich pigmentation",
      "Elegant packaging",
      "Cruelty-free"
    ],
    specifications: {
      "Set Count": "6 lipsticks",
      "Formula": "Matte & Satin",
      "Key Ingredients": "Vitamin E, Jojoba oil",
      "Wear Time": "8+ hours",
      "Finish": "Matte/Satin options",
      "Cruelty-Free": "Yes"
    },
    inStock: true,
    stockCount: 35,
    seller: {
      name: "Luxury Beauty Co",
      rating: 4.9,
      totalProducts: 450,
      memberSince: "2017",
      location: "Paris, France",
      verified: true
    }
  },
  {
    id: 502,
    name: "Skincare Routine Kit",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 1634,
    image: "🧴",
    badge: "Dermatologist Approved",
    category: "Beauty",
    description: "Complete dermatologist-approved skincare routine with cleanser, toner, serum, moisturizer, and SPF. Formulated for all skin types with clinically proven ingredients.",
    images: [
      "https://images.unsplash.com/photo-1556228578-dd6e4aaec407?w=500&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",
      "https://images.unsplash.com/photo-1564149220-c27fca1b4fd3?w=500&q=80"
    ],
    colors: ['Original Formula', 'Sensitive Skin'],
    features: [
      "5-step routine included",
      "Dermatologist approved",
      "All skin types",
      "Clinically tested",
      "Natural ingredients",
      "Results in 30 days"
    ],
    specifications: {
      "Kit Includes": "5 products",
      "Routine": "Cleanser, Toner, Serum, Moisturizer, SPF",
      "Skin Types": "All types",
      "Key Ingredients": "Niacinamide, Hyaluronic acid",
      "Testing": "Dermatologist approved",
      "Results": "Visible in 30 days"
    },
    inStock: true,
    stockCount: 28,
    seller: {
      name: "Derma Science Labs",
      rating: 4.8,
      totalProducts: 280,
      memberSince: "2019",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 503,
    name: "Professional Makeup Brushes",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 892,
    image: "🖌️",
    badge: "Professional",
    category: "Beauty",
    description: "Professional makeup brush set with 15 high-quality synthetic brushes for complete makeup application. Includes face and eye brushes with elegant storage case.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80"
    ],
    colors: ['Rose Gold', 'Silver', 'Black'],
    features: [
      "15 professional brushes",
      "Synthetic bristles",
      "Face and eye brushes",
      "Elegant storage case",
      "Cruelty-free",
      "Easy to clean"
    ],
    specifications: {
      "Brush Count": "15 brushes",
      "Bristle Type": "Synthetic",
      "Handle Material": "Aluminum ferrule",
      "Storage": "Leather case",
      "Use": "Face and eye makeup",
      "Care": "Gentle cleanser recommended"
    },
    inStock: true,
    stockCount: 42,
    seller: {
      name: "Pro Makeup Artists",
      rating: 4.7,
      totalProducts: 320,
      memberSince: "2018",
      location: "New York, USA",
      verified: true
    }
  },
  {
    id: 504,
    name: "Perfume Collection",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 1245,
    image: "🌸",
    badge: "Limited Edition",
    category: "Beauty",
    description: "Limited edition perfume collection featuring 4 signature scents with floral, citrus, woody, and oriental notes. Each fragrance crafted with premium ingredients and lasting power.",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&q=80",
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=500&q=80",
      "https://images.unsplash.com/photo-1565870340-4b9cc1dd6e6d?w=500&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80"
    ],
    colors: ['Floral', 'Citrus', 'Woody', 'Oriental'],
    features: [
      "4 signature scents",
      "Premium ingredients",
      "Long-lasting formula",
      "Elegant bottle design",
      "Gift-ready packaging",
      "Limited edition"
    ],
    specifications: {
      "Collection Size": "4 x 30ml bottles",
      "Scent Types": "Floral, Citrus, Woody, Oriental",
      "Longevity": "6-8 hours",
      "Concentration": "Eau de Parfum",
      "Packaging": "Luxury gift box",
      "Edition": "Limited"
    },
    inStock: true,
    stockCount: 25,
    seller: {
      name: "Fragrance Boutique",
      rating: 4.8,
      totalProducts: 180,
      memberSince: "2016",
      location: "Milan, Italy",
      verified: true
    }
  },
  
  // Books Products
  {
    id: 601,
    name: "Bestselling Novel Collection",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 3247,
    image: "📚",
    badge: "Bestseller",
    category: "Books",
    description: "Collection of 3 bestselling contemporary novels from award-winning authors. Features compelling stories, rich character development, and engaging plots perfect for book clubs.",
    images: [
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80"
    ],
    colors: ['Paperback', 'Hardcover', 'Digital Edition'],
    features: [
      "3 bestselling novels",
      "Award-winning authors",
      "Contemporary fiction",
      "Book club favorites",
      "High-quality printing",
      "Compelling narratives"
    ],
    specifications: {
      "Format": "Paperback collection",
      "Page Count": "300-400 per book",
      "Publisher": "Literary Press",
      "Language": "English",
      "Dimensions": "5.5 x 8.5 inches",
      "Reading Level": "Adult"
    },
    inStock: true,
    stockCount: 85,
    seller: {
      name: "Literary Corner",
      rating: 4.8,
      totalProducts: 1200,
      memberSince: "2015",
      location: "New York, USA",
      verified: true
    }
  },
  {
    id: 602,
    name: "Programming Fundamentals",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.9,
    reviews: 1876,
    image: "💻",
    badge: "Educational",
    category: "Books",
    description: "Comprehensive programming guide covering fundamental concepts, algorithms, and best practices. Perfect for beginners and intermediate developers with practical examples and exercises.",
    images: [
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&q=80"
    ],
    colors: ['Print Edition', 'Digital PDF', 'eBook'],
    features: [
      "Comprehensive coverage",
      "Practical examples",
      "Exercise solutions",
      "Beginner-friendly",
      "Industry best practices",
      "Updated content"
    ],
    specifications: {
      "Pages": "650 pages",
      "Format": "Technical manual",
      "Languages Covered": "Python, JavaScript, Java",
      "Level": "Beginner to Intermediate",
      "Edition": "Latest 2024",
      "Includes": "Online resources"
    },
    inStock: true,
    stockCount: 45,
    seller: {
      name: "Tech Education Press",
      rating: 4.9,
      totalProducts: 450,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 603,
    name: "Self-Help Motivation Pack",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 2134,
    image: "📖",
    badge: "Inspiring",
    category: "Books",
    description: "Motivational self-help book collection focusing on personal growth, productivity, and success mindset. Features actionable strategies and inspirational stories from successful individuals.",
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80",
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
    ],
    colors: ['Paperback Set', 'Hardcover Set', 'Audio Book'],
    features: [
      "Personal growth focus",
      "Actionable strategies",
      "Inspirational stories",
      "Productivity techniques",
      "Success mindset",
      "Easy-to-follow format"
    ],
    specifications: {
      "Book Count": "2 books",
      "Total Pages": "500+ pages",
      "Topics": "Growth, Productivity, Success",
      "Reading Time": "8-10 hours total",
      "Format": "Self-help guide",
      "Bonus": "Workbook included"
    },
    inStock: true,
    stockCount: 95,
    seller: {
      name: "Motivation Publishers",
      rating: 4.6,
      totalProducts: 280,
      memberSince: "2019",
      location: "Colorado, USA",
      verified: true
    }
  },
  {
    id: 604,
    name: "Children's Story Collection",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 1456,
    image: "🧸",
    badge: "Family Favorite",
    category: "Books",
    description: "Delightful collection of 10 illustrated children's stories perfect for bedtime reading. Features colorful illustrations, engaging characters, and valuable life lessons for kids aged 3-8.",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=500&q=80"
    ],
    colors: ['Hardcover Illustrated', 'Board Book Set'],
    sizes: ['Standard (8x10")', 'Large Print (10x12")'],
    features: [
      "10 illustrated stories",
      "Colorful artwork",
      "Educational themes",
      "Age-appropriate content",
      "Durable binding",
      "Family bonding"
    ],
    specifications: {
      "Story Count": "10 stories",
      "Age Range": "3-8 years",
      "Illustrations": "Full-color",
      "Binding": "Hardcover",
      "Themes": "Friendship, kindness, adventure",
      "Reading Level": "Early reader"
    },
    inStock: true,
    stockCount: 65,
    seller: {
      name: "Kids Story World",
      rating: 4.7,
      totalProducts: 620,
      memberSince: "2017",
      location: "Oregon, USA",
      verified: true
    }
  },
  
  // Toys & Games Products
  {
    id: 701,
    name: "Gaming Console Bundle",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.9,
    reviews: 2847,
    image: "🎮",
    badge: "Hot Deal",
    category: "Toys & Games",
    description: "Complete gaming console bundle with wireless controller, 3 popular games, and HDMI cable. Features 4K gaming support, wireless connectivity, and massive game library access.",
    images: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&q=80",
      "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=500&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80",
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&q=80"
    ],
    colors: ['Matte Black', 'White Edition'],
    features: [
      "4K gaming support",
      "Wireless controller included",
      "3 games included",
      "Online gaming ready",
      "Streaming apps built-in",
      "Ultra-fast loading"
    ],
    specifications: {
      "Resolution": "4K Ultra HD",
      "Storage": "1TB SSD",
      "RAM": "16GB GDDR6",
      "Controller": "Wireless DualSense",
      "Connectivity": "WiFi, Bluetooth, USB",
      "Games Included": "3 AAA titles"
    },
    inStock: true,
    stockCount: 12,
    seller: {
      name: "Gaming Central Hub",
      rating: 4.9,
      totalProducts: 850,
      memberSince: "2016",
      location: "Texas, USA",
      verified: true
    }
  },
  {
    id: 702,
    name: "LEGO Architecture Set",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 1634,
    image: "🧱",
    badge: "Creative",
    category: "Toys & Games",
    description: "Iconic LEGO Architecture set featuring famous landmarks. Build detailed models of world-renowned buildings with premium pieces and comprehensive instruction booklet.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      "https://images.unsplash.com/photo-1597149254621-6cfca9c50fb2?w=500&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80"
    ],
    colors: ['Classic Colors', 'Limited Edition'],
    sizes: ['Standard Build', 'Expert Level'],
    features: [
      "1200+ premium pieces",
      "Detailed instruction booklet",
      "Display-worthy model",
      "Educational building",
      "High-quality materials",
      "Collector's edition"
    ],
    specifications: {
      "Piece Count": "1200+ pieces",
      "Age Range": "12+ years",
      "Build Time": "8-12 hours",
      "Finished Size": "15 x 10 x 8 inches",
      "Material": "ABS plastic",
      "Theme": "World landmarks"
    },
    inStock: true,
    stockCount: 28,
    seller: {
      name: "Creative Building Co",
      rating: 4.8,
      totalProducts: 420,
      memberSince: "2018",
      location: "Denmark",
      verified: true
    }
  },
  {
    id: 703,
    name: "Remote Control Drone",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 892,
    image: "🚁",
    badge: "Tech Toy",
    category: "Toys & Games",
    description: "Advanced remote control drone with 4K camera, GPS positioning, and 30-minute flight time. Features obstacle avoidance, return-to-home function, and smartphone app control.",
    images: [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80"
    ],
    colors: ['Black', 'White', 'Red'],
    features: [
      "4K HD camera",
      "GPS positioning",
      "30-minute flight time",
      "Obstacle avoidance",
      "Return-to-home function",
      "Smartphone app control"
    ],
    specifications: {
      "Camera": "4K Ultra HD",
      "Flight Time": "30 minutes",
      "Range": "2000 meters",
      "GPS": "Built-in positioning",
      "Speed": "65 km/h max",
      "Battery": "Rechargeable Li-Po"
    },
    inStock: true,
    stockCount: 18,
    seller: {
      name: "Sky Tech Drones",
      rating: 4.7,
      totalProducts: 180,
      memberSince: "2019",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 704,
    name: "Board Game Collection",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 1245,
    image: "🎲",
    badge: "Family Fun",
    category: "Toys & Games",
    description: "Collection of 4 classic family board games perfect for game nights. Includes strategy games, party games, and educational games suitable for all ages and group sizes.",
    images: [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80",
      "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&q=80",
      "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500&q=80",
      "https://images.unsplash.com/photo-1566694271453-390536dd1f0d?w=500&q=80"
    ],
    colors: ['Classic Edition', 'Deluxe Edition'],
    sizes: ['2-4 Players', '2-6 Players', '4-8 Players'],
    features: [
      "4 complete games",
      "Family-friendly content",
      "Strategy and party games",
      "High-quality components",
      "Clear instructions",
      "Portable storage"
    ],
    specifications: {
      "Game Count": "4 board games",
      "Player Range": "2-8 players",
      "Age Range": "8+ years",
      "Play Time": "30-120 minutes",
      "Game Types": "Strategy, Party, Educational",
      "Components": "Premium materials"
    },
    inStock: true,
    stockCount: 45,
    seller: {
      name: "Family Game Night",
      rating: 4.6,
      totalProducts: 650,
      memberSince: "2017",
      location: "Oregon, USA",
      verified: true
    }
  },
  
  // Health & Wellness Products
  {
    id: 801,
    name: "Smart Fitness Tracker",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.6,
    reviews: 1847,
    image: "📟",
    badge: "Best Seller",
    category: "Health & Wellness",
    description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and 50+ workout modes. Features 7-day battery life, waterproof design, and smartphone notifications.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      "https://images.unsplash.com/photo-1593786481097-188816fe4795?w=500&q=80",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&q=80"
    ],
    colors: ['Black', 'Navy', 'Pink', 'White'],
    sizes: ['Small', 'Medium', 'Large'],
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "50+ workout modes",
      "7-day battery life",
      "Waterproof IP68",
      "Smartphone notifications"
    ],
    specifications: {
      "Display": "1.4\" color AMOLED",
      "Battery": "7 days typical use",
      "Sensors": "Heart rate, SpO2, accelerometer",
      "Water Rating": "IP68 waterproof",
      "Connectivity": "Bluetooth 5.0",
      "App": "iOS and Android"
    },
    inStock: true,
    stockCount: 55,
    seller: {
      name: "FitTech Solutions",
      rating: 4.7,
      totalProducts: 420,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  {
    id: 802,
    name: "Yoga Mat Premium",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 2341,
    image: "🧘",
    badge: "Eco-Friendly",
    category: "Health & Wellness",
    description: "Premium eco-friendly yoga mat made from natural rubber with superior grip and cushioning. Non-slip surface, extra thickness for comfort, and includes carrying strap.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      "https://images.unsplash.com/photo-1506629905607-41ba4b2d5e57?w=500&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&q=80"
    ],
    colors: ['Purple', 'Teal', 'Pink', 'Black', 'Natural'],
    sizes: ['Standard (68")', 'Long (72")', 'Extra Long (84")'],
    features: [
      "Natural rubber material",
      "6mm extra thickness",
      "Non-slip surface",
      "Eco-friendly production",
      "Free carrying strap",
      "Easy to clean"
    ],
    specifications: {
      "Material": "Natural rubber + TPE",
      "Thickness": "6mm",
      "Dimensions": "183 x 61 cm",
      "Weight": "1.2 kg",
      "Grip": "Non-slip both sides",
      "Eco-Rating": "100% recyclable"
    },
    inStock: true,
    stockCount: 75,
    seller: {
      name: "Zen Wellness Co",
      rating: 4.8,
      totalProducts: 350,
      memberSince: "2017",
      location: "Oregon, USA",
      verified: true
    }
  },
  {
    id: 803,
    name: "Protein Powder Blend",
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.7,
    reviews: 923,
    image: "🥤",
    badge: "Organic",
    category: "Health & Wellness",
    description: "Premium organic protein powder blend with 25g protein per serving. Made from plant-based sources with natural flavors, no artificial additives, and supports muscle recovery.",
    images: [
      "https://images.unsplash.com/photo-1571880360617-b85b19cb4280?w=500&q=80",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80",
      "https://images.unsplash.com/photo-1593786481097-188816fe4795?w=500&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&q=80"
    ],
    colors: ['Vanilla', 'Chocolate', 'Strawberry', 'Unflavored'],
    sizes: ['1 lb', '2 lb', '5 lb'],
    features: [
      "25g protein per serving",
      "Plant-based sources",
      "Organic ingredients",
      "No artificial additives",
      "Muscle recovery support",
      "Easy mixing"
    ],
    specifications: {
      "Protein Per Serving": "25 grams",
      "Protein Sources": "Pea, Hemp, Brown Rice",
      "Servings": "30 per container",
      "Additives": "None artificial",
      "Certification": "USDA Organic",
      "Allergens": "Dairy-free, Gluten-free"
    },
    inStock: true,
    stockCount: 85,
    seller: {
      name: "Pure Nutrition Labs",
      rating: 4.7,
      totalProducts: 280,
      memberSince: "2019",
      location: "Colorado, USA",
      verified: true
    }
  },
  {
    id: 804,
    name: "Essential Oil Diffuser",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 1456,
    image: "🌿",
    badge: "Aromatherapy",
    category: "Health & Wellness",
    description: "Ultrasonic essential oil diffuser with LED color-changing lights and timer settings. Creates fine mist for aromatherapy, includes starter essential oil set and operates quietly.",
    images: [
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=500&q=80",
      "https://images.unsplash.com/photo-1567776717041-11fe8f8ad7fb?w=500&q=80",
      "https://images.unsplash.com/photo-1618944847023-644f8c61b6e4?w=500&q=80",
      "https://images.unsplash.com/photo-1586823962819-9e7c9fd42553?w=500&q=80"
    ],
    colors: ['White', 'Dark Wood', 'Bamboo', 'Black'],
    features: [
      "Ultrasonic technology",
      "LED color-changing",
      "Timer settings",
      "Ultra-quiet operation",
      "Essential oil set included",
      "Large water capacity"
    ],
    specifications: {
      "Capacity": "300ml water tank",
      "Coverage": "300-400 sq ft",
      "Timer": "1H, 3H, 6H, continuous",
      "LED": "7 color options",
      "Noise Level": "Under 23db",
      "Auto-Shutoff": "Empty tank protection"
    },
    inStock: true,
    stockCount: 42,
    seller: {
      name: "Aromatherapy Essentials",
      rating: 4.9,
      totalProducts: 180,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  
  // Automotive Products
  {
    id: 901,
    name: "Car Phone Mount",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.5,
    reviews: 892,
    image: "🚗",
    badge: "Essential",
    category: "Automotive",
    description: "Universal car phone mount with strong magnetic hold and 360-degree rotation. Compatible with all smartphones and cases, features one-hand operation and dashboard/windshield mounting options.",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80"
    ],
    colors: ['Black', 'Silver'],
    features: [
      "Universal smartphone compatibility",
      "Strong magnetic hold",
      "360-degree rotation",
      "One-hand operation",
      "Dashboard & windshield mount",
      "Cable-free design"
    ],
    specifications: {
      "Compatibility": "All smartphones 4-7 inches",
      "Mount Type": "Magnetic with adhesive base",
      "Rotation": "360 degrees",
      "Weight Capacity": "Up to 300g",
      "Installation": "Tool-free setup",
      "Warranty": "2 years"
    },
    inStock: true,
    stockCount: 55,
    seller: {
      name: "AutoTech Solutions",
      rating: 4.6,
      totalProducts: 450,
      memberSince: "2019",
      location: "Michigan, USA",
      verified: true
    }
  },
  {
    id: 902,
    name: "Dash Cam HD",
    price: 129.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviews: 1456,
    image: "📹",
    badge: "Safety",
    category: "Automotive",
    description: "Full HD dashboard camera with night vision, loop recording, and G-sensor for accident detection. Features wide-angle lens, parking mode, and smartphone app connectivity for easy footage review.",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&q=80"
    ],
    colors: ['Black'],
    features: [
      "Full HD 1080p recording",
      "Night vision technology",
      "G-sensor crash detection",
      "Loop recording",
      "Parking mode monitoring",
      "WiFi smartphone connectivity"
    ],
    specifications: {
      "Resolution": "1920x1080 @ 30fps",
      "Lens": "170° wide-angle",
      "Storage": "MicroSD up to 128GB",
      "Screen": "3-inch LCD",
      "G-Sensor": "3-axis accelerometer",
      "Power": "12V car adapter"
    },
    inStock: true,
    stockCount: 32,
    seller: {
      name: "DriveSafe Electronics",
      rating: 4.7,
      totalProducts: 280,
      memberSince: "2018",
      location: "California, USA",
      verified: true
    }
  },
  
  // Food & Beverages Products
  {
    id: 1001,
    name: "Gourmet Coffee Beans",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.8,
    reviews: 2156,
    image: "☕",
    badge: "Premium",
    category: "Food & Beverages",
    description: "Premium single-origin coffee beans sourced from high-altitude farms. Medium roast with notes of chocolate and caramel, perfect for espresso, drip, or French press brewing methods.",
    images: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=500&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80"
    ],
    varieties: ['Colombian Single Origin', 'Ethiopian Blend', 'Brazilian Santos'],
    sizes: ['250g', '500g', '1kg'],
    features: [
      "Single-origin premium beans",
      "Medium roast profile",
      "Chocolate & caramel notes",
      "Freshly roasted weekly",
      "Ethically sourced",
      "Vacuum-sealed packaging"
    ],
    specifications: {
      "Origin": "Colombian Highlands",
      "Roast Level": "Medium",
      "Processing": "Washed",
      "Altitude": "1,200-1,800m",
      "Harvest": "Hand-picked",
      "Certification": "Fair Trade & Organic"
    },
    inStock: true,
    stockCount: 120,
    seller: {
      name: "Mountain Peak Coffee Co",
      rating: 4.9,
      totalProducts: 85,
      memberSince: "2016",
      location: "Costa Rica",
      verified: true
    }
  },
  {
    id: 1002,
    name: "Artisan Chocolate Box",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.9,
    reviews: 1234,
    image: "🍫",
    badge: "Luxury",
    category: "Food & Beverages",
    description: "Handcrafted luxury chocolate collection featuring 12 unique flavors from master chocolatiers. Made with premium Belgian chocolate and natural ingredients, perfect for gifting or indulgence.",
    images: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80",
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&q=80",
      "https://images.unsplash.com/photo-1582006759949-05d5d5b9de21?w=500&q=80"
    ],
    flavors: ['Dark Sea Salt', 'Milk Caramel', 'White Raspberry', 'Dark Orange', 'Milk Hazelnut', 'Dark Mint'],
    sizes: ['12-piece Box', '24-piece Box'],
    features: [
      "12 handcrafted chocolates",
      "Premium Belgian chocolate",
      "Natural flavor infusions",
      "Elegant gift packaging",
      "Master chocolatier crafted",
      "Gluten-free options available"
    ],
    specifications: {
      "Chocolate Origin": "Belgian premium",
      "Cocoa Content": "35-85%",
      "Shelf Life": "6 months",
      "Weight": "200g",
      "Packaging": "Luxury gift box",
      "Allergens": "May contain nuts"
    },
    inStock: true,
    stockCount: 65,
    seller: {
      name: "Chocolatier Artisan",
      rating: 4.9,
      totalProducts: 150,
      memberSince: "2015",
      location: "Brussels, Belgium",
      verified: true
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

// Legacy exports for backward compatibility (now filtered from allProducts)
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
  { id: 1, name: 'Wireless Headphones', price: 99.99, stock: 25, status: 'active' },
  { id: 2, name: 'Smart Watch', price: 299.99, stock: 12, status: 'active' },
  { id: 3, name: 'Bluetooth Speaker', price: 59.99, stock: 0, status: 'out_of_stock' },
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
    badge: "Featured",
    category: categoryName
  },
  {
    id: 601,
    name: `Professional ${categoryName} Set`,
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 892,
    image: categoryIcon,
    badge: "Professional",
    category: categoryName
  },
  {
    id: 602,
    name: `Essential ${categoryName} Kit`,
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    reviews: 1567,
    image: categoryIcon,
    badge: "Bestseller",
    category: categoryName
  }
];
