import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sellerssidebar from './components/sellerssidebar'
import SellersProduct from './pages/sellersproducttable'
// import SellerOrder from './pages/sellersorderspage'
import Header from './components/header'

import './App.css'

function App() {
 

  return (
    <>
    <Header />
    <Sellerssidebar />
    <div className='container-fluid d-flex'>
 
    
      <div className="row d-flex" >
     
       
  
          <Routes>
          <Route path="/product" element={<SellersProduct />} />
          {/* <Route path='/order-details' element={<SellerOrder />} /> */}
         {/* <Route path="/product" element={<SellersProduct />} /> */}
       {/* <Route path="/Usersdetail" element={<UserTable />} /> */}
        </Routes> 

              
            
         
        
      </div>
      
    
  </div>
     
    </>
  )
}

export default App
