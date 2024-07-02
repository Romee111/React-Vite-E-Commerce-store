import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Topheader from './components/topheader'
import Home from './pages/home'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <div>
    <Topheader />
    <Navbar />
    <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
     <Footer />
      </div>
   </>
    
)
}

export default App
