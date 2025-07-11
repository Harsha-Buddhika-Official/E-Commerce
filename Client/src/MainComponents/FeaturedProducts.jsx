import React, { useMemo } from 'react';
import Products from '../Components/Products';
import { allProducts } from '../Components/data';

const FeaturedProducts = ({ likedProducts, toggleLike, addToCart, cartItems, isUserLoggedIn, handleUserClick }) => {
  // Shuffle products to show mixed categories instead of grouped by category
  const shuffledProducts = useMemo(() => {
    const shuffled = [...allProducts];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-500">
            Discover our most popular items from all categories
          </p>
        </div>
        <Products 
          products={shuffledProducts}
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
