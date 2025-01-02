import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Footer from '../Footer'
import Services1 from '../Services1'
import Services2 from '../Services2'
import Services3 from '../Services3'
import HomeCardsComponent from '../HomeCardsComponent'
import HomeCardsComponent2 from '../HomeCardsComponent2'


const ServicesPage = () => {
  return (
  
          <>
       
              <Navbar/>
              <Services1/>
              <Services2/>
              <HomeCardsComponent2/>
              <Services3/>
        
      
         
       
           <Footer/>
           </>
  )
}

export default ServicesPage
