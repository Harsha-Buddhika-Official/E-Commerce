import React, { useState } from 'react';
import { Users, Briefcase } from 'lucide-react';
import UserSignUp from './ClientComponents/UserSignUp';
import SellerSignup from './SallerComponents/SellerSignup';

export default function SignUp() {
  const [userType, setUserType] = useState('user'); // 'user' or 'seller'

  const getGradientColors = () => {
    return userType === 'user' 
      ? 'from-purple-900 via-blue-900 to-indigo-900'
      : 'from-emerald-900 via-teal-900 to-cyan-900';
  };

  // If seller is selected, render SellerSignup component
  if (userType === 'seller') {
    return (
      <div>
        <div className="fixed z-50 top-4 left-4">
          <button
            onClick={() => setUserType('user')}
            className="px-4 py-2 text-sm font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            ← Back to User Signup
          </button>
        </div>
        <SellerSignup />
      </div>
    );
  }

  // If user is selected, render UserSignUp component  
  if (userType === 'user') {
    return (
      <div>
        <div className="fixed z-50 top-4 right-4">
          <button
            onClick={() => setUserType('seller')}
            className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
          >
            Become a Seller →
          </button>
        </div>
        <UserSignUp />
      </div>
    );
  }

  // Default: render user type selector (fallback, shouldn't reach here normally)
  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradientColors()} flex items-center justify-center p-4 sm:p-6 lg:p-8`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${userType === 'user' ? 'bg-purple-500/20' : 'bg-emerald-500/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 ${userType === 'user' ? 'bg-blue-500/20' : 'bg-teal-500/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-3/4 left-1/2 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 ${userType === 'user' ? 'bg-indigo-500/20' : 'bg-cyan-500/20'} rounded-full blur-3xl animate-pulse delay-500`}></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl sm:p-8 lg:max-w-lg border-white/20">
        {/* User Type Selector */}
        <div className="mb-6 text-center">
          <h1 className="mb-6 text-3xl font-bold text-white">Join ShopVibe</h1>
          <p className="mb-8 text-white/70">Choose your account type to get started</p>
          
          <div className="flex p-1 rounded-lg bg-white/10 sm:rounded-xl">
            <button
              type="button"
              onClick={() => setUserType('user')}
              className={`flex-1 flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                userType === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Users className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType('seller')}
              className={`flex-1 flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                userType === 'seller'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Briefcase className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
              Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
