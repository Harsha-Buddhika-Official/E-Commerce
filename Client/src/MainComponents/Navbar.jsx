import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { categories } from '../Components/data';

export default function Navbar({ isUserLoggedIn, setIsUserLoggedIn, cartItems, isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleUserClick = () => {
    if (isUserLoggedIn) {
      navigate('/user-dashboard');
    } else {
      navigate('/user/login');
    }
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    // You can add additional logout logic here (clear tokens, etc.)
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">ShopVibe</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 hidden max-w-lg mx-8 md:flex">
            <div className="relative w-full">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="items-center hidden md:flex space-x-7">
            <Link to="/" className="text-gray-700 transition-colors hover:text-purple-600">Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center text-gray-700 transition-colors hover:text-purple-600"
                onBlur={() => setTimeout(() => setIsCategoriesOpen(false), 150)}
              >
                Categories
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute left-0 z-50 w-48 mt-1 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg top-full">
                  <Link
                    to="/categories"
                    className="flex items-center px-4 py-3 font-semibold text-purple-600 transition-colors border-b border-gray-100 hover:bg-purple-50"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    <span className="mr-3 text-lg">📋</span>
                    <span>All Categories</span>
                  </Link>
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="flex items-center px-4 py-3 text-gray-700 transition-colors border-b border-gray-100 hover:bg-gray-50 hover:text-purple-600 last:border-b-0"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 transition-colors hover:text-purple-600">About</Link>
            <Link to="/contact" className="text-gray-700 transition-colors hover:text-purple-600">Contact</Link>
            <Link to="/faq" className="text-gray-700 transition-colors hover:text-purple-600">FAQ</Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center ml-3 space-x-4">
            <button 
              className="p-2 text-gray-700 transition-colors hover:text-purple-600"
              onClick={handleUserClick}
              title={isUserLoggedIn ? 'Go to Dashboard' : 'Login'}
            >
              <User className="w-5 h-5 " />
            </button>
            
            {/* Show Login button only when user is not logged in */}
            {!isUserLoggedIn && (
              <button 
                className="px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
                onClick={() => navigate('/auth')}
              >
                Login
              </button>
            )}
            
            {/* Show Logout button only when user is logged in */}
            {isUserLoggedIn && (
              <button 
                className="px-4 py-2 text-sm font-medium text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            
            <Link to="/wishlist" className="relative p-2 text-gray-700 transition-colors hover:text-purple-600">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="relative p-2 text-gray-700 transition-colors hover:text-purple-600">
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
                  {cartItems}
                </span>
              )}
            </Link>
            <button 
              className="p-2 text-gray-700 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 sm:px-3">
              {/* Mobile Search */}
              <div className="relative mb-3">
                <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors hover:text-purple-600">Home</a>
              
              {/* Mobile Categories */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-500">Categories</div>
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-6 py-2 text-gray-700 transition-colors hover:text-purple-600"
                  >
                    <span className="mr-3 text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </a>
                ))}
              </div>
              
              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors hover:text-purple-600">Deals</a>
              <a href="#" className="block px-3 py-2 text-gray-700 transition-colors hover:text-purple-600">About</a>
              
              {/* Mobile Cart Link */}
              <Link 
                to="/cart"
                className="flex items-center px-3 py-2 text-gray-700 transition-colors hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span>Cart</span>
                {cartItems > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white bg-red-500 rounded-full">
                    {cartItems}
                  </span>
                )}
              </Link>
              
              {/* Mobile Login/Logout */}
              <div className="pt-2 mt-3 border-t border-gray-200">
                {!isUserLoggedIn ? (
                  <button 
                    className="w-full px-3 py-2 font-medium text-left text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
                    onClick={() => {
                      navigate('/auth');
                      setIsMenuOpen(false);
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <button 
                    className="w-full px-3 py-2 font-medium text-left text-white transition-colors bg-gray-600 rounded-lg hover:bg-gray-700"
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
