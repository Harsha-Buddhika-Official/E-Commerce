import React from 'react';
import Products from './Products';
import { allProducts } from './data';

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
          products={allProducts}
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
