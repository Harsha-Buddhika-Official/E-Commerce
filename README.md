# E-Commerce Platform

## Overview
This project is a modern E-Commerce platform designed to provide a seamless shopping experience for users. It includes features for customers, sellers, and administrators, with a focus on scalability, performance, and user-friendly design.

## Features
- **Customer Features**:
  - Browse products by categories
  - Add products to cart and wishlist
  - User authentication (Login, Signup, Forgot Password)
  - Secure payment options (Credit Card, PayPal, etc.)
  - View order history and manage account

- **Seller Features**:
  - Seller authentication (Login, Signup, Forgot Password)
  - Manage products and inventory
  - View sales dashboard

- **Admin Features**:
  - Manage categories and products
  - Monitor platform performance

## Project Structure

### Client
The client-side application is built using modern web technologies and frameworks.

- **Main Components**:
  - `Navbar.jsx`: Navigation bar for the application
  - `Footer.jsx`: Footer section
  - `Slides.jsx`: Image slider for promotions
  - `FeaturesBar.jsx`: Highlights key features of the platform
  - `FeaturedProducts.jsx`: Displays featured products

- **Category Components**:
  - `AllCategories.jsx`: Displays all product categories
  - `GenericCategory.jsx`: Template for category-specific pages
  - `UniversalCategory.jsx`: Universal category handler

- **Client Components**:
  - `CartPage.jsx`: Shopping cart functionality
  - `UserDashboard.jsx`: User account management
  - `UserLogin.jsx`, `UserSignUp.jsx`, `UserForgotPassword.jsx`: Authentication pages
  - `WishlistPage.jsx`: Wishlist management

- **Payment Components**:
  - `Creditcard.jsx`, `PaypalPayment.jsx`: Payment methods
  - `FinalPaymentPage.jsx`: Finalize and confirm payments
  - `PaymentFlow.jsx`: Handles the payment process

- **Seller Components**:
  - `SellerDashboard.jsx`: Dashboard for sellers
  - `SellerLogin.jsx`, `SellerSignup.jsx`, `SellerForgotPassword.jsx`: Seller authentication pages

- **Sub Pages**:
  - `AboutPage.jsx`, `ContactPage.jsx`, `FAQPage.jsx`: Informational pages
  - `PolicyPages.jsx`, `ShippingPage.jsx`: Policy and shipping details

### Server
The server-side application is designed to handle API requests, manage the database, and ensure secure communication between the client and server. (Details to be added as the server implementation progresses.)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsha-Buddhika-Official/E-Commerce.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-Commerce
   ```

3. Install dependencies for the client:
   ```bash
   cd Client
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used
- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express (planned)
- **Database**: MongoDB (planned)
- **Payment Integration**: PayPal, Stripe (planned)

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any inquiries, please contact [Harsha Buddhika](https://github.com/Harsha-Buddhika-Official).
