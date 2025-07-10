import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../Components/data';

export default function CategorySwitcher({ currentCategory }) {
  const navigate = useNavigate();

  const handleCategoryChange = (categoryPath) => {
    navigate(categoryPath);
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.path)}
            className={`p-3 rounded-lg transition-all duration-200 ${
              currentCategory === category.name
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:scale-105'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
