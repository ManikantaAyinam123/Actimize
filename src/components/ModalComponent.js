import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ModalComponent = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ justifyContent: "center",}}>
          <Grid item xs={8} sx={{ textAlign:"center",justifyContent: "center",alignItems:"center" ,margin:"auto",marginY:"auto",}}>
            <Grid item sx={{ backgroundColor: "white", borderRadius: 3,display:"block" }}>
            
              <Box
                component="img"
                src="/assets/images/thankyou2 2.png"
                alt="Thank You"
                sx={{ width: "40%", height: "auto", borderRadius: 3 ,display:"block",margin:"auto"}}
              />
            </Grid>
            <Grid item sx={{margin:"auto"}}>
              <Typography variant="caption1" sx={{ fontSize: { xs: "20px" } ,textAlign:"center"}}>
                Thanks for reaching out!
              </Typography>
            </Grid>
            <Grid item sx={{margin:"auto"}}>
              <Typography variant="caption2" sx={{textAlign:"center"}}>
                We've received your message. </Typography>
            </Grid>
            <Grid item sx={{margin:"auto"}}>
            <Typography variant="caption2"sx={{textAlign:"center"}}>Our team will get back to you as soon as possible.
              </Typography>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ModalComponent;
