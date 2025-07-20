import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Store, Briefcase, CheckCircle, AlertCircle, ArrowRight, Shield, TrendingUp } from 'lucide-react';

export default function SellerLogin({ onSwitchToUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Seller login submitted:', data);
    // TODO: Add backend integration for seller authentication
    // For now, simulate successful login and redirect to seller dashboard
    navigate('/seller-dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-emerald-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-500 rounded-full top-3/4 left-1/2 bg-cyan-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md p-8 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-3xl border-white/20">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-white">Seller Portal</h1>
          <p className="text-white/70">Access your ShopVibe seller dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-white/50" />
            </div>
            <input
              type="email"
              placeholder="Seller Email Address"
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
                minLength: { value: 8, message: 'Password must be at least 8 characters' }
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600 bg-white/10 border-white/20 focus:ring-emerald-500 focus:ring-2"
              />
              <label htmlFor="remember" className="text-sm text-white/70">
                Keep me signed in
              </label>
            </div>
            <Link 
              to="/seller/forgot-password" 
              className="text-sm transition-colors text-emerald-300 hover:text-emerald-200"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl hover:scale-105"
          >
            <div className="flex items-center justify-center">
              Access Seller Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </button>

          {/* Seller Benefits */}
          <div className="p-4 border bg-white/5 rounded-xl border-white/10">
            <h3 className="flex items-center mb-3 font-semibold text-white">
              <TrendingUp className="w-4 h-4 mr-2 text-emerald-400" />
              Seller Benefits
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-emerald-400" />
                Manage your inventory
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-emerald-400" />
                Track sales analytics
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-emerald-400" />
                Customer management
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-emerald-400" />
                Marketing tools
              </li>
            </ul>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/70">
            New seller?{' '}
            <button
              onClick={() => navigate('/seller/signup')}
              className="font-semibold underline transition-colors bg-transparent border-none cursor-pointer text-emerald-300 hover:text-emerald-200"
            >
              Apply to sell
            </button>
          </p>
          
          {/* Switch to User Login */}
          {onSwitchToUser && (
            <div className="mt-4">
              <button
                onClick={onSwitchToUser}
                className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl hover:scale-105"
              >
                ← Back to User Login
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center mt-6 space-x-4 text-xs text-white/50">
          <div className="flex items-center">
            <Shield className="w-3 h-3 mr-1" />
            <span>Secure Portal</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center">
            <Briefcase className="w-3 h-3 mr-1" />
            <span>Business Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
