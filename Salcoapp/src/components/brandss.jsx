import React from 'react';
import '../styling/brand.css';
import Addi from '../assets/addidaso.jpeg';
import Guci  from '../assets/gucci.png';
import BMW  from '../assets/bmw.jpeg'
import Lg  from '../assets/lg.png'
import Hp  from '../assets/hp.png'
import Sam  from '../assets/samu.png'
import app from '../assets/apple.png'
import  Dell  from '../assets/dell.png'
import Sony  from '../assets/sony.png'
import Nike  from '../assets/nike.jpeg'
import Loius from '../assets/loius.png'
import Loreal from '../assets/loreal.png'
import mac from '../assets/mac.png'
import mars from '../assets/mars.png'
import Este from '../assets/este.png'
import Zara from '../assets/zara.png'
import Hm from '../assets/hm.png'
import Nars from '../assets/nars.png'
import Sephora from '../assets/sephora.png'
import Clinique from '../assets/clinicque.png'
import Puma from '../assets/puma.png'
import Reebok from '../assets/reebok.png'
import UA from '../assets/underarmour.png'

function Brandss() {
    return (
        <div className="brands-container">
            <h2>Our Partners at Restorex</h2>
            <p>
                At <strong>Restorex, </strong>
                we partner with some of the world's top brands across various categories to bring you the best in quality and innovation. Our commitment to excellence ensures that we offer only the finest products, reflecting the latest trends and technologies. From fashion to electronics, home goods to beauty products, our diverse range caters to all your needs. Below are 30 of the brands we proudly collaborate with, each known for their dedication to quality, sustainability, and customer satisfaction. Experience the best of what these brands have to offer, and elevate your lifestyle with Restorex.
            </p>

            <div className="brands-grid">
                {/* Electronics */}
                <div className="brand-item">
                    <img src={app} alt="Apple Logo" />
                    <p>Apple</p>
                </div>
                <div className="brand-item">
                    <img src={Sam} alt="Samsung Logo" />
                    <p>Samsung</p>
                </div>
                <div className="brand-item">
                    <img src={Sony} alt="Sony Logo" />
                    <p>Sony</p>
                </div>
                <div className="brand-item">
                    <img src={Lg} alt="LG Logo" />
                    <p>LG</p>
                </div>
                <div className="brand-item">
                    <img src={Hp} alt="HP Logo" />
                    <p>HP</p>
                </div>
                <div className="brand-item">
                    <img src={Dell} alt="Dell Logo" />
                    <p>Dell</p>
                </div>
                
                {/* Fashion */}
                <div className="brand-item">
                    <img src={Nike} alt="Nike Logo" />
                    <p>Nike</p>
                </div>
                <div className="brand-item">
                    <img src={Addi} alt="Adidas Logo" />
                    <p>Adidas</p>
                </div>
                <div className="brand-item">
                    <img src={Guci} alt="Gucci Logo" />
                    <p>Gucci</p>
                </div>
                <div className="brand-item">
                    <img src={Zara} alt="Zara Logo" />
                    <p>Zara</p>
                </div>
                <div className="brand-item">
                    <img src={Hm} alt="H&M Logo" />
                    <p>H&M</p>
                </div>
                <div className="brand-item">
                    <img src={ Loius} alt="Louis Vuitton Logo" />
                    <p>Louis Vuitton</p>
                </div>

                {/* Beauty */}
                <div className="brand-item">
                    <img src={Loreal} alt="L'Oreal Logo" />
                    <p>L'Oreal</p>
                </div>
                <div className="brand-item">
                    <img src={Este} alt="Estee Lauder Logo" />
                    <p>Estée Lauder</p>
                </div>
                <div className="brand-item">
                    <img src={Sephora} alt="Sephora Logo" />
                    <p>Sephora</p>
                </div>
                <div className="brand-item">
                    <img src={ mac} alt="MAC Logo" />
                    <p>MAC</p>
                </div>
                <div className="brand-item">
                    <img src={Nars} alt="NARS Logo" />
                    <p>NARS</p>
                </div>
                <div className="brand-item">
                    <img src={Clinique} alt="Clinique Logo" />
                    <p>Clinique</p>
                </div>

                {/* Sports */}
                <div className="brand-item">
                    <img src={Puma} alt="Puma Logo" />
                    <p>Puma</p>
                </div>
                <div className="brand-item">
                    <img src={ UA} alt="Under Armour Logo" />
                    <p>Under Armour</p>
                </div>
                <div className="brand-item">
                    <img src={Reebok} alt="Reebok Logo" />
                    <p>Reebok</p>
                </div>

              
            </div>
        </div>
    );
}

export default Brandss;
