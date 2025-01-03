import { Grid, Typography } from '@mui/material'
import React from 'react'
import Homecarousel1 from './Homecarousel1'
import HomeCardsComponent from '../HomeCardsComponent'
import HomeCardsComponent2 from '../HomeCardsComponent2'
import SmartCodeCard from '../SmartCodeCard'
import HomeCardsComponent3 from '../HomeCardsComponent3'
import HomeCardsComponent4 from '../HomeCardsComponent4'
import HomeVerticalSwiperComponent from './HomeVerticalSwiperComponent'
import LogosSliderComponent from '../LogosSliderComponent'
import HomepageLastComponent from '../HomepageLastComponent'
import Footer from '../Footer'
import Navbar from '../Navbar'
import HomeCardsComponent5 from '../HomeCardsComponent5'
import NavbarComponent from '../NavabrComponenttt'
import TopComponent from '../TopComponent'

const HomePage = () => {
  return (
    <>
   
        {/* <Navbar/> */}
        <NavbarComponent/>
    <Homecarousel1/>
    <HomeCardsComponent/>
    <HomeCardsComponent5/>
    <HomeCardsComponent4/>
    <HomeVerticalSwiperComponent/>
    <LogosSliderComponent/>
    <HomepageLastComponent/>

   <TopComponent/>
  
     <Footer/>
     </>
  )
}

export default HomePage