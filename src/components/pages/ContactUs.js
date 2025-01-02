import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactUs1 from '../ContactUs1'
import ContactUs2 from '../ContactUs2'
import ContactUs4 from '../ContactUs4'
import ContactUsFormComponent from '../ContactUsFormComponent'

const ContactUs = () => {
  return (
    <>
 
    <Navbar />
    <ContactUs1/>
    <ContactUs2/>
    <ContactUsFormComponent/>
    <ContactUs4/>

   
 

 <Footer/>
 
   </>
  )
}

export default ContactUs
