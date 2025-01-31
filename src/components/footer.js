import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#f5f5f5', padding: 2,  minHeight: '10vh', textAlign: 'center', marginTop: 'auto' }}>
    <Typography variant="body2" color="textSecondary">
      © 2025 Cozy Horizon Stays. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;