import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Creditcard = () => {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
    saveCard: false
  });

  const [cardType, setCardType] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  // Detect card type based on number
  const detectCardType = (number) => {
    const patterns = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      amex: /^3[47]/,
      discover: /^6(?:011|5)/
    };

    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(number)) {
        return type;
      }
    }
    return '';
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

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setCardData(prev => ({ ...prev, [name]: checked }));
      return;
    }

    let formattedValue = value;
    
    if (name === 'number') {
      formattedValue = formatCardNumber(value);
      const cleanNumber = value.replace(/\s/g, '');
      setCardType(detectCardType(cleanNumber));
    } else if (name === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    setCardData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const getCardIcon = (type) => {
    const icons = {
      visa: '💳',
      mastercard: '🔴',
      amex: '🔵',
      discover: '🟠'
    };
    return icons[type] || '💳';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment
    navigate('/payment/verification');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Credit Card Payment</h1>
          <p className="text-gray-600">Enter your card details securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Credit Card Display */}
          <div className="flex justify-center">
            <div className="relative w-80 h-48 preserve-3d" style={{ perspective: '1000px' }}>
              <div 
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-2xl">{getCardIcon(cardType)}</div>
                      <div className="text-right">
                        <div className="text-xs opacity-75">VALID THRU</div>
                        <div className="text-sm">{cardData.expiry || 'MM/YY'}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-lg font-mono tracking-wider">
                        {cardData.number || '•••• •••• •••• ••••'}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-75">CARDHOLDER NAME</div>
                        <div className="text-sm font-medium">
                          {cardData.name || 'YOUR NAME'}
                        </div>
                      </div>
                      <div className="text-xs opacity-75 uppercase">
                        {cardType || 'CARD TYPE'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl text-white shadow-2xl">
                    <div className="w-full h-12 bg-black mt-6"></div>
                    <div className="p-6">
                      <div className="text-right mb-4">
                        <div className="text-xs opacity-75 mb-1">CVV</div>
                        <div className="bg-white text-black px-2 py-1 rounded text-right inline-block min-w-12">
                          {cardData.cvv || '•••'}
                        </div>
                      </div>
                      <div className="text-xs opacity-60">
                        This card is the property of the bank. If found, please return to any branch.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="number"
                    value={cardData.number}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => setIsFlipped(false)}
                  />
                  <div className="absolute right-3 top-3 text-xl">
                    {getCardIcon(cardType)}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={cardData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => setIsFlipped(false)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => setIsFlipped(false)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={cardData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => setIsFlipped(true)}
                    onBlur={() => setIsFlipped(false)}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="saveCard"
                  checked={cardData.saveCard}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Save this card for future purchases
                </label>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Amount to be charged:</span>
                  <span className="text-lg font-semibold text-gray-900">$118.78</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Pay Now
              </button>

              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-1">🔒</span>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">🛡️</span>
                  <span>256-bit Encryption</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-6 text-gray-500">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔐</span>
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💳</span>
              <span className="text-sm">All Cards Accepted</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <span className="text-sm">Trusted by Millions</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/payment/flow')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Payment Options
          </button>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default Creditcard;