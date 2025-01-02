import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

const HomeCardsComponent3 = () => {
    const theme =useTheme();
  const features = [
    {
      title1: "We",
      title2: "Are?",
      description: "We’re tech experts creating smart digital solutions.",
      link: "/about", // Add link for navigation
    },
    {
      image: "../assets/images/Icon5.svg",
      title: "Rich in Experience",
      description: "Expertise to tackle any challenge.",
    },
    {
      image: "../assets/images/Icon5.svg",
      title: "Driven by Principles",
      description: "Upholding ethics in every aspect.",
    },
    {
      image: "../assets/images/Icon5.svg",
      title: "Budget-Friendly",
      description: "Quality solutions that fit your budget.",
    },
    {
      image: "../assets/images/Icon5.svg",
      title: "Top Talent",
      description: "Creative minds and industry leaders.",
    },
    {
      image: "../assets/images/Icon5.svg",
      title: "Quality & Security",
      description: "High standards and secure development.",
    },
  ];

  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    
    
    }}
  >
    <Grid container spacing={4} justifyContent="center" sx={{mt: { xs: '70px', md: '160px' ,width:'90%'}}}>
       <Box
        component="img"
        src="../assets/images/orange2.svg" 
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '0px',  
          left: '-180px', 
          width: '500px', 
          height: '600px', 
          zIndex: -1, 
        }}
      />
       <Box
        component="img"
        src="../assets/images/orange.svg" 
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '-250px',  
          right: {xs:'0px'},
          width: 'auto', 
          height: '500px', 
          zIndex: -1, 
         
        }}
      />
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "16px",
              display: "flex",
              alignItems: "center", // Align image and text vertically
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            {/* Image container */}
            {feature.image && (
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginRight: "16px", // Spacing between image and text
                }}
              />
            )}

            {/* Title with NavLink for first card */}
            <Box>
              {feature.title1 && feature.title2 ? (
                <Typography
                sx={{textAlign:'center', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'30px' ,lg: '40px' }, lineHeight: { xs: '30px',md:'30px', lg: '64px' }, color: '#363636', }}
                >
                  {feature.title1}
                  
                  <span style={{color:theme.palette.background.default,marginLeft:'4px'}}>{feature.title2}</span>
                </Typography>
              ) : (
                <Typography
                sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'15px', lg: '24px' }, lineHeight: { xs: '20px',md:'20px', lg: '30px' }, color: '#363636', }}
                >
                  {feature.title}
                </Typography>
              )}

              {/* Description */}
              <Typography sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'15px' ,lg: '18px' }, lineHeight: { xs: '20px',md:'20px', lg: '30px' }, color: '#363636', }}>
                {feature.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default HomeCardsComponent3;
