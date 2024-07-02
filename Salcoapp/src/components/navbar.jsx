import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css'


function navbar() {
  return (
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav navi">
        <a className="nav-link active" aria-current="page" href="#">Brands</a>
        <a className="nav-link" href="#">Categories</a>
        <a className="nav-link" href="#">Become a Seller</a>
        <a className="nav-link" href="#" tabIndex="-1" >help & support</a>
      </div>
    </div>
  </div>
</nav>
     
    
  );
}


export default navbar

