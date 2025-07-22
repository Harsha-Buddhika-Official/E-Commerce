import React, { useState } from 'react';
import { allProducts, categories, getProductsByCategory } from '../Components/data';

export default function CategoryManager() {
  const [selectedCategory, setSelectedCategory] = useState('Electronics');
  const [products, setProducts] = useState(getProductsByCategory('Electronics'));
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    originalPrice: '',
    rating: '',
    reviews: '',
    image: '',
    badge: '',
    category: 'Electronics'
  });

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setProducts(getProductsByCategory(categoryName));
    setNewProduct({ ...newProduct, category: categoryName });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: Date.now(), // Simple ID generation
      price: parseFloat(newProduct.price),
      originalPrice: parseFloat(newProduct.originalPrice),
      rating: parseFloat(newProduct.rating),
      reviews: parseInt(newProduct.reviews)
    };
    
    // Backend integration for adding product should be implemented here
    // For now, we'll just update the local state
    setProducts([...products, product]);
    
    // Reset form
    setNewProduct({
      name: '',
      price: '',
      originalPrice: '',
      rating: '',
      reviews: '',
      image: '',
      badge: '',
      category: selectedCategory
    });
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Category & Product Manager</h1>
        
        {/* Category Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Categories</h3>
            <p className="text-3xl font-bold text-blue-600">{categories.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Products</h3>
            <p className="text-3xl font-bold text-green-600">{allProducts.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Category</h3>
            <p className="text-3xl font-bold text-purple-600">{selectedCategory}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Category Products</h3>
            <p className="text-3xl font-bold text-orange-600">{products.length}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Category</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`w-full p-3 rounded-lg text-left transition-all ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <span className="text-xl mr-3">{category.icon}</span>
                  {category.name}
                  <span className="float-right text-sm opacity-75">
                    {getProductsByCategory(category.name).length} products
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Add New Product Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
                  <input
                    type="number"
                    step="0.01"
                    name="originalPrice"
                    value={newProduct.originalPrice}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    name="rating"
                    value={newProduct.rating}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reviews</label>
                  <input
                    type="number"
                    name="reviews"
                    value={newProduct.reviews}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image (Emoji)</label>
                <input
                  type="text"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  placeholder="e.g., 📱, 👗, 🏠"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Badge</label>
                <input
                  type="text"
                  name="badge"
                  value={newProduct.badge}
                  onChange={handleInputChange}
                  placeholder="e.g., Best Seller, New, Hot Deal"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Add Product to {selectedCategory}
              </button>
            </form>
          </div>

          {/* Products List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedCategory} Products ({products.length})
            </h2>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {products.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{product.image}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <p className="text-gray-500 text-center py-8">No products in this category</p>
              )}
            </div>
          </div>
        </div>

        {/* API Integration Guide */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Backend Integration Guide</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-700 mb-4">
              To connect this to your backend, replace the data operations with API calls:
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <code className="bg-gray-200 px-2 py-1 rounded">getProductsByCategory()</code> → <code>GET /api/products?category={categoryName}</code></li>
              <li>• <code className="bg-gray-200 px-2 py-1 rounded">Add Product</code> → <code>POST /api/products</code></li>
              <li>• <code className="bg-gray-200 px-2 py-1 rounded">Update Product</code> → <code>PUT /api/products/{id}</code></li>
              <li>• <code className="bg-gray-200 px-2 py-1 rounded">Delete Product</code> → <code>DELETE /api/products/{id}</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
