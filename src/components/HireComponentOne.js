import { ControlPointSharp } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react' 
import Theme from '../Theme'

const HireComponentOne = () => {
  return (
    <>
    <Grid container justifyContent="center"  >
    <Grid container sx={{ display: "block", alignItems: "center", textAlign: "center", marginX: "auto", }} mt={{ xs: 12, md: 20 }}>
 
     <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: '#fff4e6', 
                  borderRadius: '24px', 
                }}
              >
                <Typography
                 sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, lineHeight: { xs: '15px', md: '20px' }, color: Theme.palette.background.default, }}
                >
                 Hire Us
                </Typography>
              </Box>
            </Box>


 
  <Grid item sm={8} md={6.5}lg={6} sx={{ textAlign: "center", display: "block",margin:"auto" ,}}>
    <Typography variant="caption1" sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '17px', md:"30px",lg: '38px',xl:"40px" }, lineHeight: { xs: '30px', md: '44px',lg:"50px" }, color: '#363636' }}>
      Hire Developers, Augment Teams, or Outsource Projects
    </Typography>
  </Grid>

 
  <Grid item xs={12} sm={9} md={9} sx={{ textAlign: "justify", display: "block",margin:"auto" ,marginTop:3}}>
    <Typography variant="caption2" sx={{fontSize:{xs:'12px',md:'16px',xl:"18px"},lineHeight:{xs:'10px',md:'20px',lg:"30px"},color:" #6A6A6A"}}>
      Empowering your business with expert developers, scalable team solutions, and seamless project outsourcing. Whether you're building a team, augmenting your workforce, or entrusting us with your next project, we deliver results driven by innovation and collaboration.
    </Typography>
  </Grid>
</Grid>



    </Grid>
    </>
  )
}

export default HireComponentOne