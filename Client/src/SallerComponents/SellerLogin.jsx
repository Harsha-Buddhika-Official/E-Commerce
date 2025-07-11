import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Store, 
  Briefcase,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function SellerLogin() {
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-2xl">
              <Store className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Seller Portal</h1>
          <p className="text-white/70">Access your ShopVibe seller dashboard</p>
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
              placeholder="Seller Email Address"
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
                minLength: { value: 8, message: 'Password must be at least 8 characters' }
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-500 focus:ring-2"
              />
              <label htmlFor="remember" className="text-sm text-white/70">
                Keep me signed in
              </label>
            </div>
            <a 
              href="#" 
              className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              Access Seller Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
          </button>

          {/* Seller Benefits */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-3 flex items-center">
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
            <Link to="/seller-signup" className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors">
              Apply to sell
            </Link>
          </p>
          <p className="text-white/50 text-sm mt-2">
            Regular customer?{' '}
            <Link to="/login" className="text-white/70 hover:text-white transition-colors">
              Customer login
            </Link>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex items-center justify-center space-x-4 text-white/50 text-xs">
          <div className="flex items-center">
            <Shield className="w-3 h-3 mr-1" />
            <span>Secure Portal</span>
          </div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center">
            <Briefcase className="w-3 h-3 mr-1" />
            <span>Business Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
