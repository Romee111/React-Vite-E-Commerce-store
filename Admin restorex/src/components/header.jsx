import React from 'react'

import '../styling/header.css';
function header() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#001F3F' }}>
  <div className="container-fluid">
     <h3 style={{color:'white'}}>Restorex</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      
      <form className="d-flex">
        <input className="form-control search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="header-btn" type="submit">Search</button>
      </form>
      <ul className='navbar-nav d-flex'>
      <li className="nav-item " >
          <a className="nav-link" href="#"><i class="bi bi-chat-left-fill"></i></a>
        </li>
      <li className="nav-item">
          <a className="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
       
      
    </div>
  )
}

export default header

