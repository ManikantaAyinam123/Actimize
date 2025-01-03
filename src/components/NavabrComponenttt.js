import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import { NavLink, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);  // To track scroll position
  const isMobile = useMediaQuery('(max-width: 600px)');

  const navigate = useNavigate()

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const links = [
    { name: 'Hire Developers', href: '/hire-developer' },
    { name: 'Our Works', href: '/our-work' },
    { name: 'About us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact us', href: '/contact-us' },
  ];

  const drawerLinks = (
    <Box
      sx={{ width: 250,padding:1 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        <Grid item sx={{display:"flex"}} onClick={()=>navigate('/')}>
        <Box component="img" src="../assets/images/logo.png" alt="Vector Image" width="50px" height="50px" mt={0} />
        <Typography 
      variant="caption1" 
      component="div" 
      sx={{ 
        display: "block", 
        fontSize: { xs: '18px', sm: "15px", md: "20px" }, 
        marginTop: { xs: "15px",  }, 
        marginBottom: { xs: '0px',  }, 
        color: "#363636" 
      }}
    >
      Actimize
    </Typography>
    </Grid>

        {links.map((link) => (
          <ListItem
            button
            key={link.name}
            component={NavLink}
            to={link.href}
            onClick={() => handleLinkClick(link.name)}
            style={({ isActive }) => ({
              cursor: 'pointer',
              backgroundColor: isActive ? '#FF5029' : "",
              color: isActive ? 'white' : 'black',
              borderRadius: "150px",
              fontFamily: "Inter",
              paddingX: 1
            })}
          >
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
       <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
  <Box component="img" src="../assets/images/logo.png" alt="Vector Image" width="100px" height="100px" mt={0} />
</Grid>
      </List>
    </Box>
  );

  const handleHome = () => {
    navigate('/')
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
   
   <Grid 
  item 
  xs={12} 
  sx={{ 
    // flexGrow: 1, 
    width:"100%",
    // position: "relative", 
    zIndex: 1000 , 
    top: 0,
    backgroundColor:"transparent", 
    position:"fixed", 
    paddingX: {xs: "10px", sm: "10px", md: "20px", lg: "50px"}, 
    display: "flex", 
    justifyContent: "space-between",
    
  }}mt={1}
>
  <Grid 
    item 
    sx={{ 
      backgroundColor: { xs: "none", sm: 'rgba(238, 238, 238, 0.6)' }, 
      backdropFilter: isScrolled ? 'blur(5px)' : 'none', 
      display: 'flex', 
      cursor: "pointer", 
      alignItems: "center", 
      borderRadius: 11, 
      paddingY: 1, 
      paddingX: 2,
      gap: 1 ,
      height:"54px",
    }} 
    onClick={handleHome}
  >
    <Box component="img" src="../assets/images/logo.png" alt="Vector Image" width="35px" height="35px" mt={0} />
    <Typography 
      variant="caption1" 
      // component="div" 
      sx={{ 
        display: "block", 
        fontSize: { xs: '15px', sm: "15px", md: "20px" }, 
        marginTop: { xs: "0px", md: "5px", sm: "10px" }, 
        marginBottom: { xs: '0px', sm: '8px', md: "10px" }, 
        color: "#363636" 
      }}
    >
      Actimize
    </Typography>
  </Grid>

  {isMobile ? (
      <Grid item>
        <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Grid>
    ) : (
  <Grid 
    item 
    sx={{
      // order: { xs: 3, sm: 2 },
      borderRadius: "130px",
      paddingY: 1.5,
      paddingX: 1,
      backgroundColor: 'rgba(238, 238, 238, 0.6)',
      backdropFilter: isScrolled ? 'blur(5px)' : 'none', 
      position: "relative",
      display: {xs:"none",sm:"flex"}, 
      gap: { xs: 3, sm: 1, md: 4 },
      justifyContent: 'space-between',
      alignItems:"center",
      height:"54px",
    }}
  >
    {links.map((link) => (
      <NavLink
        key={link.name}
        to={link.href}
        style={({ isActive }) => ({
          color: isActive ? 'white' : 'black',
          textDecoration: 'none',
          cursor: 'pointer',
          backgroundColor: isActive ? '#FF5029' : "",
          padding: {xs:2,md:4},
          borderRadius: "150px",
          display: "flex",
          alignItems: 'center',
          height: '100%',
          fontWeight:700,
          fontSize:{xs:"6px",md:"18px"}
        })}
        className="custom-navlink"
        onClick={() => handleLinkClick(link.name)}
      >
        <Typography variant='caption2' sx={{marginTop:1,paddingX:{sm:1,md:2}}}>
        {link.name}</Typography>
      </NavLink>
    ))}
  </Grid>)}
</Grid>


        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerLinks}
        </Drawer>
    </>
  );
};

export default NavbarComponent;
