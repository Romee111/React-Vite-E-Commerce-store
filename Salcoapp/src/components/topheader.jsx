import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/topheader.css';
import { useProducts } from '../hooks/producthooks';
import { useAuth } from '../hooks/userauthhooks';
import Login from '../components/login'; // Assuming your Login component is named Login and in lowercase
import logo from '../assets/reslogo.png';
function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const { getSearch } = useProducts();
  const { login } = useAuth();

  const handleShow = () => setShowModal(true); // Function to show modal
  const handleClose = () => setShowModal(false); // Function to hide modal

  const handleSearch = async () => {
    try {
      const results = await getSearch(searchTerm);
      setSearchResults(results.data);
      setShowResults(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
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
            <img src={logo} alt="Logo"  style={{ width: '100px', height: '50px' }} className="logo" /> 
          </Navbar.Brand>
          <Form className="d-flex" style={{ width: '70%' }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              style={{
                border: 'none',
                fontSize: '16px',
                borderRadius: '50px',
                padding: '10px 20px'
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
                color: 'white',
                backgroundColor: 'black',
                border: 'none',
                fontSize: '16px',
                padding: '10px',
                borderRadius: '50px'
              }}
            >
               search
            </Button>
            {showResults && (
              <div className="search-results">
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i className="bi bi-cart"></i>
             
            </Nav.Link>
            <Nav.Link href="#features">
              <i className="bi bi-person-circle" onClick={handleShow}></i> {/* Open Login component */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Login show={showModal} handleClose={handleClose} /> {/* Pass showModal state and handleClose function to Login component */}
    </div>
  );
}

export default TopHeader;
