

import React from 'react'
import HireComponentOne from '../HireComponentOne'
import { Grid } from '@mui/material'
// import Navbar from '../Navbar'
import HireDeveloperComponentTwo from '../HireDeveloperComponentTwo'
import HireDeveloperThirdComponent from '../HireDeveloperThirdComponent'
import HireDeveloperFouthComponent from '../HireDeveloperFouthComponent'
import Footer from '../Footer'
import NavbarComponent from '../NavabrComponenttt'
import TopComponent from '../TopComponent'


const HireDeveloperPage = () => {
  return (
    <>
   
        {/* <Navbar /> */}
        <NavbarComponent/>
    <HireComponentOne/>
    <HireDeveloperComponentTwo/>
    <HireDeveloperThirdComponent/>
    <HireDeveloperFouthComponent/>
    <TopComponent/>
    <Footer/>
    </>
  )
}

export default HireDeveloperPage