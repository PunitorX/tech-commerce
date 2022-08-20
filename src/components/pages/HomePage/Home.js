import React from 'react'
import HeroSection from '../../HeroSection'
import ShoppingCart from '../../ShoppingCart'
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
        <ShoppingCart/>
    </>
  )
}

export default Home