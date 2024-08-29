import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Topheader from './components/topheader'
import Home from './pages/home'
import Signup from './components/signup'
import Seller from './pages/seller'
import About from './pages/about'
import TermConditions from './pages/termconditions'
import ProductDetail from './pages/productdetail'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import ForgetPassword from './components/forgetpassword'
import RouterRoutes from './routes/routerroutes'
import ContactIcon from './components/contacticon'


function App() {


  return (
    <div>
     <Topheader />
    <Navbar />
      <RouterRoutes />
     <Footer />
     <ContactIcon />
    </div>
    

)
}

export default App
