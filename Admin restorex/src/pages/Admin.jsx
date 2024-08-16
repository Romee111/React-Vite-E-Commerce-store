import React from 'react'
import AdminSidebar from '../components/adminsidebar'
import Headers from '../components/header'
import CustomProduct from './CustomPaginationActionTable'

function Admin() {
  return (
   <>
   <Headers/>
   <div className='container-fluid d-flex'>
      
      <div className="row d-flex" >
         
              <AdminSidebar />
              <CustomProduct   />
         
            
         
        
      </div>
      
    
  </div>
   </> 
   
  )
}

export default Admin

