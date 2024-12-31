import React from 'react'

import Footer from '../Footer'
import AboutUs1 from '../AboutUs1'
import { Grid } from '@mui/material'
import HomeCardsComponent3 from '../HomeCardsComponent3'
import AboutUs2 from '../AboutUs2'
import AboutUs3 from '../AboutUs3'
import Navbar from '../Navbar'

const AboutUs = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
    <Grid item sx={{width:'90%'}}>
    <Navbar />
    <AboutUs1/>
    <HomeCardsComponent3/>
   
    <AboutUs2/>
    <AboutUs3/>
 
 </Grid>

 </Grid>
 <Footer/>
 
   </>
  )
}

export default AboutUs


