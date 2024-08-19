import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import { useSelector } from 'react-redux'; // Import useSelector for accessing cart state
import AddCart from '../components/addcart';
import UserProfile from '../components/userprofile';
import Login from '../components/login';
import logo from '../assets/reslogo.png';
import '../styling/topheader.css';

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(true); // Set to true initially to show the modal on load
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { getSearch } = useProducts();
  const navigate = useNavigate();

  const cartItemsCount = useSelector((state) => state.cart.cartItems.length); // Get the count of cart items

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  const handleuserProfileShow = () => setShowProfile(true);
  const handleuserProfileShowClose = () => setShowProfile(false);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    setShowModal(true); // Automatically show the login modal when the component mounts
  }, []);

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

  const handleFocus = () => {
    if (searchResults.length > 0) {
      setShowResults(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
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
             
              className="me-2 searchbar"
              style={{
                border: '1px solid white',
                fontSize: '16px',
                borderRadius: '1px 0 0 5px solid #ffffff',
                backgroundColor: '#001F3F',
                padding: '10px 10px',
                color: 'white',
                '::placeholder': {
                  color: 'white',
                  opacity: '1',
                }
              }}
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search for products..."
            />
            <Button
              className="find-btn"
              onClick={handleSearch}
              style={{
                color: '#001F3F',
                backgroundColor: 'white',
                
              }}
            >
              Search
            </Button>
            {showResults && (
              <div className="search-results" style={{ width: '900px', backgroundColor: 'white', position: 'absolute', zIndex: '1', borderRadius: '10px' }}>
                <ul>
                  {searchResults.slice(0, 10).map((result) => (
                    <li key={result.id} style={{ textAlign: 'left' }} onClick={() => handleSearchProduct(result._id)}>{result.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </Form>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleCartShow}>
              <i className="bi bi-cart" style={{ marginRight: '50px', position: 'relative' }}>
                {cartItemsCount > 0 && (
                  <Badge pill bg="light" style={{ position: 'absolute', top: '-2px', right: '-10px', backgroundColor: 'white', color: 'Navy', fontSize: '12px' }}>
                    {cartItemsCount}
                  </Badge>
                )}
              </i>
            </Nav.Link>
            <Nav.Link onClick={handleuserProfileShow}>
              <i className="bi bi-person-circle"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <UserProfile show={showProfile} handleClose={handleuserProfileShowClose} />
      <AddCart show={showCart} handleClose={handleCartClose} />
      <Login show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default TopHeader;
