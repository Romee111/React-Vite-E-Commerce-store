import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Topheader from './components/topheader'
import Home from './pages/home'
import Seller from './pages/seller'
import About from './pages/about'
import ProductInventory from './pages/productinventory'
import ProductDetail from './pages/productdetail'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <div>
    <Topheader />
    <Navbar />
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/about" element={<About />} />
            <Route path="/productinventory" element={<ProductInventory />} />
            <Route path='/productdetail/:Id' element={<ProductDetail  />} />
          
        </Routes>
     <Footer />
      </div>
   </>
    
)
}

export default App
