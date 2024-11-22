import { useState } from 'react'
import './App.css'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { Sendmoney } from './pages/sendmoney'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> 
        <Route path="/sendmoney" element={<Sendmoney/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
