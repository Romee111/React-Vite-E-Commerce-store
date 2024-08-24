import React from 'react';
import './App.css';
import Headers from './components/header';
import AdminSidebar from './components/adminsidebar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomPaginationActionsTable from './pages/CustomPaginationActionTable';
import UserTable from './pages/UserPaginationTable';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <> 
      <Headers/>
      <div className='container-fluid d-flex'>
        <div className="row d-flex">
          <AdminSidebar />
          <Routes>
            <Route path="/admin" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<CustomPaginationActionsTable />} />
            <Route path="/Usersdetail" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
