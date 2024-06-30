import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css'


function navbar() {
  return (
    

    
      <Navbar bg="light" data-bs-theme="light">
        
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
               </Container>
               <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            </Navbar.Collapse> 
      </Navbar>
          
     
    
  );
}


export default navbar

