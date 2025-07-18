import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, TrendingUp, Mail, Package, ShoppingCart, DollarSign, Users, BarChart3, Plus, Eye, Edit, Trash2, Bell, Settings, LogOut, Search, Filter, Menu, ChevronLeft, X, Check, Clock, AlertCircle, MessageCircle } from 'lucide-react';
import { initialNotifications, notificationHelpers } from './notificationData';
import SellerChatComponent from './SellerChatComponent';

export default function SellerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  // Initialize notifications from imported data
  const [notifications, setNotifications] = useState(initialNotifications);

  // Close notifications dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const unreadCount = notificationHelpers.getUnreadCount(notifications);

  const markAsRead = (id) => {
    setNotifications(prev => notificationHelpers.markAsRead(prev, id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => notificationHelpers.markAllAsRead(prev));
  };

  const removeNotification = (id) => {
    setNotifications(prev => notificationHelpers.removeNotification(prev, id));
  };

  // Mock data - replace with actual data from your backend
  const stats = {
    totalSales: 25420,
    totalOrders: 156,
    totalProducts: 48,
    totalCustomers: 234
  };

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', product: 'Wireless Headphones', amount: 99.99, status: 'completed' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Smart Watch', amount: 299.99, status: 'pending' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Bluetooth Speaker', amount: 59.99, status: 'shipped' },
  ];

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, stock: 25, status: 'active' },
    { id: 2, name: 'Smart Watch', price: 299.99, stock: 12, status: 'active' },
    { id: 3, name: 'Bluetooth Speaker', price: 59.99, stock: 0, status: 'out_of_stock' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Total Sales</p>
                    <p className="text-2xl font-bold text-white">${stats.totalSales.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              
              <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Total Orders</p>
                    <p className="text-2xl font-bold text-white">{stats.totalOrders}</p>
                  </div>
                  <ShoppingCart className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              
              <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Products</p>
                    <p className="text-2xl font-bold text-white">{stats.totalProducts}</p>
                  </div>
                  <Package className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Customers</p>
                    <p className="text-2xl font-bold text-white">{stats.totalCustomers}</p>
                  </div>
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
              <h3 className="mb-4 text-xl font-semibold text-white">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="pb-3 text-left text-white/70">Order ID</th>
                      <th className="pb-3 text-left text-white/70">Customer</th>
                      <th className="pb-3 text-left text-white/70">Product</th>
                      <th className="pb-3 text-left text-white/70">Amount</th>
                      <th className="pb-3 text-left text-white/70">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="py-3 text-white">{order.id}</td>
                        <td className="py-3 text-white">{order.customer}</td>
                        <td className="py-3 text-white">{order.product}</td>
                        <td className="py-3 text-white">${order.amount}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Products</h2>
              <button 
                onClick={() => navigate('/add-product')}
                className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </button>
            </div>
            
            <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="pb-3 text-left text-white/70">Product</th>
                      <th className="pb-3 text-left text-white/70">Price</th>
                      <th className="pb-3 text-left text-white/70">Stock</th>
                      <th className="pb-3 text-left text-white/70">Status</th>
                      <th className="pb-3 text-left text-white/70">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-white/10">
                        <td className="py-3 text-white">{product.name}</td>
                        <td className="py-3 text-white">${product.price}</td>
                        <td className="py-3 text-white">{product.stock}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            product.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {product.status === 'active' ? 'Active' : 'Out of Stock'}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-yellow-400 hover:text-yellow-300">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'messages':
        return (
          <div className="h-full">
            <SellerChatComponent />
          </div>
        );
      
      default:
        return <div className="text-white">Content for {activeTab}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Header */}
      <header className="border-b bg-white/10 backdrop-blur-lg border-white/20 relative z-[1000]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Store className="w-8 h-8 mr-3 text-emerald-400" />
              <h1 className="text-xl font-bold text-white">Seller Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="text-white/70 hover:text-white lg:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Notifications Dropdown */}
              <div className="relative z-[2000]" ref={notificationRef}>
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative transition-colors text-white/70 hover:text-white"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl z-[9999] max-h-96 overflow-hidden ring-1 ring-white/10">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/5">
                      <h3 className="font-semibold text-white">Notifications</h3>
                      <div className="flex items-center space-x-2">
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllAsRead}
                            className="text-xs transition-colors text-emerald-400 hover:text-emerald-300"
                          >
                            Mark all read
                          </button>
                        )}
                        <button
                          onClick={() => setShowNotifications(false)}
                          className="transition-colors text-white/70 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto max-h-80">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-white/70">
                          <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p>No notifications</p>
                        </div>
                      ) : (
                        notifications.map((notification) => {
                          const IconComponent = notification.icon;
                          return (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-white/10 hover:bg-white/5 transition-colors relative ${
                                !notification.read ? 'bg-white/5' : ''
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`flex-shrink-0 ${notification.color}`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-white truncate">
                                        {notification.title}
                                      </p>
                                      <p className="mt-1 text-xs leading-relaxed text-white/70">
                                        {notification.message}
                                      </p>
                                      <p className="flex items-center mt-2 text-xs text-white/50">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {notification.time}
                                      </p>
                                    </div>
                                    <div className="flex items-center ml-2 space-x-1">
                                      {!notification.read && (
                                        <button
                                          onClick={() => markAsRead(notification.id)}
                                          className="transition-colors text-emerald-400 hover:text-emerald-300"
                                          title="Mark as read"
                                        >
                                          <Check className="w-3 h-3" />
                                        </button>
                                      )}
                                      <button
                                        onClick={() => removeNotification(notification.id)}
                                        className="text-red-400 transition-colors hover:text-red-300"
                                        title="Remove notification"
                                      >
                                        <X className="w-3 h-3" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {!notification.read && (
                                <div className="absolute top-4 right-4">
                                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                      <div className="p-3 text-center border-t border-white/20">
                        <button className="text-sm transition-colors text-emerald-400 hover:text-emerald-300">
                          View all notifications
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button 
                onClick={() => navigate('/seller/profile-settings')}
                className="text-white/70 hover:text-white"
                title="Profile Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-white/70 hover:text-white">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white/5 backdrop-blur-lg border-r border-white/20 min-h-screen transition-all duration-300 ease-in-out flex flex-col`}>
          {/* Sidebar Toggle Button */}
          <div className={`flex ${sidebarCollapsed ? 'justify-center' : 'justify-end'} p-4`}>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 transition-colors rounded-lg text-white/70 hover:text-white hover:bg-white/10"
            >
              {sidebarCollapsed ? (
                <Menu className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <nav className="flex-1">
            <div className={`${sidebarCollapsed ? 'px-2' : 'px-4'}`}>
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Overview' : ''}
              >
                <BarChart3 className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Overview</span>}
              </button>
              
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'products' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Products' : ''}
              >
                <Package className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Products</span>}
              </button>
              
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'orders' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Orders' : ''}
              >
                <ShoppingCart className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Orders</span>}
              </button>
              
              <button
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'customers' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Customers' : ''}
              >
                <Users className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Customers</span>}
              </button>
              
              <button
                onClick={() => setActiveTab('messages')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'messages' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Messages' : ''}
              >
                <MessageCircle className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Messages</span>}
              </button>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center ${sidebarCollapsed ? 'px-2 justify-center' : 'px-4'} py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === 'analytics' 
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? 'Analytics' : ''}
              >
                <TrendingUp className={`w-5 h-5 flex-shrink-0 ${!sidebarCollapsed ? 'mr-3' : ''}`} />
                {!sidebarCollapsed && <span>Analytics</span>}
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
