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

const HomePage = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
      <Grid item sx={{width:'90%'}}>
        <Navbar/>
    <Homecarousel1/>
    <HomeCardsComponent/>
    <HomeCardsComponent2/>
    <HomeCardsComponent3/>
    <HomeCardsComponent4/>
    <HomeVerticalSwiperComponent/>
    <LogosSliderComponent/>
    <HomepageLastComponent/>

   
   </Grid>
 
   </Grid>
     <Footer/>
     </>
  )
}

export default HomePage
