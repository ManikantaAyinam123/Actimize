import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const AboutUs1 = () => {
    const theme =useTheme();
  return (
    <Grid container sx={{ mt: '120px', justifyContent: 'center' }}>
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
              About Us
            </Typography>
          </Box>
        </Box>

        {/* Main Heading */}
        <Typography
      sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '35px', sm: '40px', md: '48px' }, lineHeight: { xs: '50px', md: '62px' }, color: '#363636', }}
        >
          Meet <span style={{ color:theme.palette.background.default }}>Actimize</span>
        </Typography>

        {/* Description */}
        <Typography
           sx={{mt:'20px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '18px', md: '20px' }, lineHeight: { xs: '30px', md: '36px' }, color: '#6A6A6A', }}
        >
          Since 2021, Actimize has been turning ideas into innovative digital solutions. Specializing in web and mobile development, we use the latest technology and AI-powered tools to streamline processes, enhance user experiences, and drive business growth. We focus on creating seamless, user-first designs and building long-term partnerships. Your success is at the core of everything we do.
        </Typography>

        {/* Transform Message */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
          {/* Left Image */}
          <Box
            component="img"
            src="../assets/images/quotation2.svg" // Replace with the path to your left image
            alt="Left Decor"
            sx={{
                height: { xs: '20px', sm: '25px', md: '28px' }, // Adjust height for breakpoints
                width: { xs: '20px', sm: '25px', md: '28px' },  // Adjust width for breakpoints
                mr: 2, // Keep margin-left constant
              }}
          />

          {/* Text */}
          <Typography
            sx={{
              fontFamily: "'ADLaM Display',serif",
              fontWeight: '400',
              fontSize: { xs: '20px', sm: '28px', md: '30px' },
              lineHeight: { xs: '25px',am:'35' ,md: '40px' },
              color: theme.palette.background.default, // Adjust color to your theme
              textAlign: 'center',
            }}
          >
            Let's transform the digital world together.
          </Typography>

          {/* Right Image */}
          <Box
            component="img"
            src="../assets/images/quotation1.svg" // Replace with the path to your right image
            alt="Right Decor"
            sx={{
                height: { xs: '20px', sm: '25px', md: '28px' }, // Adjust height for breakpoints
                width: { xs: '20px', sm: '25px', md: '28px' },  // Adjust width for breakpoints
                ml: 2, 
              }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs1;
