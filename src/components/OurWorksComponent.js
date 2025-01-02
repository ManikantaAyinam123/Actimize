import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Theme from '../Theme'
 
const OurWorksComponent = () => {
  const content = [
    {image:"/assets/images/Actimize Studio.png",appName:"Actimize Studio",descp:"the user-friendly platform that brings your ideas to life! Customize and visualize your mobile or desktop apps in real time with intuitive tools. Effortlessly input app details like name, logo, color scheme, features, budget, and payment preferences. Enjoy live previews of your designs across devices, ensuring perfection every step of the way. Once submitted, our team reviews your project, shares a detailed budget estimate, and notifies you for approval. After your approval, development begins, turning your vision into reality!"},
    {image:"/assets/images/Akart(Mobile).png",appName:"Akart(Mobile)",descp:"Experience seamless shopping on the go with the A-Kart Mobile App, your all-in-one eCommerce solution. Browse a wide range of products, enjoy personalized recommendations, and shop effortlessly with a user-friendly interface. Featuring secure payments, real-time order tracking, and exclusive mobile deals, A-Kart Mobile App brings the best of online shopping right to your fingertips. Just like having a digital mall in your pocket!"},
    {image:"/assets/images/Akart(web).png",appName:"Akart(web)",descp:"Discover the ultimate online shopping destination with the A-Kart Web App. Whether you're exploring categories, comparing products, or snagging the best deals, the sleek and intuitive design ensures an enjoyable experience. Enjoy features like quick search, secure checkouts, and real-time order updates, making A-Kart Web App your trusted companion for convenient and hassle-free shopping. Everything you love about online retail, just a click away!"},
    // {image:"",appName:"",descp:""},
  ]
  return (
    <>
   <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    
    
    }}
  >
      <Grid container justifyContent="center" sx={{mt:'120px',width:'90%'}}>
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
      </Box>
    </>
  )
}
 
export default OurWorksComponent