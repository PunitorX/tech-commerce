import React from 'react'
import './Card.css'
import {motion} from 'framer-motion';
import { useState } from 'react';
import { Button } from './Button'
import {Link} from 'react-router-dom'

function Card() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const closeMobile = () => setClick(false);

    return (
        <>
        <div className="header">
            <motion.h1 className="h1-header">
                <span>Parts and Equipment</span>
            </motion.h1>
        </div>

        <div className='App'>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/hardware.png" alt="hardware" className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Video Cards 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/processor.png" alt="processor" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                CPUs / Processors 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/motherboard.png" alt="motherboard" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Motherboards 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/ssd.png" alt="ssd" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Storage 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/ram-memory.png" alt="ram" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Memory
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/power-supply.png" alt="power supply" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Power Supply
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/fan.png" alt="fan" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Fans
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/mouse.png" alt="mouse" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Mouses & Keyboards
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/gaming-pc.png" alt="gaming-pc" className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Cases 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/equipment.png" alt="equipment" className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Accessories
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/serial.png" alt="serial" className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Supplies 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5', width: '340px'}}>
            <motion.img layout='position' src="./images/monitor.png" alt="monitor" className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Monitors 
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
                <motion.div className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Explore</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--primary' buttonSize='btn--mobile' onClick={closeMobile}>
                                Explore
                                </Button>
                            </Link>
                        )}
                </motion.div>
            </motion.div>
            )}           
        </motion.div>
   
    </div>
    </>
    
  )
}

export default Card