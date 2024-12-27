import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import MainComponent from './components/MainComponent';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainComponent/>}>
     
      
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
