import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#f5f5f5' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, color:'olive' }}>
        Cozy Horizon Stays
      </Typography>
      <Box>
        <Button color="inherit" sx={{ color: 'olive' }} component={Link} to="/">Home</Button>
        <Button color="inherit" sx={{ color: 'olive' }}component={Link} to="/amenities">Amenities</Button>
        <Button color="inherit" sx={{ color: 'olive' }}component={Link} to="/contact">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
