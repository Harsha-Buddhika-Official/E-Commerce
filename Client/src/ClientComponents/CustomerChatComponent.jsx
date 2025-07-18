import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Store, Phone, Video, MoreVertical, Send, Paperclip, Smile, Star, Shield, Package, ArrowLeft, Plus } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function CustomerChatComponent() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const messagesEndRef = useRef(null);

  // Mock seller conversations for customers
  const [conversations, setConversations] = useState([
    {
      id: 1,
      seller: {
        name: 'Premium Electronics Store',
        avatar: '🏪',
        rating: 4.8,
        verified: true,
        online: true,
        responseTime: '~5 mins'
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
          message: 'Hello! Yes, these headphones feature advanced noise-canceling technology. They\'re perfect for commuting or focused work. Would you like to know more about the specifications?',
          timestamp: new Date(Date.now() - 1500000), // 25 minutes ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'That sounds great! What\'s the battery life like?',
          timestamp: new Date(Date.now() - 900000), // 15 minutes ago
          read: true
        },
        {
          id: 4,
          sender: 'seller',
          message: 'The battery lasts up to 30 hours with ANC off and 20 hours with ANC on. Plus, it has quick charge - 15 minutes gives you 3 hours of playback!',
          timestamp: new Date(Date.now() - 300000), // 5 minutes ago
          read: false
        }
      ],
      lastMessage: {
        text: 'The battery lasts up to 30 hours with ANC off and 20 hours with ANC on.',
        timestamp: new Date(Date.now() - 300000),
        sender: 'seller'
      },
      unreadCount: 1
    },
    {
      id: 2,
      seller: {
        name: 'Fashion Hub',
        avatar: '👗',
        rating: 4.6,
        verified: true,
        online: false,
        responseTime: '~30 mins'
      },
      product: {
        id: 2,
        name: 'Designer Leather Jacket',
        image: '🧥',
        price: 199.99
      },
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'Do you have this jacket in size Medium?',
          timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          read: true
        },
        {
          id: 2,
          sender: 'seller',
          message: 'Yes, we have it in Medium! It\'s made from genuine leather and comes with a 2-year warranty. Would you like me to reserve it for you?',
          timestamp: new Date(Date.now() - 3300000), // 55 minutes ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'Perfect! What\'s your return policy?',
          timestamp: new Date(Date.now() - 3000000), // 50 minutes ago
          read: true
        },
        {
          id: 4,
          sender: 'seller',
          message: 'We offer 30-day returns with full refund, no questions asked. Free shipping both ways!',
          timestamp: new Date(Date.now() - 2700000), // 45 minutes ago
          read: true
        }
      ],
      lastMessage: {
        text: 'We offer 30-day returns with full refund, no questions asked.',
        timestamp: new Date(Date.now() - 2700000),
        sender: 'seller'
      },
      unreadCount: 0
    },
    {
      id: 3,
      seller: {
        name: 'Tech Solutions Pro',
        avatar: '💻',
        rating: 4.9,
        verified: true,
        online: true,
        responseTime: '~2 mins'
      },
      product: {
        id: 3,
        name: 'Gaming Laptop RTX 4060',
        image: '🎮',
        price: 1299.99
      },
      messages: [
        {
          id: 1,
          sender: 'customer',
          message: 'Can this laptop handle AAA games at high settings?',
          timestamp: new Date(Date.now() - 7200000), // 2 hours ago
          read: true
        },
        {
          id: 2,
          sender: 'seller',
          message: 'Absolutely! With the RTX 4060 and 16GB RAM, you can play all modern AAA games at high-ultra settings at 1080p. It also supports ray tracing!',
          timestamp: new Date(Date.now() - 6900000), // 1h 55m ago
          read: true
        },
        {
          id: 3,
          sender: 'customer',
          message: 'That\'s exactly what I need! Do you offer any warranties?',
          timestamp: new Date(Date.now() - 600000), // 10 minutes ago
          read: false
        }
      ],
      lastMessage: {
        text: 'That\'s exactly what I need! Do you offer any warranties?',
        timestamp: new Date(Date.now() - 600000),
        sender: 'customer'
      },
      unreadCount: 0
    }
  ]);

  // Function to create or find conversation with a specific seller
  const createOrFindConversation = (sellerInfo, productInfo) => {
    // Check if conversation already exists
    const existingConv = conversations.find(conv => 
      conv.seller.name === sellerInfo.name && conv.product.id === productInfo.id
    );
    
    if (existingConv) {
      return existingConv;
    }

    // Create new conversation
    const newConversation = {
      id: conversations.length + 1,
      seller: {
        name: sellerInfo.name || 'Store',
        avatar: sellerInfo.avatar || '🏪',
        rating: sellerInfo.rating || 4.5,
        verified: sellerInfo.verified || false,
        online: true,
        responseTime: '~10 mins'
      },
      product: {
        id: productInfo.id || Date.now(),
        name: productInfo.name || 'Product',
        image: productInfo.image || '📦',
        price: productInfo.price || 0
      },
      messages: [
        {
          id: 1,
          sender: 'seller',
          message: `Hello! Thank you for your interest in ${productInfo.name}. How can I help you today?`,
          timestamp: new Date(),
          read: false
        }
      ],
      lastMessage: {
        text: `Hello! Thank you for your interest in ${productInfo.name}. How can I help you today?`,
        timestamp: new Date(),
        sender: 'seller'
      },
      unreadCount: 1
    };

    // Add to conversations
    setConversations(prev => [newConversation, ...prev]);
    return newConversation;
  };

  // Handle URL parameters for direct seller contact
  useEffect(() => {
    const sellerName = searchParams.get('seller');
    const productId = searchParams.get('productId');
    const productName = searchParams.get('productName');
    const productPrice = searchParams.get('productPrice');
    const productImage = searchParams.get('productImage');

    if (sellerName && productId) {
      const sellerInfo = {
        name: sellerName,
        verified: true,
        rating: 4.7
      };
      
      const productInfo = {
        id: parseInt(productId),
        name: productName || 'Product',
        price: parseFloat(productPrice) || 0,
        image: productImage || '📦'
      };

      const conversation = createOrFindConversation(sellerInfo, productInfo);
      setSelectedChat(conversation);
      setShowWelcomeMessage(true);
      
      // Hide welcome message after 3 seconds
      setTimeout(() => setShowWelcomeMessage(false), 3000);
      
      // Clear URL parameters after processing
      setSearchParams({});
    }
  }, [searchParams, conversations.length]);

  // Quick reply suggestions for customers
  const quickReplies = [
    'What are the dimensions?',
    'Is this item in stock?',
    'What\'s the shipping time?',
    'Do you offer warranty?',
    'Can I see more photos?',
    'What\'s your return policy?',
    'Do you have other colors?',
    'Can you offer a discount?'
  ];

  // Filter conversations based on search
  const filteredConversations = conversations.filter(conv =>
    conv.seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      sender: 'customer',
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
            sender: 'customer'
          }
        };
        setSelectedChat(updatedConv);
        return updatedConv;
      }
      return conv;
    }));

    setNewMessage('');

    // Simulate seller response after a delay
    setTimeout(() => {
      const responses = [
        'Thank you for your question! Let me check that information for you.',
        'Great question! I\'d be happy to help you with that.',
        'I understand your concern. Here\'s what I can tell you...',
        'That\'s a popular question! Let me provide you with the details.',
        'Thanks for your interest! I have all the information you need.'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const sellerResponse = {
        id: selectedChat.messages.length + 2,
        sender: 'seller',
        message: randomResponse,
        timestamp: new Date(),
        read: false
      };

      setConversations(prev => prev.map(conv => {
        if (conv.id === selectedChat.id) {
          const updatedConv = {
            ...conv,
            messages: [...conv.messages, sellerResponse],
            lastMessage: {
              text: randomResponse,
              timestamp: new Date(),
              sender: 'seller'
            },
            unreadCount: conv.unreadCount + 1
          };
          if (selectedChat.id === conv.id) {
            setSelectedChat(updatedConv);
          }
          return updatedConv;
        }
        return conv;
      }));
    }, 2000);
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
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

  const totalUnread = conversations.reduce((acc, conv) => acc + conv.unreadCount, 0);

  return (
    <div className="h-full bg-gray-50">
      <div className="grid h-full grid-cols-1 lg:grid-cols-3">
        
        {/* Conversations List */}
        <div className="bg-white border-r border-gray-200 lg:col-span-1">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-green-600">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">My Conversations</h2>
              <div className="flex items-center gap-2">
                {totalUnread > 0 && (
                  <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-white rounded-full">
                    {totalUnread} new
                  </span>
                )}
                <button className="p-2 text-white transition-colors rounded-lg hover:bg-white/20">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search sellers or products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
            {filteredConversations.length > 0 ? (
              filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => openChat(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedChat?.id === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Seller Avatar */}
                    <div className="relative">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                        <span className="text-lg text-white">{conversation.seller.avatar}</span>
                      </div>
                      {conversation.seller.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 truncate">{conversation.seller.name}</h3>
                          {conversation.seller.verified && (
                            <Shield className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{formatTime(conversation.lastMessage.timestamp)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(conversation.seller.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">({conversation.seller.rating})</span>
                        <span className="text-xs text-green-600">{conversation.seller.responseTime}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{conversation.product.image}</span>
                        <span className="text-sm text-gray-600 truncate">{conversation.product.name}</span>
                        <span className="text-sm font-medium text-green-600">${conversation.product.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                        {conversation.unreadCount > 0 && (
                          <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-500 rounded-full">
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
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedChat(null)}
                      className="p-2 text-gray-600 transition-colors rounded-lg lg:hidden hover:bg-gray-100"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                      <span className="text-white">{selectedChat.seller.avatar}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{selectedChat.seller.name}</h3>
                        {selectedChat.seller.verified && (
                          <Shield className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(selectedChat.seller.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span>({selectedChat.seller.rating})</span>
                        </div>
                        <span>•</span>
                        <span className={selectedChat.seller.online ? 'text-green-600' : 'text-gray-500'}>
                          {selectedChat.seller.online ? 'Online' : 'Offline'}
                        </span>
                        <span>•</span>
                        <span>{selectedChat.seller.responseTime}</span>
                      </div>
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
                
                {/* Product Info */}
                <div className="flex items-center gap-3 p-3 mt-3 bg-white border border-gray-200 rounded-lg">
                  <span className="text-2xl">{selectedChat.product.image}</span>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{selectedChat.product.name}</h4>
                    <p className="text-sm text-gray-600">Product Discussion</p>
                  </div>
                  <span className="text-lg font-semibold text-green-600">${selectedChat.product.price}</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 350px)' }}>
                {/* Welcome Message */}
                {showWelcomeMessage && (
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-lg p-4 max-w-md text-center">
                      <div className="flex items-center justify-center mb-2">
                        <MessageCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-700 font-medium">Chat Started</span>
                      </div>
                      <p className="text-sm text-green-600">
                        You can now chat with {selectedChat.seller} about "{selectedChat.product.name}"
                      </p>
                    </div>
                  </div>
                )}
                {selectedChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${message.sender === 'customer' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`px-4 py-2 rounded-2xl ${
                          message.sender === 'customer'
                            ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                      </div>
                      <div className={`mt-1 text-xs text-gray-500 ${
                        message.sender === 'customer' ? 'text-right' : 'text-left'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 border-t border-gray-100">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {quickReplies.slice(0, 4).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="flex-shrink-0 px-3 py-1 text-sm text-blue-600 transition-colors bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
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
                      placeholder="Type your message to the seller..."
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="px-4 py-2 text-white transition-all bg-gradient-to-r from-blue-600 to-green-600 rounded-lg hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <User className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Select a conversation
                </h3>
                <p className="text-gray-600">
                  Choose a conversation from the list to start chatting with sellers
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
