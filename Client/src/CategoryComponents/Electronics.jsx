import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function Electronics() {
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

  const electronicsProducts = [
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
      id: 3,
      name: "Gaming Laptop Ultra",
      price: 1299.99,
      originalPrice: 1599.99,
      rating: 4.9,
      reviews: 1847,
      image: "💻",
      badge: "Gaming",
      category: "Electronics"
    },
    {
      id: 4,
      name: "4K Webcam Pro",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.7,
      reviews: 923,
      image: "📹",
      badge: "Professional",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Wireless Charger Pad",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.5,
      reviews: 1456,
      image: "🔌",
      badge: "Convenient",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 892,
      image: "🔊",
      badge: "Trending",
      category: "Electronics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">📱</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics</h1>
              <p className="text-xl text-blue-100">
                Discover the latest in technology and gadgets
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Electronics Products</h2>
              <p className="text-gray-600">Latest technology and gadgets</p>
            </div>
            <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <ProductGrid 
            products={electronicsProducts}
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
