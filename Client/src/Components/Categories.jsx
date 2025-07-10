import React from 'react';

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
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transition-transform transform group-hover:scale-105 shadow-lg`}>
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-white font-semibold text-sm">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
