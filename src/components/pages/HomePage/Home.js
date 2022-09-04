import React from 'react'
import HeroSection from '../../HeroSection'
import Card from '../../Card'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import { homeObjOne } from '../../Data'


function Home() {
  return (
    <>
        <Navbar />
        <HeroSection {...homeObjOne}/>
        <Card />
        <Footer />
    </>
  )
}

export default Home