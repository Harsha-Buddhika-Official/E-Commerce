import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShoppingBag, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function Login({ onSwitchToSeller }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // Backend integration for user authentication should be implemented here
    // For now, simulate successful login and redirect to user dashboard
    navigate('/user-dashboard');
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
          <h1 className="mb-2 text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/70">Sign in to your ShopVibe account</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
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
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-purple-600 rounded bg-white/10 border-white/20 focus:ring-purple-500 focus:ring-2"
              />
              <label htmlFor="remember" className="text-sm text-white/70">
                Remember me
              </label>
            </div>
            <Link 
              to="/user/forgot-password" 
              className="text-sm text-purple-300 transition-colors hover:text-purple-200"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl hover:scale-105"
          >
            <div className="flex items-center justify-center">
              Sign In
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white/70">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="w-full">
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-3 transition-all duration-300 border border-white/20 rounded-xl bg-white/5 hover:bg-white/10 group"
            >
              <svg className="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="ml-2 text-sm text-white">Google</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/70">
            Don't have an account?{' '}
            <Link to="/user/signup" className="font-semibold text-purple-300 transition-colors hover:text-purple-200">
              Sign up now
            </Link>
          </p>
          
          {/* Switch to Seller Login */}
          {onSwitchToSeller && (
            <div className="mt-4">
              <button
                onClick={onSwitchToSeller}
                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl hover:scale-105"
              >
                Seller Login →
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center mt-6 space-x-4 text-xs text-white/50">
          <div className="flex items-center">
            <Lock className="w-3 h-3 mr-1" />
            <span>Secure Login</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}