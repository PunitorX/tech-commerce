import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import { Card } from './Card'
import './HeroSection.css'

function HeroSection() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [card, setCard] = useState(true);

  const closeMobile = () => setClick(false);

  return (
    <>
        <div className='home-section'>
            <div className="container">
              <div className="card-btn">
              {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary'>SIGN IN</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobile}>
                                SIGN IN
                                </Button>
                            </Link>
                        )}
              </div>
            </div>
        </div>       
    </>
  )
}

export default HeroSection
