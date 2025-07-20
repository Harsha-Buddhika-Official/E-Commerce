import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Store, User, Phone, MapPin, Briefcase, CheckCircle, AlertCircle, ArrowRight, Shield, Building, CreditCard } from 'lucide-react';

export default function SellerSignup({ onSwitchToUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [businessVerified, setBusinessVerified] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Seller signup submitted:', data);
    // TODO: Add backend integration for seller registration
    // For now, simulate successful signup and redirect to seller login
    alert('Seller account created successfully! Please sign in.');
    navigate('/seller/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-emerald-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-500 rounded-full top-3/4 left-1/2 bg-cyan-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl p-8 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl border-white/20">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white">Become a Seller</h1>
          <p className="text-white/70">Join ShopVibe and start selling your products</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Full Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('fullName', { 
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
              />
              {errors.fullName && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="email"
                placeholder="Business Email"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Business Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Building className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('businessName', { 
                  required: 'Business name is required'
                })}
              />
              {errors.businessName && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.businessName.message}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('phone', { 
                  required: 'Phone number is required'
                })}
              />
              {errors.phone && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>

          {/* Business Address */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin className="w-5 h-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Business Address"
              className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              {...register('address', { 
                required: 'Business address is required'
              })}
            />
            {errors.address && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.address.message}
              </div>
            )}
          </div>

          {/* Business Category */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Briefcase className="w-5 h-5 text-white/50" />
            </div>
            <select
              className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              {...register('category', { 
                required: 'Please select a business category'
              })}
            >
              <option value="" className="bg-gray-800">Select Business Category</option>
              <option value="electronics" className="bg-gray-800">Electronics</option>
              <option value="clothing" className="bg-gray-800">Clothing & Fashion</option>
              <option value="home" className="bg-gray-800">Home & Garden</option>
              <option value="sports" className="bg-gray-800">Sports & Outdoors</option>
              <option value="books" className="bg-gray-800">Books & Media</option>
              <option value="health" className="bg-gray-800">Health & Beauty</option>
              <option value="automotive" className="bg-gray-800">Automotive</option>
              <option value="other" className="bg-gray-800">Other</option>
            </select>
            {errors.category && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.category.message}
              </div>
            )}
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-white/50" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full py-3 pl-10 pr-12 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 8, message: 'Password must be at least 8 characters' },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                    message: 'Password must contain uppercase, lowercase, and number'
                  }
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 transition-colors text-white/50 hover:text-white" />
                ) : (
                  <Eye className="w-5 h-5 transition-colors text-white/50 hover:text-white" />
                )}
              </button>
              {errors.password && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-white/50" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full py-3 pl-10 pr-12 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 transition-colors text-white/50 hover:text-white" />
                ) : (
                  <Eye className="w-5 h-5 transition-colors text-white/50 hover:text-white" />
                )}
              </button>
              {errors.confirmPassword && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 mt-1 rounded text-emerald-600 bg-white/10 border-white/20 focus:ring-emerald-500 focus:ring-2"
              />
              <label htmlFor="terms" className="text-sm text-white/70">
                I agree to the{' '}
                <a href="#" className="underline text-emerald-300 hover:text-emerald-200">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="underline text-emerald-300 hover:text-emerald-200">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="business"
                checked={businessVerified}
                onChange={(e) => setBusinessVerified(e.target.checked)}
                className="w-4 h-4 mt-1 rounded text-emerald-600 bg-white/10 border-white/20 focus:ring-emerald-500 focus:ring-2"
              />
              <label htmlFor="business" className="text-sm text-white/70">
                I confirm that I have the legal right to sell the products I plan to list
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!agreeToTerms || !businessVerified}
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl hover:scale-105 disabled:hover:scale-100"
          >
            <div className="flex items-center justify-center">
              Create Seller Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/70">
            Already have a seller account?{' '}
            <button
              onClick={() => navigate('/seller/login')}
              className="font-semibold underline transition-colors bg-transparent border-none cursor-pointer text-emerald-300 hover:text-emerald-200"
            >
              Sign in here
            </button>
          </p>
          
          {/* Switch to User Signup */}
          {onSwitchToUser && (
            <div className="mt-4">
              <button
                onClick={onSwitchToUser}
                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl hover:scale-105"
              >
                ← Back to User Signup
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center mt-6 space-x-4 text-xs text-white/50">
          <div className="flex items-center">
            <Shield className="w-3 h-3 mr-1" />
            <span>Secure Registration</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center">
            <CreditCard className="w-3 h-3 mr-1" />
            <span>Fast Payouts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
