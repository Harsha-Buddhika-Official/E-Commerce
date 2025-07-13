import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes countdown
  const [canResend, setCanResend] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState('sms'); // sms, email, authenticator
  const navigate = useNavigate();

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    if (code.length !== 6) {
      alert('Please enter the complete 6-digit code');
      return;
    }

    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      if (code === '123456') {
        navigate('/payment/final');
      } else {
        alert('Invalid verification code. Please try again.');
        setVerificationCode(['', '', '', '', '', '']);
        document.getElementById('code-0').focus();
      }
    }, 2000);
  };

  const handleResendCode = () => {
    setTimeLeft(120);
    setCanResend(false);
    setVerificationCode(['', '', '', '', '', '']);
    // Simulate sending new code
    alert('New verification code sent!');
  };

  const switchVerificationMethod = (method) => {
    setVerificationMethod(method);
    setTimeLeft(120);
    setCanResend(false);
    setVerificationCode(['', '', '', '', '', '']);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Payment</h1>
          <p className="text-gray-600">
            We've sent a 6-digit verification code to confirm your identity
          </p>
        </div>

        {/* Verification Method Selector */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Choose verification method:</h2>
            <div className="space-y-3">
              <div 
                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                  verificationMethod === 'sms' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => switchVerificationMethod('sms')}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">📱</span>
                  <div>
                    <p className="font-medium">SMS</p>
                    <p className="text-sm text-gray-600">+1 ••••••• 789</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                  verificationMethod === 'email' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => switchVerificationMethod('email')}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">j••••@example.com</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                  verificationMethod === 'authenticator' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => switchVerificationMethod('authenticator')}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">🔑</span>
                  <div>
                    <p className="font-medium">Authenticator App</p>
                    <p className="text-sm text-gray-600">Google Authenticator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Input */}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Enter 6-digit verification code:
              </label>
              <div className="flex space-x-2 justify-center">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoComplete="off"
                  />
                ))}
              </div>
            </div>

            {/* Timer and Resend */}
            <div className="text-center mb-6">
              {!canResend ? (
                <p className="text-gray-600">
                  Resend code in <span className="font-semibold text-blue-600">{formatTime(timeLeft)}</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Resend verification code
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || verificationCode.join('').length !== 6}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                isLoading || verificationCode.join('').length !== 6
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify & Complete Payment'
              )}
            </button>
          </form>
        </div>

        {/* Security Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <span className="text-yellow-600 mr-2 mt-0.5">⚠️</span>
            <div className="text-sm">
              <p className="font-medium text-yellow-800 mb-1">Security Notice</p>
              <p className="text-yellow-700">
                Never share your verification code with anyone. Our team will never ask for this code.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Having trouble?</p>
          <div className="space-x-4">
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Contact Support
            </button>
            <button 
              onClick={() => navigate('/payment/details')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Change Payment Method
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/payment/details')}
            className="text-gray-600 hover:text-gray-700 font-medium"
          >
            ← Back to Payment Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;