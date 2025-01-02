import { Box, Grid } from '@mui/material';
import React from 'react';

const BackgroundColor2 = ({ children, height }) => {
  return (
    <Box
      sx={{
        width: '100%',
         height:'auto',
        backgroundColor: 'black',
        background: `
          radial-gradient(circle at 5% 32%, rgba(255, 80, 41, .20), transparent 15%),
          radial-gradient(circle at 95% 70%, rgba(255, 80, 41, .25), transparent 15%)
        `,
      
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundColor2;
