import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay

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
  return (
    <Grid container sx={{ mt: '160px', height: '500px' }}>
      {/* Left Static Content */}
      <Grid item xs={12} md={6} lg={7}>
        <Box
          sx={{
            padding: '32px',
            backgroundColor: '#f9f9f9',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Why Businesses Choose Actimize
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Our exceptional team delivers tailored solutions to meet your unique needs, ensuring your success in a competitive marketplace.
          </Typography>
        </Box>
      </Grid>

      {/* Right Vertical Swiper */}
      <Grid item xs={12} md={6} lg={5} sx={{ mt: '50px',maxWidth:'400px' }}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          direction={'vertical'}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          modules={[ Autoplay]} // Add Autoplay module
          style={{ height: '350px' }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                
             
                   height:'auto',
               
                  border:'1px solid #FFE4BB',
                 
                }}
              >
                 <Box
                  component="img"
                  src='../assets/images/verticalSwiper1.svg'
                  alt={`${testimonial.author}'s image`}
                  sx={{
                    width: '27px',
                    height: '30px',
                  
                    mb: 2,
                  }}
                />
                <Typography></Typography>
                <Typography
                 sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'15px' ,lg: '18px' }, lineHeight: { xs: '20px',md:'20px', lg: '28px' }, color: '#6A6A6A', }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                   
                    mt: 2,
                  }}
                >
                  <Avatar sx={{color:'black', width: 48, height: 48, mr: 2 }}>
                    {/* {testimonial.author[0]} */}
                  </Avatar>
                  <Box>
                    <Typography    sx={{  fontFamily: "'Ruwudu'", fontWeight: '600', fontSize: { xs: '15px', sm: '15px',md:'15px' ,lg: '18px' }, lineHeight: { xs: '20px',md:'20px', lg: '28px' }, color: '#363636', }}>
                      {testimonial.author}
                    </Typography>
                    <Typography  sx={{  fontFamily: "'Ruwudu'", fontWeight: '500', fontSize: { xs: '15px', sm: '15px',md:'15px' ,lg: '14px' }, lineHeight: { xs: '20px',md:'20px', lg: '20px' }, color: '#363636', }}>
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
