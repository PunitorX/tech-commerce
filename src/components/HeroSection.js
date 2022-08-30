import React from 'react'
import {createContext, useState} from 'react'
import './HeroSection.css'

export const ThemeContext = createContext(null);

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
    imgStart,
    theme
}) {

  return (
    <>
        <div className='home-section' id={theme}>
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
