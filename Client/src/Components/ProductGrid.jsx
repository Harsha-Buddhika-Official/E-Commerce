import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductGrid({ products, likedProducts, toggleLike, addToCart }) {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden transition-shadow bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-xl group"
          onClick={() => handleProductClick(product.id)}
        >
          <div className="relative">
            <div className="flex items-center justify-center h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img 
                src={product.thumbnailImage} 
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
                {product.badge}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(product.id);
              }}
              className="absolute p-2 transition-shadow bg-white rounded-full shadow-md top-3 right-3 hover:shadow-lg"
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
              <span className="text-xs tracking-wide text-gray-500 uppercase">
                {product.category}
              </span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>
            
            <h3 className="mb-2 font-semibold text-gray-900">{product.name}</h3>
            
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
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="p-2 text-white transition-colors transform bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
