import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Theme from '../Theme';

const teamMembers = [
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
  { name: 'Name', role: 'Role', img: './assets/images/photo.svg' },
];

const AboutUs3 = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
    <Box sx={{ width:'90%', textAlign: 'center', py: 5,  }}>
      
      <Typography
         sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '40px' }, lineHeight: { xs: '30px', md: '64px' }, color: '#363636', }}
      >
        The Actimize <span style={{ color: '#FF5733' }}>Team</span>
      </Typography>
      <Typography
        sx={{ fontFamily: "'ADLaM Display',serif", fontWeight: '400', fontSize: { xs: '15px', sm: '15px', md: '20px' }, lineHeight: { xs: '30px', md: '64px' },  color:Theme.palette.background.default}}
      >
        Innovators. Creators. Achievers.
      </Typography>

      {/* Team Grid */}
      <Grid container spacing={10}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
              
                borderRadius: '16px',
                overflow: 'hidden',
                
                padding: 2,
                backgroundColor: '#fff',
              }}
            >
              <Box
                 component={"img"}
                src={member.img}
                alt={member.name}
                sx={{
                    width: { xs: '50px', sm: '320px' },   // Responsive width for xs and sm breakpoints
                    height: { xs: '50px', sm: '320px' }, // Responsive height
                    borderRadius: '16px',
                    marginBottom: '16px',
                  }}
              />
              <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography  variant='caption1'sx={{ fontWeight: 'bold', mb: 0.5 }}>
                {member.name}
              </Typography>
              <IconButton
                  sx={{
                    color: '#0077B5', // LinkedIn blue
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography variant="caption2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                {member.role}
              </Typography>
              <IconButton
                  sx={{
                    color: '#888888', // Neutral email icon
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Box>
              
             
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default AboutUs3;
