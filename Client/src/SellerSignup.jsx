import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Store, 
  User,
  Phone,
  MapPin,
  Briefcase,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  Building,
  CreditCard
} from 'lucide-react';

export default function SellerSignup() {
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
    navigate('/seller-login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Become a Seller</h1>
          <p className="text-white/70">Join ShopVibe and start selling your products</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                {...register('fullName', { 
                  required: 'Full name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' }
                })}
              />
              {errors.fullName && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="email"
                placeholder="Business Email"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </div>
              )}
            </div>
          </div>

          {/* Business Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Business Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Business Name"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                {...register('businessName', { 
                  required: 'Business name is required'
                })}
              />
              {errors.businessName && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.businessName.message}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                {...register('phone', { 
                  required: 'Phone number is required'
                })}
              />
              {errors.phone && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>

          {/* Business Address */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Business Address"
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              {...register('address', { 
                required: 'Business address is required'
              })}
            />
            {errors.address && (
              <div className="flex items-center mt-1 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.address.message}
              </div>
            )}
          </div>

          {/* Business Category */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-white/50" />
            </div>
            <select
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
              <div className="flex items-center mt-1 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.category.message}
              </div>
            )}
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-white/50" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
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
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                )}
              </button>
              {errors.password && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password.message}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-white/50" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                ) : (
                  <Eye className="h-5 w-5 text-white/50 hover:text-white transition-colors" />
                )}
              </button>
              {errors.confirmPassword && (
                <div className="flex items-center mt-1 text-red-400 text-sm">
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
                className="w-4 h-4 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
              />
              <label htmlFor="terms" className="text-sm text-white/70">
                I agree to the{' '}
                <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
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
                className="w-4 h-4 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-500 focus:ring-2 mt-1"
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
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
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
            <Link to="/seller-login" className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors">
              Sign in here
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center space-x-4 text-white/50 text-xs">
          <div className="flex items-center">
            <Shield className="w-3 h-3 mr-1" />
            <span>Secure Registration</span>
          </div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center">
            <CreditCard className="w-3 h-3 mr-1" />
            <span>Fast Payouts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
