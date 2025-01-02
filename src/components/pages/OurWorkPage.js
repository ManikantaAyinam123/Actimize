import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Footer from '../Footer'
import OurWorks1 from '../OurWorks1'
import OurWorks2 from '../OurWorks2'
import TrackerComponent from '../TrackerComponent'
import OurWorksComponent from '../OurWorksComponent'
import BackgroundColor from '../BackgroundColor'

const OurWorkPage = () => {
  return (
    <>
   
      <Navbar/>
      <OurWorks1/>
      <OurWorks2/>
      <OurWorksComponent/>
      <TrackerComponent/>
      {/* <BackgroundColor/> */}
 

 

   <Footer/>
   </>
  )
}

export default OurWorkPage