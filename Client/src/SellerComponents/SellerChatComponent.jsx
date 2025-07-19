import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Store, Phone, Video, MoreVertical, Send, Paperclip, Smile, Filter, Check, CheckCheck, Clock, ArrowLeft } from 'lucide-react';

export default function SellerChatComponent() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // all, unread, responded
  const messagesEndRef = useRef(null);

  // Mock customer conversations for sellers
  const [conversations, setConversations] = useState([
    {
      id: 1,
      customer: {
        name: 'Sarah Johnson',
        avatar: '👩',
        online: true,
        customerId: 'CUST001'
      },
      product: {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        image: '🎧',
        price: 89.99
      },
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'Hi! I\'m interested in these headphones. Are they noise-canceling?',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          read: true
        },
        {
          id: 2,
          sender: 'seller',
          message: 'Hello Sarah! Yes, these headphones feature advanced noise-canceling technology. They\'re perfect for commuting or focused work.',
          timestamp: new Date(Date.now() - 1500000), // 25 minutes ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'That sounds great! What\'s the battery life like?',
          timestamp: new Date(Date.now() - 900000), // 15 minutes ago
          read: false
        }
      ],
      lastMessage: {
        text: 'That sounds great! What\'s the battery life like?',
        timestamp: new Date(Date.now() - 900000),
        sender: 'customer'
      },
      unreadCount: 1,
      status: 'pending' // pending, responded, closed
    },
    {
      id: 2,
      customer: {
        name: 'Mike Chen',
        avatar: '👨',
        online: false,
        customerId: 'CUST002'
      },
      product: {
        id: 2,
        name: 'Gaming Laptop',
        image: '💻',
        price: 1299.99
      },
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'Is this laptop good for gaming? What graphics card does it have?',
          timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          read: true
        },
        {
          id: 2,
          sender: 'seller',
          message: 'Absolutely! It comes with an RTX 4060 graphics card, perfect for modern games at high settings.',
          timestamp: new Date(Date.now() - 3300000), // 55 minutes ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'Perfect! I\'ll take it. What\'s your return policy?',
          timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
          read: true
        },
        {
          id: 4,
          sender: 'seller',
          message: 'Great choice! We offer a 30-day return policy with full refund. Would you like me to help you complete the purchase?',
          timestamp: new Date(Date.now() - 2700000), // 45 minutes ago
          read: true
        }
      ],
      lastMessage: {
        text: 'Great choice! We offer a 30-day return policy with full refund.',
        timestamp: new Date(Date.now() - 2700000),
        sender: 'seller'
      },
      unreadCount: 0,
      status: 'responded'
    },
    {
      id: 3,
      customer: {
        name: 'Emma Davis',
        avatar: '👩‍🦰',
        online: true,
        customerId: 'CUST003'
      },
      product: {
        id: 3,
        name: 'Smart Watch',
        image: '⌚',
        price: 299.99
      },
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'Does this watch track sleep patterns?',
          timestamp: new Date(Date.now() - 7200000), // 2 hours ago
          read: true
        },
        {
          id: 2,
          sender: 'seller',
          message: 'Yes! It has comprehensive sleep tracking including REM cycles, deep sleep, and sleep quality scoring.',
          timestamp: new Date(Date.now() - 6900000), // 1h 55m ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'Excellent! Can I get a discount for bulk orders?',
          timestamp: new Date(Date.now() - 300000), // 5 minutes ago
          read: false
        }
      ],
      lastMessage: {
        text: 'Excellent! Can I get a discount for bulk orders?',
        timestamp: new Date(Date.now() - 300000),
        sender: 'customer'
      },
      unreadCount: 1,
      status: 'pending'
    }
  ]);

  // Filter conversations based on search and status
  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'unread' && conv.unreadCount > 0) ||
                         (filterStatus === 'responded' && conv.status === 'responded');
    
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedChat) return;

    const message = {
      id: selectedChat.messages.length + 1,
      sender: 'seller',
      message: newMessage,
      timestamp: new Date(),
      read: true
    };

    // Update the selected chat's messages
    setConversations(prev => prev.map(conv => {
      if (conv.id === selectedChat.id) {
        const updatedConv = {
          ...conv,
          messages: [...conv.messages, message],
          lastMessage: {
            text: newMessage,
            timestamp: new Date(),
            sender: 'seller'
          },
          status: 'responded'
        };
        setSelectedChat(updatedConv);
        return updatedConv;
      }
      return conv;
    }));

    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const markAsRead = (conversationId) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          unreadCount: 0,
          messages: conv.messages.map(msg => ({ ...msg, read: true }))
        };
      }
      return conv;
    }));
  };

  const openChat = (conversation) => {
    setSelectedChat(conversation);
    markAsRead(conversation.id);
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return timestamp.toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-orange-600 bg-orange-100';
      case 'responded': return 'text-green-600 bg-green-100';
      case 'closed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const totalUnread = conversations.reduce((acc, conv) => acc + conv.unreadCount, 0);

  return (
    <div className="h-full bg-gray-50">
      <div className="grid h-full grid-cols-1 lg:grid-cols-3">
        
        {/* Conversations List */}
        <div className="bg-white border-r border-gray-200 lg:col-span-1">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Customer Messages</h2>
              <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-white rounded-full">
                {totalUnread} unread
              </span>
            </div>
            
            {/* Search */}
            <div className="relative mb-3">
              <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search customers or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            
            {/* Filter */}
            <div className="flex gap-2">
              {['all', 'unread', 'responded'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterStatus(filter)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                    filterStatus === filter
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Conversations */}
          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
            {filteredConversations.length > 0 ? (
              filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => openChat(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedChat?.id === conversation.id ? 'bg-purple-50 border-purple-200' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Customer Avatar */}
                    <div className="relative">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                        <span className="text-lg text-white">{conversation.customer.avatar}</span>
                      </div>
                      {conversation.customer.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{conversation.customer.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(conversation.status)}`}>
                            {conversation.status}
                          </span>
                          <span className="text-xs text-gray-500">{formatTime(conversation.lastMessage.timestamp)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{conversation.product.image}</span>
                        <span className="text-sm text-gray-600 truncate">{conversation.product.name}</span>
                        <span className="text-sm font-medium text-green-600">${conversation.product.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                        {conversation.unreadCount > 0 && (
                          <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <div className="text-gray-400">No conversations found</div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-white lg:col-span-2">
          {selectedChat ? (
            <div className="flex flex-col h-full">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedChat(null)}
                    className="p-2 text-gray-600 transition-colors rounded-lg lg:hidden hover:bg-gray-100"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <span className="text-white">{selectedChat.customer.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{selectedChat.customer.name}</h3>
                    <p className="text-sm text-gray-600">
                      About: {selectedChat.product.name} • ID: {selectedChat.customer.customerId}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                {selectedChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'seller' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${message.sender === 'seller' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.sender === 'seller'
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <div className={`mt-1 text-xs text-gray-500 flex items-center gap-1 ${
                        message.sender === 'seller' ? 'justify-end' : 'justify-start'
                      }`}>
                        <span>{formatTime(message.timestamp)}</span>
                        {message.sender === 'seller' && (
                          <span className="text-blue-500">
                            {message.read ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-end gap-3">
                  <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your response to the customer..."
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      rows="2"
                      style={{ minHeight: '40px', maxHeight: '120px' }}
                    />
                  </div>
                  
                  <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
                    <Smile className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
                    className="px-4 py-2 text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Store className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Select a customer conversation
                </h3>
                <p className="text-gray-600">
                  Choose a conversation from the list to start responding to customer inquiries
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
