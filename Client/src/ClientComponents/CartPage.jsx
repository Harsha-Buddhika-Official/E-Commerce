import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../MainComponents/Navbar';
import Footer from '../MainComponents/Footer';

export default function CartPage({ isUserLoggedIn = false, setIsUserLoggedIn = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // This would typically come from a global state or context in a real app
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      quantity: 1
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      quantity: 2
    }
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(prev => prev.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const shipping = 5.99;
  const subtotal = calculateSubtotal();
  const total = subtotal + shipping;
  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

  const handleCheckout = () => {
    const orderSummary = {
      subtotal,
      shipping,
      total
    };
    
    navigate('/checkout', {
      state: {
        cartItems,
        orderSummary
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Navbar 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={totalItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Cart Items ({totalItems})</h2>
                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-6 flex items-center">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="ml-4 flex-grow">
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-purple-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => decreaseQuantity(item.id)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => increaseQuantity(item.id)}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="ml-6 text-right">
                          <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="mt-1 text-sm text-red-500 hover:text-red-600 transition-colors flex items-center"
                          >
                            <X className="w-4 h-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/" className="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-20">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-semibold text-purple-600">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center font-semibold"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </button>

                  <div className="mt-6 text-xs text-gray-500 space-y-2">
                    <p>Secure checkout powered by Stripe</p>
                    <p>Free returns within 30 days</p>
                    <p>Estimated delivery: 3-5 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden p-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full">
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
              <p className="mt-2 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
              <Link 
                to="/" 
                className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
