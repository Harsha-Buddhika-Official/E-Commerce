import React from 'react';
import { Truck, Shield, Headphones, Gift } from 'lucide-react';

export default function FeaturesBar() {
  return (
    <section className="bg-white py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Truck className="w-4 h-4 text-green-600" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Headphones className="w-4 h-4 text-purple-600" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Gift className="w-4 h-4 text-pink-600" />
            <span>Gift Cards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
