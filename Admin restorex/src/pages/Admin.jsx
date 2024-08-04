import React from 'react'
import AdminSidebar from '../components/adminsidebar'
import Headers from '../components/header'
import ProductInfo from '../pages/productinfo'
function Admin() {
  return (
   <>
   <Headers/>
   <div className='container-fluid d-flex'>
      
      <div className="row d-flex" >
         
              <AdminSidebar />
              <div className="col-9">
              <ProductInfo/> 
              </div>
         
        
      </div>
      
    
  </div>
   </> 
   
  )
}

export default Admin

