import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomPaginationActionsTable from '../pages/CustomPaginationActionsTable';
import UserTable from '../pages/UserPaginationTable';
import Admin from '../pages/Admin'; // Ensure you have this component

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<CustomPaginationActionsTable />} />
        <Route path="/Usersdetail" element={<UserTable />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default Router;
