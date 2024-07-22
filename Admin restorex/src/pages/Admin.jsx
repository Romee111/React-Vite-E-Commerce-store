import React from 'react'
import AdminSidebar from '../components/adminsidebar'
function Admin() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">
                <AdminSidebar />
            </div>
            <div className="col-9"></div>
        </div>
        
      
    </div>
  )
}

export default Admin

