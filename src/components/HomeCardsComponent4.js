import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

// Features array with image URLs
const features = [
    {
      value: '20+',
      image: '../assets/images/com41.svg', // Replace with your actual image paths
      title: 'Satisfied Clients',
    },
    {
      value: '50+',
      image: '../assets/images/com42.svg',
      title: 'Completed Projects',
    },
    {
      value: '10M+',
      image: '../assets/images/com43.svg',
      title: 'Happy Users',
    },
    {
      value: '99%',
      image: '../assets/images/com44.svg',
      title: 'Client Satisfaction',
    },
    {
      value: '80%',
      image: '../assets/images/com45.svg',
      title: 'Client Retention',
    },
  ];

export default function HomeCardsComponent4() {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: 'center', backgroundColor: '#FFFFFF', mt: { xs: '70px', md: '160px' } }}>
      {/* Section Title */}
      <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '40px' }, lineHeight: { xs: '30px', md: '64px' }, color: '#363636', }}>
      Our Success <span style={{ color: theme.palette.background.default }}>Stories </span>
      </Typography>
      <Typography sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '18px' }, lineHeight: { xs: '20px', md: '30px' }, color: '#363636', }}>
      We’re proud to turn ideas into impactful solutions!
      </Typography>

      {/* Feature Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{mt:'20px'}}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: '24px',
                border: '1px solid #FFE4BB',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
              }}
            >
              {/* Value */}
              <Typography
                sx={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#363636',
                  mb: 1,
                }}
              >
                {feature.value}
              </Typography>

              {/* Image */}
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>

            
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: '18px',
                  height: '20px',
                
           
                }}
              />

              {/* Title */}
              <Typography
              
              sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'15px', lg: '16px' }, lineHeight: { xs: '20px',md:'20px', lg: '30px' }, color: '#6A6A6A', }}
              >
                {feature.title}
              </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

