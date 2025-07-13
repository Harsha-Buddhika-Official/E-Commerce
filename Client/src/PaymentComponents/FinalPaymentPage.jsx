import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalPaymentPage = () => {
  const [orderDetails] = useState({
    orderNumber: 'ORD-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    items: [
      { id: 1, name: 'Wireless Bluetooth Headphones', price: 79.99, quantity: 1, image: '🎧' },
      { id: 2, name: 'USB-C Charging Cable', price: 19.99, quantity: 2, image: '🔌' }
    ],
    subtotal: 119.97,
    shipping: 9.99,
    tax: 10.44,
    total: 140.40,
    paymentMethod: '**** **** **** 1234',
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()
  });

  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const downloadReceipt = () => {
    // Simulate downloading receipt
    const element = document.createElement('a');
    const file = new Blob([`Order Receipt\nOrder Number: ${orderDetails.orderNumber}\nTotal: $${orderDetails.total}`], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = `receipt-${orderDetails.orderNumber}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 relative z-20">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-4xl font-bold text-green-600 mb-2">Payment Successful!</h1>
          <p className="text-xl text-gray-700">Thank you for your purchase</p>
          <p className="text-gray-600">Order #{orderDetails.orderNumber}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">📦</span>
                Order Details
              </h2>
              
              <div className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">{item.image}</div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${orderDetails.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${orderDetails.tax.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🚚</span>
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Delivery Address</h3>
                  <div className="text-gray-600">
                    <p>{orderDetails.shippingAddress.name}</p>
                    <p>{orderDetails.shippingAddress.street}</p>
                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}</p>
                    <p>{orderDetails.shippingAddress.country}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Estimated Delivery</h3>
                  <p className="text-lg font-semibold text-green-600">{orderDetails.estimatedDelivery}</p>
                  <p className="text-sm text-gray-600">Standard shipping (3-5 business days)</p>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">💳</span>
                Payment Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
                  <p className="text-gray-600">Credit Card ending in {orderDetails.paymentMethod}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Transaction Date</h3>
                  <p className="text-gray-600">{orderDetails.date} at {orderDetails.time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <button
                  onClick={downloadReceipt}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">📄</span>
                  Download Receipt
                </button>
                
                <button
                  onClick={() => window.print()}
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">🖨️</span>
                  Print Order
                </button>
                
                <button
                  onClick={() => navigate('/user-dashboard')}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">👤</span>
                  View Dashboard
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <span className="mr-2">🏠</span>
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Order Tracking */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">📍</span>
                Order Tracking
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-green-600">Order Confirmed</p>
                    <p className="text-sm text-gray-600">{orderDetails.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-yellow-600">Processing</p>
                    <p className="text-sm text-gray-600">Expected tomorrow</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-400">Shipped</p>
                    <p className="text-sm text-gray-400">Pending</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-400">Delivered</p>
                    <p className="text-sm text-gray-400">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🛟</span>
                Need Help?
              </h2>
              
              <div className="space-y-3">
                <button className="w-full text-left text-blue-600 hover:text-blue-700 py-2 px-3 hover:bg-blue-50 rounded">
                  📞 Contact Support
                </button>
                <button className="w-full text-left text-blue-600 hover:text-blue-700 py-2 px-3 hover:bg-blue-50 rounded">
                  ❓ Track My Order
                </button>
                <button className="w-full text-left text-blue-600 hover:text-blue-700 py-2 px-3 hover:bg-blue-50 rounded">
                  🔄 Return Policy
                </button>
                <button className="w-full text-left text-blue-600 hover:text-blue-700 py-2 px-3 hover:bg-blue-50 rounded">
                  💬 Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You for Your Business!</h2>
          <p className="text-gray-600 mb-4">
            We appreciate your order and look forward to serving you again. 
            You'll receive email updates about your order status.
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <span className="text-sm">Rate Your Experience</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📱</span>
              <span className="text-sm">Download Our App</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📧</span>
              <span className="text-sm">Join Our Newsletter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPaymentPage;