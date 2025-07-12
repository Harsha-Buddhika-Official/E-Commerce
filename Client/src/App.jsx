import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import UserDashboard from './ClientComponents/UserDashboard'
import SellerDashboard from './SallerComponents/SellerDashboard'
import AddProduct from './AddProduct'
import UserSignUp from './ClientComponents/UserSignUp'
import SellerSignup from './SallerComponents/SellerSignup'
import UserLogin from './ClientComponents/UserLogin'
import SellerLogin from './SallerComponents/SellerLogin'
// Import forgot password components
import UserForgotPassword from './ClientComponents/UserForgotPassword'
import SellerForgotPassword from './SallerComponents/SellerForgotPassword'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
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
          <Route path='/' element={<Homepage/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* Separate routes for user signup and login */}
          <Route path="/user/signup" element={<UserSignUp />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/forgot-password" element={<UserForgotPassword />} />
          
          {/* Separate routes for seller signup and login */}
          <Route path="/seller/signup" element={<SellerSignup />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/forgot-password" element={<SellerForgotPassword />} />
          
          <Route path="/User-dashboard" element={<UserDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product/:id" element={<ProductPage />} />
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
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/shipping' element={<ShippingPage />} />
          <Route path='/customer-service' element={<PolicyPages policyType="customer" />} />
          <Route path='/return-policy' element={<PolicyPages policyType="returns" />} />
          <Route path='/privacy-policy' element={<PolicyPages policyType="privacy" />} />
          <Route path='/terms-of-service' element={<PolicyPages policyType="terms" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
