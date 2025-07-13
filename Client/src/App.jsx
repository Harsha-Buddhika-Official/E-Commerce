import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import AuthChoice from './CommonLoginPage'
import UserDashboard from './ClientComponents/UserDashboard'
import SellerDashboard from './SallerComponents/SellerDashboard'
import AddProduct from './AddProduct'
import UserSignUp from './ClientComponents/UserSignUp'
import SellerSignup from './SallerComponents/SellerSignup'
import UserLogin from './ClientComponents/UserLogin'
import SellerLogin from './SallerComponents/SellerLogin'
import UserForgotPassword from './ClientComponents/UserForgotPassword'
import SellerForgotPassword from './SallerComponents/SellerForgotPassword'
import Homepage from './Homepage'
import CategoriesPage from './CategoriesPage'
import ProductPage from './ProductPage'
import CartPage from './ClientComponents/CartPage'
import WishlistPage from './ClientComponents/WishlistPage'
import AboutPage from './SubPages/AboutPage'
import ContactPage from './SubPages/ContactPage'
import FAQPage from './SubPages/FAQPage'
import ShippingPage from './SubPages/ShippingPage'
import PolicyPages from './SubPages/PolicyPages'
import PaymentFlow from './PaymentComponents/PaymentFlow'
import DetailsPage from './PaymentComponents/detailsPage'
import Verification from './PaymentComponents/verification'
import Creditcard from './PaymentComponents/Creditcard'
import FinalPaymentPage from './PaymentComponents/FinalPaymentPage'
import PaymentDemo from './PaymentComponents/PaymentDemo'
import {
  Electronics,
  Fashion,
  HomeGarden,
  Sports,
  Beauty,
  Books,
  ToysGames,
  Automotive,
  HealthWellness,
  FoodBeverages
} from './CategoryComponents/AllCategories'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path='/' element={<Homepage/>} />
          <Route path='/auth' element={<AuthChoice/>} />
          
          {/* User Authentication Routes */}
          <Route path="/user/signup" element={<UserSignUp />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/forgot-password" element={<UserForgotPassword />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          
          {/* Seller Authentication Routes */}
          <Route path="/seller/signup" element={<SellerSignup />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/forgot-password" element={<SellerForgotPassword />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          
          {/* Product & Shopping Routes */}
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          
          {/* Category Routes */}
          <Route path='/categories' element={<CategoriesPage/>} />
          <Route path='/category/electronics' element={<Electronics/>} />
          <Route path='/category/fashion' element={<Fashion/>} />
          <Route path='/category/home-and-garden' element={<HomeGarden/>} />
          <Route path='/category/sports' element={<Sports/>} />
          <Route path='/category/beauty' element={<Beauty/>} />
          <Route path='/category/books' element={<Books/>} />
          <Route path='/category/toys-and-games' element={<ToysGames/>} />
          <Route path='/category/automotive' element={<Automotive/>} />
          <Route path='/category/health-and-wellness' element={<HealthWellness/>} />
          <Route path='/category/food-and-beverages' element={<FoodBeverages/>} />
          
          {/* Information Pages */}
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/shipping' element={<ShippingPage />} />
          
          {/* Policy Pages */}
          <Route path='/customer-service' element={<PolicyPages policyType="customer" />} />
          <Route path='/return-policy' element={<PolicyPages policyType="returns" />} />
          <Route path='/privacy-policy' element={<PolicyPages policyType="privacy" />} />
          <Route path='/terms-of-service' element={<PolicyPages policyType="terms" />} />

          {/* Payment Pages */}
          <Route path='/payment/demo' element={<PaymentDemo />} />
          <Route path='/payment/flow' element={<PaymentFlow />} />
          <Route path='/payment/details' element={<DetailsPage />} />
          <Route path='/payment/verification' element={<Verification />} />
          <Route path='/payment/creditcard' element={<Creditcard />} />
          <Route path='/payment/final' element={<FinalPaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
