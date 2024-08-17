import React from 'react'
import '../styling/siteloader.css'
import loaderimg from '../assets/reslogo.png'

function siteloader() {
  return (
    <div className="image-loader">
      <img src={loaderimg} alt="Loading..." className="loader-image" />
    </div>
  )
}

export default siteloader
