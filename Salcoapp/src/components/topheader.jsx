import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import { useAuth } from '../hooks/userauthhooks';
import Login from '../components/login'; // Adjust if needed
import AddCart from '../components/addcart'; // Import AddCart component
import logo from '../assets/reslogo.png';
import '../styling/topheader.css';

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to manage cart modal visibility
  const { getSearch } = useProducts();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCartShow = () => setShowCart(true); // Show the AddCart modal
  const handleCartClose = () => setShowCart(false); // Close the AddCart modal

  const handleSearch = async () => {
    try {
      const results = await getSearch(searchTerm);
      setSearchResults(results.data);
      navigate('/listProduct', { state: { searchResults: results.data } });
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleSearchProduct = (id) => {
    navigate('/listProduct', { state: { searchResults: searchResults.filter(product => product._id === id) } });
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: '#001F3F' }}>
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '50px' }} className="logo" />
          </Navbar.Brand>
          <Form className="d-flex" style={{ width: '70%', color: 'white' }}>
            <Form.Control
              type="search"
              placeholder="Search for products..."
              className="me-2 searchbar"
              style={{
                border: '1px solid white',
                fontSize: '16px',
                borderRadius: '1px 0 0 5px solid #ffffff',
                backgroundColor: '#001F3F',
                padding: '10px 10px'
              }}
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className='find-btn' style={{ backgroundColor: 'white', color: 'Navy', fontWeight: 'bold' }} onClick={handleSearch}>search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleCartShow}>
              <i className="bi bi-cart" style={{ marginRight: '50px' }}></i>
            </Nav.Link>
            <Nav.Link onClick={handleShow}>
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Login show={showModal} handleClose={handleClose} />
      
      {/* AddCart Modal */}
      <AddCart show={showCart} handleClose={handleCartClose} />
    </div>
  );
}

export default TopHeader;
