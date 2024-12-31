import { Grid, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import Theme from '../Theme';
import { useEffect, useState } from 'react';
import StaffaugementationComponent from './StaffaugementationComponent';
import DeveloperCompoent from './DeveloperCompoent';
import { styled } from "@mui/system";
const StyledNavLink = styled(NavLink)(({ theme, active }) => ({
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #FFE4BB",
  borderRadius: "15px 15px 2px 2px",
  borderBottom: active ? "none" : "1px solid #FFE4BB",
  color: active ? theme.palette.background.default : "black",
  backgroundColor: active ? "white" : theme.palette.background.bg,
  transition: "all 0.3s ease",
  cursor: "pointer",
  padding: theme.breakpoints.down("sm") ? "5px 7px" : "10px 18px", // Responsive padding
}));

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
            <StyledNavLink onClick={() => setActiveLink(index)} active={activeLink === index}>
  <Typography
    variant="caption1"
    sx={{
      fontSize: { xs: "10px", sm: "14px" },
    }}
  >
    {link.name}
  </Typography>
</StyledNavLink>

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
