// components/Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 4 }}>
      <Typography
        variant="h6"
        sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold', mb: 2 }}
      >
        COZY HORIZON STAYS
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              textAlign: 'center',
              color: location.pathname === item.path ? '#c1a361' : '#2c2c2c',
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              '&:hover': { backgroundColor: '#f2f1ec' }
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: '#2c2c2c',
        borderBottom: '1px solid #eee',
        px: { xs: 2, md: 6 },
        zIndex: 1400
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            fontSize: { xs: '1.2rem', md: '1.75rem' },
            color: '#2c2c2c'
          }}
        >
          COZY HORIZON STAYS
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#c1a361' : '#2c2c2c',
                mx: 1.5,
                fontWeight: 500,
                fontSize: '1rem',
                borderBottom: location.pathname === item.path ? '2px solid #c1a361' : 'none',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#c1a361'
                }
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            variant="outlined"
            component={Link}
            to="/contact"
            sx={{
              borderColor: '#c1a361',
              color: '#c1a361',
              fontWeight: 'bold',
              fontSize: '1rem',
              ml: 3,
              '&:hover': {
                backgroundColor: '#c1a361',
                color: '#fff',
                borderColor: '#c1a361'
              }
            }}
          >
            Learn More
          </Button>
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 260,
            backgroundColor: '#ffffffcc',
            backdropFilter: 'blur(12px)',
            borderLeft: '1px solid #eee'
          }
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
