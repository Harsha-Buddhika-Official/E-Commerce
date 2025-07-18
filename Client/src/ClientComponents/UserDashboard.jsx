import React, { useState, useEffect } from 'react';
import { User, ShoppingBag, Heart, CreditCard, MapPin, Bell, Settings, Package, Star, Calendar, TrendingUp, Award, Gift, LogOut, Edit3, Eye, Truck, CheckCircle, Clock, X, Plus, Trash2, Phone, Mail, Home, Building, Sparkles, ArrowLeft, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import CustomerChatComponent from './CustomerChatComponent';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [searchParams] = useSearchParams();

  // Handle URL parameters for direct navigation
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['overview', 'orders', 'wishlist', 'messages', 'addresses', 'payments', 'notifications', 'settings'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "👤",
    memberSince: "January 2023",
    loyaltyPoints: 2450,
    totalSpent: 1299.97,
    totalOrders: 24
  };

  const recentOrders = [
    {
      id: "#ORD-001",
      date: "2025-07-05",
      status: "delivered",
      total: 89.99,
      items: 2,
      image: "📱"
    },
    {
      id: "#ORD-002",
      date: "2025-07-02",
      status: "shipped",
      total: 149.99,
      items: 1,
      image: "👟"
    },
    {
      id: "#ORD-003",
      date: "2025-06-28",
      status: "processing",
      total: 299.99,
      items: 3,
      image: "⌚"
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Designer Laptop Bag",
      price: 129.99,
      image: "💼",
      inStock: true
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      price: 49.99,
      image: "🔌",
      inStock: true
    },
    {
      id: 3,
      name: "Smart Home Speaker",
      price: 199.99,
      image: "🔊",
      inStock: false
    }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Alex Johnson",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "Alex Johnson",
      street: "456 Business Ave",
      city: "New York",
      state: "NY",
      zip: "10002",
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true
    },
    {
      id: 2,
      type: "MasterCard",
      last4: "8888",
      expiry: "09/25",
      isDefault: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative p-8 overflow-hidden text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 -translate-x-24 translate-y-24 rounded-full bg-white/5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Welcome back, {user.name}! 👋</h2>
              <p className="text-lg text-blue-100">Ready to continue your shopping journey?</p>
            </div>
            <div className="text-right">
              <div className="flex items-center mb-2 space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold">{user.loyaltyPoints}</span>
              </div>
              <p className="text-blue-100">Loyalty Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <TrendingUp className="text-green-400 w-7 h-7" />
            </div>
            <span className="text-3xl font-bold">${user.totalSpent}</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90">Total Spent</h3>
          <p className="text-white/70">Since {user.memberSince}</p>
        </div>

        <div className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Package className="text-blue-400 w-7 h-7" />
            </div>
            <span className="text-3xl font-bold">{user.totalOrders}</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90">Total Orders</h3>
          <p className="text-white/70">All time purchases</p>
        </div>

        <div className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <Gift className="text-yellow-400 w-7 h-7" />
            </div>
            <span className="text-3xl font-bold">{user.loyaltyPoints}</span>
          </div>
          <h3 className="text-lg font-semibold text-white/90">Reward Points</h3>
          <p className="text-white/70">Available to redeem</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <button 
            onClick={() => setActiveTab('orders')}
            className="font-medium text-blue-300 transition-colors hover:text-blue-200"
          >
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentOrders.slice(0, 3).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border bg-white/5 rounded-xl border-white/10">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{order.image}</div>
                <div>
                  <p className="font-semibold text-white">{order.id}</p>
                  <p className="text-white/70">{order.date} • {order.items} items</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-white">${order.total}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="capitalize">{order.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Your Orders</h2>
        <div className="flex space-x-2">
          <select className="px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option className="bg-gray-800">All Orders</option>
            <option className="bg-gray-800">Delivered</option>
            <option className="bg-gray-800">Shipped</option>
            <option className="bg-gray-800">Processing</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{order.image}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{order.id}</h3>
                  <p className="text-white/70">Placed on {order.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">${order.total}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="capitalize">{order.status}</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-white/70">{order.items} items</p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 font-medium text-blue-300 transition-colors hover:text-blue-200">
                  View Details
                </button>
                <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Your Wishlist</h2>
        <p className="text-white/70">{wishlistItems.length} items</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <div key={item.id} className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-5xl">{item.image}</div>
              <button className="p-2 text-red-400 transition-colors hover:text-red-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{item.name}</h3>
            <p className="mb-4 text-2xl font-bold text-white">${item.price}</p>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${item.inStock ? 'text-green-400' : 'text-red-400'}`}>
                {item.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <button 
                disabled={!item.inStock}
                className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Your Addresses</h2>
        <button 
          onClick={() => setShowAddAddress(true)}
          className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Address</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {addresses.map((address) => (
          <div key={address.id} className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  {address.type === 'Home' ? <Home className="w-4 h-4 text-blue-400" /> : <Building className="w-4 h-4 text-blue-400" />}
                </div>
                <span className="font-semibold text-white">{address.type}</span>
                {address.isDefault && (
                  <span className="px-2 py-1 text-xs text-green-400 rounded-full bg-green-500/20">Default</span>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="p-2 transition-colors text-white/70 hover:text-white">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 transition-colors hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-white/70">
              <p className="font-medium text-white">{address.name}</p>
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Payment Methods</h2>
        <button className="flex items-center px-4 py-2 space-x-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          <span>Add Card</span>
        </button>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-blue-500/20">
                  <CreditCard className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{method.type} •••• {method.last4}</p>
                  <p className="text-white/70">Expires {method.expiry}</p>
                </div>
                {method.isDefault && (
                  <span className="px-3 py-1 text-xs text-green-400 rounded-full bg-green-500/20">Default</span>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="p-2 transition-colors text-white/70 hover:text-white">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 transition-colors hover:text-red-300">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Account Settings</h2>
      
      <div className="p-6 text-white border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Profile Information</h3>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center px-4 py-2 space-x-2 text-blue-300 transition-colors hover:text-blue-200"
          >
            <Edit3 className="w-4 h-4" />
            <span>{isEditing ? 'Cancel' : 'Edit'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Full Name</label>
            <input
              type="text"
              value={user.name}
              disabled={!isEditing}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-white/5"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Email Address</label>
            <input
              type="email"
              value={user.email}
              disabled={!isEditing}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-white/5"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Phone Number</label>
            <input
              type="tel"
              value={user.phone}
              disabled={!isEditing}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-white/5"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Member Since</label>
            <input
              type="text"
              value={user.memberSince}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-white/5 border-white/10 text-white/70"
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex mt-6 space-x-4">
            <button className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 transition-colors border rounded-lg border-white/20 text-white/70 hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'orders': return renderOrders();
      case 'wishlist': return renderWishlist();
      case 'messages': return <div className="h-full"><CustomerChatComponent /></div>;
      case 'addresses': return renderAddresses();
      case 'payments': return renderPayments();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">
      {/* Header */}
      <header className="border-b bg-white/10 backdrop-blur-lg border-white/20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">ShopVibe</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{user.avatar}</div>
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-white/70">Premium Member</p>
                </div>
              </div>
              <button className="p-2 transition-colors text-white/70 hover:text-white">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0 w-64">
            <div className="border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
              <div className="p-6">
                <div className="flex items-center mb-6 space-x-3">
                  <div className="text-4xl">{user.avatar}</div>
                  <div>
                    <p className="font-semibold text-white">{user.name}</p>
                    <div className="flex items-center space-x-1">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-white/70">Premium</span>
                    </div>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === item.id
                            ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}