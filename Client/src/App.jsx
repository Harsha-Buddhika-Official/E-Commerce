import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import Login from './Login'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
