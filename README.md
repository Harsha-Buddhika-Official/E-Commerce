# E-Commerce Platform

## Overview
This project is a modern, full-featured E-Commerce platform designed to provide a seamless shopping experience for customers, sellers, and administrators. Built with React and modern web technologies, it features a comprehensive payment system, real-time chat functionality, and responsive design optimized for all devices.

## ✨ Key Features

### 🛍️ Customer Features
- **Product Browsing**: Browse products by categories with advanced filtering
- **Shopping Cart & Wishlist**: Add products to cart and wishlist with persistent storage
- **User Authentication**: Complete login, signup, and password recovery system
- **User Dashboard**: Comprehensive profile management with order history
- **Advanced Search**: Search products with real-time filtering
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 💳 Payment System
- **Multiple Payment Methods**: Credit Card, PayPal integration
- **Interactive Payment Flow**: 4-step payment process with visual progress tracking
- **3D Credit Card Animation**: Interactive card with flip animations
- **Payment Verification**: 2FA verification with multiple authentication methods
- **Order Confirmation**: Detailed receipt and order tracking
- **Payment Security**: SSL encryption and secure processing

### 💬 Real-Time Chat System
- **Customer-Seller Communication**: Direct messaging between buyers and sellers
- **Floating Chat Widget**: Always accessible chat support across all pages
- **Product-Specific Conversations**: Context-aware chat linked to specific products
- **Message Management**: Comprehensive chat page with conversation history
- **Typing Indicators**: Real-time typing status and message delivery
- **Quick Replies**: Predefined responses for common questions

### 🏪 Seller Features
- **Seller Dashboard**: Advanced analytics and sales management
- **Product Management**: Add, edit, and manage product inventory
- **Order Management**: Track and manage customer orders
- **Real-time Notifications**: Smart notification system for orders, messages, and updates
- **Seller Authentication**: Dedicated seller login and profile management
- **Sales Analytics**: Performance metrics and reporting tools

### 🎨 UI/UX Features
- **Modern Design**: Gradient backgrounds and smooth animations
- **Dark Theme Support**: Elegant dark mode interface
- **Interactive Components**: Hover effects and micro-interactions
- **Mobile-First Design**: Responsive layout for all screen sizes
- **Accessibility**: WCAG compliant design patterns

## 📁 Project Structure

### Client (`/Client`)
The frontend application built with React, Vite, and Tailwind CSS.

#### 🎯 Core Components
- **Main Components**:
  - `Navbar.jsx`: Navigation with user authentication and chat access
  - `Footer.jsx`: Site footer with links and information
  - `Slides.jsx`: Interactive image slider for promotions
  - `FeaturesBar.jsx`: Highlights platform key features
  - `FeaturedProducts.jsx`: Displays featured and trending products

#### 🏷️ Category System
- **Category Components**:
  - `AllCategories.jsx`: Complete product category grid (Electronics, Fashion, Home & Garden, Sports, Beauty, Books, Toys & Games, Automotive, Health & Wellness, Food & Beverages)
  - `GenericCategory.jsx`: Reusable category page template
  - `UniversalCategory.jsx`: Universal category handler with filtering
  - `CategoryManager.jsx`: Admin category management
  - `CategorySwitcher.jsx`: Dynamic category navigation

#### 👤 User Management
- **Customer Components**:
  - `UserDashboard.jsx`: Comprehensive user profile and order management
  - `UserLogin.jsx` / `UserSignUp.jsx` / `UserForgotPassword.jsx`: Complete authentication flow
  - `CartPage.jsx`: Advanced shopping cart with quantity management
  - `WishlistPage.jsx`: Product wishlist management

#### 🏪 Seller Portal
- **Seller Components**:
  - `SellerDashboard.jsx`: Advanced seller dashboard with analytics
  - `SellerLogin.jsx` / `SellerSignup.jsx` / `SellerForgotPassword.jsx`: Seller authentication
  - `SellerProfileSettings.jsx`: Comprehensive seller profile management
  - `notificationData.js`: Smart notification system

#### 💳 Payment System
- **Payment Components**:
  - `PaymentFlow.jsx`: 4-step payment process with progress tracking
  - `PaymentDemo.jsx`: Interactive payment system demonstrations
  - `Creditcard.jsx`: 3D animated credit card payment interface
  - `PaypalPayment.jsx`: PayPal integration
  - `detailsPage.jsx`: Comprehensive payment and billing information
  - `verification.jsx`: 2FA verification system
  - `FinalPaymentPage.jsx`: Order confirmation and receipt generation

#### 💬 Chat System
- **Chat Components**:
  - `ChatComponent.jsx`: Full-featured chat interface with real-time messaging
  - `ChatPage.jsx`: Conversation management and chat history
  - `FloatingChatWidget.jsx`: Always-accessible chat support widget

