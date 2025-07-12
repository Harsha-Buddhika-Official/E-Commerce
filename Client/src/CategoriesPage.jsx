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
      <div className="py-16 text-white bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Explore All Categories</h1>
          <p className="max-w-2xl mx-auto text-xl text-blue-100">
            Discover amazing products across all our categories. Find exactly what you're looking for.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg`}>
                <div className="mb-4 text-6xl group-hover:animate-bounce">{category.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white">{category.name}</h3>
                <p className="text-sm text-white/80">Explore {category.name.toLowerCase()} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
