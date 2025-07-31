 import React, { useState } from 'react'
 import "./Home.css"
 import Pumpbanner from "../../images/pump-banner.png";
 import Carousel from "../Carousel/Carousel"
export const Home = () => {
    
  return (
    <>
      <div className="container-fluid home-landing-container">
        <div className="home-landing-inner-container">
          <div className="row">
            <div className="col home-banner-first-col">
              <h3>HIGHLY EFFICIENT AND RELIABLE</h3>
              <h1>AGRI PUMPS</h1>
              <p>The GS2 pumps are high-performance, durable pumps designed for efficient fluid transfer across various applications. Known for their robust build and energy efficiency, these pumps ensure reliable operation, minimal maintenance, and optimal performance under demanding conditions. Perfect for industrial, agricultural, and commercial use.</p>
            
            </div>
            <div className="col col home-banner-second-col"><img className='pumpbanner' src={Pumpbanner} alt="" srcset="" /></div>
          </div>
        </div>
      </div>

{/* ..................................................... Section Two ..................................................... */}


      <div className="container-fluid home-section-two-container">
        <div className="home-section-two-inner-container">
          <h2>Industrial Pumps <span style={{color: "red"}}>Manufacturers</span></h2>
          <p>At Geeco Pumps, we are a globally renowned manufacturer of high-quality, innovative pump solutions. With decades of expertise in the industry, we specialize in designing and delivering a wide range of pumps tailored to meet the needs of diverse sectors, including industrial, agricultural, and commercial applications.</p>
          <p>Our commitment to excellence drives us to create cutting-edge, energy-efficient, and durable products that set new benchmarks in performance and reliability. Trusted by customers worldwide, Geeco Pumps is synonymous with innovation, quality, and unmatched customer satisfaction.</p>
          <p>With a strong presence in international markets, we continuously strive to provide exceptional solutions that empower businesses and industries to thrive. At Geeco Pumps, we don’t just build pumps—we build trust and long-lasting partnerships.</p>

        </div>
      </div>
      
 {/* ............................................. Section Three ............................................. */}
              <div className="container-fluid home-section-three-container">
                <div className="home-section-three-inner-container">
                  <h2>Sectors we serve</h2>
                  <Carousel/>
                </div>
              </div>
           </>
          )
}
          


      
      
        
        
        
              