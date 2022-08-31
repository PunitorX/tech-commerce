import React from 'react'
import './Card.css'
import {motion} from 'framer-motion';
import { useState } from 'react';


function Card() {


    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
            <motion.img layout='position' src="./images/fan.png" alt="fan" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Fans
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 5 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
              
            </motion.div>
            )}           
        </motion.div>

        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
            <motion.img layout='position' src="./images/mouse.png" alt="mouse" 
            className='card-img'/>
            <motion.h2 layout='position' className='card-h2'>
                Pheriphials
            </motion.h2>
            {isOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 5 }}
            className='expand'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quae aspernatur sint ratione maiores eos hic quo molestias quibusdam architecto. 
                </p>
              
            </motion.div>
            )}           
        </motion.div>

        

        
    </div>
    
  )
}

export default Card