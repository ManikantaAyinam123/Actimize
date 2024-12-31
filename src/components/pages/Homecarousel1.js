import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Typography, Button, useTheme } from '@mui/material';

export default function Homecarousel1() {
    const theme =useTheme();
  const slides = [
    {
      title: 'Expert Web & Mobile App Development',
      description: 'Transform your digital presence with custom web and mobile apps built for success. We offer end-to-end services, from app development to UI/UX design, delivering solutions that make an impact.',
      buttonText: "Let's Talk",
      imgSrc: '../assets/images/Swiper1.svg',
    },
    {
        title: 'Hire Dedicated Developers',
        description: 'Expand your team with top developers from our company. We provide skilled professionals who can seamlessly integrate with your team and meet all your project needs efficiently.',
        buttonText: "Hire Now!",
        imgSrc: '../assets/images/Swiper2.svg',
      },
      {
        title: 'Drive Business Growth with Innovative Solutions',
        description: "Whether you're launching a new business or enhancing an existing one, our team helps turn your ideas into impactful solutions that drive growth and success.",
        buttonText: "Get in touch",
        imgSrc: '../assets/images/Swiper3.svg',
      },
  ];

  return (
    <Box sx={{ backgroundColor: '#FFFFFF',mt:{xs:'70px',md:'160px' }}}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-swiper"
        style={{
          '--swiper-navigation-color': '#FF5722',
          '--swiper-pagination-color': '#FF5722',
          '--swiper-pagination-bullet-inactive-color': '#ccc',
          '--swiper-pagination-bullet-inactive-opacity': '0.6',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
             
                gap: '20px',
              }}
            >
              {/* Text Content */}
              <Box
                sx={{
                  flex: 1,
                  textAlign: { xs: 'center', md: 'left' },
                
                }}
              >
                <Typography sx={{ ml:{sm:'40px',md:'0px'},color:'#363636',fontSize:{xs:'15px',sm:'30px',md:'40px'},fontWeight:'400',lineHeight:{xs:'20px',sm:'40px',md:'64px'},maxWidth:'500px', fontFamily: '"ADLaM Display", serif'}}>
                  {slide.title}
                </Typography>
                <Typography sx={{color:'#6A6A6A',mt:'20px',fontSize:{xs:'12px',md:'16px'},fontWeight:'400',lineHeight:{xs:'20px',md:'30px'},maxWidth:'600px', fontFamily: '"Ruwudu",serif'}}>
                  {slide.description}
                </Typography>
                <Button
                  
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: '16px',
                    textTransform: 'none',
                    padding: {xs:'2px 20px',md:'5px 40px'},
                    fontFamily: '"ADLaM Display", serif',
                    fontSize:'16px',
                    fontWeight:'400',
                    color:'#FFFFFF',
                    mt:{xs:'8px',sm:'10px'}

                  }}
                >
                  {slide.buttonText}
                </Button>
              </Box>

              {/* Image Content */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent:{xs:'center',md:'flex-end'},
                  alignItems: 'center',
                 
                }}
              >
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
