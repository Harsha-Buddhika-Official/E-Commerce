import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';

export default function HomeGarden() {
  const [sortBy, setSortBy] = useState('featured');
  const [room, setRoom] = useState('all');
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

  // Sample home & garden products
  const homeGardenProducts = [
    {
      id: 301,
      name: "Smart LED Light Bulbs",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.7,
      reviews: 1456,
      image: "💡",
      badge: "Smart Home",
      category: "Home & Garden"
    },
    {
      id: 302,
      name: "Indoor Plant Collection",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 892,
      image: "🪴",
      badge: "Air Purifying",
      category: "Home & Garden"
    },
    {
      id: 303,
      name: "Ceramic Dinner Set",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 634,
      image: "🍽️",
      badge: "Premium",
      category: "Home & Garden"
    },
    {
      id: 304,
      name: "Garden Tool Set",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.5,
      reviews: 1023,
      image: "🔧",
      badge: "Professional",
      category: "Home & Garden"
    },
    {
      id: 305,
      name: "Cozy Throw Pillows",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 2134,
      image: "🛋️",
      badge: "Bestseller",
      category: "Home & Garden"
    },
    {
      id: 306,
      name: "Outdoor Solar Lights",
      price: 69.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 756,
      image: "🌞",
      badge: "Eco-Friendly",
      category: "Home & Garden"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Hero */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">🏡</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Home & Garden</h1>
              <p className="text-xl text-green-100">
                Transform your living space into a beautiful sanctuary
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            
            <select 
              value={room} 
              onChange={(e) => setRoom(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Rooms</option>
              <option value="living">Living Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="garden">Garden</option>
            </select>
          </div>
          
          <p className="text-gray-600">
            Showing {homeGardenProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <ProductGrid 
          products={homeGardenProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
        />
      </div>

      <Footer />
    </div>
  );
}
