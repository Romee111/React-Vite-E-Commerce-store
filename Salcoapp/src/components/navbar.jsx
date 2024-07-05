import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styling/navbar.css'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav navi">
        <Link className="nav-link active" aria-current="page" to="#">Brands</Link>
        <Link className="nav-link" to="#">Categories</Link>
        <Link className="nav-link" to="/seller">Become a Seller</Link>
        <Link className="nav-link" to="#" tabIndex="-1" >help & support</Link>
      </div>
    </div>
  </div>
</nav>
     
    
  );
}


export default navbar

