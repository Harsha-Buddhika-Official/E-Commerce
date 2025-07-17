import React, { useState, useEffect, useRef } from 'react';
import { X, Send, User, Store, Phone, Video, MoreVertical, Paperclip, Smile } from 'lucide-react';

export default function ChatComponent({ isOpen, onClose, seller, customer, productId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userType, setUserType] = useState('customer'); // 'customer' or 'seller'
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Mock initial messages
  useEffect(() => {
    if (isOpen) {
      const initialMessages = [
        {
          id: 1,
          sender: 'seller',
          senderName: seller?.name || 'Premium Store',
          message: 'Hello! Thanks for your interest in this product. How can I help you today?',
          timestamp: new Date(Date.now() - 300000), // 5 minutes ago
          type: 'text'
        },
        {
          id: 2,
          sender: 'customer',
          senderName: customer?.name || 'Customer',
          message: 'Hi! I have a few questions about this product.',
          timestamp: new Date(Date.now() - 240000), // 4 minutes ago
          type: 'text'
        },
        {
          id: 3,
          sender: 'seller',
          senderName: seller?.name || 'Premium Store',
          message: 'Of course! I\'d be happy to answer any questions you have. What would you like to know?',
          timestamp: new Date(Date.now() - 180000), // 3 minutes ago
          type: 'text'
        }
      ];
      setMessages(initialMessages);
    }
  }, [isOpen, seller, customer]);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      sender: userType,
      senderName: userType === 'customer' ? (customer?.name || 'Customer') : (seller?.name || 'Premium Store'),
      message: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate typing indicator and response
    if (userType === 'customer') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const responses = [
          'That\'s a great question! Let me provide you with detailed information.',
          'I\'d be happy to help with that. Here are the details you requested.',
          'Thanks for asking! I have all the information you need.',
          'Great choice! This is one of our best-selling products.',
          'I can definitely help you with that. Let me explain the details.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const sellerResponse = {
          id: messages.length + 2,
          sender: 'seller',
          senderName: seller?.name || 'Premium Store',
          message: randomResponse,
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, sellerResponse]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const quickReplies = [
    'What are the dimensions?',
    'Is this item in stock?',
    'What\'s the shipping time?',
    'Do you offer warranty?',
    'Can I see more photos?'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl mx-4 bg-white shadow-2xl rounded-2xl max-h-[80vh] flex flex-col">
        
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-white/20">
                {userType === 'customer' ? <Store className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {userType === 'customer' ? (seller?.name || 'Premium Store') : (customer?.name || 'Customer')}
              </h3>
              <p className="text-sm text-white/80">
                {userType === 'customer' ? 'Seller' : 'Customer'} • Online
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-white transition-colors rounded-lg hover:bg-white/20">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 text-white transition-colors rounded-lg hover:bg-white/20">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 text-white transition-colors rounded-lg hover:bg-white/20">
              <MoreVertical className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white transition-colors rounded-lg hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* User Type Switcher (for demo purposes) */}
        <div className="p-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">View as:</span>
            <button
              onClick={() => setUserType('customer')}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                userType === 'customer' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setUserType('seller')}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                userType === 'seller' 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Seller
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div 
          ref={chatContainerRef}
          className="flex-1 p-4 space-y-4 overflow-y-auto max-h-96"
          style={{ maxHeight: '400px' }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === userType ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md ${message.sender === userType ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    message.sender === userType
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                </div>
                <div className={`mt-1 text-xs text-gray-500 ${message.sender === userType ? 'text-right' : 'text-left'}`}>
                  {message.senderName} • {formatTime(message.timestamp)}
                </div>
              </div>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === userType ? 'order-1 mr-2' : 'order-2 ml-2'
              } ${message.sender === 'seller' ? 'bg-purple-100' : 'bg-blue-100'}`}>
                {message.sender === 'seller' ? (
                  <Store className="w-4 h-4 text-purple-600" />
                ) : (
                  <User className="w-4 h-4 text-blue-600" />
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Store className="w-4 h-4 text-purple-600" />
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies (only for customers) */}
        {userType === 'customer' && (
          <div className="px-4 py-2 border-t border-gray-100">
            <div className="flex gap-2 overflow-x-auto">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => setNewMessage(reply)}
                  className="flex-shrink-0 px-3 py-1 text-sm text-purple-600 transition-colors bg-purple-50 border border-purple-200 rounded-full hover:bg-purple-100"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-end gap-3">
            <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
              <Paperclip className="w-5 h-5" />
            </button>
            
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Type your message as ${userType}...`}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows="1"
                style={{ minHeight: '40px', maxHeight: '120px' }}
              />
            </div>
            
            <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
              <Smile className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleSendMessage}
              disabled={newMessage.trim() === ''}
              className="p-2 text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
