import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const logos = [
  { image: '../assets/images/Lumirise.svg' },
  { image: '../assets/images/builder.ai.svg'},
  { image: '../assets/images/blockchain.svg' },
  { image: '../assets/images/localDhukan.svg'},
  { image: '../assets/images/aqualab.svg'},
  { image: '../assets/images/Lumirise.svg' },
  { image: '../assets/images/builder.ai.svg'},
  { image: '../assets/images/blockchain.svg' },
  { image: '../assets/images/localDhukan.svg'},
  { image: '../assets/images/aqualab.svg'},
 
];

export default function LogosSliderComponent() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        mt: { xs: '250px', md: '160px' },
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontFamily: "'ADLaM Display',serif",
          fontWeight: '400',
          fontSize: { xs: '15px', sm: '15px', md: '40px' },
          lineHeight: { xs: '30px', md: '64px' },
          color: '#363636',
        }}
      >
        Our Valued <span style={{ color: theme.palette.background.default }}>Clients</span>
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
        Helping businesses across industries achieve their goals with innovative, reliable solutions.
      </Typography>

      {/* Swiper Component */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0, // No delay for continuous scrolling
          disableOnInteraction: false, // Ensure autoplay continues after interaction
        }}
        speed={4000} // Adjust the speed for smoother continuous scrolling
        loop={true} // Infinite scrolling
        loopAdditionalSlides={5} 
        breakpoints={{
            320:{slidesPerView: 2 },
          640: { slidesPerView: 3},
          1024: { slidesPerView: 5 },
        }}
        style={{ marginTop: '20px' }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
          
             <Box
                component="img"
                src={logo.image}
               sx={{
                  width: '150px',
                  height: '150px',
                }}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
