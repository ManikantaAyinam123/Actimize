import React from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function ContactUs2() {
    const theme = useTheme();

    const contactCards = [
        {
            title: "For Careers",
            description: "Looking to join our team? Email us your resume at:",
            image: "../assets/images/contactus1.svg",
            buttons: [
                {
                    text: "hr@actimize.in",
                    icon: <EmailIcon />,
                    color: theme.palette.error.main,
                },
            ],
        },
        {
            title: "Get in Touch",
            description: "Reach out directly through WhatsApp or email.",
            image: "../assets/images/contactus2.svg",
            buttons: [
                {
                    text: "WhatsApp us",
                    icon: <WhatsAppIcon />,
                    color: "#25D366",
                },
                {
                    text: "Email us",
                    icon: <EmailIcon />,
                    color: theme.palette.error.main,
                },
            ],
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
        <Box
            sx={{
                p: 3,

                borderRadius: "24px",
                mt:'25px',
                width:'90%',

            }}
        >
             <Box
        component="img"
        src="../assets/images/orange2.svg" 
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '-80px',  
          left: '-180px', 
          width: '500px', 
          height: '500px', 
          zIndex: -1, 
        }}
      />
       <Box
        component="img"
        src="../assets/images/orange.svg" 
        alt="Top Left SVG"
        sx={{
          position: 'absolute',
          top: '-400px',  
          right: '0px', 
          width: 'auto', 
          height: '800px', 
          zIndex: -1, 
         
        }}
      />
            <Grid container spacing={2}>
                {contactCards.map((card, index) => (
                    <Grid item xs={12}  sm={6} key={index}>
                        <Box
                            sx={{
                                p: 2,
                                border: "1px solid #FFDAB9",
                                borderRadius: "24px",
                                backgroundColor: "#FFF",
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: { xs: "column", md: "column",lg:'row' },
                            }}
                        >
                            <Box sx={{ maxWidth: '205px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                                    <Box
                                        component="img"
                                        src={card.image}
                                        alt={card.title}
                                        sx={{
                                            width: { xs: "20px", sm: "27px" },
                                            height: { xs: "25px", sm: "33px" },
                                            objectFit: "contain",
                                            maxWidth: "100%",
                                        }}
                                    />
                                    <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '24px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#363636', }}>
                                        {card.title}
                                    </Typography>

                                </Box>

                                <Typography sx={{ mt: '10px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '13px', sm: '15px', md: '18px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#6A6A6A', }}>
                                    {card.description}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: { xs: "column",sm:"row", md: "row",lg:'column' }, gap: 2, }}>
                                {card.buttons.map((button, btnIndex) => (
                                    <Button
                                        key={btnIndex}

                                        startIcon={button.icon}
                                        sx={{
                                            backgroundColor: button.text === "WhatsApp us" ? "#25D366" : "#FEF3E2", 
                                            color: button.text === "WhatsApp us" ? "#fff" : "#FF5029", 
                                            textTransform: "none",
                                            padding: {
                                                xs: '8px 10px',   
                                                sm: '10px 20px',  
                                                md: '10px 20px', 
                                                md: '10px 24px', 
                                            },
                                            borderRadius:'16px',
                                            fontFamily: "'ADLaM Display',serif", fontSize: { xs: '15px', sm: '10px', md: '15px',lg:'18px' }, lineHeight: { xs: '20px', md: '20px',lg:'20px' }, 
                                        }}
                                    >
                                        {button.text}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </Box>
    );
}
