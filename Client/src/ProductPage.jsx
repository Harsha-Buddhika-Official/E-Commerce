import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingCart, CreditCard, Truck, Shield, RotateCcw, Package, MapPin, Clock, User, Store, ArrowLeft } from 'lucide-react';
import { allProducts } from './Components/data';
import Navbar from './Components/Navbar';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product from allProducts array
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    
    if (foundProduct) {
      // Calculate discount if not provided
      const discount = foundProduct.originalPrice 
        ? Math.round(((foundProduct.originalPrice - foundProduct.price) / foundProduct.originalPrice) * 100)
        : 0;
      
      // Use the product data as is, with some defaults for missing fields
      const enhancedProduct = {
        ...foundProduct,
        discount,
        inStock: foundProduct.inStock !== undefined ? foundProduct.inStock : true,
        stockCount: foundProduct.stockCount || Math.floor(Math.random() * 50) + 5,
        // Only add default data if not present in the product
        images: foundProduct.images || [
          `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&auto=format&fit=crop`,
          `https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80&auto=format&fit=crop`,
          `https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&q=80&auto=format&fit=crop`
        ],
        colors: foundProduct.colors || ['Black', 'White', 'Blue', 'Red'],
        sizes: foundProduct.sizes || (foundProduct.category === 'Fashion' ? ['XS', 'S', 'M', 'L', 'XL'] : null),
        description: foundProduct.description || `Experience premium quality with our ${foundProduct.name}. This high-quality product features advanced technology and superior craftsmanship.`,
        features: foundProduct.features || getProductFeatures(foundProduct.category),
        specifications: foundProduct.specifications || getProductSpecifications(foundProduct.category),
        seller: foundProduct.seller || {
          name: "Premium Store",
          rating: 4.8,
          totalProducts: Math.floor(Math.random() * 2000) + 500,
          memberSince: "2019",
          location: "New York, USA",
          verified: true
        }
      };
      
      setProduct(enhancedProduct);
    }
    
    setLoading(false);
  }, [id]);

  // Helper function to get product features based on category
  const getProductFeatures = (category) => {
    const features = {
      'Electronics': [
        "High-quality construction",
        "Advanced technology",
        "Energy efficient",
        "Wireless connectivity",
        "Long-lasting battery",
        "Premium materials"
      ],
      'Fashion': [
        "Premium fabric quality",
        "Comfortable fit",
        "Stylish design",
        "Durable construction",
        "Easy care instructions",
        "Trendy colors"
      ],
      'Beauty': [
        "Dermatologically tested",
        "Natural ingredients",
        "Long-lasting formula",
        "Suitable for all skin types",
        "Cruelty-free",
        "Professional grade"
      ],
      'Books': [
        "High-quality paper",
        "Clear typography",
        "Durable binding",
        "Educational content",
        "Expert author",
        "Latest edition"
      ]
    };
    
    return features[category] || [
      "Premium quality",
      "Durable design",
      "Excellent value",
      "Trusted brand",
      "Customer favorite",
      "Satisfaction guaranteed"
    ];
  };

  // Helper function to get product specifications based on category
  const getProductSpecifications = (category) => {
    const specs = {
      'Electronics': {
        "Brand": "Premium Tech",
        "Model": "PT-2024",
        "Warranty": "2 years",
        "Power": "Rechargeable",
        "Connectivity": "Bluetooth 5.0",
        "Compatibility": "Universal"
      },
      'Fashion': {
        "Material": "Premium Cotton",
        "Care Instructions": "Machine washable",
        "Origin": "Made in USA",
        "Fit": "Regular",
        "Season": "All Season",
        "Style": "Contemporary"
      },
      'Beauty': {
        "Type": "Premium Formula",
        "Volume": "50ml",
        "Skin Type": "All Skin Types",
        "Application": "Easy Apply",
        "Ingredients": "Natural",
        "Shelf Life": "24 months"
      }
    };
    
    return specs[category] || {
      "Brand": "Premium Brand",
      "Quality": "Premium",
      "Origin": "Made with Care",
      "Warranty": "1 year",
      "Satisfaction": "Guaranteed",
      "Support": "24/7"
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => Math.min(prev + 1, product.stockCount));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product, quantity, selectedColor, selectedSize });
    // Add to cart logic here
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { product, quantity, selectedColor, selectedSize });
    // Buy now logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Product Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Product Images */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Thumbnail Images */}
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="flex md:flex-col gap-2">
                    {product.images && product.images.length > 0 ? (
                      product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Product ${index + 1}`}
                          className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                            selectedImage === index ? 'border-purple-500' : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedImage(index)}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ))
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{product.image}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Main Image */}
                <div className="md:col-span-4 order-1 md:order-2">
                  <div className="relative">
                    {product.images && product.images[selectedImage] ? (
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-96 object-cover rounded-xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center"
                      style={{ display: product.images && product.images[selectedImage] ? 'none' : 'flex' }}
                    >
                      <span className="text-8xl">{product.image}</span>
                    </div>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                        isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                    <button className="absolute top-4 right-16 p-2 bg-white rounded-full text-gray-600 hover:bg-gray-100 transition-all">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key}:</span>
                      <span className="text-gray-900 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Store className="w-5 h-5 mr-2" />
                Seller Information
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-gray-900">{product.seller.name}</h4>
                    {product.seller.verified && (
                      <Shield className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.seller.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.seller.rating})</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      {product.seller.totalProducts} products
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Since {product.seller.memberSince}
                    </div>
                    <div className="flex items-center col-span-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {product.seller.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              
              {/* Price and Purchase Options */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm font-medium">
                      {product.discount}% OFF
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  {product.inStock ? (
                    <p className="text-green-600 text-sm font-medium">
                      ✓ In Stock ({product.stockCount} items available)
                    </p>
                  ) : (
                    <p className="text-red-600 text-sm font-medium">✗ Out of Stock</p>
                  )}
                </div>

                {/* Color Selection */}
                {product.colors && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Color</label>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1 rounded-lg border text-sm transition-all ${
                            selectedColor === color
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {product.sizes && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Size</label>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1 rounded-lg border text-sm transition-all ${
                            selectedSize === size
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
                  <div className="flex items-center border border-gray-300 rounded-lg w-32">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="flex-1 text-center py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800"
                      disabled={quantity >= product.stockCount}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleBuyNow}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                    disabled={!product.inStock}
                  >
                    <CreditCard className="w-5 h-5" />
                    Buy Now
                  </button>
                  
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Shipping & Services */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping & Services</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Free Delivery</p>
                      <p className="text-gray-600">Estimated delivery: 3-5 business days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <RotateCcw className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">30-Day Returns</p>
                      <p className="text-gray-600">Free returns within 30 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">Warranty</p>
                      <p className="text-gray-600">2-year manufacturer warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}