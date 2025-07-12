import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Lock, Eye, EyeOff, Phone, ShoppingBag, AlertCircle} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp({ onSwitchToSeller }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // TODO: Add backend integration here later
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-500 rounded-full top-3/4 left-1/2 bg-indigo-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl border-white/20">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white">Join ShopVibe</h1>
          <p className="text-white/70">Create your account and start shopping</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
        {/* firstName and lastName */}
          <div className='flex space-x-4'>
          {/* First Name */}
            <div className='flex-1'>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-white/50" />
                    </div>
                    <input
                    type="text"
                    placeholder="First Name"
                    className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    {...register('firstName', { 
                        required: 'First name is required',
                        minLength: { value: 2, message: 'First name must be at least 2 characters' }
                    })}
                    />
                </div>

                {errors.firstName && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.firstName.message}
                </div>
                )}
            </div>

            {/* Last Name */}
            <div className='flex-1'>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-white/50" />
                </div>
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    {...register('lastName', { 
                    required: 'Last name is required',
                    minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                    })}
                />
                </div>

                {errors.lastName && (
                <div className="flex items-center mt-1 text-sm text-red-400">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.lastName.message}
                </div>
                )}
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
            </div>

            {errors.email && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Phone className="w-5 h-5 text-white/50" />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-3 pl-10 pr-4 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[+]?[\d\s\-\(\)]+$/,
                    message: 'Invalid phone number'
                  }
                })}
              />
            </div>

            {errors.phone && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone.message}
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-white/50" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full py-3 pl-10 pr-12 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
            </div>

            {errors.password && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.password.message}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Lock className="w-5 h-5 text-white/50" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full py-3 pl-10 pr-12 text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
            </div>

            {errors.confirmPassword && (
              <div className="flex items-center mt-1 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mt-1 text-purple-600 rounded bg-white/10 border-white/20 focus:ring-purple-500 focus:ring-2"
              {...register('terms', { required: 'You must accept the terms and conditions' })}
            />
            <label htmlFor="terms" className="text-sm text-white/70">
              I agree to the{' '}
              <a href="#" className="text-purple-300 underline hover:text-purple-200">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-300 underline hover:text-purple-200">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <div className="flex items-center text-sm text-red-400">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.terms.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 rounded-xl hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-2 border-b-2 border-white rounded-full animate-spin"></div>
                Creating Account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-white/70">
            Already have an account?{' '}
            <Link to="/user/login" className="font-semibold text-purple-300 transition-colors hover:text-purple-200">
              Sign in
            </Link>
          </p>
          
          {/* Switch to Seller Signup */}
          {onSwitchToSeller && (
            <div className="mt-4">
              <button
                onClick={onSwitchToSeller}
                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl hover:scale-105"
              >
                Become a Seller →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}