import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Theme from '../Theme'
 
const OurWorksComponent = () => {
  const content = [
    {image:"/assets/images/Actimize Studio.png",appName:"Actimize Studio",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/Akart(Mobile).png",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/Akart(web).png",appName:"Akart(web)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    // {image:"",appName:"",descp:""},
  ]
  return (
    <>
      <Grid container justifyContent="center" sx={{mt:'120px'}}>
        <Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center", algnItems: "center" }}>
          <Grid item xs={{ justifyContent: "center", textAlign: "center" }}>
            <Typography variant='caption1' sx={{fontSize: { xs: '18px', sm: '22px', md:"30px",lg: '38px',xl:"40px" },}}>Our </Typography><Typography variant='caption1' sx={{fontSize: { xs: '18px', sm: '22px', md:"30px",lg: '38px',xl:"40px" },color:Theme.palette.background.default}}>Products</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption2' sx={{color:Theme.palette.background.descp}}>Revolutionizing industries with innovative digital products. </Typography>
            <Grid item><Typography variant='caption2' sx={{color:Theme.palette.background.descp}}>
              From idea to execution, our products are designed to deliver seamless experiences, unlocking new possibilities.</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={4} mt={5}>
  {content.map((item, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      key={index}
      sx={{
        display: "block",
        textAlign: "center",  
        margin: index === 2 ? "0 auto" : "",  
      }}
    >
      <Grid container direction="column" spacing={1}>  
        <Grid item>
          <Box component="img" src={item.image} width="100%" height="100%" />
        </Grid>
        <Grid item sx={{textAlign:"start"}}>
        <Grid item>
          <Typography variant="caption1" sx={{textAlign:"start"}}>{item.appName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption2" sx={{ color: Theme.palette.background.descp,lineHeight:1 }}>
            {item.descp}
          </Typography>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  ))}
</Grid>
 
 
        </Grid>
      </Grid>
    </>
  )
}
 
export default OurWorksComponent