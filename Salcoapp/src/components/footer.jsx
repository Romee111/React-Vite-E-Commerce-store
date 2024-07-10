import React from 'react'
import '../styling/footer.css'
import { Link } from 'react-router-dom'
function footer (){
  return (
    <div>
     




  <footer className="bg-white">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
            <h5>Restorex</h5>
          <p className="font-italic text-muted"> Office.44,street No-1,Near Jamia Masjid Al Raheem,P-Block,Johartown,Lahore-Pakistan</p>
          <ul className="list-inline mt-4">
            <li className="list-inline-item"><Link href="#" target="_blank" title="twitter"><i className="bi bi-twitter"></i></Link></li>
            <li className="list-inline-item"><Link href="#" target="_blank" title="facebook"><i className="bi bi-facebook"></i></Link></li>
            <li className="list-inline-item"><Link href="#" target="_blank" title="instagram"><i className="bi bi-instagram"></i></Link></li>
            <li className="list-inline-item"><Link href="#" target="_blank" title="pinterest"><i className="bi bi-pinterest"></i></Link></li>
            <li className="list-inline-item"><Link href="#" target="_blank" title="vimeo"><i className="bi bi-vimeo"></i></Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul className="list-unstyled mb-0 footer-links">
            <li className="mb-2"><Link to="/about" className="text-muted">About Us</Link></li>
            <li className="mb-2"><Link href="#" className="text-muted">Contact Us</Link></li>
            <li className="mb-2"><Link href="#" className="text-muted">help Center</Link></li>
            <li className="mb-2"><Link href="#" className="text-muted">Our Blog</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Wishlist</a></li>
            <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Email us</h6>
          <p className="text-muted mb-4">If you have any questions or suggestions, feel free to email us at ceorestorex@gmai.com</p>
          <div className="p-1 rounded border">
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-light py-4">
      <div className="container text-center">
        <p className="text-muted mb-0 py-2">© 2024 Restorex  copy right all</p>
      </div>
    </div>
  </footer>
      
    </div>
  )
}

export default footer


