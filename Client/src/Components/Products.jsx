import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProductGrid from './ProductGrid';

export default function Products({ products, likedProducts, toggleLike, addToCart }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Hand-picked favorites just for you</p>
          </div>
          <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <ProductGrid 
          products={products}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
          addToCart={addToCart}
        />
      </div>
    </section>
  );
}
