// import React from 'react';
// import { Box, Typography, Grid, useTheme } from '@mui/material';

// const features = [
//   {
//     icon: '💻', // Replace with actual icon component or image
//     title: 'Web Development',
//     description: 'Fast, scalable web apps delivering seamless experiences on any device.',
//   },
//   {
//     icon: '📱',
//     title: 'Mobile Apps',
//     description: 'Mobile apps for iOS and Android with smooth, intuitive experiences.',
//   },
//   {
//     icon: '⚙️',
//     title: 'Low-Code/No-Code',
//     description: 'Accelerate with low-code/no-code for quick builds and easy updates.',
//   },
//   {
//     icon: '🤖',
//     title: 'AI-Driven',
//     description: 'AI optimizes code, automates testing, and ensures faster, bug-free delivery.',
//   },
// ];

// export default function HomeCardsComponent() {
//     const theme = useTheme();
//   return (
//     <Box sx={{ textAlign: 'center', py: 8, px: 4, backgroundColor: '#FFFFFF' }}>
//       {/* Section Title */}
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         How We <span style={{ color:theme.palette.background.default}}>Help?</span>
//       </Typography>
//       <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//         From apps to AI, we deliver innovative and scalable development solutions.
//       </Typography>

//       {/* Feature Cards */}
//       <Grid container spacing={4} justifyContent="center">
//         {features.map((feature, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Box
//               sx={{
//                 textAlign: 'center',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 transition: 'transform 0.3s',
//                 '&:hover': { transform: 'scale(1.05)' },
//               }}
//             >
//               {/* Icon */}
//               <Box
//                 sx={{
//                   width: '60px',
//                   height: '60px',
//                   margin: '0 auto',
//                   backgroundColor: theme.palette.background.default,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding:'8px',
//                   fontSize: '32px',
//                   color: '#ff4081',
//                   mb: 2,
//                 }}
//               >
//                 {feature.icon}
//               </Box>

//               {/* Title */}
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 {feature.title}
//               </Typography>

//               {/* Description */}
//               <Typography variant="body2" color="text.secondary">
//                 {feature.description}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }



import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

// Features array with image URLs
const features = [
  {
    image: '../assets/images/aboutuscard1.svg', // Replace with your actual image path
    title1: 'Our ',
    title2:'Mission',
    description: 'We aim to turn your ideas into reality while being your trusted partner in digital success. Your achievements define our success.',
  },
  {
    image: '../assets/images/aboutuscard2.svg',
    title1: 'Our ',
    title2:'Vision',
    description: 'To lead digital transformation with innovative designs, cutting-edge technology, and unwavering dedication to your goals.',
  },
  {
    image: '../assets/images/aboutuscard3.svg',
    title1: 'Our ',
    title2:'Values',
    description: 'We prioritize customers, uphold integrity, and embrace creativity. Through collaboration and excellence, we deliver solutions that truly matter.',
  },
  
];

export default function AboutUs2() {
  const theme = useTheme();
  return (
    <Box sx={{textAlign: 'center', backgroundColor: '#FFFFFF', mt: { xs: '70px', md: '160px' } }}>
      {/* Section Title */}
      <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '40px' }, lineHeight: { xs: '30px', md: '64px' }, color: '#363636', }}>
      Our Pillars of  <span style={{ color: theme.palette.background.default }}>Purpose</span>
      </Typography>
     
      <Typography sx={{ maxWidth:'600px', margin: '0 auto', textAlign:'center', mt: { xs: '5px', sm: '4px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '18px' }, lineHeight: { xs: '20px', md: '30px' }, color: '#363636', }}>
      Our mission drives us, our vision inspires us, and our values define us.
      Together, they form the foundation of everything we do.
      </Typography>
  

      {/* Feature Cards */}
      <Grid container spacing={5} justifyContent="center" sx={{ mt: '20px' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding:'32px',
                border: '1px solid #FFE4BB',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                backgroundColor: '#FFFFFF',
                borderRadius: '16px'


              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={feature.image}
                alt={'hhgh'}
                sx={{
                  width: '60px',
                  height: '60px',
                  margin: '0 auto',
                  mb: 2,
                }}
              />

              {/* Title */}
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Typography sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '24px' }, lineHeight: { xs: '30px', md: '30px' }, color: '#363636', }}>
                {feature.title1}
              </Typography>
              <Typography sx={{ml:'5px', fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '24px' }, lineHeight: { xs: '30px', md: '30px' }, color: theme.palette.background.default, }}>
                {feature.title2}
              </Typography>
              </Box>

              {/* Description */}
              <Typography sx={{ mt: { xs: '10px', sm: '10px' }, fontFamily: "'Ruwudu'", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '16px' }, lineHeight: { xs: '20px', md: '20px' }, color: '#363636', }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

