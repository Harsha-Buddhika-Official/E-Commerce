import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Grid, List, ChevronDown, Star, Heart, ShoppingCart } from 'lucide-react';
import { allProducts } from './Components/data';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState(new Set());
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    if (query) {
      searchProducts(query);
    } else {
      setSearchResults([]);
      setFilteredResults([]);
    }
    setLoading(false);
  }, [query]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [searchResults, sortBy, selectedCategories, selectedRatings, minPrice, maxPrice]);

  const searchProducts = (searchQuery) => {
    const results = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );
    setSearchResults(results);
  };

  const applyFiltersAndSort = () => {
    let filtered = [...searchResults];

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Apply rating filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product => 
        selectedRatings.includes(Math.floor(product.rating))
      );
    }

    // Apply price filter
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    filtered = filtered.filter(product => 
      product.price >= min && product.price <= max
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded || '2024-01-01') - new Date(a.dateAdded || '2024-01-01'));
        break;
      default: // relevance
        // Keep original search relevance order
        break;
    }

    setFilteredResults(filtered);
  };

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRatings([]);
    setMinPrice('');
    setMaxPrice('');
  };

  // Get unique categories from search results
  const availableCategories = [...new Set(searchResults.map(product => product.category))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-4 border-4 border-purple-600 border-solid rounded-full animate-spin border-t-transparent"></div>
            <p className="text-gray-600">Searching...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Search Header */}
      <div className="py-8 bg-white border-b">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {query ? `Search results for "${query}"` : 'Search Results'}
              </h1>
              <p className="mt-1 text-gray-600">
                {filteredResults.length} {filteredResults.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            
            {/* View Toggle & Sort */}
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="relevance">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80">
              <div className="p-6 bg-white rounded-lg shadow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Clear All
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Price Range</h4>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Categories */}
                {availableCategories.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 font-medium">Categories</h4>
                    <div className="space-y-2">
                      {availableCategories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedCategories([...selectedCategories, category]);
                              } else {
                                setSelectedCategories(selectedCategories.filter(c => c !== category));
                              }
                            }}
                            className="mr-2 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRatings([...selectedRatings, rating]);
                            } else {
                              setSelectedRatings(selectedRatings.filter(r => r !== rating));
                            }
                          }}
                          className="mr-2 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Content */}
          <div className={`flex-1 ${showFilters ? '' : 'max-w-none'}`}>
            {filteredResults.length === 0 ? (
              <div className="text-center py-16">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {query ? 'No products found' : 'Enter a search term'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {query 
                    ? `No products match your search for "${query}". Try different keywords or check your spelling.`
                    : 'Use the search bar above to find products.'
                  }
                </p>
                {selectedCategories.length > 0 || selectedRatings.length > 0 || minPrice || maxPrice ? (
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50"
                  >
                    Clear Filters
                  </button>
                ) : null}
              </div>
            ) : (
              <div className={`${viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                : 'space-y-4'
              }`}>
                {filteredResults.map(product => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      viewMode === 'list' ? 'flex items-center p-4' : 'overflow-hidden'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      <>
                        <div className="relative">
                          <img
                            src={product.image || '/api/placeholder/300/300'}
                            alt={product.name}
                            className="object-cover w-full h-48 cursor-pointer"
                            onClick={() => handleProductClick(product.id)}
                          />
                          <button
                            onClick={() => toggleLike(product.id)}
                            className="absolute p-2 bg-white rounded-full shadow-md top-2 right-2 hover:bg-gray-50"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                likedProducts.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                              }`}
                            />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3
                            className="mb-2 font-semibold text-gray-900 cursor-pointer hover:text-purple-600"
                            onClick={() => handleProductClick(product.id)}
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                          </div>
                          <p className="mb-3 text-lg font-bold text-purple-600">${product.price}</p>
                          <button
                            onClick={() => handleProductClick(product.id)}
                            className="flex items-center justify-center w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            View Product
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={product.image || '/api/placeholder/150/150'}
                          alt={product.name}
                          className="object-cover w-24 h-24 mr-4 rounded cursor-pointer"
                          onClick={() => handleProductClick(product.id)}
                        />
                        <div className="flex-1">
                          <h3
                            className="mb-1 text-lg font-semibold text-gray-900 cursor-pointer hover:text-purple-600"
                            onClick={() => handleProductClick(product.id)}
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                          </div>
                          <p className="mb-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-purple-600">${product.price}</span>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => toggleLike(product.id)}
                                className="p-2 text-gray-400 hover:text-red-500"
                              >
                                <Heart
                                  className={`w-5 h-5 ${
                                    likedProducts.has(product.id) ? 'text-red-500 fill-current' : ''
                                  }`}
                                />
                              </button>
                              <button
                                onClick={() => handleProductClick(product.id)}
                                className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700"
                              >
                                View Product
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
