import React from "react";
import { Grid, Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { Email, Phone, AccessTime, LocationOn } from "@mui/icons-material";

const ContactUs4 = () => {
    return (
        <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        
        
        
        }}
      >
        <Box sx={{ padding: 2,width:'90%' }}>
            <Grid container spacing={2}>
                {/* Map Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 2,
                            overflow: "hidden",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.345261874062!2d81.9363147146239!3d16.86399248839388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a384230a3f58a99%3A0xb758e3cf6db94e1e!2sMandapeta%2C%20Andhra%20Pradesh%20533225%2C%20India!5e0!3m2!1sen!2sus!4v1690539308397!5m2!1sen!2sus"
                            style={{
                                width: '100%',
                                height: '100%',
                            }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                    </Box>
                </Grid>


                <Grid item xs={12} md={6} >
                    <Grid container  gap={3} >
                        <Grid item  xs={12} sm={5.5} sx={{ border: '1px solid #FFE4BB',borderRadius:'24px',padding:'28px 30px' ,gap:'10px'}}>
                            <Box sx={{ display: 'flex',gap:'10px' }}>
                                <Box
                                    component="img"
                                    src='../assets/images/contactus3.svg'
                                    alt='jhjh'
                                    sx={{
                                        width: { xs: "20px", sm: "27px" },
                                        height: { xs: "25px", sm: "33px" },
                                        objectFit: "contain",
                                        maxWidth: "100%",
                                    }}
                                />
                                <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '20px',lg:'24px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#363636', }}>
                                Located at
                                </Typography>

                            </Box>
                            <Typography  sx={{maxWidth:'130px',justifyContent:'center',mt: '10px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '13px', sm: '15px', md: '20px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#6A6A6A', }}> D. No. 4-7-1, 
                             Tarvanipeta, Mandapeta, Andhra Pradesh, India - 533308</Typography>

                       

                    </Grid>
                    <Grid item xs={12} sm={5.5}  sx={{ }}>
                        <Box sx={{border: '1px solid #FFE4BB',padding:'24px 38px',borderRadius:'24px' }}>
                        <Box sx={{ display: 'flex',gap:'10px' }}>
                                <Box
                                    component="img"
                                    src='../assets/images/contactus4.svg'
                                    alt='jhjh'
                                    sx={{
                                        width: { xs: "20px", sm: "27px" },
                                        height: { xs: "25px", sm: "33px" },
                                        objectFit: "contain",
                                        maxWidth: "100%",
                                    }}
                                />
                                <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '24px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#363636', }}>
                                Email
                                </Typography>

                            </Box>
                            <Typography sx={{mt: '10px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '13px', sm: '15px', md: '18px',lg:'20px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#6A6A6A', }}>contact@actimize.in</Typography>
                        </Box>
                        <Box sx={{border: '1px solid #FFE4BB',padding:'24px 38px',borderRadius:'24px' ,mt:'24px'}}>
                        <Box sx={{ display: 'flex',gap:'10px' }}>
                                <Box
                                    component="img"
                                    src='../assets/images/contactus5.svg'
                                    alt='jhjh'
                                    sx={{
                                        width: { xs: "20px", sm: "27px" },
                                        height: { xs: "25px", sm: "33px" },
                                        objectFit: "contain",
                                        maxWidth: "100%",
                                    }}
                                />
                                <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '24px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#363636', }}>
                                Phone
                                </Typography>

                            </Box>
                            <Typography sx={{mt: '10px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '13px', sm: '15px', md: '16px',lg:'20px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#6A6A6A', }}>+91 6305196668</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={11.4}>
                    <Box sx={{border: '1px solid #FFE4BB',padding:'24px 20px',borderRadius:'24px' }}>
                        <Box sx={{ display: 'flex', gap:'10px'}}>
                                <Box
                                    component="img"
                                    src='../assets/images/contactus6.svg'
                                    alt='jhjh'
                                    sx={{
                                        width: { xs: "20px", sm: "27px" },
                                        height: { xs: "25px", sm: "33px" },
                                        objectFit: "contain",
                                        
                                    }}
                                />
                                <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '18px', sm: '20px', md: '24px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#363636', }}>
                                Open Hours
                                </Typography>

                            </Box>
                            <Typography sx={{mt: '10px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '13px', sm: '15px', md: '20px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#6A6A6A', }}>MONDAY - SATURDAY : 9AM - 6PM</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
    </Box >
    </Box>
  );
};

export default ContactUs4;
