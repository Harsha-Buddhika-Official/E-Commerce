import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const navigate = useNavigate();

  const steps = [
    { id: 1, title: 'Payment Method', icon: '💳' },
    { id: 2, title: 'Details', icon: '📋' },
    { id: 3, title: 'Verification', icon: '🔐' },
    { id: 4, title: 'Complete', icon: '✅' }
  ];

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Complete Your Payment</h1>
          <p className="text-gray-600">Secure checkout process</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="ml-3 text-sm">
                  <p className={`font-medium ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'}`}>
                    Step {step.id}
                  </p>
                  <p className={`${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'}`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 rounded ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          {currentStep === 1 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold">Choose Payment Method</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="text-center">
                    <div className="mb-2 text-3xl">💳</div>
                    <h3 className="font-medium">Credit/Debit Card</h3>
                    <p className="text-sm text-gray-600">Visa, MasterCard, Amex</p>
                  </div>
                </div>
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <div className="text-center">
                    <div className="mb-2 text-3xl">🔵</div>
                    <h3 className="font-medium">PayPal</h3>
                    <p className="text-sm text-gray-600">Pay with PayPal account</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold">Payment Details</h2>
              <p className="mb-4 text-gray-600">Selected: {paymentMethod === 'card' ? 'Credit/Debit Card' : paymentMethod === 'paypal' ? 'PayPal' : ''}</p>
              <div className="py-8 text-center">
                <div className="mb-4 text-6xl">📋</div>
                <p className="text-gray-600">Payment details form will be loaded here</p>
                <button 
                  onClick={() => navigate('/payment/details')}
                  className="px-6 py-2 mt-4 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Go to Details Page
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold">Verification</h2>
              <div className="py-8 text-center">
                <div className="mb-4 text-6xl">🔐</div>
                <p className="text-gray-600">Verification step will be processed here</p>
                <button 
                  onClick={() => navigate('/payment/verification')}
                  className="px-6 py-2 mt-4 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Go to Verification
                </button>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="mb-6 text-xl font-semibold">Payment Complete</h2>
              <div className="py-8 text-center">
                <div className="mb-4 text-6xl">✅</div>
                <h3 className="mb-2 text-xl font-semibold text-green-600">Payment Successful!</h3>
                <p className="mb-4 text-gray-600">Your order has been processed successfully</p>
                <button 
                  onClick={() => navigate('/payment/final')}
                  className="px-6 py-2 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                >
                  View Order Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button 
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentStep === 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          <button 
            onClick={nextStep}
            disabled={currentStep === 4}
            className={`px-6 py-2 rounded-lg transition-colors ${
              currentStep === 4 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFlow;