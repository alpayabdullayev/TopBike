import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import MobileNavbar from './mobileNavbar'
import NavbarSideBar from './navbarSideBar'
import Footer from './footer'
import Copyright from './copyright'
import LoginRegisterModal from '../components/loginRegisterModal'


const Layout = () => {
  return (
    <>
    <Navbar/>
    <MobileNavbar/>
    <NavbarSideBar/>
    <LoginRegisterModal/>
    <Outlet/>
    <Footer/>
    <Copyright/>
    
    </>
  )
}

export default Layout