import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">ShopVibe</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for quality products and exceptional shopping experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beauty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Books</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Toys & Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health & Wellness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food & Beverages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
