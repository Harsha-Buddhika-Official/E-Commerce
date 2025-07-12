import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Lock, Eye, EyeOff, Phone, ShoppingBag, Store, AlertCircle, Users, Briefcase, Building, MapPin} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('user'); // 'user' or 'seller'
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log(`${userType} signup submitted:`, data);
    // TODO: Add backend integration here later
    
    // Navigate based on user type
    if (userType === 'user') {
      navigate('/User-dashboard');
    } else {
      navigate('/seller-dashboard');
    }
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

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getGradientColors()} flex items-center justify-center p-4 sm:p-6 lg:p-8`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${userType === 'user' ? 'bg-purple-500/20' : 'bg-emerald-500/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 ${userType === 'user' ? 'bg-blue-500/20' : 'bg-teal-500/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
        <div className={`absolute top-3/4 left-1/2 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 ${userType === 'user' ? 'bg-indigo-500/20' : 'bg-cyan-500/20'} rounded-full blur-3xl animate-pulse delay-500`}></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl sm:p-8 lg:max-w-lg border-white/20">
        {/* User Type Toggle */}
        <div className="mb-4 sm:mb-6">
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

        {/* Header */}
        <div className="mb-6 text-center sm:mb-8">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className={`bg-gradient-to-r ${getAccentColors()} p-2 sm:p-3 rounded-xl sm:rounded-2xl`}>
              {userType === 'user' ? (
                <ShoppingBag className="w-6 h-6 text-white sm:w-8 sm:h-8" />
              ) : (
                <Store className="w-6 h-6 text-white sm:w-8 sm:h-8" />
              )}
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            {userType === 'user' ? 'Join ShopVibe' : 'Start Selling'}
          </h1>
          <p className="px-2 text-sm text-white/70 sm:text-base">
            {userType === 'user' 
              ? 'Create your account and start shopping' 
              : 'Join our marketplace and grow your business'
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          {/* Name Fields */}
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            {/* First Name */}
            <div className='flex-1'>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  {...register('firstName', { 
                    required: 'First name is required',
                    minLength: { value: 2, message: 'First name must be at least 2 characters' }
                  })}
                />
              </div>
              {errors.firstName && (
                <div className="flex items-center mt-1 text-xs text-red-300">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.firstName.message}
                </div>
              )}
            </div>

            {/* Last Name */}
            <div className='flex-1'>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  {...register('lastName', { 
                    required: 'Last name is required',
                    minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                  })}
                />
              </div>
              {errors.lastName && (
                <div className="flex items-center mt-1 text-xs text-red-300">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>

          {/* Seller-specific fields */}
          {userType === 'seller' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Business Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Building className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Business name"
                  className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  {...register('businessName', { 
                    required: userType === 'seller' ? 'Business name is required' : false
                  })}
                />
                {errors.businessName && (
                  <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                    <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                    {errors.businessName.message}
                  </div>
                )}
              </div>

              {/* Business Address */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPin className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Business address"
                  className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                  {...register('businessAddress', { 
                    required: userType === 'seller' ? 'Business address is required' : false
                  })}
                />
                {errors.businessAddress && (
                  <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                    <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                    {errors.businessAddress.message}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email'
                }
              })}
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
            </div>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\-\s()]+$/,
                  message: 'Please enter a valid phone number'
                }
              })}
            />
            {errors.phone && (
              <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                {errors.phone.message}
              </div>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create password"
              className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Password must contain uppercase, lowercase and number'
                }
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
              ) : (
                <Eye className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
              )}
            </button>
            {errors.password && (
              <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              className="w-full pl-8 sm:pl-10 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
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
                <EyeOff className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
              ) : (
                <Eye className="w-4 h-4 sm:h-5 sm:w-5 text-white/50" />
              )}
            </button>
            {errors.confirmPassword && (
              <div className="flex items-center mt-2 text-xs text-red-300 sm:text-sm">
                <AlertCircle className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/30 rounded bg-white/10 mt-0.5 flex-shrink-0"
              {...register('agreeToTerms', {
                required: 'You must agree to the terms and conditions'
              })}
            />
            <div className="flex-1">
              <label className="text-xs leading-relaxed sm:text-sm text-white/70">
                I agree to the{' '}
                <Link to="/terms" className={`${userType === 'user' ? 'text-purple-300 hover:text-purple-200' : 'text-emerald-300 hover:text-emerald-200'} transition-colors underline`}>
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className={`${userType === 'user' ? 'text-purple-300 hover:text-purple-200' : 'text-emerald-300 hover:text-emerald-200'} transition-colors underline`}>
                  Privacy Policy
                </Link>
              </label>
              {errors.agreeToTerms && (
                <div className="flex items-center mt-1 text-xs text-red-300">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.agreeToTerms.message}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r ${getButtonColors()} text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base`}
          >
            {isSubmitting ? 'Creating Account...' : `Create ${userType === 'user' ? 'Account' : 'Seller Account'}`}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center sm:mt-6">
          <p className="text-sm text-white/70">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className={`font-semibold ${userType === 'user' ? 'text-purple-300 hover:text-purple-200' : 'text-emerald-300 hover:text-emerald-200'} transition-colors underline`}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
