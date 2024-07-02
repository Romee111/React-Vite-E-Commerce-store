import React from 'react';
import HomeProducts from '../components/homeproducts';
import img1 from '../assets/Eiiffel.jpg';
import img2 from '../assets/Jeddah.jpg';
import img3 from '../assets/Siddeny.jpg';
import '../styling/home.css';
import Arrivals from '../components/arrivals';
import Categories from '../components/categories';
function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 sliding" alt="Eiffel Tower" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 sliding" alt="Jeddah Cityscape" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 sliding" alt="Sydney Opera House" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <HomeProducts />
      <Arrivals />


      <Categories />

    </div>
  );
}

export default Home;
