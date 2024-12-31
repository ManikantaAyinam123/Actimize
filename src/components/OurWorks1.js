import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const OurWorks1 = () => {
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
              backgroundColor: '#fff4e6', 
              borderRadius: '24px', 
            }}
          >
            <Typography
             sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '15px', md: '20px' }, color: theme.palette.background.default, }}
            >
            Our Works
            </Typography>
          </Box>
        </Box>

        {/* Main Heading */}
        <Typography
      sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '35px', sm: '40px', md: '48px' }, lineHeight: { xs: '50px', md: '62px' }, color: '#363636', }}
        >
            
            Explore Our   <span style={{ color:theme.palette.background.default }}>Work</span>
        </Typography>

        {/* Description */}
        <Typography
           sx={{maxWidth:'610px',mt:'20px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '18px', md: '20px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#6A6A6A', }}
        >
         Crafting exceptional web and mobile experiences. Discover how we blend innovation, design, and technology to deliver impactful solutions.
        </Typography>
   
      </Grid>
    </Grid>
  );
};

export default OurWorks1;

