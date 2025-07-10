import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function Beauty() {
  const [sortBy, setSortBy] = useState('featured');
  const [skinType, setSkinType] = useState('all');
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

  const beautyProducts = [
    {
      id: 501,
      name: "Luxury Lipstick Set",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 2847,
      image: "💄",
      badge: "Bestseller",
      category: "Beauty"
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
      category: "Beauty"
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
      category: "Beauty"
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
      category: "Beauty"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">💄</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Beauty</h1>
              <p className="text-xl text-purple-100">
                Enhance your natural beauty with premium products
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            
            <select 
              value={skinType} 
              onChange={(e) => setSkinType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Skin Types</option>
              <option value="oily">Oily Skin</option>
              <option value="dry">Dry Skin</option>
              <option value="combination">Combination</option>
              <option value="sensitive">Sensitive</option>
            </select>
          </div>
          
          <p className="text-gray-600">
            Showing {beautyProducts.length} products
          </p>
        </div>

        <ProductGrid 
          products={beautyProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
        />
      </div>

      <Footer />
    </div>
  );
}
