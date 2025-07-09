import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, ShoppingCart, Star, ArrowRight, TrendingUp, Zap, Gift, Truck, Shield, Headphones, Menu, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Homepage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [cartItems, setCartItems] = useState(0);
  // For now, we'll use a simple state to track login status
  // In a real app, this would come from a context or authentication service
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      description: "Fresh styles that make you stand out",
      bgColor: "from-pink-600 to-purple-600",
      image: "🌸"
    },
    {
      title: "Tech Essentials",
      subtitle: "Power up your lifestyle",
      description: "Cutting-edge gadgets for modern living",
      bgColor: "from-blue-600 to-cyan-600",
      image: "⚡"
    },
    {
      title: "Home & Living",
      subtitle: "Transform your space",
      description: "Beautiful designs for every room",
      bgColor: "from-emerald-600 to-teal-600",
      image: "🏠"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 2847,
      image: "🎧",
      badge: "Best Seller",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Designer Sneakers",
      price: 89.99,
      originalPrice: 120.00,
      rating: 4.6,
      reviews: 1523,
      image: "👟",
      badge: "New",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Smart Watch Series X",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.9,
      reviews: 3241,
      image: "⌚",
      badge: "Hot Deal",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Minimalist Backpack",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 892,
      image: "🎒",
      badge: "Trending",
      category: "Accessories"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "📱", color: "from-blue-500 to-purple-500" },
    { name: "Fashion", icon: "👗", color: "from-pink-500 to-rose-500" },
    { name: "Home & Garden", icon: "🏡", color: "from-green-500 to-emerald-500" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-red-500" },
    { name: "Beauty", icon: "💄", color: "from-purple-500 to-pink-500" },
    { name: "Books", icon: "📚", color: "from-indigo-500 to-blue-500" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const handleUserClick = () => {
    if (isUserLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">ShopVibe</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Deals</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={handleUserClick}
              >
                <User className="w-5 h-5" />
              </button>
              {/* Temporary login toggle for testing - remove in production */}
              <button 
                className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
              >
                {isUserLoggedIn ? 'Logout' : 'Login'}
              </button>
              <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center text-white px-4">
                <div className="text-6xl md:text-8xl mb-4 animate-pulse">{slide.image}</div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-2 font-medium">{slide.subtitle}</p>
                <p className="text-lg mb-8 opacity-90">{slide.description}</p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Truck className="w-4 h-4 text-green-600" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Headphones className="w-4 h-4 text-purple-600" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Gift className="w-4 h-4 text-pink-600" />
              <span>Gift Cards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Discover our wide range of products</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transition-transform transform group-hover:scale-105 shadow-lg`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-gray-600">Hand-picked favorites just for you</p>
            </div>
            <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedProducts.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={addToCart}
                      className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors transform hover:scale-105"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new products, exclusive deals, and special offers delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-xl border-none focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">ShopVibe</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your ultimate destination for quality products and exceptional shopping experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShopVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}