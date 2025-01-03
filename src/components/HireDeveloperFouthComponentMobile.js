import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Theme from '../Theme';


const HireDeveloperFouthComponentMobile = ({ content1, content2, content3, content4, content5, content6, content7, content8, content9 }) => {

  const allContent = [
    ...content1,
    ...content2,
    ...content3,
    ...content4,
    ...content5,
    ...content6,
    ...content7,
    ...content8,
    ...content9,
  ];

  return (
    <>
      <Grid container justifyContent="center" spacing={2} mb={5}>  
        {allContent.map((item, index) => (
          <Grid item xs={6} sx={{ display: { xs: "flex", sm: "none" } }} key={index}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                border: `1px solid ${Theme.palette.background.border}`,
                borderRadius: 2,
                textAlign: "center",
                minHeight: "100px",
                overflow: "hidden",   
                wordWrap: "break-word",  
                gap:2
              }}
              mb={1}
              p={1.2}
            >
              {item.image ? (
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    maxWidth: "100%",   
                    height: "auto",    
                  }}
                />
              ) : (
                item.icon
              )}
              <Typography variant="caption2" sx={{ fontSize: { xs: "15px", md: "15px" } }}>
                {item.name}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HireDeveloperFouthComponentMobile;
