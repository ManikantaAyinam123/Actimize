


import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const logos = [
  { image: '../assets/images/servicesslider1.svg' },
  { image: '../assets/images/servicesslider2.svg'},
  { image: '../assets/images/servicesslider3.svg' },
  { image: '../assets/images/servicesslider4.svg'},
  { image: '../assets/images/servicesslider5.svg'},
  { image: '../assets/images/servicesslider6.svg'},
  { image: '../assets/images/servicesslider7.svg'},
  { image: '../assets/images/servicesslider8.svg'},
  { image: '../assets/images/servicesslider9.svg'},
  { image: '../assets/images/servicesslider10.svg'},
  { image: '../assets/images/servicesslider1.svg' },
  { image: '../assets/images/servicesslider2.svg'},
  { image: '../assets/images/servicesslider3.svg' },
  { image: '../assets/images/servicesslider2.svg'},
  { image: '../assets/images/servicesslider3.svg' },
  { image: '../assets/images/servicesslider4.svg'},
  { image: '../assets/images/servicesslider5.svg'},
  { image: '../assets/images/servicesslider6.svg'},
  { image: '../assets/images/servicesslider7.svg'},
  { image: '../assets/images/servicesslider8.svg'},
  
];

export default function Services3() {
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
        
        Skilled Developers in Diverse  <span style={{ color: theme.palette.background.default }}>Technologies</span>
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
        Our team excels in leveraging various technologies to craft outstanding solutions.
      </Typography>

      {/* Swiper Component */}
      <Swiper
         modules={[Autoplay]}
         slidesPerView={3}
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
          1024: { slidesPerView: 10},
        }}
        style={{ marginTop: '20px' }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
          
             <Box
                component="img"
                src={logo.image}
               sx={{
                  width: '100px',
                  height: '100px',
                }}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
