import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MoreVertical, Phone, Video, MessageCircle } from 'lucide-react';
import Navbar from './MainComponents/Navbar';
import ChatComponent from './Components/ChatComponent';

export default function ChatPage() {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userType, setUserType] = useState('customer'); // 'customer' or 'seller'

  // Mock chat conversations
  const [conversations, setConversations] = useState([
    {
      id: 1,
      participant: {
        name: 'Premium Electronics Store',
        type: 'seller',
        avatar: null,
        online: true,
        verified: true
      },
      product: {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        image: '🎧'
      },
      lastMessage: {
        text: 'Thank you for your interest! The headphones are currently in stock.',
        timestamp: new Date(Date.now() - 300000), // 5 minutes ago
        sender: 'seller'
      },
      unreadCount: 2
    },
    {
      id: 2,
      participant: {
        name: 'Fashion Hub',
        type: 'seller',
        avatar: null,
        online: false,
        verified: true
      },
      product: {
        id: 2,
        name: 'Vintage Leather Jacket',
        image: '🧥'
      },
      lastMessage: {
        text: 'I can offer you a 10% discount if you buy today!',
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        sender: 'seller'
      },
      unreadCount: 0
    },
    {
      id: 3,
      participant: {
        name: 'Sarah Johnson',
        type: 'customer',
        avatar: null,
        online: true,
        verified: false
      },
      product: {
        id: 3,
        name: 'Handcrafted Wooden Watch',
        image: '⌚'
      },
      lastMessage: {
        text: 'Is this watch water-resistant?',
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
        sender: 'customer'
      },
      unreadCount: 1
    },
    {
      id: 4,
      participant: {
        name: 'Tech Solutions Pro',
        type: 'seller',
        avatar: null,
        online: true,
        verified: true
      },
      product: {
        id: 4,
        name: 'Gaming Laptop',
        image: '💻'
      },
      lastMessage: {
        text: 'The laptop comes with a 3-year warranty and free shipping.',
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        sender: 'seller'
      },
      unreadCount: 0
    }
  ]);

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const openChat = (conversation) => {
    setSelectedChat(conversation);
  };

  const closeChat = () => {
    setSelectedChat(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="px-4 pt-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
              <p className="text-gray-600">Manage your conversations</p>
            </div>
          </div>
          
          {/* User Type Switcher */}
          <div className="flex items-center gap-2 p-1 bg-white border border-gray-200 rounded-lg">
            <button
              onClick={() => setUserType('customer')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                userType === 'customer'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Customer View
            </button>
            <button
              onClick={() => setUserType('seller')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                userType === 'seller'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Seller View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Conversations List */}
          <div className="p-6 bg-white shadow-sm lg:col-span-1 rounded-2xl">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Conversations */}
            <div className="space-y-2">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => openChat(conversation)}
                    className="p-4 transition-all border border-gray-100 rounded-lg cursor-pointer hover:border-purple-200 hover:bg-purple-50"
                  >
                    <div className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          conversation.participant.type === 'seller' 
                            ? 'bg-purple-100 text-purple-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          <span className="text-lg font-semibold">
                            {conversation.participant.name.charAt(0)}
                          </span>
                        </div>
                        {conversation.participant.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 truncate">
                              {conversation.participant.name}
                            </h3>
                            {conversation.participant.verified && (
                              <div className="w-4 h-4 text-green-500">✓</div>
                            )}
                          </div>
                          <span className="text-xs text-gray-500">
                            {formatTime(conversation.lastMessage.timestamp)}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{conversation.product.image}</span>
                          <span className="text-sm text-gray-600 truncate">
                            {conversation.product.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">
                            {conversation.lastMessage.text}
                          </p>
                          {conversation.unreadCount > 0 && (
                            <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-purple-500 rounded-full">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-gray-500">No conversations found</p>
                </div>
              )}
            </div>
          </div>

          {/* Chat Preview/Placeholder */}
          <div className="p-6 bg-white shadow-sm lg:col-span-2 rounded-2xl">
            {selectedChat ? (
              <div className="text-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      selectedChat.participant.type === 'seller' 
                        ? 'bg-purple-100 text-purple-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      <span className="text-lg font-semibold">
                        {selectedChat.participant.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedChat.participant.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        About: {selectedChat.product.name}
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
                
                <div className="py-12 text-center">
                  <div className="text-6xl mb-4">{selectedChat.product.image}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {selectedChat.product.name}
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Click "Open Chat" to start the conversation
                  </p>
                  <button
                    onClick={() => {
                      // This would normally open the full chat component
                      alert('Opening full chat interface...');
                    }}
                    className="px-6 py-3 text-white transition-colors bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700"
                  >
                    Open Chat
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full py-12 text-center">
                <div>
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Select a conversation
                  </h3>
                  <p className="text-gray-600">
                    Choose a conversation from the list to start chatting
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Component Modal */}
      {selectedChat && (
        <ChatComponent
          isOpen={false} // Set to true to test the chat component
          onClose={closeChat}
          seller={selectedChat.participant.type === 'seller' ? selectedChat.participant : { name: 'You' }}
          customer={selectedChat.participant.type === 'customer' ? selectedChat.participant : { name: 'You' }}
          productId={selectedChat.product.id}
        />
      )}
    </div>
  );
}
