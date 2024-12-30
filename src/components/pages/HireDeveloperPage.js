

import React from 'react'
import HireComponentOne from '../HireComponentOne'
import { Grid } from '@mui/material'
import Navbar from '../Navbar'
import HireDeveloperComponentTwo from '../HireDeveloperComponentTwo'


const HireDeveloperPage = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
    <Grid item sx={{width:'90%'}}>
        <Navbar />
    <HireComponentOne/>
    <HireDeveloperComponentTwo/>
    </Grid>
    </Grid>
    </>
  )
}

export default HireDeveloperPage