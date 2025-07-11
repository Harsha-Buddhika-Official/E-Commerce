import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, Save, X, Plus } from 'lucide-react';

export default function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    comparePrice: '',
    stock: '',
    sku: '',
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    tags: [],
    images: [],
    features: [],
    specifications: {},
    colors: [],
    sizes: [],
    // badge: '',
    originalPrice: '',
    stockCount: ''
  });
  
  const [newTag, setNewTag] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Beauty',
    'Books',
    'Toys & Games',
    'Automotive',
    'Health & Wellness',
    'Food & Beverages'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // Feature handlers
  const handleAddFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (featureToRemove) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(feature => feature !== featureToRemove)
    }));
  };

  // Specification handlers
  const handleAddSpecification = () => {
    if (newSpecKey.trim() && newSpecValue.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey.trim()]: newSpecValue.trim()
        }
      }));
      setNewSpecKey('');
      setNewSpecValue('');
    }
  };

  const handleRemoveSpecification = (keyToRemove) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[keyToRemove];
      return {
        ...prev,
        specifications: newSpecs
      };
    });
  };

  // Color handlers
  const handleAddColor = () => {
    if (newColor.trim() && !formData.colors.includes(newColor.trim())) {
      setFormData(prev => ({
        ...prev,
        colors: [...prev.colors, newColor.trim()]
      }));
      setNewColor('');
    }
  };

  const handleRemoveColor = (colorToRemove) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.filter(color => color !== colorToRemove)
    }));
  };

  // Size handlers
  const handleAddSize = () => {
    if (newSize.trim() && !formData.sizes.includes(newSize.trim())) {
      setFormData(prev => ({
        ...prev,
        sizes: [...prev.sizes, newSize.trim()]
      }));
      setNewSize('');
    }
  };

  const handleRemoveSize = (sizeToRemove) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.filter(size => size !== sizeToRemove)
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, {
              id: Date.now() + Math.random(),
              url: e.target.result,
              name: file.name
            }]
          }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (imageId) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product data:', formData);
    // TODO: Add API call to save product
    // For now, just navigate back to dashboard
    navigate('/seller-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Header */}
      <header className="border-b bg-white/10 backdrop-blur-lg border-white/20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={() => navigate('/seller-dashboard')}
              className="flex items-center mr-4 transition-colors text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <h1 className="text-xl font-bold text-white">Add New Product</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl p-6 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Basic Information</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 text-white border rounded-lg resize-none bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Describe your product..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Pricing & Inventory</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Compare Price
                </label>
                <input
                  type="number"
                  name="comparePrice"
                  value={formData.comparePrice}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Original Price
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Stock Count (Available)
                </label>
                <input
                  type="number"
                  name="stockCount"
                  value={formData.stockCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Product SKU"
                />
              </div>

              {/* <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Badge
                </label>
                <select
                  name="badge"
                  value={formData.badge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">No Badge</option>
                  <option value="Best Seller" className="bg-gray-800">Best Seller</option>
                  <option value="Hot Deal" className="bg-gray-800">Hot Deal</option>
                  <option value="New" className="bg-gray-800">New</option>
                  <option value="Trending" className="bg-gray-800">Trending</option>
                  <option value="Gaming" className="bg-gray-800">Gaming</option>
                  <option value="Professional" className="bg-gray-800">Professional</option>
                  <option value="Limited Edition" className="bg-gray-800">Limited Edition</option>
                </select>
              </div> */}
            </div>
          </div>

          {/* Product Images */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Product Images</h2>
            
            {/* Image Upload Area */}
            <div
              className={`border-2 border-dashed ${dragActive ? 'border-emerald-400 bg-emerald-400/10' : 'border-white/30'} rounded-lg p-8 text-center transition-colors`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-white/50" />
              <p className="mb-2 text-white/70">Drag and drop images here, or</p>
              <label className="cursor-pointer">
                <span className="px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700">
                  Browse Files
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                />
              </label>
              <p className="mt-2 text-sm text-white/50">PNG, JPG, WEBP up to 10MB</p>
            </div>

            {/* Image Preview */}
            {formData.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
                {formData.images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="object-cover w-full h-32 border rounded-lg border-white/20"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute p-1 text-white transition-opacity bg-red-500 rounded-full opacity-0 top-2 right-2 hover:bg-red-600 group-hover:opacity-100"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Product Tags</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center px-3 py-1 text-sm rounded-full bg-emerald-600/20 text-emerald-400"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-emerald-400 hover:text-emerald-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                className="flex-1 px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Add a tag..."
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Features */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Product Features</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.features.map((feature, index) => (
                <span
                  key={index}
                  className="flex items-center px-3 py-1 text-sm text-blue-400 rounded-full bg-blue-600/20"
                >
                  {feature}
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(feature)}
                    className="ml-2 text-blue-400 hover:text-blue-300"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())}
                className="flex-1 px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Add a feature..."
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Specifications</h2>
            
            <div className="mb-4 space-y-3">
              {Object.entries(formData.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex-1">
                    <span className="font-medium text-white/70">{key}:</span>
                    <span className="ml-2 text-white">{value}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSpecification(key)}
                    className="ml-2 text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <input
                type="text"
                value={newSpecKey}
                onChange={(e) => setNewSpecKey(e.target.value)}
                className="px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Specification name..."
              />
              <input
                type="text"
                value={newSpecValue}
                onChange={(e) => setNewSpecValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSpecification())}
                className="px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Specification value..."
              />
            </div>
            <button
              type="button"
              onClick={handleAddSpecification}
              className="w-full px-4 py-2 mt-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              <Plus className="inline w-4 h-4 mr-2" />
              Add Specification
            </button>
          </div>

          {/* Colors & Sizes */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Colors */}
            <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
              <h2 className="mb-6 text-xl font-semibold text-white">Available Colors</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.colors.map((color, index) => (
                  <span
                    key={index}
                    className="flex items-center px-3 py-1 text-sm text-indigo-400 rounded-full bg-indigo-600/20"
                  >
                    {color}
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(color)}
                      className="ml-2 text-indigo-400 hover:text-indigo-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddColor())}
                  className="flex-1 px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Add a color..."
                />
                <button
                  type="button"
                  onClick={handleAddColor}
                  className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sizes */}
            <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
              <h2 className="mb-6 text-xl font-semibold text-white">Available Sizes</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="flex items-center px-3 py-1 text-sm text-orange-400 rounded-full bg-orange-600/20"
                  >
                    {size}
                    <button
                      type="button"
                      onClick={() => handleRemoveSize(size)}
                      className="ml-2 text-orange-400 hover:text-orange-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSize())}
                  className="flex-1 px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Add a size..."
                />
                <button
                  type="button"
                  onClick={handleAddSize}
                  className="px-4 py-2 text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
            <h2 className="mb-6 text-xl font-semibold text-white">Product Details</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-white/70">
                  Dimensions (L × W × H cm)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    name="dimensions.length"
                    value={formData.dimensions.length}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full px-3 py-3 text-sm text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Length"
                  />
                  <input
                    type="number"
                    name="dimensions.width"
                    value={formData.dimensions.width}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full px-3 py-3 text-sm text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Width"
                  />
                  <input
                    type="number"
                    name="dimensions.height"
                    value={formData.dimensions.height}
                    onChange={handleInputChange}
                    step="0.1"
                    className="w-full px-3 py-3 text-sm text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Height"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/seller-dashboard')}
              className="px-6 py-3 transition-colors border rounded-lg border-white/20 text-white/70 hover:text-white hover:border-white/40"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-6 py-3 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Product
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
