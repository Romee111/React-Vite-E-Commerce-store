import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function topheader() {
  return (
    <>
    <div>
        
    <Navbar  bg='dark'>
      <Container fluid>
        <Navbar.Brand href="#">Salco</Navbar.Brand>
      
         
       
          <Form className="d-flex" style={{width:"70%"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
      </Container>
    </Navbar>
    </div>

        </>
  )
}

export default topheader

