import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

// Features array with image URLs
const features = [
  {
    image: '../assets/images/Icon1.svg', // Replace with your actual image path
    title: 'Web Development',
    description: 'Fast, scalable web apps delivering seamless experiences on any device.',
  },
  {
    image: '../assets/images/Icon4.svg',
    title: 'Mobile Apps',
    description: 'Mobile apps for iOS and Android with smooth, intuitive experiences.',
  },
  {
    image: '../assets/images/Icon2.svg',
    title: 'Low-Code/No-Code',
    description: 'Accelerate with low-code/no-code for quick builds and easy updates.',
  },
  {
    image: '../assets/images/Icon3.svg',
    title: 'AI-Driven',
    description: 'AI optimizes code, automates testing, and ensures faster, bug-free delivery.',
  },
];

export default function HomeCardsComponent() {
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
      <Box
        sx={{
          width: '90%',
          textAlign: 'center',
          mt: { xs: '70px', md: '160px' },
        }}
      >
        {/* Decorative Background Images */}
        <Box
          component="img"
          src="../assets/images/orange2.svg"
          alt="Background SVG"
          sx={{
            position: 'absolute',
            top: '50px',
            left: '-180px',
            width: '500px',
            height: '500px',
            zIndex: -1,
          }}
        />
        <Box
          component="img"
          src="../assets/images/orange.svg"
          alt="Background SVG"
          sx={{
            position: 'absolute',
            top: '100px',
            right: { xs: '0px' },
            width: 'auto',
            height: '800px',
            zIndex: -1,
          }}
        />

        {/* Section Title */}
        <Typography
          sx={{
            fontFamily: "'ADLaM Display', serif",
            fontWeight: '400',
            fontSize: { xs: '15px', sm: '15px', md: '40px' },
            lineHeight: { xs: '30px', md: '64px' },
            color: '#363636',
          }}
        >
          How We <span style={{ color: theme.palette.background.default }}>Help?</span>
        </Typography>
        <Typography
          sx={{
            mt: { xs: '5px', sm: '4px' },
            fontFamily: "'Ruwudu'",
            fontWeight: '400',
            fontSize: { xs: '15px', sm: '15px', md: '18px' },
            lineHeight: { xs: '20px', md: '30px' },
            color: '#363636',
          }}
        >
          From apps to AI, we deliver innovative and scalable development solutions.
        </Typography>

        {/* Feature Cards */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: '20px' }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '32px',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={feature.image}
                  alt={feature.title}
                  sx={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto',
                    mb: 2,
                  }}
                />

                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: "'ADLaM Display', serif",
                    fontWeight: '400',
                    fontSize: { xs: '15px', sm: '15px', md: '24px' },
                    lineHeight: { xs: '30px', md: '30px' },
                    color: '#363636',
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    mt: { xs: '10px', sm: '10px' },
                    fontFamily: "'Ruwudu'",
                    fontWeight: '400',
                    fontSize: { xs: '15px', sm: '15px', md: '16px' },
                    lineHeight: { xs: '20px', md: '20px' },
                    color: '#363636',
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
