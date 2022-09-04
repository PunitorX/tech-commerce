import React from 'react'
import './HeroSection.css'

function HeroSection({
  header,

}) {

  return (
    <>
        <div className='home-section'>
          <div>
            <div className="hero-heading">
              <h2>{header}</h2>
            </div>
          </div>            
        </div>       
    </>
  )
}

export default HeroSection
