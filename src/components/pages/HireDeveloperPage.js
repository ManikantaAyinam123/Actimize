

import React from 'react'
import HireComponentOne from '../HireComponentOne'
import { Grid } from '@mui/material'
import Navbar from '../Navbar'
import HireDeveloperComponentTwo from '../HireDeveloperComponentTwo'
import HireDeveloperThirdComponent from '../HireDeveloperThirdComponent'
import HireDeveloperFouthComponent from '../HireDeveloperFouthComponent'
import Footer from '../Footer'


const HireDeveloperPage = () => {
  return (
    <>
   
        <Navbar />
    <HireComponentOne/>
    <HireDeveloperComponentTwo/>
    <HireDeveloperThirdComponent/>
    <HireDeveloperFouthComponent/>
   
    <Footer/>
    </>
  )
}

export default HireDeveloperPage