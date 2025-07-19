# E-Commerce Platform

This is a modern E-Commerce platform built with React and Vite. It provides a seamless shopping experience for users, with features for browsing products, managing carts, and completing payments. The platform is designed to be scalable and easy to customize.

## Features

- **User Features**:
  - Browse products by categories
  - Add products to cart and wishlist
  - User authentication (Login, Signup, Forgot Password)
  - User dashboard for managing orders and profile

- **Seller Features**:
  - Seller authentication (Login, Signup, Forgot Password)
  - Seller dashboard for managing products and orders

- **Payment Features**:
  - Multiple payment options (Credit Card, PayPal, etc.)
  - Secure payment flow with verification

- **Other Features**:
  - Responsive design
  - Category management
  - FAQ, Contact, and Policy pages

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: (To be integrated)
- **State Management**: (To be integrated, e.g., Redux or Context API)
- **Payment Integration**: PayPal, Credit Card

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsha-Buddhika-Official/E-Commerce.git
   ```

2. Navigate to the `Client` directory:
   ```bash
   cd E-Commerce/Client
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
Client/
├── public/                # Static assets
├── src/                   # Source code
│   ├── Components/        # Reusable components
│   ├── MainComponents/    # Core UI components
│   ├── PaymentComponents/ # Payment-related components
│   ├── SellerComponents/  # Seller-related components
│   ├── SubPages/          # Static subpages (FAQ, Contact, etc.)
│   ├── App.jsx            # Main application file
│   └── main.jsx           # Entry point
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any feature additions or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
