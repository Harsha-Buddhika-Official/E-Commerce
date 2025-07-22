import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, ArrowRight, ShoppingBag } from 'lucide-react';

export default function UserForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // Backend integration for password reset should be implemented here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
          {/* Success State */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl">
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
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                Try Another Email
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/user/login"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/user/login"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-2xl">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
          <p className="text-white/70">
            Enter your email to reset your ShopVibe account password
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
              placeholder="Enter your email address"
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
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
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
              to="/user/login" 
              className="font-semibold text-purple-300 hover:text-purple-200 transition-colors"
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
