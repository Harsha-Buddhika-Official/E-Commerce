import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import UserDashboard from './UserDashboard'
import SellerDashboard from './SellerDashboard'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/User-dashboard" element={<UserDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path='/' element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
