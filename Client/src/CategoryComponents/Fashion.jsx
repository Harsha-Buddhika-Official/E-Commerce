import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function Fashion() {
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

  const fashionProducts = [
    {
      id: 1,
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
      id: 2,
      name: "Summer Dress",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 892,
      image: "👗",
      badge: "Trending",
      category: "Fashion"
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 249.99,
      originalPrice: 299.99,
      rating: 4.9,
      reviews: 654,
      image: "🧥",
      badge: "Premium",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Designer Handbag",
      price: 189.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 1234,
      image: "👜",
      badge: "Luxury",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Casual T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 2156,
      image: "👕",
      badge: "Bestseller",
      category: "Fashion"
    },
    {
      id: 6,
      name: "Denim Jeans",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.6,
      reviews: 1876,
      image: "👖",
      badge: "Classic",
      category: "Fashion"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Hero */}
      <div className="bg-gradient-to-br from-pink-600 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">👗</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fashion</h1>
              <p className="text-xl text-pink-100">
                Discover the latest trends and styles
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Fashion Products</h2>
              <p className="text-gray-600">Latest trends and styles</p>
            </div>
            <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <ProductGrid 
            products={fashionProducts}
            likedProducts={likedProducts}
            toggleLike={toggleLike}
            addToCart={addToCart}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
