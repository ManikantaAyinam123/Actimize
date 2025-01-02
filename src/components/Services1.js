import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const Services1 = () => {
  const theme = useTheme();
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    
    
    }}
  >
    <Grid container sx={{ mt: '120px', justifyContent: 'center', width:'90%' }}>
      <Box
        component="img"
        src="../assets/images/orange2.svg"
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '-10px',
          left: '-180px',
          width: '500px',
          height: '500px',
          zIndex: -1,
        }}
      />
      <Box
        component="img"
        src="../assets/images/orange.svg"
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '80px',
          right: '0px',
          width: 'auto',
          height: '800px',
          zIndex: -1,

        }}
      />


      <Box
        component="img"
        src="../assets/images/orange2.svg"
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '900px',
          left: '-180px',
          width: '500px',
          height: '500px',
          zIndex: -1,
        }}
      />

      <Grid item sx={{ maxWidth: '1098px', textAlign: 'center' }}>
        {/* About Us Badge */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              px: 3,
              py: 1,
              backgroundColor: '#fff4e6', // Light orange background
              borderRadius: '24px', // Rounded corners
            }}
          >
            <Typography
              sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '15px', md: '20px' }, color: theme.palette.background.default, }}
            >
              We Offer
            </Typography>
          </Box>
        </Box>

        {/* Main Heading */}
        <Typography
          sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '35px', sm: '40px', md: '48px' }, lineHeight: { xs: '50px', md: '62px' }, color: '#363636', }}
        >

          Our Comprehensive  <span style={{ color: theme.palette.background.default }}>Services</span>
        </Typography>

        {/* Description */}
        <Typography
          sx={{ mt: '20px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '18px', md: '20px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#6A6A6A', }}
        >
          From intuitive designs to powerful applications, our services are crafted to empower your business with innovation and simplicity,
          ensuring a seamless experience every step of the way.
        </Typography>

      </Grid>
    </Grid>
    </Box>
  );
};

export default Services1;

