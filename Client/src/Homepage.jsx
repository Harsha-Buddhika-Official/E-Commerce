import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Component Imports
import Navbar from './MainComponents/Navbar';
import Slides from './MainComponents/Slides';
import FeaturesBar from './MainComponents/FeaturesBar';
import Categories from './Components/Categories';
import FeaturedProducts from './MainComponents/FeaturedProducts';
import Footer from './MainComponents/Footer';

// Data Imports
import { categories } from './Components/data';

export default function Homepage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [cartItems, setCartItems] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides total
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
      navigate('/user-dashboard');
    } else {
      navigate('/auth');
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
        <Slides
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