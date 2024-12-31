import React from 'react';
import { Grid, Box, Typography, Avatar, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay
import Theme from '../../Theme';
 
 
const testimonials = [
  {
    quote: "“We are incredibly grateful to Actimize for their exceptional work. They took the time to understand our unique needs and delivered a custom solution that sets us apart from our competitors. It has become a valuable asset to our business.”",
    author: "Jacob",
    role: "CEO & Co-Founder",
  },
  {
    quote: "Their solutions have completely transformed our business. The team was professional, attentive, and delivered beyond our expectations.",
    author: "Sophia",
    role: "Marketing Director",
  },
  {
    quote: "Actimize's dedication to quality and innovation has helped us achieve remarkable success. We couldn't be happier with their work.",
    author: "Liam",
    role: "CTO",
  },
];
 
const HomeVerticalSwiperComponent = () => {
  const theme =useTheme();
  return (
    <Grid container sx={{ mt: '160px', height: 'auto' }}>
      {/* Left Static Content */}
      <Grid item xs={12} md={6} lg={7} gap={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
          sx={{
           
            backgroundColor: '#ffffffff',
            height: '100%',
            width:'100%',
            marginBottom: '16px',
           
          }}
        >
          <img
            src='../assets/images/Frame_123.svg'
            alt="Woman with folder"
            style={{
             height: '100%',
             width: '80%',
             
             
              display: 'flex',
              justifyContent: 'center',margin:'auto', textAlign:'center'
            }}
          />
        </Box>
      </Grid>
      {/* <Grid item xs={12} md={6} lg={7}>
        <Box
          sx={{
           
            backgroundColor: '#f9f9f9',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            border:'1px solid black'
          }}
        >
          <img
            src='../assets/images/Frame_123.svg'
            alt="Woman with folder"
            style={{
              position: 'absolute',
              top: '-50px',
              right: 0,
              width: '50%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
          <Box sx={{padding:'100px',border:'1px solid yellow',backgroundColor:theme.palette.background.border}}>
          <Typography variant="h5" sx={{
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#FF5733',
            padding: '8px 16px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            Testimonials
          </Typography>
          <Typography variant="h4" sx={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '16px'
          }}>
            Why Businesses Choose Actimize
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Our exceptional team delivers tailored solutions to meet your unique needs, ensuring your success in a competitive marketplace.
          </Typography>
          </Box>
        </Box>
      </Grid> */}
 
      {/* Right Vertical Swiper */}
      <Grid item xs={12} md={6} lg={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          direction={'vertical'}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[Autoplay]} // Add Autoplay module
          style={{ height: '350px' , display: 'flex', justifyContent: 'end',alignItems: 'center',}}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '24px',
                 
                  display: 'flex',
                  flexDirection: 'column',
                 
                  border: '1px solid #FFE4BB',
                }}
              >
                <Box
                  component="img"
                  src="../assets/images/verticalSwiper1.svg"
                  alt={`${testimonial.author}'s image`}
                  sx={{ width: '27px', height: '30px', mb: 2 }}
                />
                <Typography></Typography>
                <Typography
                  sx={{
                    mt: { xs: '5px', sm: '4px' },
                    fontFamily: "'Ruwudu'",
                    fontWeight: '400',
                    fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '18px' },
                    lineHeight: { xs: '20px', md: '20px', lg: '28px' },
                    color: '#6A6A6A',
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', mt: 2 }}>
                  <Avatar sx={{ color: 'black', width: 48, height: 48, mr: 2 }}>
                    {/* {testimonial.author[0]} */}
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "'Ruwudu'",
                        fontWeight: '600',
                        fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '18px' },
                        lineHeight: { xs: '20px', md: '20px', lg: '28px' },
                        color: '#363636',
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Ruwudu'",
                        fontWeight: '500',
                        fontSize: { xs: '15px', sm: '15px', md: '15px', lg: '14px' },
                        lineHeight: { xs: '20px', md: '20px', lg: '20px' },
                        color: '#363636',
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};
 
export default HomeVerticalSwiperComponent;