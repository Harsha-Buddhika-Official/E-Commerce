import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('creditcard');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const demoOptions = [
    {
      id: 'creditcard',
      title: 'Credit Card Demo',
      description: 'Interactive credit card payment with 3D card flip animation',
      icon: '💳',
      features: ['3D Card Animation', 'Real-time Validation', 'Card Type Detection'],
      route: '/payment/creditcard'
    },
    {
      id: 'flow',
      title: 'Payment Flow Demo',
      description: 'Complete payment process with step-by-step navigation',
      icon: '🔄',
      features: ['Multi-step Process', 'Progress Tracking', 'Method Selection'],
      route: '/payment/flow'
    },
    {
      id: 'details',
      title: 'Payment Details Demo',
      description: 'Comprehensive payment form with billing information',
      icon: '📋',
      features: ['Form Validation', 'Address Fields', 'Order Summary'],
      route: '/payment/details'
    },
    {
      id: 'verification',
      title: 'Verification Demo',
      description: '2FA verification with multiple authentication methods',
      icon: '🔐',
      features: ['SMS/Email/App Auth', 'Timer Countdown', 'Resend Options'],
      route: '/payment/verification'
    },
    {
      id: 'final',
      title: 'Success Page Demo',
      description: 'Order confirmation with tracking and receipt options',
      icon: '✅',
      features: ['Order Details', 'Download Receipt', 'Tracking Info'],
      route: '/payment/final'
    }
  ];

  const handleDemoLaunch = (route) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(route);
    }, 1000);
  };

  const handlePreview = (demoId) => {
    setSelectedDemo(demoId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment System Demo</h1>
          <p className="text-xl text-gray-600 mb-6">
            Explore our comprehensive payment components with interactive demos
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="mr-1">🚀</span>
              <span>Modern UI</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">📱</span>
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🔒</span>
              <span>Secure Processing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-semibold mb-6">Demo Components</h2>
              
              <div className="space-y-3">
                {demoOptions.map((demo) => (
                  <div
                    key={demo.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      selectedDemo === demo.id 
                        ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                    onClick={() => handlePreview(demo.id)}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">{demo.icon}</div>
                      <div className="flex-1">
                        <h3 className={`font-medium mb-1 ${
                          selectedDemo === demo.id ? 'text-indigo-900' : 'text-gray-900'
                        }`}>
                          {demo.title}
                        </h3>
                        <p className={`text-sm ${
                          selectedDemo === demo.id ? 'text-indigo-700' : 'text-gray-600'
                        }`}>
                          {demo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">💡 Demo Features</h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Interactive UI components</li>
                  <li>• Real-time form validation</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Accessibility optimized</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Demo Preview Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {selectedDemo && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="text-3xl mr-4">
                        {demoOptions.find(d => d.id === selectedDemo)?.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {demoOptions.find(d => d.id === selectedDemo)?.title}
                        </h2>
                        <p className="text-gray-600">
                          {demoOptions.find(d => d.id === selectedDemo)?.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {demoOptions.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Preview Cards */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Preview:</h3>
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                      {selectedDemo === 'creditcard' && (
                        <div className="text-center">
                          <div className="w-32 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white text-2xl">💳</span>
                          </div>
                          <p className="text-gray-600">Interactive credit card with flip animation</p>
                        </div>
                      )}
                      
                      {selectedDemo === 'flow' && (
                        <div className="text-center">
                          <div className="flex justify-center space-x-2 mb-4">
                            {[1, 2, 3, 4].map((step) => (
                              <div key={step} className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                                {step}
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-600">Multi-step payment process</p>
                        </div>
                      )}
                      
                      {selectedDemo === 'details' && (
                        <div className="text-center">
                          <div className="grid grid-cols-2 gap-2 max-w-48 mx-auto mb-4">
                            {[1, 2, 3, 4].map((field) => (
                              <div key={field} className="h-8 bg-gray-300 rounded"></div>
                            ))}
                          </div>
                          <p className="text-gray-600">Comprehensive payment form</p>
                        </div>
                      )}
                      
                      {selectedDemo === 'verification' && (
                        <div className="text-center">
                          <div className="flex justify-center space-x-1 mb-4">
                            {[1, 2, 3, 4, 5, 6].map((digit) => (
                              <div key={digit} className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                                <span className="text-gray-400">•</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-600">6-digit verification code input</p>
                        </div>
                      )}
                      
                      {selectedDemo === 'final' && (
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">✅</span>
                          </div>
                          <p className="text-gray-600">Success confirmation page</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Launch Button */}
                  <div className="text-center">
                    <button
                      onClick={() => handleDemoLaunch(demoOptions.find(d => d.id === selectedDemo)?.route)}
                      disabled={isLoading}
                      className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                        isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Loading Demo...
                        </span>
                      ) : (
                        `Launch ${demoOptions.find(d => d.id === selectedDemo)?.title}`
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => navigate('/payment/flow')}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">🚀</span>
                Start Full Demo
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <span className="mr-2">🏠</span>
                Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Built With Modern Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">⚛️</div>
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🎨</div>
              <span className="text-sm font-medium">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔄</div>
              <span className="text-sm font-medium">React Router</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📱</div>
              <span className="text-sm font-medium">Responsive</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🔒</div>
              <span className="text-sm font-medium">Secure</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">♿</div>
              <span className="text-sm font-medium">Accessible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDemo;