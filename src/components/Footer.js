import React from 'react';
import { Box, Grid, Typography, Link, IconButton, useTheme } from '@mui/material';
import { LinkedIn, Facebook, Instagram } from '@mui/icons-material';
import { Icon } from "@iconify/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{

          top: 0,
          left: 0,
          width: '100%',
          mt: { xs: '50px' },

          height: {
            xs: '52px',
            sm: '100px',
            md: '100px',
            lg: '120px'
          },


        }}
      >

        <svg width="100%" height="100%" viewBox="0 0 2560 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2560 7.62939e-06C2231.63 7.62939e-06 2109.76 58.616 1653.33 58.616C1196.9 58.616 873.186 7.62939e-06 481.667 7.62939e-06C90.1476 7.62939e-06 0 58.616 0 58.616V120H2560V7.62939e-06Z" fill="#2c2c2c" />
        </svg>
      </Box>
      <Box
        sx={{
          backgroundColor: '#2c2c2c',
          color: 'white',

          pb: 2,

        }}
      >
        {/* SVG Wave at the Top */}


        <Box sx={{ width: '90%', margin: '0 auto', }}>
          <Grid container spacing={0} sx={{}}>
            {/* Quick Links Section */}
            <Grid item xs={12} sm={6} md={2} sx={{ xs: '15px', sm: '0px' }}>
              <Typography sx={{ fontFamily: "'Ruwudu'", fontWeight: '700', fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: theme.palette.background.footer, }}>
                QUICK LINKS
              </Typography>
              <Box sx={{ mt: { xs: '15px', sm: '20px' } }}>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>Home</Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>Hire Developers</Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>Our Works</Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>Services</Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>About Us</Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>Contact Us</Typography>
              </Box>
            </Grid>

            {/* Services Section */}
            <Grid item xs={12} sm={6} md={3.4} sx={{ mt: { xs: '10px', sm: '0px' } }}>
              <Typography sx={{ fontFamily: "'Ruwudu'", fontWeight: '700', fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: theme.palette.background.footer, }}>
                SERVICES
              </Typography>
              <Box sx={{ mt: { xs: '15px', sm: '20px' } }}>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Web App Development
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Mobile App Development
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Low-Code/No-Code Development
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Quality Assurance
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Cloud Services
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  UI/UX Designing
                </Typography>
                <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Business Solutions
                </Typography>
              </Box>

            </Grid>

            {/* Technologies Section */}
            <Grid item xs={12} sm={5} md={2.9} sx={{ mt: { xs: '10px', sm: '20px', md: '0px' } }}>
              <Typography sx={{ fontFamily: "'Ruwudu'", fontWeight: '700', fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: theme.palette.background.footer, }}>
                TECHNOLOGIES
              </Typography>
              <Grid container spacing={2} sx={{ mt: '4px' }}>
                {/* Left Column */}
                <Grid item xs={6}>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    React.js
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    React Native
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Ruby On Rails
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Manual QA
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    MERN
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Python
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Angular
                  </Typography>
                </Grid>

                {/* Right Column */}
                <Grid item xs={6}>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Flutter
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    .NET
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    DigitalOcean
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    MySQL
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    PostgreSQL
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    WordPress
                  </Typography>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    DevOps
                  </Typography>
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={1} sm={0} md={0} sx={{}}>
              <Box
                sx={{
                  height: '100%',
                  width: '1px',
                  backgroundColor: theme.palette.background.descp,
                  margin: '0 auto',
                  display: { xs: 'none', lg: 'block' },

                }}
              />
            </Grid>

            {/* Contact Us Section */}
            <Grid item xs={12} sm={6} md={2.7} sx={{ mt: { xs: '10px', sm: '20px', md: '0px' } }}>
              <Typography sx={{ fontFamily: "'Ruwudu'", fontWeight: '100', fontSize: { xs: '14px', sm: '15px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: theme.palette.background.footer, }}>
                CONTACT US
              </Typography>
              <Box sx={{ mt: { xs: '15px', sm: '20px' } }}>
                <Box sx={{ display: 'flex', justifyContent: {xs:'none',md:'space-between'}, }}>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Email:
                  </Typography>
                  <Typography sx={{  ml:{xs:'100px',sm:'100px',md:'0px'},mb: { xs: '10px', sm: '16px' }, fontFamily: "Ruwudu", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    contact@actimize.in
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: {xs:'none',md:'space-between'} }}>


                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    For Careers:
                  </Typography>
                  <Typography sx={{  ml:{xs:'100px',sm:'100px',md:'0px'},mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    hr@actimize.in
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: {xs:'none',md:'space-between'} }}>
                  <Typography sx={{ mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    Phone:
                  </Typography>
                  <Typography sx={{ ml:{xs:'100px',sm:'100px',md:'0px'}, mb: { xs: '10px', sm: '16px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                    +91 6305196668
                  </Typography>
                </Box>
                <Typography sx={{ mt: { xs: '28px', md: '10px', lg: '28px' }, mb: 1, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: { xs: '20px', md: '22px' }, color: '#FFFFFF', }}>
                  Address: D. No. 4-7-1, Tarvanipeta, Mandapeta, Andhra Pradesh, India - 533308
                </Typography>
              </Box>
              <Box sx={{ mt: { xs: '28px', md: '10px', lg: '28px' } }}>
                <IconButton href="#" color="inherit" sx={{}}>
                  <Icon icon="radix-icons:linkedin-logo" width="35px" height="35px" style={{ color: "#fff" }} />
                </IconButton>
                <IconButton href="#" >
                  <Icon icon="fa6-brands:square-x-twitter" width="35px" height="35px" style={{ color: "#fff" }} />
                </IconButton>
                <IconButton href="#" >
                  <Icon icon="bxl:instagram-alt" width="35px" height="35px" style={{ color: "#fff" }} />
                </IconButton>
                <IconButton href="#" >
                  <Icon icon="mingcute:facebook-fill" width="35px" height="35px" style={{ color: "#fff" }} />
                </IconButton>



              </Box>
            </Grid>
          </Grid>



          {/* Footer Bottom Section */}
          <Box
            sx={{




            }}
          >
            <Grid container sx={{ display: 'flex', mt: '56px', mb: '40px' }} >
              {/* Company Logo and Tagline */}
              <Grid item xs={12} sm={6} md={4}  >
                <Box
                  sx={{
                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: '10px', md: '16px' }
                  }}
                >
                  <Box
                    component="img"
                    src="../assets/images/logo.png" // Replace with your logo URL
                    alt="Actimize Logo"
                    sx={{
                      width: { xs: '40px', sm: '48px', md: '56px' },
                      height: { xs: '40px', sm: '48px', md: '56px' }
                    }}
                  />
                  <Typography

                    sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '16px', sm: '18px', md: '24px' }, lineHeight: { xs: '25px', md: '30px' }, color: '#FFFFFF', }}
                  >
                    Actimize
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: { xs: 'center', sm: 'start' }, mt: '16px', ml: '7px', fontFamily: "'Ruwudu'", fontWeight: '500', fontSize: { xs: '14px', sm: '16px', md: '20px' }, lineHeight: { xs: '20px', md: '28px' }, color: '#FFFFFF', }}>
                  Let's transform the digital world together.
                </Typography>
              </Grid>

              {/* Certifications and Badges */}
              <Grid
                item
                xs={12}
                sm={6}
                md={8}
                sx={{
                  mt: { xs: 2, sm: 0 },
                  display: 'flex',
                  justifyContent: { xs: 'center', },
                  flexWrap: 'wrap',
                  gap: { xs: '17px', md: '25px' },
                  alignItems: 'center'
                }}
              >
                <Box
                  component="img"
                  src="../assets/images/footer1.svg" // Replace with your logo URL
                  alt="Startup India"
                  sx={{
                    width: { xs: '40px', sm: '70px', md: '91px' },
                    height: { xs: '40px', sm: '60px', md: '80px' },
                  }}
                />
                <Box
                  component="img"
                  src="../assets/images/footer3.svg"

                  alt="MSME Logo"
                  sx={{
                    width: { xs: '40px', sm: '90px', md: '120px' },
                    height: { xs: '40px', sm: '80px', md: '100px' },
                  }}

                />
                <Box
                  component="img"
                  src="../assets/images/footer4.svg"
                  alt="ISO 9001 Certified"
                  sx={{
                    width: { xs: '40px', sm: '65px', md: '90px' },
                    height: { xs: '40px', sm: '65px', md: '90px' },
                  }}
                />
                <Box
                  component="img"
                  src="../assets/images/footer2.svg"
                  alt="ISO 27001 Certified"
                  sx={{
                    width: { xs: '50px', sm: '80px', md: '120px' },
                    height: { xs: '50px', sm: '80px', md: '120px' },
                  }}

                />
                <Box
                  component="img"
                  src="../assets/images/footer5.svg"
                  alt="Glassdoor Rating"
                  sx={{
                    width: { xs: '50px', sm: '120px', md: '144px' },
                    height: { xs: '50px', sm: '100px', md: '120px' }
                  }}
                />
              </Grid>
            </Grid>
            {/* Divider */}
            <Box
              sx={{
                borderTop: '1px solid #6A6A6A',


              }}
            ></Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: '32px 25px 8px' }, borderTop: '1px solid #6A6A6A', }}>
            <Typography sx={{ fontFamily: "'Ruwudu'", fontWeight: '500', fontSize: { xs: '12px', sm: '12px', md: '14px' }, lineHeight: { xs: '15px', md: '20px' }, color: '#FFFFFF', }}>© 2024 Actimize. All rights reserved.</Typography>

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
