import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Temp from './temp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/' element={<Homepage/>} />
          <Route path='*' element={<Temp/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
