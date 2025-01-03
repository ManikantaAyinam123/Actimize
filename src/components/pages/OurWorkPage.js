import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Footer from '../Footer'
import OurWorks1 from '../OurWorks1'
import OurWorks2 from '../OurWorks2'
import TrackerComponent from '../TrackerComponent'
import OurWorksComponent from '../OurWorksComponent'
import BackgroundColor from '../BackgroundColor'
import NavbarComponent from '../NavabrComponenttt'
import TopComponent from '../TopComponent'

const OurWorkPage = () => {
  return (
    <>
   
      {/* <Navbar/> */}
      <NavbarComponent/>
      <OurWorks1/>
      <OurWorks2/>
      <OurWorksComponent/>
      <TrackerComponent/>
      {/* <BackgroundColor/> */}
 
      <TopComponent/>
 

   <Footer/>
   </>
  )
}

export default OurWorkPage