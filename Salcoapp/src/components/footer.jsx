import React from 'react'
import '../styling/footer.css'
import { Link } from 'react-router-dom'
function footer (){
  return (
    <div>
       
    <footer className="text-center text-lg-start text-white footer-start" style={{ backgroundColor: '#001F3f' }}>
      <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#001f3f3' }}>
        <div className="me-5 footer-social">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-google"></i>
          </Link>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link href="#" className="text-white me-4">
            <i className="bi bi-github"></i>
          </Link>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5 footer-brand">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Restorex</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                when restoration meets innovation.Get connected with Restorex  a project by RGC              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-links">
              <h6 className="text-uppercase fw-bold">Restorex support</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><Link to="#!" className="text-white">Help Center</Link></p>
              <p><Link to="#!" className="text-white">Contact Us</Link></p>
              <p><Link to="#!" className="text-white">start selling</Link></p>
              <p><Link to="#!" className="text-white">Become a member</Link></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-info">
              <h6 className="text-uppercase fw-bold">Know US</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><Link to="about" className="text-white">About us</Link></p>
              <p><Link to="#!" className="text-white">Term & Condtions</Link></p>
              <p><Link to="#!" className="text-white">Services & Polices</Link></p>
              <p><Link to="#!" className="text-white">Help & Support</Link></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-address">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px',color:'#FFFFFF' }} />
              <p><i className="fas fa-home mr-3"></i> Lahore, Pakistan,</p>
              <p><i className="fas fa-envelope mr-3"></i> ceo@restorex.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 92 318 710 1450 </p>
              <p><i className="fas fa-print mr-3"></i> + 111 318 710 1450</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <Link className="text-white" href=""> Copyright by Restorex 2024</Link>
      </div>
    </footer>
 





      
    </div>
    
  )
}

export default footer


