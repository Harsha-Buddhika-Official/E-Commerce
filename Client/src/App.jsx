import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import UserDashboard from './UserDashboard'
import SellerDashboard from './SellerDashboard'
import AddProduct from './AddProduct'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import CategoriesPage from './CategoriesPage'
import ProductPage from './ProductPage'
import CartPage from './CartPage'
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
