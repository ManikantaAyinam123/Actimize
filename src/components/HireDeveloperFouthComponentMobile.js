import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Theme from '../Theme';


const HireDeveloperFouthComponentMobile = ({ content1, content2, content3, content4, content5, content6, content7, content8, content9 }) => {
  // Combine all content arrays into one
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
      <Grid container justifyContent="center" spacing={2}> {/* Use spacing here to apply gap between items */}
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
                overflow: "hidden",  // Prevent overflow
                wordWrap: "break-word", // Break long words
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
                    maxWidth: "100%",  // Ensures images scale correctly
                    height: "auto",    // Keeps the image's aspect ratio
                  }}
                />
              ) : (
                item.icon
              )}
              <Typography variant="caption2" sx={{ fontSize: { xs: "8px", md: "15px" } }}>
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
