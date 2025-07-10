import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';
import { healthWellnessProducts } from '../Components/data';

export default function HealthWellness() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Hero */}
      <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">🏥</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness</h1>
              <p className="text-xl text-green-100">
                Your journey to a healthier lifestyle starts here
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Health & Wellness Products</h2>
              <p className="text-gray-600">Everything you need for a healthy lifestyle</p>
            </div>
            <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <ProductGrid 
            products={healthWellnessProducts}
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
