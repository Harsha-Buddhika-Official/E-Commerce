import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function GenericCategory({ categoryName, categoryIcon, categoryColor, products }) {
  const [sortBy, setSortBy] = useState('featured');
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

  // Default products if none provided
  const defaultProducts = [
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

  const displayProducts = products || defaultProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className={`bg-gradient-to-br ${categoryColor} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">{categoryIcon}</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName}</h1>
              <p className="text-xl opacity-90">
                Discover amazing {categoryName.toLowerCase()} products
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          
          <p className="text-gray-600">
            Showing {displayProducts.length} products
          </p>
        </div>

        <ProductGrid 
          products={displayProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
        />
      </div>

      <Footer />
    </div>
  );
}
