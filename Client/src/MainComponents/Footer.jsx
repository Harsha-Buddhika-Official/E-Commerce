import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">ShopVibe</span>
            </div>
            <p className="mb-4 text-gray-400">
              Your ultimate destination for quality products and exceptional shopping experience.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-white">FAQ</Link></li>
              <li><Link to="/shipping" className="transition-colors hover:text-white">Shipping</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/category/electronics" className="transition-colors hover:text-white">Electronics</Link></li>
              <li><Link to="/category/fashion" className="transition-colors hover:text-white">Fashion</Link></li>
              <li><Link to="/category/home-and-garden" className="transition-colors hover:text-white">Home & Garden</Link></li>
              <li><Link to="/category/sports" className="transition-colors hover:text-white">Sports</Link></li>
              <li><Link to="/category/beauty" className="transition-colors hover:text-white">Beauty</Link></li>
              <li><Link to="/category/books" className="transition-colors hover:text-white">Books</Link></li>
              <li><Link to="/category/toys-and-games" className="transition-colors hover:text-white">Toys & Games</Link></li>
              <li><Link to="/category/automotive" className="transition-colors hover:text-white">Automotive</Link></li>
              <li><Link to="/category/health-and-wellness" className="transition-colors hover:text-white">Health & Wellness</Link></li>
              <li><Link to="/category/food-and-beverages" className="transition-colors hover:text-white">Food & Beverages</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/customer-service" className="transition-colors hover:text-white">Customer Service</Link></li>
              <li><Link to="/return-policy" className="transition-colors hover:text-white">Return Policy</Link></li>
              <li><Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} ShopVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
