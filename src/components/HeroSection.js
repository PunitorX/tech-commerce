import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    colorBg,
    topLine,
    lightText, 
    lightTextDesc,
    headLine,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
}) {
  return (
    <>
        <div className={colorBg ? 'home-section milkBg' : 'home-section creamBg'}>
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
