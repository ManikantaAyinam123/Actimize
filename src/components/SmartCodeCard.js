import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';

const features = [
  {
    icon: '✨', // Replace with an actual icon or MUI Icon component
    title: 'Smart Code Optimization',
    description: 'AI helps optimize code for better performance and efficiency.',
  },
  {
    icon: '🔍',
    title: 'Automated Testing',
    description: 'Automated testing powered by AI reduces errors and speeds up delivery.',
  },
  {
    icon: '💡',
    title: 'Feature Discovery',
    description: 'AI-driven insights help identify innovative features to enhance UX.',
  },
  {
    icon: '🔄',
    title: 'Simplified Workflows',
    description: 'Reducing repetitive tasks with automated solutions for faster progress.',
  },
];

export default function SmartCodeCard() {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f9fafb', textAlign: 'center' }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Redefining Web & Mobile{' '}
        <span style={{ color: theme.palette.primary.main }}>Development with AI</span>
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        AI plays a pivotal role in modern development, driving innovation and efficiency at every stage.
      </Typography>

      {/* Features */}
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                position: 'relative',
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '32px 16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              {/* Icon container overlapping the border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '48px',
                  height: '48px',
                  backgroundColor: theme.palette.primary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  fontSize: '24px',
                }}
              >
                {feature.icon}
              </Box>
              {/* Title */}
              <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                {feature.title}
              </Typography>
              {/* Description */}
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
