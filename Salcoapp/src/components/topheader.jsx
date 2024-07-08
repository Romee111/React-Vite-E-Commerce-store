import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/topheader.css';
import { useProducts } from '../hooks/producthooks';

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const { getSearch } = useProducts();


  
  const handleSearch = async () => {
    try {
      const results = await getSearch(searchTerm);
      console.log(results);
      debugger
      // setSearchResults(Array.isArray(results) ? results : []);
      setSearchResults(results.data)
      // console.log(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      handleSearch();
      console.log(searchResults);
      console.log(searchTerm);
    } else {
      setSearchResults([]);
      console.log(searchResults);
    }
  }, [searchTerm]);


  const handleFocus = () => {
    if (searchResults.length > 0) {
      setShowResults(true);
      console.log(searchResults);

    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
      console.log(setShowResults);
    }, 20); // Delay to allow click events to be registered
  };

  return (
    <div>
      <Navbar bg="dark">
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
                borderRadius: '50px',
              }}
            >
              { searchResults && searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
    </div>
      )}
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <i className="bi bi-cart"></i>
            </Nav.Link>
            <Nav.Link href="#features">
              <i className="bi bi-person-circle" ></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            
     
      </div>
  );
}

export default TopHeader;
