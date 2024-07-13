import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css';
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/categoryhooks';

function CustomNavbar() {
  const { getallCategory } = useCategories();
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoriesClick = async () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      const categories = await getallCategory();
      setCategories(categories || []);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#001F3F' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navi">
            <Link className="nav-link" aria-current="page" to="#">Brands</Link>
            <div className="nav-link" onClick={handleCategoriesClick} style={{ cursor: 'pointer' }}>
              Categories
              {showDropdown && (
                <div className="dropdown-menu show" style={{ backgroundColor: '#001F3F' ,color:'#fff'}}>
                  {categories.map((category) => (
                    <Link key={category.id} className="dropdown-item" to={`/category/${category.id}`} style={{color:'#fff'}}>  
                      {category.name}
                    </Link>
                  ))}
                  
                </div>
              )}
            </div>
            <Link className="nav-link" to="/seller">Become a Seller</Link>
            <Link className="nav-link" to="#" tabIndex="-1">Help & Support</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
