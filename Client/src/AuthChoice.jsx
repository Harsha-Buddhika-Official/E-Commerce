import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, ShoppingBag, Store, ArrowRight } from 'lucide-react';

export default function AuthChoice() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 sm:p-6 lg:p-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 rounded-full top-1/4 left-1/4 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-48 h-48 delay-1000 rounded-full bottom-1/4 right-1/4 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-24 h-24 delay-500 rounded-full top-3/4 left-1/2 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-indigo-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">ShopVibe</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            Choose how you'd like to access our platform
          </p>
        </div>

        {/* Login Options */}
        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          {/* Customer Login */}
          <div className="relative h-full group">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-25 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur group-hover:opacity-40"></div>
            <div className="relative flex flex-col h-full p-8 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105">
              <div className="flex flex-col h-full text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h2 className="mb-4 text-2xl font-bold text-white">Customer Login</h2>
                <p className="mb-8 leading-relaxed text-white/70">
                  Browse products, manage your orders, track shipments, and enjoy a personalized shopping experience.
                </p>
                
                {/* Benefits */}
                <div className="flex-grow mb-8 space-y-3">
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span>Browse thousands of products</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span>Manage wishlist and cart</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span>Track order history</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span>Exclusive deals and offers</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button
                    onClick={() => navigate('/user/login')}
                    className="w-full px-6 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl group-hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center">
                      Continue as Customer
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                  
                  <p className="mt-4 text-sm text-white/50">
                    New customer? 
                    <button 
                      onClick={() => navigate('/user/signup')}
                      className="ml-1 text-purple-300 underline transition-colors hover:text-purple-200"
                    >
                      Create account
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seller Login */}
          <div className="relative h-full group">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-25 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur group-hover:opacity-40"></div>
            <div className="relative flex flex-col h-full p-8 transition-all duration-300 transform border bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl hover:bg-white/15 hover:scale-105">
              <div className="flex flex-col h-full text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
                    <Store className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h2 className="mb-4 text-2xl font-bold text-white">Seller Portal</h2>
                <p className="mb-8 leading-relaxed text-white/70">
                  Manage your business, track sales analytics, handle inventory, and grow your online presence.
                </p>
                
                {/* Benefits */}
                <div className="flex-grow mb-8 space-y-3">
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 rounded-full bg-emerald-400"></div>
                    <span>Manage inventory & products</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 rounded-full bg-emerald-400"></div>
                    <span>Track sales & analytics</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 rounded-full bg-emerald-400"></div>
                    <span>Customer management tools</span>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 mr-3 rounded-full bg-emerald-400"></div>
                    <span>Marketing & promotion tools</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button
                    onClick={() => navigate('/seller/login')}
                    className="w-full px-6 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl group-hover:shadow-xl"
                  >
                    <div className="flex items-center justify-center">
                      Access Seller Portal
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                  
                  <p className="mt-4 text-sm text-white/50">
                    Want to sell? 
                    <button 
                      onClick={() => navigate('/seller/signup')}
                      className="ml-1 underline transition-colors text-emerald-300 hover:text-emerald-200"
                    >
                      Apply now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 transition-colors border text-white/70 hover:text-white border-white/20 hover:border-white/40 rounded-xl"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
