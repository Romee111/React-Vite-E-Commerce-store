import React from 'react'
import AdminSidebar from '../components/adminsidebar'
import Headers from '../components/header'
function Admin() {
  return (
   <>
   <Headers/>
   <div className='container-fluid'>
      
      <div className="row" style={{marginRight:"50%"}}>
          <div className="col-3">
              <AdminSidebar />
          </div>
          <div className="col-9"></div>
      </div>
      
    
  </div>
   </> 
   
  )
}

export default Admin