#### 📄 Content Pages
- **Sub Pages**:
  - `AboutPage.jsx`: Company information and story
  - `ContactPage.jsx`: Contact forms and support information
  - `FAQPage.jsx`: Frequently asked questions
  - `PolicyPages.jsx`: Privacy policy and terms of service
  - `ShippingPage.jsx`: Shipping information and policies

#### 🛠️ Utility Components
- **Shared Components**:
  - `Products.jsx` / `ProductGrid.jsx`: Product display and grid layouts
  - `Categories.jsx`: Category navigation components
  - `data.js`: Mock data and configuration

### Server (`/Server`)
Backend infrastructure (currently in development phase)
- **Planned Features**:
  - RESTful API endpoints
  - User authentication and authorization
  - Database integration (MongoDB)
  - Real-time chat backend (WebSocket)
  - Payment processing integration
  - Order management system

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsha-Buddhika-Official/E-Commerce.git
   cd E-Commerce
   ```

2. **Install client dependencies:**
   ```bash
   cd Client
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🛠️ Technologies Used

### Frontend Stack
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router DOM 7.6.3** - Client-side routing
- **React Hook Form 7.60.0** - Performant forms with easy validation
- **Lucide React 0.525.0** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript Support** - Type safety and better development experience
- **Hot Module Replacement** - Instant updates during development

### Backend (Planned)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **WebSocket** - Real-time communication
- **JWT** - Authentication tokens

### Payment Integration
- **PayPal** - Payment processing
- **Stripe** - Credit card processing (planned)
- **SSL Encryption** - Secure transactions

## 🎮 Demo Features

### Payment System Demo
Access the interactive payment demos at `/payment/demo`:
- **Credit Card Demo** - 3D card animations and real-time validation
- **Payment Flow Demo** - Complete 4-step payment process
- **Verification Demo** - 2FA authentication simulation
- **Success Page Demo** - Order confirmation and receipt generation

### Chat System Demo
Experience the chat functionality:
- **Product Chat** - Contact sellers about specific products
- **Floating Widget** - Always-accessible support chat
- **Message Center** - View and manage all conversations at `/messages`

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop** - Full-featured experience with advanced layouts
- **Tablet** - Touch-optimized interface with swipe gestures
- **Mobile** - Mobile-first design with thumb-friendly navigation
- **PWA Ready** - Progressive Web App capabilities (planned)

## 🔮 Roadmap & Future Features

### Phase 1 (Current) - Frontend Foundation ✅
- ✅ Modern React application with Vite
- ✅ Comprehensive payment system
- ✅ Real-time chat interface
- ✅ User and seller dashboards
- ✅ Responsive design implementation

### Phase 2 (In Progress) - Backend Integration 🚧
- 🔄 RESTful API development
- 🔄 Database schema design
- 🔄 User authentication system
- 🔄 Real-time chat backend
- 🔄 Payment gateway integration

### Phase 3 (Planned) - Advanced Features 📋
- 📋 Real-time notifications
- 📋 Advanced search and filtering
- 📋 Product recommendations
- 📋 Order tracking system
- 📋 Seller analytics dashboard

### Phase 4 (Future) - Scale & Optimize 🎯
- 🎯 Performance optimization
- 🎯 Mobile app development
- 🎯 AI-powered features
- 🎯 Advanced security features
- 🎯 Multi-language support

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and patterns
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

### Areas for Contribution
- 🐛 Bug fixes and improvements
- ✨ New feature development
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🔧 Performance optimizations
- 🧪 Testing and quality assurance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No warranty provided
- ❌ No liability assumed

## 📞 Contact & Support

### Primary Contact
**Harsha Buddhika**
- GitHub: [@Harsha-Buddhika-Official](https://github.com/Harsha-Buddhika-Official)
- Project Repository: [E-Commerce Platform](https://github.com/Harsha-Buddhika-Official/E-Commerce)

### Getting Help
- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Start a discussion or open an issue
- 🤔 **Questions**: Check the FAQ or start a discussion
- 📧 **Business Inquiries**: Contact through GitHub profile

### Community
- ⭐ Star the repository to show support
- 👀 Watch for updates and releases
- 🍴 Fork to contribute or create your own version
- 📢 Share the project with others

---

<div align="center">

**Built with ❤️ by [Harsha Buddhika](https://github.com/Harsha-Buddhika-Official)**

*A modern, full-featured E-Commerce platform for the next generation of online shopping*

[![GitHub stars](https://img.shields.io/github/stars/Harsha-Buddhika-Official/E-Commerce?style=social)](https://github.com/Harsha-Buddhika-Official/E-Commerce/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Harsha-Buddhika-Official/E-Commerce?style=social)](https://github.com/Harsha-Buddhika-Official/E-Commerce/network)
[![GitHub issues](https://img.shields.io/github/issues/Harsha-Buddhika-Official/E-Commerce)](https://github.com/Harsha-Buddhika-Official/E-Commerce/issues)

</div>
