import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, ArrowRight, Users, Briefcase, ShoppingBag, Store } from 'lucide-react';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'seller'
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(`${userType} forgot password submitted:`, data);
    // TODO: Add backend integration here later
    setIsSubmitted(true);
  };

  const getGradientColors = () => {
    return userType === 'user' 
      ? 'from-purple-900 via-blue-900 to-indigo-900'
      : 'from-emerald-900 via-teal-900 to-cyan-900';
  };

  const getAccentColors = () => {
    return userType === 'user'
      ? 'from-purple-600 to-blue-600'
      : 'from-emerald-600 to-teal-600';
  };

  const getButtonColors = () => {
    return userType === 'user'
      ? 'from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
      : 'from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700';
  };

  const getBackgroundElements = () => {
    if (userType === 'user') {
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </>
      );
    } else {
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </>
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${getGradientColors()} flex items-center justify-center p-4`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {getBackgroundElements()}
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
          {/* Success State */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className={`bg-gradient-to-r ${getAccentColors()} p-3 rounded-2xl`}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Check Your Email</h1>
            <p className="text-white/70 mb-6">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
            </p>
            <p className="text-white/50 text-sm mb-8">
              If you don't see the email, check your spam folder or try again.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className={`w-full bg-gradient-to-r ${getButtonColors()} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group`}
              >
                Try Another Email
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/login"
                className="block w-full text-center py-3 px-4 border border-white/20 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradientColors()} flex items-center justify-center p-4`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {getBackgroundElements()}
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/login"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </div>

        {/* User Type Toggle */}
        <div className="mb-6">
          <div className="flex bg-white/10 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setUserType('user')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 ${
                userType === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType('seller')}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 ${
                userType === 'seller'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Seller
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`bg-gradient-to-r ${getAccentColors()} p-3 rounded-2xl`}>
              {userType === 'user' ? (
                <ShoppingBag className="w-8 h-8 text-white" />
              ) : (
                <Store className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-white/70">
            {userType === 'user' 
              ? 'Enter your email to reset your ShopVibe account password' 
              : 'Enter your email to reset your seller account password'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="email"
              placeholder={userType === 'user' ? 'Enter your email address' : 'Enter your seller email address'}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email'
                }
              })}
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-red-300 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r ${getButtonColors()} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group`}
          >
            Send Reset Link
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-white/50 text-sm">
            Remember your password?{' '}
            <Link 
              to="/login" 
              className={`font-semibold ${userType === 'user' ? 'text-purple-300 hover:text-purple-200' : 'text-emerald-300 hover:text-emerald-200'} transition-colors`}
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-center text-white/50 text-xs">
            <CheckCircle className="w-3 h-3 mr-1" />
            <span>Secure password reset process</span>
          </div>
        </div>
      </div>
    </div>
  );
}
