import React, { useEffect, useState } from 'react'
import axios from "axios"
import Hero from '../../components/hero'
import Services from '../../components/services'
import Collection from '../../components/collection'
import LatestNews from '../../components/latestNews'
import OnlyOnline from '../../components/OnlyOnline'
import LoginRegisterModal from '../../components/loginRegisterModal'
import NewProduct from '../../components/NewProduct'


const Home = () => {
 
  

  return (
    <>
    <div>


      <Hero/>
      <Services/>
      <NewProduct/>
      <OnlyOnline/>
      <Collection/>
      <LatestNews/>
    </div>
    </>
  )
}

export default Home