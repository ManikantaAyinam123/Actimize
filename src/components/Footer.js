import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2c2c2c',
        color: 'white',
        pt: 4,
        pb: 2,
      }}
    >
      <Grid container spacing={4} sx={{ px: 4 }}>
        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 ,color:'#FF8C33'}}>
            QUICK LINKS
          </Typography>
          <Box>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Hire Developers
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Our Works
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,color:'#FF8C33' }}>
            SERVICES
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Web App Development
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Mobile App Development
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Low-Code/No-Code Development
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Quality Assurance
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Cloud Services
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              UI/UX Designing
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Business Solutions
            </Typography>
          </Box>
        </Grid>

        {/* Technologies Section */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,color:'#FF8C33' }}>
            TECHNOLOGIES
          </Typography>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              React.js
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              React Native
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Ruby On Rails
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Manual QA
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              MERN
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Python
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Angular
            </Typography>
            </Box>
            <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              React.js
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              React Native
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Ruby On Rails
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Manual QA
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              MERN
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Python
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Angular
            </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={6} md={4.5} sx={{padding:'20px 0px 20px 50px',border:'1px solid #FFFFFF'}}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2,color:'#FF8C33' }}>
            CONTACT US
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email: contact@actimize.in
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            For Careers: hr@actimize.in
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Phone: +91 6305196668
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Address: D. No. 4-7-1, Tarvanipeta, Mandapeta, Andhra Pradesh, India - 533308
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          my: 3,
          mx: 4,
        }}
      ></Box>

      {/* Logo and Certifications Section */}
      <Grid container alignItems="center" justifyContent="space-between" sx={{ px: 4, pb: 2 }}>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Actimize
          </Typography>
          <Typography variant="body2">Let's transform the digital world together.</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          {/* Add certification images here */}
          <Box display="flex" justifyContent="center" gap={2}>
            <img src="/path-to-startup-india.png" alt="Startup India" style={{ width: '40px', height: '40px' }} />
            <img src="/path-to-msme.png" alt="MSME" style={{ width: '40px', height: '40px' }} />
            <img src="/path-to-iso.png" alt="ISO Certified" style={{ width: '40px', height: '40px' }} />
            <img src="/path-to-glassdoor.png" alt="Glassdoor Rating" style={{ width: '40px', height: '40px' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Typography variant="body2">© 2024 Actimize. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
