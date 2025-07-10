import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories({ categories }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
          <p className="text-gray-600">Discover our wide range of products</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transition-transform transform group-hover:scale-105 shadow-lg`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-white font-semibold text-sm">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
