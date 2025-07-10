import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component Imports
import Navbar from './Components/Navbar';
import HeroSlider from './Components/HeroSlider';
import FeaturesBar from './Components/FeaturesBar';
import Categories from './Components/Categories';
import FeaturedProducts from './Components/FeaturedProducts';
import Footer from './Components/Footer';

// Data Imports
import { categories } from './Components/data';

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
      navigate('/User-dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={cartItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

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