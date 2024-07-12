import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/topheader.css';
import { useProducts } from '../hooks/producthooks';
import { useAuth } from '../hooks/userauthhooks';
import Login from './login';

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();

  const { getSearch } = useProducts();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
      <Navbar style={{ backgroundColor: '#070F2B' }}>
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand">
            Salco
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
              <i className="bi bi-search"></i>
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
