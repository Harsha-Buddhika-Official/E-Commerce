import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProductGrid from '../Components/ProductGrid';
import CategorySwitcher from '../Components/CategorySwitcher';
import { getProductsByCategory, getCategoryInfo, generateDefaultProducts } from '../Components/data';

export default function UniversalCategory() {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [likedProducts, setLikedProducts] = useState(new Set());
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    // Convert URL parameter to category name (e.g., "electronics" to "Electronics")
    const formattedCategoryName = categoryName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Special case for "Toys & Games"
    const finalCategoryName = formattedCategoryName === "Toys And Games" 
      ? "Toys & Games" 
      : formattedCategoryName;

    // Get category info
    const catInfo = getCategoryInfo(finalCategoryName);
    setCategoryData(catInfo);

    // Get products for this category
    const categoryProducts = getProductsByCategory(finalCategoryName);
    
    // If no products found, generate default ones
    if (categoryProducts.length === 0 && catInfo) {
      setProducts(generateDefaultProducts(finalCategoryName, catInfo.icon));
    } else {
      setProducts(categoryProducts);
    }
  }, [categoryName]);

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const addToCart = (product) => {
    console.log('Added to cart:', product);
    // Add cart functionality here
  };

  const sortProducts = (products, sortBy) => {
    const sortedProducts = [...products];
    switch (sortBy) {
      case 'price-low':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'rating':
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sortedProducts.sort((a, b) => b.id - a.id);
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = sortProducts(products, sortBy);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Hero */}
      <div className={`bg-gradient-to-br ${categoryData.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-8xl mr-6">{categoryData.icon}</span>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.name}</h1>
              <p className="text-xl opacity-90">
                Discover amazing {categoryData.name.toLowerCase()} products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Switcher */}
        <CategorySwitcher currentCategory={categoryData.name} />
        
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          
          <div className="text-gray-600">
            {sortedProducts.length} products found
          </div>
        </div>

        {sortedProducts.length > 0 ? (
          <ProductGrid 
            products={sortedProducts}
            likedProducts={likedProducts}
            toggleLike={toggleLike}
            addToCart={addToCart}
          />
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">{categoryData.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Check back soon for new {categoryData.name.toLowerCase()} products!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
