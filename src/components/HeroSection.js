import React, {useState} from 'react'
import {motion} from 'framer-motion';
import './HeroSection.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';

function HeroSection({
  header,
  headDesc,
  details
}) {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const closeMobile = () => setClick(false);

  return (
    <>
        <div className='home-section'>
          <div>
            <div className='home-container'>
              <div className="home-heading">
                {header}
              </div>
              <div className="home-desc">
                {headDesc}
              </div>
              <div className="home-detail">
                {details}
              </div>
            </div>
          </div>            
        </div> 

        <div className="half-section">
          <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
              <motion.h2 layout='position' className='card-h2'>
                  Video Cards 
              </motion.h2>
              {isOpen && (
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 1 }}
              className='expand'>
                  
              </motion.div>
            )}           
        </motion.div>
        </div>      
    </>
  )
}

export default HeroSection
