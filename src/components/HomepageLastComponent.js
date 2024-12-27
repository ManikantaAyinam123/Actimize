// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';

// export default function HomepageLastComponent() {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 textAlign: 'left',
//                   flexDirection: { xs: 'column', md: 'row' },
//                 backgroundImage: 'url(../assets/images/HomeLast.svg)',
//                 backgroundSize: '320px 210px',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center',
//                 height: { xs: '200px', md: '300px' },
//                 width: '100%',
//                 margin: '0 auto',
//                 borderRadius: '8px',

//                 color: '#363636',
//             }}
//         >
//             {/* Left Content */}
//             <Box   sx={{
//           maxWidth: { xs: '100%', md: '50%' }, // Full width on small screens, half on larger screens
//           textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
//         }}>
//                 <Typography
//                     sx={{
//                         fontFamily: "'ADLaM Display', serif",
//                         fontWeight: 700,
//                         fontSize: { xs: '20px', md: '30px', lg: '40px' },
//                         lineHeight: { xs: '20px', md: '50px', lg: '64px' },
//                         color: '#363636',
//                         maxWidth: '550px'
//                     }}
//                 >
//                     Let's Collaborate and Create Something
//                     <span style={{ color: '#FF5733' }}> Amazing!</span>
//                 </Typography>

//             </Box>

//             {/* Right Content */}
//             <Box sx={{
//     display: 'flex', // Use flexbox for alignment
//     flexDirection: 'column', // Ensure items stack vertically
//     alignItems: 'center', // Centers items horizontally
//     justifyContent: 'center', // Centers items vertically if needed
//     textAlign: 'center', // Optional, centers text inside Typography
//   }}>
//                 <Typography
//                     sx={{

//                         fontFamily: "'Ruwudu', serif",
//                         fontWeight: 500,
//                         fontSize: { xs: '12px', md: '18px' },
//                         lineHeight: { xs: '20px', md: '24px' },
//                         color: '#6A6A6A',
//                     }}
//                 >
//                     Join us in transforming your project from concept to completion.
//                 </Typography>
//                 <Button
//                     sx={{
//                         mt:'8px',
//                         backgroundColor: '#FF5733',
//                         color: '#FFFFFF',
//                         fontSize: { xs: '12px', md: '16px' },
//                         padding: { xs: '8px 16px', md: '10px 30px' },
//                         fontWeight: 600,
//                         borderRadius: '16px',
//                         width: '100%', // Makes the button take the full width of its parent
//                         maxWidth: '400px', // Limits the button width to 400px
//                         '&:hover': {
//                             backgroundColor: '#FF5029',
//                         },
//                     }}
//                 >
//                     Let’s Talk
//                 </Button>

//             </Box>
//         </Box>
//     );
// }
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HomepageLastComponent() {
    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                flexDirection: { xs: 'column', md: 'row' },
                backgroundImage: { xs: 'none', md: 'url(../assets/images/HomeLast.svg)' },
                backgroundSize: {xs:'cover',sm:'320px 210px'},
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: { xs: '200px', md: '300px' },
                width: '100%',
                margin: '0 auto',
                borderRadius: '8px',

                color: '#363636',       

            }}
        >
             {/* Left Content */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '50%' }, // Full width on small screens, half on larger screens
          textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
        }}
      >
        <Typography
          sx={{
            fontFamily: "'ADLaM Display', serif",
            fontWeight: 700,
            fontSize: { xs: '20px', md: '30px', lg: '40px' },
            lineHeight: { xs: '28px', md: '40px', lg: '50px' },
            color: '#363636',
          }}
        >
          Let's Collaborate and Create Something
          <span style={{ color: '#FF5733' }}> Amazing!</span>
        </Typography>
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: { xs: '100%', md: '50%' }, // Full width on small screens, half on larger screens
          mt: { xs: 2, md: 0 }, // Add margin-top for spacing on small screens
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Ruwudu', serif",
            fontWeight: 500,
            fontSize: { xs: '14px', md: '18px' },
            lineHeight: { xs: '20px', md: '24px' },
            color: '#6A6A6A',
            mb: 2, // Add spacing below the text
          }}
        >
          Join us in transforming your project from concept to completion.
        </Typography>
        <Button
          sx={{
            backgroundColor: '#FF5733',
            color: '#FFFFFF',
            fontSize: { xs: '12px', md: '16px' },
            padding: { xs: '8px 16px', md: '10px 30px' },
            fontWeight: 600,
            borderRadius: '16px',
            width: { xs: '100%', md: 'auto' }, // Full width on small screens, auto on larger screens
            maxWidth: '400px', // Limit button width on larger screens
            '&:hover': {
              backgroundColor: '#FF5029',
            },
          }}
        >
          Let’s Talk
        </Button>
      </Box>
        </Box>
    );
}
