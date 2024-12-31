// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const drawerWidth = 240;
// const navItems = ['Home', 'Hire Developers', 'Our Works', 'About us', 'Services', 'Contact us'];

// function Navbar(props) {
//     const { window, onNavItemClick, selectedItem } = props; // Destructure onNavItemClick and selectedItem
//     const [mobileOpen, setMobileOpen] = React.useState(false);

//     const handleDrawerToggle = () => {
//         setMobileOpen((prevState) => !prevState);
//     };

//     const drawer = (
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//             {/* <Box
//                 component="img"
//                 src="assets/images/logo.png"
//                 alt="Logo Icon"
//                 sx={{ width: { xs: '30px', md: '60px' }, height: { xs: '20px', md: '60px' } }}
//             />
//             <Divider /> */}
//             <List>
//                 {navItems.map((item) => (
//                     <ListItem key={item} disablePadding>
//                         <ListItemButton
//                             sx={{
//                                 textAlign: 'center',
//                                 backgroundColor: selectedItem === item ? '#EEEEEE' : 'transparent', 
//                             }}
//                             onClick={() => onNavItemClick(item)}
//                         >
//                             <ListItemText primary={item} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{border:'1px solid black',}}>
          
//             <Box sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none', color: 'black',display:'flex',justifyContent:'space-between',padding:{xs:'20px 30px',sm:'10px 7px',md:'20px 20px'}}}>
          
//                     <IconButton

//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                     <Box
//                             component="img"
//                             src="../assets/images/logo.png"
//                             alt="Logo Icon"
//                             sx={{ width: { xs:'30px', md: '48px' }, height: { xs:'30px', md: '48px' }, }}
//                         />
//                         <Typography sx={{ fontFamily: "'ADLaM Display',serif",fontWeight:'400',fontSize:{xs:'20px',sm:'15px',md:'20px'},lineHeight:'27px'}}>Actimize</Typography>

//                     </Box>
                  
//                     <Box sx={{ display: { xs: 'none', sm: 'block' },alignContent:'center'}}>
//                         {navItems.map((item) => (
//                             <Button
//                                 key={item}
//                                 sx={{
//                                     color: selectedItem === item ? '#fff' : 'black',
//                                     backgroundColor: selectedItem === item ? '#FF5029' : 'transparent',
//                                     textTransform: 'none',
//                                     borderRadius: '20px',
//                                     padding: {sm:'4px 12px',md:'4px 15px'}, 
//                                     verticalAlign: 'middle',
//                                     fontSize:{xs:'18px',sm:'12px',md:'15px'},
//                                     fontWeight:'700',
                                  
                                  
//                                     '&:hover': {
//                                         backgroundColor: selectedItem === item ? 'theme.palette.background.default' : 'rgba(0, 0, 0, 0.1)',
//                                     },
//                                 }}
//                                 onClick={() => onNavItemClick(item)} 
//                             >
//                                 {item}
//                             </Button>
//                         ))}
//                     </Box>
             
//             </Box>
//             <nav>
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true,
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//             </nav>
//         </Box>
//     );
// }

// Navbar.propTypes = {
//     window: PropTypes.func,
//     onNavItemClick: PropTypes.func.isRequired, // Validate the prop type for onNavItemClick
//     selectedItem: PropTypes.string.isRequired, // Validate the selectedItem prop
// };

// export default Navbar;
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const links = [
  { name: 'Hire Developers', href: '/hire-developer' },
  { name: 'Our Works', href: '/our-work' },
  { name: 'About us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact us', href: '/contact-us' },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(null);
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setDrawerOpen(false);
  };

  const handleNavigate = () => {
    navigate('/')
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {links.map((link) => (
          <ListItem
            button
            key={link.href} 
            component={NavLink}
            to={link.href}
            onClick={() => handleLinkClick(link.name)}
            style={({ isActive }) => ({
             
              textDecoration: 'none',
              '&.Mui-selected': {
                backgroundColor: '#FFC700', 
              }
              
            })}
          >
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Use scroll trigger to detect scroll
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  React.useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: { xs: '90%', sm: '100%' },
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
          color: 'black',
          display: 'flex',
          justifyContent: { xs: 'space-between' },
          padding: { xs: '10px 20px', sm: '10px 7px', md: '12px 8px' },
          zIndex: 1100,
        }}
      >
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="../assets/images/logo.png"
            alt="Logo Icon"
            sx={{
              width: { xs: '30px', md: '48px' },
              height: { xs: '30px', md: '48px' },
              cursor:"pointer",
              
            }}
            onClick={()=>handleNavigate()}
          />
          <Typography
            sx={{
              fontFamily: "'ADLaM Display',serif",
              fontWeight: '400',
              fontSize: { xs: '15px', sm: '15px', md: '20px' },
              lineHeight: '27px',
            }}
          >
            Actimize
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, alignContent: 'center' }}>
  {links.map((item) => (
    <Button
      key={item.href}
      component={NavLink}
      to={item.href}
      sx={{
        color: 'black',
        textTransform: 'none',
        borderRadius: '20px',
        padding: { sm: '4px 12px', md: '4px 15px' },
        alignItems: 'center',
        fontSize: { xs: '18px', sm: '12px', md: '15px' },
        fontWeight: '700',
        '&.active': {
          color: '#fff',
          backgroundColor: '#FF5029',
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      }}
      onClick={() => setDrawerOpen(false)} // Handle drawer logic
      activeClassName="active" // This sets the 'active' class for NavLink
    >
      {item.name}
    </Button>
  ))}
</Box>

      </Box>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
  onNavItemClick: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

export default Navbar;


