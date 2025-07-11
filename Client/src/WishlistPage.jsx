import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Star } from 'lucide-react';
import Navbar from './MainComponents/Navbar';
import { allProducts } from './Components/data';

export default function WishlistPage() {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [cartItems, setCartItems] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch the liked products from localStorage or a backend API
    // For now, we'll just show a demo of 2-3 random products
    const randomProducts = [];
    const indices = new Set();
    
    // Add 3 random products to wishlist for demo purposes
    while (indices.size < 3) {
      const randomIndex = Math.floor(Math.random() * allProducts.length);
      indices.add(randomIndex);
    }
    
    indices.forEach(index => {
      randomProducts.push(allProducts[index]);
      setLikedProducts(prev => new Set([...prev, allProducts[index].id]));
    });
    
    setWishlistProducts(randomProducts);
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        setWishlistProducts(prev => prev.filter(product => product.id !== productId));
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const addToCart = (product) => {
    setCartItems(prev => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // If no liked products, display a message
  if (wishlistProducts.length === 0) {
    return (
      <>
        <Navbar 
          isUserLoggedIn={isUserLoggedIn} 
          setIsUserLoggedIn={setIsUserLoggedIn}
          cartItems={cartItems}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div className="min-h-screen pt-20 pb-12 bg-gray-50">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="py-16 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Your Wishlist</h2>
              <p className="mb-8 text-xl text-gray-500">You haven't added any products to your wishlist yet.</p>
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar 
        isUserLoggedIn={isUserLoggedIn} 
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={cartItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="min-h-screen pt-20 pb-12 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Your Wishlist</h2>
            <p className="mt-2 text-lg text-gray-500">Items you've saved for later</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden transition-shadow bg-white shadow-lg cursor-pointer rounded-2xl hover:shadow-xl group"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <div className="flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
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
                    <Trash2 className="w-4 h-4 text-gray-600" />
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

          <div className="flex justify-center mt-8">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
