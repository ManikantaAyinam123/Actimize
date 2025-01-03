import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import HireDeveloperPage from './components/pages/HireDeveloperPage';
import OurWorkPage from './components/pages/OurWorkPage';
import AboutUs from './components/pages/AboutUs';
import ServicesPage from './components/pages/ServicesPage';
import ContactUs from './components/pages/ContactUs';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const AppRoutes = () => {
  const ScrollToTop = () => {
    const pathname = useLocation();
    const prevPathname = useRef();
   
    useEffect(() => {
      if (prevPathname.current !== pathname) {
        window.scrollTo(0, 0);
        prevPathname.current = pathname;
      }
    }, [pathname]);
   
    return null;
  };
  return (
    <BrowserRouter>
       <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/hire-developer" element={<HireDeveloperPage/>}></Route>
      <Route path="/our-work" element={<OurWorkPage/>}/>
      <Route path="/about-us"  element={<AboutUs/>} />
      <Route path="/services"  element={<ServicesPage/>} />
      <Route path="/contact-us"  element={<ContactUs/>} />

      
     
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
