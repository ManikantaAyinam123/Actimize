import React, { useState } from 'react';
import { Grid, Box, Button, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { useTheme } from '@emotion/react';
import Theme from '../Theme'

const features = [
  { image: '/path/to/image1.png', title: 'Feature 1', description: 'Description for feature 1' },
  { image: '/path/to/image2.png', title: 'Feature 2', description: 'Description for feature 2' },
  { image: '/path/to/image3.png', title: 'Feature 3', description: 'Description for feature 3' },
  { image: '/path/to/image4.png', title: 'Feature 4', description: 'Description for feature 4' },
];
  const content = [
    {image:"/assets/images/ourworks1.svg",appName:"Actimize Studio",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/ourworks2.svg",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},

    // {image:"",appName:"",descp:""},
  ]
  const content2 = [
    {image:"/assets/images/ourworks3.svg",appName:"Actimize Studio",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/ourworks4.svg",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/ourworks5.svg",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/ourworks6.svg",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
    {image:"/assets/images/ourworks7.svg",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},

    // {image:"",appName:"",descp:""},
  ]

const OurWorks2 = () => {
    const theme = useTheme();
      const [view, setView] = useState('desktop'); // Manage the view state (mobile/desktop)

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <Box>
      {/* View Toggle Buttons */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <Box sx={{ border: '1px solid #FFE4BB', padding: '8px', borderRadius: '24px',backgroundColor:theme.palette.background.border }}>
         

          <Button
            onClick={() => handleViewChange('desktop')}
            sx={{
              textTransform: 'none',
              color: view === 'desktop' ? '#ffffff' : '#363636',
              backgroundColor: view === 'desktop' ? theme.palette.background.default  : 'transparent',
              '&:hover': { backgroundColor: view === 'desktop' ? theme.palette.background.default  : theme.palette.background.border },
               borderRadius:'20px',

             fontFamily: "'ADLaM Display',serif", 
             fontWeight: '400', 
             fontSize: { xs: '13px', sm: '15px', md: '18px' },
              lineHeight: { xs: '20px', md: '25px' },
              padding:'10px 24px'
            }}
          >
            <Icon
              icon="quill:desktop"
              width="20px"
              height="20px"
              style={{ color: view === 'desktop' ? '#ffffff' : '#000000', marginRight: '10px' }}
            />
           Web Applications
          </Button>
          <Button
            onClick={() => handleViewChange('mobile')}
            sx={{
              textTransform: 'none',
              color: view === 'mobile' ? '#ffffff' : '#363636',
              backgroundColor: view === 'mobile' ? theme.palette.background.default : 'transparent',
              '&:hover': { backgroundColor: view === 'mobile' ? theme.palette.background.default : theme.palette.background.border },
              marginRight: '10px',
              borderRadius:'20px',
              fontFamily: "'ADLaM Display',serif", 
              fontWeight: '400', 
              fontSize: { xs: '13px', sm: '15px', md: '18px' },
               lineHeight: { xs: '20px', md: '25px' },
                padding:'10px 24px'
            }}
          >
            <Icon
              icon="humbleicons:mobile"
              width="20px"
              height="20px"
              style={{ color: view === 'mobile' ? '#ffffff' : '#000000', marginRight: '10px'  }}
            />
           Mobile Applications
          </Button>
        </Box>
      </Grid>

      {/* Features Grid */}
      {view === "mobile" ? (
        <>
        <Grid container sx={{ mt: '50px', justifyContent: 'center' }}>
        <Grid item sx={{ maxWidth: '1098px', textAlign: 'center' }}>
          {/* About Us Badge */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
            }}
          >
           
          </Box>
  
          {/* Main Heading */}
          <Typography
        sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '35px', sm: '38px', md: '40px' }, lineHeight: { xs: '50px', md: '62px' }, color: '#363636', }}
          >
               
               Scalable Solutions for the <span style={{ color:theme.palette.background.default }}>Web</span>
          </Typography>
  
          {/* Description */}
          <Typography
             sx={{maxWidth:'780px',mt:'20px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '18px', md: '20px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#6A6A6A', }}
          >
           Scalable, responsive, and intuitive. We’ve designed web solutions that grow with our clients’ businesses,
           ensuring seamless performance and smooth user experiences.
          </Typography>
     
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center", algnItems: "center" }}>
         
          
          <Grid container justifyContent="center" spacing={4} mt={5}>
  {content2.map((item, index) => (
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
      ):
        (
            <>
            <Grid container sx={{ mt: '50px', justifyContent: 'center' }}>
      <Grid item sx={{ maxWidth: '1098px', textAlign: 'center' }}>
        {/* About Us Badge */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 2,
          }}
        >
          
        </Box>

        {/* Main Heading */}
        <Typography
      sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '35px', sm: '38px', md: '40px' }, lineHeight: { xs: '50px', md: '62px' }, color: '#363636', }}
        >
            
            
            Cutting-Edge Apps for  <span style={{ color:theme.palette.background.default }}>Mobile</span>
        </Typography>

        {/* Description */}
        <Typography
           sx={{maxWidth:'880px',mt:'20px', fontFamily: "'Ruwudu',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '18px', md: '20px' }, lineHeight: { xs: '25px', md: '32px' }, color: '#6A6A6A', }}
        >
         Fast, fluid, and user-friendly. Our mobile apps deliver exceptional performance, engaging design, and impactful results,
         tailored to meet our clients' needs on both iOS and Android.
        </Typography>

   
      </Grid>
    </Grid>

     
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center", algnItems: "center" }}>
         
         
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
    </Box>
  );
};

export default OurWorks2;




// import { Box, Grid, Typography } from '@mui/material'
// import React from 'react'
// import Theme from '../Theme'
 
// const OurWorksComponent = () => {
//   const content = [
//     {image:"/assets/images/Actimize Studio.png",appName:"Actimize Studio",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
//     {image:"/assets/images/Akart(Mobile).png",appName:"Akart(Mobile)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
//     {image:"/assets/images/Akart(web).png",appName:"Akart(web)",descp:"Lorem ipsum dolor sit amet consectetur. Nec ultrices etiam eros viverra tristique ullamcorper at nunc a. Placerat congue enim in convallis posuere."},
//     // {image:"",appName:"",descp:""},
//   ]
//   return (
//     <>
//       <Grid container justifyContent="center">
//         <Grid item xs={12} sx={{ justifyContent: "center", textAlign: "center", algnItems: "center" }}>
//           <Grid item xs={{ justifyContent: "center", textAlign: "center" }}>
//             <Typography variant='caption1' sx={{fontSize: { xs: '18px', sm: '22px', md:"30px",lg: '38px',xl:"40px" },}}>Our </Typography><Typography variant='caption1' sx={{fontSize: { xs: '18px', sm: '22px', md:"30px",lg: '38px',xl:"40px" },color:Theme.palette.background.default}}>Products</Typography>
//           </Grid>
//           <Grid item>
//             <Typography variant='caption2' sx={{color:Theme.palette.background.descp}}>Revolutionizing industries with innovative digital products. </Typography>
//             <Grid item><Typography variant='caption2' sx={{color:Theme.palette.background.descp}}>
//               From idea to execution, our products are designed to deliver seamless experiences, unlocking new possibilities.</Typography>
//             </Grid>
//           </Grid>
//           <Grid container justifyContent="center" spacing={2} mt={5}>
//   {content.map((item, index) => (
//     <Grid
//       item
//       xs={12}
//       sm={6}
//       key={index}
//       sx={{
//         display: "block",
//         textAlign: "center",  
//         margin: index === 2 ? "0 auto" : "",  
//       }}
//     >
//       <Grid container direction="column" spacing={1}>  
//         <Grid item>
//           <Box component="img" src={item.image} width="100%" height="100%" />
//         </Grid>
//         <Grid item sx={{textAlign:"start"}}>
//         <Grid item>
//           <Typography variant="caption1" sx={{textAlign:"start"}}>{item.appName}</Typography>
//         </Grid>
//         <Grid item>
//           <Typography variant="caption2" sx={{ color: Theme.palette.background.descp,lineHeight:1 }}>
//             {item.descp}
//           </Typography>
//         </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   ))}
// </Grid>
 
 
//         </Grid>
//       </Grid>
//     </>
//   )
// }
 
// export default OurWorksComponent