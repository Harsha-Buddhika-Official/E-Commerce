import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, ShoppingCart, Star, ArrowRight, TrendingUp, Zap, Gift, Truck, Shield, Headphones, Menu, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Component Imports
import Navbar from './Components/Navbar';
import HeroSlider from './Components/HeroSlider';
import FeaturesBar from './Components/FeaturesBar';
import Categories from './Components/Categories';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';

export default function Homepage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [cartItems, setCartItems] = useState(0);
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
      <Navbar/>

      {/* Hero Section */}
      <div>
        <HeroSlider
          slides={heroSlides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          toggleLike={toggleLike}
          likedProducts={likedProducts}
          addToCart={addToCart}
        />
      </div>

      {/* Features Bar */}
      <div>
        <FeaturesBar/>
      </div>

      {/* Categories */}
      <div>
        <Categories categories={categories} />
      </div>

      {/* Featured Products */}
      <div>
        <FeaturedProducts
          products={featuredProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
          cartItems={cartItems}
          isUserLoggedIn={isUserLoggedIn}
          handleUserClick={handleUserClick}
        />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}