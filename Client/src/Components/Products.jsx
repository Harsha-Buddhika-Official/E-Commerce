import React from 'react';
import { ArrowRight, Heart, ShoppingCart, Star } from 'lucide-react';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{product.image}</span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </span>
                </div>
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedProducts.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={addToCart}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
