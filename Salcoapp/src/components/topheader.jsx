import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/producthooks';
import { useAuth } from '../hooks/userauthhooks';
import Login from '../components/login'; // Adjust if needed
import logo from '../assets/reslogo.png';
import '../styling/topheader.css';

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { getSearch } = useProducts();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

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
          <Form className="d-flex" style={{ width: '70%' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              style={{
                border: '1px solid white',
                fontSize: '16px',
                borderRadius: '1px 0 0 5px solid #ffffff',
                backgroundColor: '#001F3F',
                color: 'white',
                padding: '10px 10px'
              }}
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <Button
              className="search-btn"
              onClick={handleSearch}
              style={{
                color: '#001F3F',
                backgroundColor: 'white',
                border: 'none',
                fontSize: '16px',
                padding: '11px',
                borderRadius: '10px',
                marginLeft: '61.25%',
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
            <Nav.Link href="#home">
              <i className="bi bi-cart" style={{ marginRight: '50px' }}></i>
            </Nav.Link>
            <Nav.Link href="#features">
              <i className="bi bi-person-circle" onClick={handleShow}></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Login show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default TopHeader;
