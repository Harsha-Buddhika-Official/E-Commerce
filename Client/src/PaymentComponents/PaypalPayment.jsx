import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaypalPayment = () => {
  const navigate = useNavigate();

  const handlePaypalPayment = () => {
    // Simulate PayPal payment processing
    navigate('/payment/verification');
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">PayPal Payment</h1>
          <p className="text-gray-600">Complete your payment securely with PayPal</p>
        </div>

        {/* PayPal Payment Section */}
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <div className="mb-6 text-center">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
              alt="PayPal Logo"
              className="mx-auto w-28"
            />
          </div>

          <div className="mb-6 text-center">
            <p className="text-sm text-gray-700">
              You will be redirected to PayPal to complete your payment.
            </p>
          </div>

          <button
            onClick={handlePaypalPayment}
            className="w-full px-6 py-3 font-semibold text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:scale-105"
          >
            Pay with PayPal
          </button>

          <div className="flex items-center justify-center mt-6 space-x-4 text-sm text-gray-500">
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
            className="font-medium text-yellow-600 hover:text-yellow-700"
          >
            ← Back to Payment Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaypalPayment;
