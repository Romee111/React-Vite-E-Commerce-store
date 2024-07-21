import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Topheader from './components/topheader'
import Home from './pages/home'
import Signup from './components/signup'
import Seller from './pages/seller'
import Admin from './pages/Admin'
import About from './pages/about'
import TermConditions from './pages/termconditions'
import ProductInventory from './pages/productinventory'
import ProductDetail from './pages/productdetail'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import ForgetPassword from './components/forgetpassword'
import RouterRoutes from './routes/routerroutes'


function App() {


  return (
    <>
     <Topheader />
    <Navbar />
      <RouterRoutes />
     <Footer />
    </>
    
)
}

export default App
