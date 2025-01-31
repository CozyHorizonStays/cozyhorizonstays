import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Cozy Horizon Stays
      </Typography>
      <Box>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/amenities">Amenities</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
