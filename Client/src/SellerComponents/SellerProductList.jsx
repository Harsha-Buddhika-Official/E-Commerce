import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Eye, Edit, Trash2, Plus, Package, ArrowUpDown } from 'lucide-react';

export default function SellerProductList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Mock products data - in real app, fetch from API
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Wireless Bluetooth Headphones', 
      price: 99.99, 
      comparePrice: 149.99,
      stock: 25, 
      status: 'active',
      category: 'Electronics',
      image: 'https://via.placeholder.com/60x60/6366f1/ffffff?text=🎧',
      sales: 45,
      rating: 4.5,
      created: '2024-01-15'
    },
    { 
      id: 2, 
      name: 'Smart Fitness Watch', 
      price: 299.99, 
      comparePrice: 399.99,
      stock: 12, 
      status: 'active',
      category: 'Electronics',
      image: 'https://via.placeholder.com/60x60/8b5cf6/ffffff?text=⌚',
      sales: 23,
      rating: 4.8,
      created: '2024-01-10'
    },
    { 
      id: 3, 
      name: 'Portable Bluetooth Speaker', 
      price: 59.99, 
      comparePrice: 89.99,
      stock: 0, 
      status: 'out_of_stock',
      category: 'Electronics',
      image: 'https://via.placeholder.com/60x60/06b6d4/ffffff?text=🔊',
      sales: 67,
      rating: 4.3,
      created: '2024-01-05'
    },
    { 
      id: 4, 
      name: 'Ergonomic Laptop Stand', 
      price: 45.99, 
      comparePrice: 65.99,
      stock: 18, 
      status: 'active',
      category: 'Office',
      image: 'https://via.placeholder.com/60x60/f59e0b/ffffff?text=💻',
      sales: 34,
      rating: 4.6,
      created: '2024-01-08'
    },
    { 
      id: 5, 
      name: 'Wireless Charging Pad', 
      price: 29.99, 
      comparePrice: 45.99,
      stock: 32, 
      status: 'active',
      category: 'Electronics',
      image: 'https://via.placeholder.com/60x60/10b981/ffffff?text=🔌',
      sales: 89,
      rating: 4.2,
      created: '2024-01-12'
    },
  ]);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === '' || product.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const handleDeleteProduct = (productId, productName) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"? This action cannot be undone.`)) {
      setProducts(prev => prev.filter(p => p.id !== productId));
      alert('Product deleted successfully!');
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'out_of_stock':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'draft':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'out_of_stock':
        return 'Out of Stock';
      case 'draft':
        return 'Draft';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Product Management</h2>
          <p className="text-white/70 mt-1">Manage your product catalog</p>
        </div>
        <button 
          onClick={() => navigate('/add-product')}
          className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="" className="bg-gray-800">All Status</option>
            <option value="active" className="bg-gray-800">Active</option>
            <option value="out_of_stock" className="bg-gray-800">Out of Stock</option>
            <option value="draft" className="bg-gray-800">Draft</option>
          </select>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="name" className="bg-gray-800">Sort by Name</option>
            <option value="price" className="bg-gray-800">Sort by Price</option>
            <option value="stock" className="bg-gray-800">Sort by Stock</option>
            <option value="sales" className="bg-gray-800">Sort by Sales</option>
            <option value="created" className="bg-gray-800">Sort by Date</option>
          </select>
          
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
          >
            <ArrowUpDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center">
            <Package className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No products found</h3>
            <p className="text-white/50 mb-4">
              {searchTerm || statusFilter ? 'Try adjusting your filters' : 'Start by adding your first product'}
            </p>
            <button 
              onClick={() => navigate('/add-product')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-white/70 font-medium">Product</th>
                  <th className="text-left p-4 text-white/70 font-medium">Category</th>
                  <th className="text-left p-4 text-white/70 font-medium">Price</th>
                  <th className="text-left p-4 text-white/70 font-medium">Stock</th>
                  <th className="text-left p-4 text-white/70 font-medium">Sales</th>
                  <th className="text-left p-4 text-white/70 font-medium">Status</th>
                  <th className="text-left p-4 text-white/70 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr 
                    key={product.id} 
                    className={`border-t border-white/10 hover:bg-white/5 transition-colors ${
                      index % 2 === 0 ? 'bg-white/[0.02]' : ''
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover border border-white/20"
                        />
                        <div>
                          <h3 className="font-medium text-white">{product.name}</h3>
                          <p className="text-sm text-white/70">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-white/80">{product.category}</span>
                    </td>
                    <td className="p-4">
                      <div className="text-white font-semibold">${product.price}</div>
                      {product.comparePrice && (
                        <div className="text-sm text-white/50 line-through">${product.comparePrice}</div>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`font-medium ${
                        product.stock > 10 ? 'text-green-400' : 
                        product.stock > 0 ? 'text-yellow-400' : 
                        'text-red-400'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-white">{product.sales} sold</div>
                      <div className="text-sm text-white/70">★ {product.rating}</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                        {getStatusText(product.status)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-colors"
                          title="View Product"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => navigate(`/edit-product/${product.id}`)}
                          className="p-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 rounded-lg transition-colors"
                          title="Edit Product"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id, product.name)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <div className="flex items-center justify-between p-4 border-t border-white/20 bg-white/5">
            <p className="text-white/70 text-sm">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-white/20 rounded text-white/70 hover:bg-white/10 transition-colors text-sm">
                Previous
              </button>
              <button className="px-3 py-1 bg-emerald-600 rounded text-white text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-white/20 rounded text-white/70 hover:bg-white/10 transition-colors text-sm">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
