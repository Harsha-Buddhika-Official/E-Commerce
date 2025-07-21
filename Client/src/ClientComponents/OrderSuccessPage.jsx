import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home, Download, Mail } from 'lucide-react';
import Navbar from '../MainComponents/Navbar';
import Footer from '../MainComponents/Footer';
import { useLocation } from 'react-router-dom';

export default function OrderSuccessPage({ isUserLoggedIn = false, setIsUserLoggedIn = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const orderData = location.state || {
    orderNumber: 'ORD123456',
    orderSummary: { total: 0 },
    shippingInfo: {}
  };

  const { orderNumber, orderSummary, shippingInfo } = orderData;

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={0}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Order #{orderNumber}</h2>
                  <p className="text-sm text-gray-500">Placed on {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">${orderSummary.total?.toFixed(2) || '0.00'}</p>
                  <p className="text-sm text-gray-500">Total Amount</p>
                </div>
              </div>

              {/* Order Status Timeline */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-xs text-green-600 font-medium">Confirmed</span>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Preparing</span>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Truck className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Shipped</span>
                  </div>
                  
                  <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                      <Home className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">Delivered</span>
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              {shippingInfo.firstName && (
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <div className="text-sm text-gray-600">
                    <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p>{shippingInfo.address}</p>
                    {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
                    <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                  </div>
                </div>
              )}

              {/* Estimated Delivery */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Estimated Delivery</p>
                    <p className="text-sm text-gray-600">{estimatedDelivery.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download Receipt
            </button>
            
            <button className="flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              <Mail className="w-5 h-5 mr-2" />
              Email Receipt
            </button>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h3>
            <div className="space-y-2 text-sm text-blue-700">
              <p>• You'll receive an email confirmation shortly</p>
              <p>• We'll notify you when your order ships with tracking information</p>
              <p>• Your order will be prepared and shipped within 1-2 business days</p>
              <p>• Estimated delivery: 3-5 business days</p>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>

          {/* Support Info */}
          <div className="text-center mt-8 p-6 bg-gray-100 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you have any questions about your order, feel free to contact our customer support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq" 
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
