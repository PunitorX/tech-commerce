import React from 'react'
import './Card.css'
import {motion} from 'framer-motion';
import { useState } from 'react';


function Card() {


    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
        <motion.div transition={{layout: {duration: 1, type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className='Card' style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5'}}>
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

        
    </div>
    
  )
}

export default Card