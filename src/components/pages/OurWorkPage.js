import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Footer from '../Footer'
import OurWorks1 from '../OurWorks1'
import OurWorks2 from '../OurWorks2'
import TrackerComponent from '../TrackerComponent'
import OurWorksComponent from '../OurWorksComponent'

const OurWorkPage = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
    <Grid item sx={{width:'90%'}}>
      <Navbar/>
      <OurWorks1/>
      <OurWorks2/>
      <OurWorksComponent/>
      <TrackerComponent/>
 

 
 </Grid>

 </Grid>
   <Footer/>
   </>
  )
}

export default OurWorkPage