import React, { useState } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';
import ChatComponent from './ChatComponent';

export default function FloatingChatWidget({ seller, customer, productId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
    if (!isOpen) {
      setHasUnreadMessages(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed z-50 bottom-6 right-6">
          <button
            onClick={toggleChat}
            className="relative flex items-center justify-center w-14 h-14 text-white transition-all bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
            
            {/* Unread Messages Indicator */}
            {hasUnreadMessages && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">2</span>
              </div>
            )}
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-ping opacity-20"></div>
          </button>
        </div>
      )}

      {/* Floating Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed z-50 bottom-6 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Quick Chat</h3>
                <p className="text-xs text-white/80">
                  {seller?.name || 'Support Team'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={minimizeChat}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={closeChat}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 bg-gray-50">
            <div className="space-y-3">
              {/* Welcome Message */}
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p className="text-sm text-gray-800">
                    👋 Hi! I'm here to help you with any questions about our products.
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">Just now</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <button
                  onClick={() => alert('Opening full chat...')}
                  className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <span className="text-sm text-gray-700">💬 Start a conversation</span>
                </button>
                
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-100">
                  <span className="text-sm text-gray-700">❓ Ask about this product</span>
                </button>
                
                <button className="w-full text-left p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors border border-gray-100">
                  <span className="text-sm text-gray-700">🚚 Check shipping info</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Message Input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    alert('Opening full chat interface...');
                  }
                }}
              />
              <button
                onClick={() => alert('Opening full chat interface...')}
                className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Chat */}
      {isOpen && isMinimized && (
        <div className="fixed z-50 bottom-6 right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Chat minimized</span>
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={closeChat}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Full Chat Component */}
      <ChatComponent
        isOpen={false} // This would be controlled by the floating widget
        onClose={closeChat}
        seller={seller}
        customer={customer}
        productId={productId}
      />
    </>
  );
}
