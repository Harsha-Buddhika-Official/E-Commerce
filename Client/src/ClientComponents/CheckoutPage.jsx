import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, MapPin, User, Phone, Mail } from 'lucide-react';
import Navbar from '../MainComponents/Navbar';
import Footer from '../MainComponents/Footer';

export default function CheckoutPage({ isUserLoggedIn = false, setIsUserLoggedIn = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get cart data from location state or localStorage
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);
  const [orderSummary, setOrderSummary] = useState(location.state?.orderSummary || {});
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    saveCard: false
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // If no cart items, redirect back to cart
    if (!cartItems.length) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const steps = [
    { id: 1, title: 'Shipping', icon: Truck },
    { id: 2, title: 'Payment', icon: CreditCard },
    { id: 3, title: 'Review', icon: Shield }
  ];

  const validateShipping = () => {
    const newErrors = {};
    if (!shippingInfo.firstName) newErrors.firstName = 'First name is required';
    if (!shippingInfo.lastName) newErrors.lastName = 'Last name is required';
    if (!shippingInfo.email) newErrors.email = 'Email is required';
    if (!shippingInfo.phone) newErrors.phone = 'Phone number is required';
    if (!shippingInfo.address) newErrors.address = 'Address is required';
    if (!shippingInfo.city) newErrors.city = 'City is required';
    if (!shippingInfo.state) newErrors.state = 'State is required';
    if (!shippingInfo.zipCode) newErrors.zipCode = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePayment = () => {
    const newErrors = {};
    if (!paymentInfo.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!paymentInfo.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!paymentInfo.cvv) newErrors.cvv = 'CVV is required';
    if (!paymentInfo.cardName) newErrors.cardName = 'Cardholder name is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateShipping()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validatePayment()) {
      setCurrentStep(3);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart and redirect to success page
      navigate('/order-success', {
        state: {
          orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
          orderSummary,
          shippingInfo
        }
      });
    } catch (error) {
      console.error('Order failed:', error);
      setIsProcessing(false);
    }
  };

  const handleInputChange = (section, field, value) => {
    if (section === 'shipping') {
      setShippingInfo(prev => ({ ...prev, [field]: value }));
    } else if (section === 'payment') {
      setPaymentInfo(prev => ({ ...prev, [field]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const renderShippingForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            First Name *
          </label>
          <input
            type="text"
            value={shippingInfo.firstName}
            onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John"
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Last Name *
          </label>
          <input
            type="text"
            value={shippingInfo.lastName}
            onChange={(e) => handleInputChange('shipping', 'lastName', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            value={shippingInfo.email}
            onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            value={shippingInfo.phone}
            onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Street Address *
        </label>
        <input
          type="text"
          value={shippingInfo.address}
          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="123 Main Street"
        />
        {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Apartment, suite, etc. (optional)
        </label>
        <input
          type="text"
          value={shippingInfo.apartment}
          onChange={(e) => handleInputChange('shipping', 'apartment', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Apt 4B"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            City *
          </label>
          <input
            type="text"
            value={shippingInfo.city}
            onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.city ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="New York"
          />
          {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            State *
          </label>
          <input
            type="text"
            value={shippingInfo.state}
            onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="NY"
          />
          {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ZIP Code *
          </label>
          <input
            type="text"
            value={shippingInfo.zipCode}
            onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.zipCode ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="10001"
          />
          {errors.zipCode && <p className="mt-1 text-xs text-red-500">{errors.zipCode}</p>}
        </div>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Card Number *
        </label>
        <input
          type="text"
          value={paymentInfo.cardNumber}
          onChange={(e) => handleInputChange('payment', 'cardNumber', formatCardNumber(e.target.value))}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
        />
        {errors.cardNumber && <p className="mt-1 text-xs text-red-500">{errors.cardNumber}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Expiry Date *
          </label>
          <input
            type="text"
            value={paymentInfo.expiryDate}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, '');
              if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
              }
              handleInputChange('payment', 'expiryDate', value);
            }}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.expiryDate ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="MM/YY"
            maxLength="5"
          />
          {errors.expiryDate && <p className="mt-1 text-xs text-red-500">{errors.expiryDate}</p>}
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            CVV *
          </label>
          <input
            type="text"
            value={paymentInfo.cvv}
            onChange={(e) => handleInputChange('payment', 'cvv', e.target.value.replace(/\D/g, ''))}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.cvv ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="123"
            maxLength="4"
          />
          {errors.cvv && <p className="mt-1 text-xs text-red-500">{errors.cvv}</p>}
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Cardholder Name *
        </label>
        <input
          type="text"
          value={paymentInfo.cardName}
          onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
            errors.cardName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="John Doe"
        />
        {errors.cardName && <p className="mt-1 text-xs text-red-500">{errors.cardName}</p>}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="saveCard"
          checked={paymentInfo.saveCard}
          onChange={(e) => handleInputChange('payment', 'saveCard', e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="saveCard" className="text-sm text-gray-600">
          Save this card for future purchases
        </label>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6">
      {/* Shipping Information */}
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-900">
          <MapPin className="w-5 h-5 mr-2" />
          Shipping Address
        </h3>
        <div className="text-sm text-gray-600">
          <p>{shippingInfo.firstName} {shippingInfo.lastName}</p>
          <p>{shippingInfo.address}</p>
          {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
          <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
          <p>{shippingInfo.email}</p>
          <p>{shippingInfo.phone}</p>
        </div>
      </div>

      {/* Payment Information */}
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="flex items-center mb-3 text-lg font-semibold text-gray-900">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Method
        </h3>
        <div className="text-sm text-gray-600">
          <p>**** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
          <p>{paymentInfo.cardName}</p>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="mb-3 text-lg font-semibold text-gray-900">Order Items</h3>
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="object-cover w-12 h-12 mr-3 rounded-lg"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const totalItems = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={totalItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="container flex-grow px-4 py-8 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center mb-4 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Cart
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        currentStep >= step.id 
                          ? 'bg-purple-600 border-purple-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="ml-3 text-sm">
                        <p className={`font-medium ${currentStep >= step.id ? 'text-purple-600' : 'text-gray-400'}`}>
                          {step.title}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`mx-4 h-0.5 w-16 ${currentStep > step.id ? 'bg-purple-600' : 'bg-gray-300'}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Content */}
            <div className="overflow-hidden bg-white shadow-sm rounded-xl">
              <div className="p-6">
                {currentStep === 1 && (
                  <>
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">Shipping Information</h2>
                    {renderShippingForm()}
                  </>
                )}
                
                {currentStep === 2 && (
                  <>
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">Payment Information</h2>
                    {renderPaymentForm()}
                  </>
                )}
                
                {currentStep === 3 && (
                  <>
                    <h2 className="mb-6 text-xl font-semibold text-gray-900">Review Your Order</h2>
                    {renderReview()}
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={handleNext}
                      className="px-6 py-2 font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        isProcessing
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky overflow-hidden bg-white shadow-sm rounded-xl top-20">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold text-gray-900">Order Summary</h2>
                
                <div className="mb-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-16 h-16 mr-3 rounded-lg"
                      />
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-purple-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${orderSummary.subtotal?.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${orderSummary.shipping?.toFixed(2) || '5.99'}</span>
                  </div>
                  <div className="flex justify-between pt-3 text-lg font-semibold border-t border-gray-200">
                    <span>Total</span>
                    <span className="text-purple-600">${orderSummary.total?.toFixed(2) || '0.00'}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-xs text-gray-500">
                  <p className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Secure checkout with SSL encryption
                  </p>
                  <p>Free returns within 30 days</p>
                  <p>Estimated delivery: 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
