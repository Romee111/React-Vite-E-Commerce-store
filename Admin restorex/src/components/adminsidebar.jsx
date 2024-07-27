import React, { useState } from 'react';
import '../styling/adminsidebar.css';

function AdminSidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="sidebar" aria-label="Sidebar" >
      <h1 style={{ color: 'white', textAlign: 'center',fontSize: '28px' }}>Admin Restorex</h1>
      <ul>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="dropdown" >
          <button type="button" onClick={toggleDropdown}>
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
            </svg>
            <span style={{ color: 'white' }}>E-commerce</span>
            <svg className="icon ml-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <ul className={isDropdownOpen ? 'show' : ''}>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span>Kanban</span>
            <span className="ml-auto">Pro</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
            <span>Inbox</span>
            <span className="ml-auto">3</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 14.293a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586V3a1 1 0 112 0v8.586l1.293-1.293a1 1 0 111.414 1.414l-3 3z"></path>
            </svg>
            <span>Reports</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 00-2 0v4a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 8.586V5z"></path>
            </svg>
            <span>Sign In</span>
          </a>
        </li>
        <li>
          <a href="#">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 00-2 0v4a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 8.586V5z"></path>
            </svg>
            <span>Sign Up</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
