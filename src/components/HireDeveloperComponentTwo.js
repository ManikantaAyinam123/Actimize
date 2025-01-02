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
  border: "2px solid #FFE4BB",
  borderRadius: "15px 15px 2px 2px",
  borderBottom: "none",
  color: active ? theme.palette.background.default : "black",
  backgroundColor: active ? "white" : theme.palette.background.bg,
  textAlign: "center",
  alignItems: "center",
  cursor: "pointer",
  padding: theme.breakpoints.down("xs") ? "4px 8px" : "8px 16px",
  // paddingTop: "10px",  
  // paddingBottom: "10px",  
  paddingTop: theme.breakpoints.down("xs") ? "7px" :"10px",  
  paddingBottom: theme.breakpoints.down("xs") ? "7px" :"10px", 
  // marginTop: active ? 5 : 0,
}));


const HireDeveloperComponentTwo = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [developer, setDeveloper] = useState(false)
  const [staff, setStaff] = useState(false)
  useEffect(() => {
    handleFunction()
  })

  const links = [
    { name: "Hire a Developer", },
    { name: "Staff Augmentation" },
  ];
  const handleFunction = () => {
    if (activeLink === 0) {
      setDeveloper(true)
      setStaff(false)
    }
    else {
      setStaff(true)
      setDeveloper(false)
    }
  }


  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} mt={12} sx={{ justifyContent: "center" }}>
        <Grid item justifyContent={{ xs: "center", sm: "start" }} display="flex" spacing={0} xs={11} sm={11} md={11.5} sx={{ marginX: "auto" }}>
          {links.map((link, index) => (
            <Grid item key={index}>
              <StyledNavLink onClick={() => setActiveLink(index)} active={activeLink === index}>
                <Typography
                  variant="caption1"
                  sx={{
                    fontSize: { xs: "12px", sm: "16px", lg: "14px" },
                    paddingX: {
                      xs: "3px",
                      sm: "30px",
                      md: "30px",
                      lg: "30px",
                      xl: "30px",
                    },
                    // paddingY: {
                    //   xs: 0,  
                    //   sm: "30px", 
                    //   md: "26px", 
                    //   lg: "20px",  
                    //   xl: "20px",  
                    // },
                    zIndex: 20
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
