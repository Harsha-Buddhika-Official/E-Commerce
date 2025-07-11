import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './Components/data';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore All Categories</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing products across all our categories. Find exactly what you're looking for.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg`}>
                <div className="text-6xl mb-4 group-hover:animate-bounce">{category.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm">Explore {category.name.toLowerCase()} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
