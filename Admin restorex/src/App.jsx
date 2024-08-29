import React from 'react';
import './App.css';
import Headers from './components/header';
import AdminSidebar from './components/adminsidebar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomPaginationActionsTable from './pages/CustomPaginationActionTable';
import UserTable from './pages/UserPaginationTable';
import Dashboard from './pages/dashboard';
import  Categorylist  from './pages/categorylist';
import  Inbox  from './pages/inboxpage';

function App() {
  var adminId = 1;
  return (
  
    <> 

      <Headers/>
      <div className='container-fluid d-flex'>
        <div className="row d-flex">
          <AdminSidebar />
          <Routes>
            <Route path="/inboxmessages" element={<Inbox adminId={adminId=1}/>} />  
            <Route path="/admin" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<CustomPaginationActionsTable />} />
            <Route path="/Usersdetail" element={<UserTable />} />
            <Route path='/categorylist' element={<Categorylist />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
