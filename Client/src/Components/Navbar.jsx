import React from 'react';
import { ShoppingBag, Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ isUserLoggedIn, setIsUserLoggedIn, cartItems, isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (isUserLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">ShopVibe</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Categories</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Deals</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={handleUserClick}
            >
              <User className="w-5 h-5" />
            </button>
            {/* Temporary login toggle for testing - remove in production */}
            <button 
              className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
              onClick={() => setIsUserLoggedIn(!isUserLoggedIn)}
            >
              {isUserLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
