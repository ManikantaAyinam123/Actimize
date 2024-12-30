import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Footer from '../Footer'
import Services1 from '../Services1'
import Services2 from '../Services2'
import Services3 from '../Services3'


const ServicesPage = () => {
  return (
  
          <>
          <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
            <Grid item sx={{width:'90%'}}>
              <Navbar/>
              <Services1/>
              <Services2/>
              <Services3/>
        
      
         
         </Grid>
       
         </Grid>
           <Footer/>
           </>
  )
}

export default ServicesPage
