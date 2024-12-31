import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactUs1 from '../ContactUs1'
import ContactUs2 from '../ContactUs2'

const ContactUs = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center' ,width:'100%'}}>
    <Grid item sx={{width:'90%'}}>
    <Navbar />
    <ContactUs1/>
    <ContactUs2/>

   
 
 </Grid>

 </Grid>
 <Footer/>
 
   </>
  )
}

export default ContactUs
