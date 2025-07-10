import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ isUserLoggedIn, setIsUserLoggedIn, cartItems, isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Home & Garden", icon: "🏡" },
    { name: "Sports", icon: "⚽" },
    { name: "Beauty", icon: "💄" },
    { name: "Books", icon: "📚" }
  ];

  const handleUserClick = () => {
    if (isUserLoggedIn) {
      navigate('/User-dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    // You can add additional logout logic here (clear tokens, etc.)
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
          <div className="hidden md:flex items-center space-x-7">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 150)}
              >
                Categories
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      <span className="text-lg mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Deals</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4 ml-3">
            <button 
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={handleUserClick}
              title={isUserLoggedIn ? 'Go to Dashboard' : 'Login'}
            >
              <User className="w-5 h-5 " />
            </button>
            
            {/* Show Login button only when user is not logged in */}
            {!isUserLoggedIn && (
              <button 
                className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
            )}
            
            {/* Show Logout button only when user is logged in */}
            {isUserLoggedIn && (
              <button 
                className="px-4 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              
              {/* Mobile Categories */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-500 text-sm font-medium">Categories</div>
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-6 py-2 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <span className="text-lg mr-3">{category.icon}</span>
                    <span>{category.name}</span>
                  </a>
                ))}
              </div>
              
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">Deals</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">About</a>
              
              {/* Mobile Login/Logout */}
              <div className="pt-2 border-t border-gray-200 mt-3">
                {!isUserLoggedIn ? (
                  <button 
                    className="w-full px-3 py-2 text-left bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <button 
                    className="w-full px-3 py-2 text-left bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
