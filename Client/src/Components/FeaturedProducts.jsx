import React from 'react';
import Products from './Products';

export const featuredProducts = [
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
    id: 3,
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
    id: 4,
    name: "Minimalist Backpack",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 892,
    image: "🎒",
    badge: "Trending",
    category: "Accessories"
  }
];

const FeaturedProducts = ({ likedProducts, toggleLike, addToCart, cartItems, isUserLoggedIn, handleUserClick }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our most popular items loved by customers like you
          </p>
        </div>
        <Products 
          products={featuredProducts}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
          cartItems={cartItems}
          isUserLoggedIn={isUserLoggedIn}
          handleUserClick={handleUserClick}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
