import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styling/navbar.css';
import { Link } from 'react-router-dom';
import { useCategories } from '../hooks/categoryhooks';

function CustomNavbar() {
  const { getallCategory } = useCategories();
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getallCategory();
      setCategories(categories || []);
    };
    fetchCategories();
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#001F3F' }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className='nav-toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{ width: '100%', justifyContent: 'space-around' }}>
            <Nav.Link as={Link} className='nav-links '  to="/" style={{ color: 'white' }}>Home</Nav.Link>

            <Nav.Link as={Link} to="/brands" className='nav-links ' style={{ color: 'white' }}>Brands</Nav.Link>
            <NavDropdown 
              className="dropdown"
              title="Categories" 
              id="basic-nav-dropdown" 
              style={{ color: '#ffffff' }} 
              show={showDropdown} 
              onMouseEnter={handleDropdownToggle} 
              onMouseLeave={handleDropdownToggle}
            >
              {categories.map((category) => (
                <NavDropdown.Item 
                  key={category.id} 
                  as={Link} 
                  to={`/category/${category.id}`} 
                  style={{ color: '#001F3F' }}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/seller"  className='nav-links 'style={{ color: 'white' }}>Become a Seller</Nav.Link>
            <Nav.Link as={Link} to="/support" className='nav-links '  style={{ color: 'white' }}>Help & Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
