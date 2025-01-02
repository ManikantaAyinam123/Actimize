import { Grid } from '@mui/material';
import React from 'react';

const BackgroundColor = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        width: '100%',
        height: '600px',
        backgroundColor: 'black',
        mt: '80px',
        background: `
          radial-gradient(circle at 95% 32%, rgba(255, 80, 41, .20), transparent 20%),
          radial-gradient(circle at 5% 70%, rgba(255, 80, 41, .25), transparent 20%)
        `,
        
      }}
    >
        {children}
    </Grid>
  );
};

export default BackgroundColor;



// import { Grid } froma '@mui/material';
// import React from 'react';

// const BackgroundColor = ({ children }) => {
//   return (
//     <Grid
//       container
//       sx={{
      
//         height: '600px',
//         backgroundColor: 'black',
//         mt: '80px',
//         background: `
//           radial-gradient(circle at 95% 32%, rgba(255, 80, 41, .20), transparent 20%),
//           radial-gradient(circle at 5% 70%, rgba(255, 80, 41, .25), transparent 20%)
//         `,
      
//         position: 'relative', // Ensure proper positioning for children
      
//       }}
//     >
//       {children}
//     </Grid>
//   );
// };

// export default BackgroundColor;

