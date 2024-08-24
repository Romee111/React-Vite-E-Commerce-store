  import React from 'react'
import './App.css'
import Headers from './components/header'
import AdminSidebar from './components/adminsidebar'

import { Router } from 'react-bootstrap-icons'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomPaginationActionsTable from './pages/CustomPaginationActionTable'
import UserTable from './pages/UserPaginationTable'
import Dashboard from './pages/dashboard'
function App() {


  return (
    <> 
     <Headers/>
   <div className='container-fluid d-flex'>
      
      <div className="row d-flex" >
        
      <AdminSidebar />
  
       <Routes>
       <Route path="/product" element={<CustomPaginationActionsTable />} />
       <Route path="/Usersdetail" element={<UserTable />} />
       <Route path="/dashboard" element={<Dashboard />} />
       </Routes>

              
            
         
        
      </div>
      
    
  </div>
          
           
    </>
  )
}

export default App
