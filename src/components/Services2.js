import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const services = [
  {
    title: "Web App Development",
    description:
      "Building feature-rich, scalable web applications that drive growth and ensure seamless integrations for enhanced performance. Our expertise includes creating tailored solutions that balance security and usability while leveraging AI-driven systems to personalize user experiences and automate operations.",
    image: "../assets/images/services1.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "Designing and creating intuitive mobile apps for iOS and Android platforms that cater to modern needs. Adding smart features like AI-powered chatbots, voice recognition, and real-time analytics, we ensure your apps deliver unmatched engagement and adaptability to user behavior.",
    image: "../assets/images/services2.svg",
  },
  {
    title: "Low-Code/No-Code Development",
    description:
      "Simplifying app creation using platforms that reduce complexity while accelerating results. We focus on implementing advanced workflows backed by AI-based optimization to ensure efficiency, high-quality delivery, and reduced time-to-market.",
    image: "../assets/images/services3.svg",
  },
  {
    title: "Quality Assurance",
    description:
      "Performing end-to-end testing to deliver software with superior reliability and performance. Conducting meticulous testing to ensure flawless software delivery. Using AI-driven systems, we provide precision and enhanced coverage, reducing risks and ensuring seamless user experiences.",
    image: "../assets/images/services4.svg",
  },
  {
    title: "Cloud Services",
    description:
      "Helping businesses transition to the cloud with advanced solutions that prioritize security and reliability. Our AI-powered analytics enhance resource optimization, ensuring that operations run smoothly and efficiently. We enable seamless scalability for evolving business needs.",
    image: "../assets/images/services5.svg",
  },
  {
    title: "UI/UX Designing",
    description:
      "We create user-centric UI/UX designs that not only look visually appealing but also enhance usability and overall customer satisfaction. Our design process involves wireframing, prototyping, and user testing to ensure that the final product is both functional and aesthetically pleasing across different devices.",
    image: "../assets/images/services6.svg",
  },
  {
    title: "Business Solutions",
    description:
      "We offer innovative business solutions that streamline operations, improve decision-making, and drive growth. Our solutions are designed to address the unique challenges of your business, enhancing productivity, automation, and data-driven insights to support strategic goals.",
    image: "../assets/images/services7.svg",
  },
];

const Services2 = () => {
    const theme =useTheme();
  return (
   
      <Grid container spacing={4} justifyContent="center" sx={{mt:'70px'}}>
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: '24px',
                border: `1px solid ${theme.palette.background.border}`,
                textAlign: "center", 
                padding: {
                  xs: '16px 24px', 
                  sm: '18px 32px', 
                  md: '20px 40px', 
                  lg: '24px 48px', 
                },
              }}
            >
              <Typography  sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '24px' }, lineHeight: { xs: '20px',sm:'25px', md: '31px' }, color: '#363636', }}>
                {service.title}
              </Typography>
              <Box
                component="img"
                src={service.image}
                alt={service.title}
                sx={{
                    width: {
                      xs: "100%",    // Full width for extra small screens
                      sm: "80%",     // 80% width for small screens
                      md: "360px",   // Fixed width for medium and larger screens
                    },
                    height: "auto",  // Maintain aspect ratio
                    mb: 2,
                  }}
              />
              <Typography  sx={{ fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '18px',sm:'24px', md: '28px' }, color: '#6A6A6A', }}>
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
  
  );
};

export default Services2;
