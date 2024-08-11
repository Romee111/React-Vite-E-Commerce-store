import React from 'react';
import HomeProducts from '../components/homeproducts';
import fanta from '../assets/fanta.png';
import two from '../assets/two.png';
import shophere from '../assets/shophere.png';
import vid2 from '../assets/vid2.mp4';
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
            <video src={vid2} className="d-block w-100 sliding" alt="Eiffel Tower" autoPlay loop muted style={{ objectFit: 'cover' }} ></video>
          </div>
          <div className="carousel-item">
            <img src={shophere} className="d-block w-100 sliding" alt="Jeddah Cityscape" />
          </div>
          <div className="carousel-item">
            <img src= {two} className="d-block w-100 sliding" alt="Sydney Opera House" />
          </div>
        </div>
       
      </div>
      <HomeProducts />
      <Arrivals />
    <Categories />

    </div>
  );
}

export default Home;
