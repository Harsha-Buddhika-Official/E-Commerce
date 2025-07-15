import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    }
    return v;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setFormData(prev => ({ ...prev, expiryDate: formatted }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    
    if (!formData.expiryDate || formData.expiryDate.length < 5) {
      newErrors.expiryDate = 'Please enter a valid expiry date';
    }
    
    if (!formData.cvv || formData.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    
    if (!formData.cardholderName.trim()) {
      newErrors.cardholderName = 'Please enter cardholder name';
    }
    
    if (!formData.billingAddress.street.trim()) {
      newErrors['billingAddress.street'] = 'Please enter street address';
    }
    
    if (!formData.billingAddress.city.trim()) {
      newErrors['billingAddress.city'] = 'Please enter city';
    }
    
    if (!formData.billingAddress.zipCode.trim()) {
      newErrors['billingAddress.zipCode'] = 'Please enter zip code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/payment/verification');
    }, 2000);
  };

  const renderPaymentFields = () => {
    if (paymentMethod === 'paypal') {
      return (
        <div className="mb-8">
          <h2 className="flex items-center mb-4 text-xl font-semibold">
            <span className="mr-2">🟡</span>
            PayPal Account Information
          </h2>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              PayPal Email
            </label>
            <input
              type="email"
              name="paypalEmail"
              value={formData.paypalEmail || ''}
              onChange={handleInputChange}
              placeholder="example@paypal.com"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.paypalEmail ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.paypalEmail && <p className="mt-1 text-sm text-red-500">{errors.paypalEmail}</p>}
          </div>
        </div>
      );
    }

    return (
      <div className="mb-8">
        <h2 className="flex items-center mb-4 text-xl font-semibold">
          <span className="mr-2">💳</span>
          Card Information
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.cardNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Expiry Date
            </label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              maxLength="5"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.expiryDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              maxLength="4"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.cvv ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.cardholderName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.cardholderName && <p className="mt-1 text-sm text-red-500">{errors.cardholderName}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-4xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Payment Details</h1>
          <p className="text-gray-600">Enter your payment information securely</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Payment Method Selection */}
                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-semibold">Select Payment Method</h2>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        paymentMethod === 'card'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth={2} d="M3 7h18M3 12h18m-7 5h7" />
                      </svg>
                      Card Payment
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                        paymentMethod === 'paypal'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth={2} d="M3 7h18M3 12h18m-7 5h7" />
                      </svg>
                      PayPal
                    </button>
                  </div>
                </div>

                {/* Payment Fields */}
                {renderPaymentFields()}

                {/* Billing Address */}
                <div className="mb-8">
                  <h2 className="flex items-center mb-4 text-xl font-semibold">
                    <span className="mr-2">🏠</span>
                    Billing Address
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <input
                        type="text"
                        name="billingAddress.street"
                        value={formData.billingAddress.street}
                        onChange={handleInputChange}
                        placeholder="123 Main Street"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors['billingAddress.street'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors['billingAddress.street'] && <p className="mt-1 text-sm text-red-500">{errors['billingAddress.street']}</p>}
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="billingAddress.city"
                        value={formData.billingAddress.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors['billingAddress.city'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors['billingAddress.city'] && <p className="mt-1 text-sm text-red-500">{errors['billingAddress.city']}</p>}
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="billingAddress.state"
                        value={formData.billingAddress.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="billingAddress.zipCode"
                        value={formData.billingAddress.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors['billingAddress.zipCode'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors['billingAddress.zipCode'] && <p className="mt-1 text-sm text-red-500">{errors['billingAddress.zipCode']}</p>}
                    </div>
                    
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        name="billingAddress.country"
                        value={formData.billingAddress.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isLoading 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Continue to Verification'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky p-6 bg-white rounded-lg shadow-lg top-8">
              <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
              
              <div className="mb-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$99.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$9.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$8.80</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$118.78</span>
                </div>
              </div>

              <div className="p-3 mb-4 border border-green-200 rounded-lg bg-green-50">
                <div className="flex items-center">
                  <span className="mr-2 text-green-600">🔒</span>
                  <span className="text-sm text-green-800">Secure SSL Encryption</span>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                <p>Your payment information is encrypted and secure. We don't store your card details.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button 
            onClick={() => navigate('/payment/flow')}
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Payment Method
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;