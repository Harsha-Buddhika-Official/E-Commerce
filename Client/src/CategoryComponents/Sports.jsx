import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function Sports() {
  const [sortBy, setSortBy] = useState('featured');
  const [sportType, setSportType] = useState('all');
  const [likedProducts, setLikedProducts] = useState(new Set());

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const addToCart = (product) => {
    console.log('Added to cart:', product);
    // Add cart functionality here
  };

  const sportsProducts = [
    {
      id: 401,
      name: "Professional Soccer Ball",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 1847,
      image: "⚽",
      badge: "FIFA Approved",
      category: "Sports"
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
      category: "Sports"
    },
    {
      id: 403,
      name: "Basketball Shoes Pro",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 923,
      image: "🏀",
      badge: "Performance",
      category: "Sports"
    },
    {
      id: 404,
      name: "Swimming Goggles",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 1456,
      image: "🏊",
      badge: "Anti-Fog",
      category: "Sports"
    },
    {
      id: 405,
      name: "Dumbbells Set",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 756,
      image: "🏋️",
      badge: "Adjustable",
      category: "Sports"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">⚽</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports</h1>
              <p className="text-xl text-orange-100">
                Gear up for your next adventure
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            
            <select 
              value={sportType} 
              onChange={(e) => setSportType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Sports</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="fitness">Fitness</option>
              <option value="swimming">Swimming</option>
              <option value="running">Running</option>
            </select>
          </div>
          
          <p className="text-gray-600">
            Showing {sportsProducts.length} products
          </p>
        </div>

        <ProductGrid 
          products={sportsProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
        />
      </div>

      <Footer />
    </div>
  );
}
