import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaypalPayment = () => {
  const navigate = useNavigate();

  const handlePaypalPayment = () => {
    // Simulate PayPal payment processing
    navigate('/payment/verification');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PayPal Payment</h1>
          <p className="text-gray-600">Complete your payment securely with PayPal</p>
        </div>

        {/* PayPal Payment Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-6">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="PayPal Logo"
              className="mx-auto w-28"
            />
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-700 text-sm">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>

          <button
            onClick={handlePaypalPayment}
            className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105"
          >
            Pay with PayPal
          </button>

          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mt-6">
            <div className="flex items-center">
              <span className="mr-1">🔒</span>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🛡️</span>
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/payment/flow')}
            className="text-yellow-600 hover:text-yellow-700 font-medium"
          >
            ← Back to Payment Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaypalPayment;
