import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
import SellerLogin from './SellerLogin'
import SellerSignup from './SellerSignup'
import SellerDashboard from './SellerDashboard'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-signup" element={<SellerSignup />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
