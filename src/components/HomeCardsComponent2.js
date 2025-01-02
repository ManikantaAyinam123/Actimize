import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Grid } from "@mui/material";

const features = [
  {
    image: "../assets/images/Icon5.svg", // Replace with your image URLs
    title: "Smart Code Optimization",
    description: "AI helps optimize code for better performance and efficiency.",
  },
  {
    image: "../assets/images/Icon5.svg",
    title: "Automated Testing",
    description: "Automated testing powered by AI reduces errors and speeds up delivery.",
  },
  {
    image: "../assets/images/Icon5.svg",
    title: "Feature Discovery",
    description: "AI-driven insights help identify innovative features to enhance UX.",
  },
  {
    image: "../assets/images/Icon5.svg",
    title: "Simplified Workflows",
    description: "Reducing repetitive tasks with automated solutions for faster progress.",
  },
  {
    image: "../assets/images/Icon5.svg",
    title: "Feature Discovery",
    description: "AI-driven insights help identify innovative features to enhance UX.",
  },
  {
    image: "../assets/images/Icon5.svg",
    title: "Simplified Workflows",
    description: "Reducing repetitive tasks with automated solutions for faster progress.",
  },
];

export default function HomeCardsComponent2() {
  const theme = useTheme();
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    
    
    
    }}
  >
    <Box sx={{  width: '90%',backgroundColor: "#f9fafb", textAlign: "center" , mt: { xs: '70px', md: '160px' }}}>
      {/* Title */}
      <Typography  sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '40px' }, lineHeight: { xs: '30px', md: '64px' }, color: '#363636', }}>
        Redefining Web & Mobile{" "}
        <span style={{ color: theme.palette.background.default,  fontFamily: "'ADLaM Display',serif", }}>
          Development with AI
        </span>
      </Typography>
      <Typography  sx={{ mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '18px' }, lineHeight: { xs: '20px', md: '30px' }, color: '#363636', }}>
        AI plays a pivotal role in modern development, driving innovation and efficiency at every stage.
      </Typography>

      {/* Features */}

      <Grid container spacing={4} justifyContent="center" sx={{mt:'20px'}}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "32px",
                // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                border:'1px solid #D9D9D9',
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {/* Image container */}
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  position: "absolute",
                  top: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border:'1px solid #D9D9D9',
                  padding:'5px'
                }}
              />
              {/* Title */}
              <Typography sx={{ ml:'8px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'24px', }, lineHeight: { xs: '20px',md:'30px' }, color: '#363636', }}>
                {feature.title}
              </Typography>
              {/* Description */}
              <Typography sx={{  mx: "auto", maxWidth:'280px', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px',md:'16px'  }, lineHeight: { xs: '20px',md:'28px' }, color: '#6A6A6A', }}>
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
