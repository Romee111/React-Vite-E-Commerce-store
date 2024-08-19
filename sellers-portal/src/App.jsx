import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import SellersSidebar from './components/sellerssidebar'
import SellersProduct from './pages/sellersproducttable' 
import Header from './components/header'

import './App.css'

function App() {
 

  return (
    <>
    <Header />
    <div className='container-fluid d-flex'>
 
      
      <div className="row d-flex" >
     
       <SellersSidebar />
       <SellersProduct />
          <Routes>
         {/* <Route path="/product" element={<SellersProduct />} /> */}
       {/* <Route path="/Usersdetail" element={<UserTable />} /> */}
        </Routes> 

              
            
         
        
      </div>
      
    
  </div>
     
    </>
  )
}

export default App
