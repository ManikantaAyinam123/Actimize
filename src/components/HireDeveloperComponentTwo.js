import { Grid, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import Theme from '../Theme';
import { useEffect, useState } from 'react';
import StaffaugementationComponent from './StaffaugementationComponent';
import DeveloperCompoent from './DeveloperCompoent';

const HireDeveloperComponentTwo = () => {
    const [activeLink, setActiveLink] = useState(0); 
    const [developer,setDeveloper] =  useState(false)
    const[staff,setStaff] = useState(false)
    useEffect(()=>{
        handleFunction()
    })
  
    const links = [
      { name: "Hire a Developer",  },
      { name: "Staff Augmentation" },
    ];
    const handleFunction = () => {
        if(activeLink === 0){
            setDeveloper(true)
            setStaff(false)
        }
        else{
            setStaff(true)
            setDeveloper(false)
        }
    }
    
  
    return (
      <Grid container justifyContent="center">
      <Grid item xs={12} mt={5} sx={{ justifyContent: "center" }}>
        <Grid item justifyContent={{xs:"center",sm:"start"} }display="flex" spacing={0} xs={10}sm={11}md={11.5} sx={{ margin: "auto" }}>
          {links.map((link, index) => (
            <Grid item key={index}>
              <NavLink
                onClick={() => setActiveLink(index)} 
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1px solid #FFE4BB",
                  borderRadius: "15px 15px 2px 2px",
                  borderBottom: activeLink === index ? "none" : "1px solid #FFE4BB",
                  color: activeLink === index ? Theme.palette.background.default : "black",
                  backgroundColor: activeLink === index ? "white" : Theme.palette.background.bg,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="caption1"
                  sx={{
                    fontSize: { xs: "10px",sm:"14px" },
                    paddingX: {xs:1,sm:1.5},
                    paddingY: {xs:1,sm:6},
                  }}
                >
                  {link.name}
                </Typography>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {developer && <DeveloperCompoent />}
      {staff && <StaffaugementationComponent />}
    </Grid>
    
    );
  };
  

export default HireDeveloperComponentTwo;
