import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Topheader from './components/topheader'
import Home from './pages/home'
import Seller from './pages/seller'
import ProductInventory from './pages/productinventory'

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
            <Route path="/becomeseller" element={<Seller />} />
            <Route path="/productinventory" element={<ProductInventory />} />
          
        </Routes>
     <Footer />
      </div>
   </>
    
)
}

export default App
