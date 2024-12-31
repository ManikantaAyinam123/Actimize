

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
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
    <Grid item sx={{width:'90%'}}>
        <Navbar />
    <HireComponentOne/>
    <HireDeveloperComponentTwo/>
    <HireDeveloperThirdComponent/>
    <HireDeveloperFouthComponent/>
    </Grid>
    
    </Grid>
    <Footer/>
    </>
  )
}

export default HireDeveloperPage