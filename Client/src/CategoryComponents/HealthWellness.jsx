import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

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

  const healthWellnessProducts = [
    {
      id: 801,
      name: "Smart Fitness Tracker",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.6,
      reviews: 1847,
      image: "📟",
      badge: "Best Seller",
      category: "Health & Wellness"
    },
    {
      id: 802,
      name: "Yoga Mat Premium",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 2341,
      image: "🧘",
      badge: "Eco-Friendly",
      category: "Health & Wellness"
    },
    {
      id: 803,
      name: "Protein Powder Blend",
      price: 39.99,
      originalPrice: 54.99,
      rating: 4.7,
      reviews: 923,
      image: "🥤",
      badge: "Organic",
      category: "Health & Wellness"
    },
    {
      id: 804,
      name: "Essential Oil Diffuser",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 1456,
      image: "🌿",
      badge: "Aromatherapy",
      category: "Health & Wellness"
    },
    {
      id: 805,
      name: "Digital Blood Pressure Monitor",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.5,
      reviews: 756,
      image: "🩺",
      badge: "Clinically Tested",
      category: "Health & Wellness"
    },
    {
      id: 806,
      name: "Massage Gun Pro",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviews: 1234,
      image: "💆",
      badge: "Recovery",
      category: "Health & Wellness"
    },
    {
      id: 807,
      name: "Vitamin D3 Supplements",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 892,
      image: "💊",
      badge: "Doctor Recommended",
      category: "Health & Wellness"
    },
    {
      id: 808,
      name: "Smart Water Bottle",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 567,
      image: "💧",
      badge: "Hydration Tracker",
      category: "Health & Wellness"
    }
  ];

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
