

import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material"; 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Theme from "../Theme";

const TopComponent = () => {
  // const [showButton, setShowButton] = useState(false);

 
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 280) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

 
  // const TopComponent = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // return (
  //   <>
  //     {showButton && (
  //       <Fab
  //       //   color="disable"
  //         size="small" 
  //         onClick={TopComponent}
  //         sx={{
  //           position: "fixed",
  //           bottom: "1rem",
  //           right: {xs:"1rem",sm:"2rem"},
  //           zIndex: 1000,
  //           padding:{xs:2,sm:3},
  //           // display:{xs:"none",sm:"flex"},
  //           backgroundColor: 'rgba(238, 238, 238, 0.6)',
  //           color:Theme.palette.background.default
  //         }}
  //       >
  //         <KeyboardArrowUpIcon  sx={{fontSize:{xs:"40px",sm:"60px"},fontWeight:"small",}}/>
  //       </Fab>
  //     )}
  //   </>
  // );
};

export default TopComponent;
