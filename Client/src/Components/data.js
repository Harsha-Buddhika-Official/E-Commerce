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
    image: "👟",
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
    inStock: true,
    stockCount: 35
  },
  // Home & Garden Products
  {
    id: 301,
    name: "Smart Plant Watering System",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 1234,
    image: "🌱",
    badge: "Smart Home",
    category: "Home & Garden",
    description: "Automated plant care system with moisture sensors, app control, and customizable watering schedules.",
    features: [
      "App-controlled watering",
      "Moisture sensors",
      "Customizable schedules"
    ],
    inStock: true,
    stockCount: 28
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
    description: "Official size and weight soccer ball with durable construction and excellent flight characteristics.",
    features: [
      "FIFA approved",
      "Official size 5",
      "Durable construction"
    ],
    inStock: true,
    stockCount: 45
  },
  // Beauty Products
  {
    id: 501,
    name: "Skincare Gift Set",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.9,
    reviews: 2341,
    image: "💄",
    badge: "Limited Edition",
    category: "Beauty",
    description: "Complete skincare routine with cleanser, toner, serum, and moisturizer.",
    features: [
      "4-step skincare routine",
      "Natural ingredients",
      "All skin types"
    ],
    inStock: true,
    stockCount: 22
  },
  // Books Products
  {
    id: 601,
    name: "JavaScript: The Complete Guide",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviews: 3456,
    image: "📚",
    badge: "Bestseller",
    category: "Books",
    description: "Comprehensive guide to modern JavaScript programming.",
    features: [
      "1200+ pages",
      "Modern JavaScript (ES6+)",
      "Practical examples"
    ],
    inStock: true,
    stockCount: 85
  },
  // Toys & Games Products
  {
    id: 701,
    name: "Educational STEM Building Kit",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 1876,
    image: "🎮",
    badge: "Educational",
    category: "Toys & Games",
    description: "Interactive building kit that teaches programming, robotics, and engineering concepts.",
    features: [
      "STEM learning focused",
      "200+ building pieces",
      "App-guided tutorials"
    ],
    inStock: true,
    stockCount: 38
  },
  // Automotive Products
  {
    id: 801,
    name: "Car Phone Mount",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.6,
    reviews: 2134,
    image: "🚗",
    badge: "Universal",
    category: "Automotive",
    description: "Universal car phone mount with strong magnetic hold and 360-degree rotation.",
    features: [
      "Universal compatibility",
      "Strong magnetic hold",
      "360-degree rotation"
    ],
    inStock: true,
    stockCount: 67
  },
  // Health & Wellness Products
  {
    id: 901,
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1567,
    image: "💊",
    badge: "Eco-Friendly",
    category: "Health & Wellness",
    description: "Premium yoga mat made from eco-friendly materials with excellent grip and cushioning.",
    colors: ["Purple", "Blue", "Green", "Pink"],
    features: [
      "Eco-friendly material",
      "Non-slip surface",
      "6mm thick cushioning"
    ],
    inStock: true,
    stockCount: 54
  },
  // Food & Beverages Products
  {
    id: 1001,
    name: "Organic Coffee Beans",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.9,
    reviews: 2845,
    image: "🍔",
    badge: "Organic",
    category: "Food & Beverages",
    description: "Premium organic coffee beans sourced from sustainable farms.",
    features: [
      "100% organic certified",
      "Medium roast",
      "Single origin"
    ],
    inStock: true,
    stockCount: 78
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
  { id: 1, name: "Wireless Headphones", price: 99.99, stock: 25, status: "active" },
  { id: 2, name: "Smart Watch", price: 299.99, stock: 12, status: "active" },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, stock: 0, status: "out_of_stock" }
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
  }
];
