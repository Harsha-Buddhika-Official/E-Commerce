import { useState } from 'react'
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
import Electronics from './CategoryComponents/Electronics'
import Fashion from './CategoryComponents/Fashion'
import HomeGarden from './CategoryComponents/HomeGarden'
import Sports from './CategoryComponents/Sports'
import Beauty from './CategoryComponents/Beauty'
import Books from './CategoryComponents/Books'
import ToysGames from './CategoryComponents/ToysGames'
import GenericCategory from './CategoryComponents/GenericCategory'

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
          <Route path='/category/automotive' element={<GenericCategory categoryName="Automotive" categoryIcon="🚗" categoryColor="from-gray-500 to-slate-500" />} />
          <Route path='/category/health-and-wellness' element={<GenericCategory categoryName="Health & Wellness" categoryIcon="💊" categoryColor="from-green-500 to-teal-500" />} />
          <Route path='/category/food-and-beverages' element={<GenericCategory categoryName="Food & Beverages" categoryIcon="🍔" categoryColor="from-red-500 to-pink-500" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
