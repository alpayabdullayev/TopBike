import React, { useEffect, useState } from 'react'
import axios from "axios"
import Hero from '../../components/hero'
import Services from '../../components/services'


const Home = () => {
 
  

  return (
    <>
    <div>


      <Hero/>
      <Services/>
    </div>
    </>
  )
}

export default Home