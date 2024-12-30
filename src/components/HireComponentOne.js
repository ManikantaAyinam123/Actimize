import { ControlPointSharp } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react' 
import Theme from '../Theme'

const HireComponentOne = () => {
  return (
    <>
    <Grid container justifyContent="center"  >
    <Grid container sx={{ display: "block", alignItems: "center", textAlign: "center", marginX: "auto", }} mt={{ xs: 12, md: 20 }}>
 
    <Grid item xs={3} sm={1.5} md={1}lg={0.6} xl={0.4}sx={{ 
  backgroundColor: Theme.palette.background.bg, 
  textAlign: "center", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  borderRadius: 20, 
  margin: "auto",
  paddingX:{xs:0.4,lg:0},
}}>
  <Typography variant="caption1" sx={{ color: Theme.palette.background.default, fontSize: { xs: "14px" }, margin: "auto" }}>
    Hire Us
  </Typography>
</Grid>


 
  <Grid item sm={8} md={6.5}lg={6} sx={{ textAlign: "center", display: "block",margin:"auto" ,}}>
    <Typography variant="caption1" sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '17px', md:"30px",lg: '38px',xl:"40px" }, lineHeight: { xs: '30px', md: '54px',lg:"64px" }, color: '#363636' }}>
      Hire Developers, Augment Teams, or Outsource Projects
    </Typography>
  </Grid>

 
  <Grid item xs={12} sm={9} md={9} sx={{ textAlign: "justify", display: "block",margin:"auto" }}>
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