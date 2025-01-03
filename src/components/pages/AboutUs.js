import React from 'react'

import Footer from '../Footer'
import AboutUs1 from '../AboutUs1'
import { Grid } from '@mui/material'
import HomeCardsComponent3 from '../HomeCardsComponent3'
import AboutUs2 from '../AboutUs2'
import AboutUs3 from '../AboutUs3'
import Navbar from '../Navbar'
import NavbarComponent from '../NavabrComponenttt'
import TopComponent from '../TopComponent'

const AboutUs = () => {
  return (
    <>
   
    {/* <Navbar /> */}
    <NavbarComponent/>
    <AboutUs1/>
    <HomeCardsComponent3/>
   
    <AboutUs2/>
    <AboutUs3/>
 
    <TopComponent/>
 <Footer/>
 
   </>
  )
}

export default AboutUs


