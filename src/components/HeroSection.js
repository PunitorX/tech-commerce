import React from 'react'
import './HeroSection.css';
import {useState} from 'react'

function HeroSection({
    colorBg,
    topLine,
    lightText, 
    lightTextDesc,
    headLine,
    description,<div className=""></div>
    buttonLabel,
    img,
    alt,
    imgStart,
    Navbar
}) {

  const [theme] = useState('light');

  return (
    <>
        <div className='home-section' id={Navbar}>
            <div className="container">
              <div className="row home-hero-row"
              style={{display: 'flex',
                      flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'        
              }}>
                <div className="col">
                  <div className='home-hero-text-wrapper'>
                    <div className="top-line">{topLine}</div>
                    <h1 className='heading'>{headLine}</h1>
                    <p className="home-hero-subtitle">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="home-hero-img-wrapper">
                    <img src={img} alt={alt} className="home-hero-img" />
                  </div>
                </div>
              </div>
            </div>
        </div>       
    </>
  )
}

export default HeroSection
