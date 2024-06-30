import React from 'react'

function home() {
  return (
    <div>
        <div id="carouselExampleIndicators" classname="carousel slide" data-bs-ride="carousel">
  <div classname="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" classname="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div classname="carousel-inner">
    <div classname="carousel-item active">
      <img src="..." classname="d-block w-100" alt="..."/>
    </div>
    <div classname="carousel-item">
      <img src="..." classname="d-block w-100" alt="..."/>
    </div>
    <div classname="carousel-item">
      <img src="..." classname="d-block w-100" alt="..."/>
    </div>
  </div>
  <button classname="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span classname="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classname="visually-hidden">Previous</span>
  </button>
  <button classname="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span classname="carousel-control-next-icon" aria-hidden="true"></span>
    <span classname="visually-hidden">Next</span>
  </button>
</div>

        
      
    </div>
  )
}




export default home