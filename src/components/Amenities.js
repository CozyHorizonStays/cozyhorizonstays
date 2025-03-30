import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const Amenities = () => (
  <Box>
    <Box
      sx={{
        backgroundColor: '#556B2F', 
        height: '300px', 
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SVG Wave */}
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
        }}
      >
        <path
          fill="#F0EDE4" 
          fillOpacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,181.3C672,181,768,139,864,128C960,
          117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,
          1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,
          320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>

    <Box sx={{ backgroundColor: '#F0EDE4', paddingTop: '30px', paddingBottom: '50px' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Amenities
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Free Wi-Fi" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Swimming Pool" />
          </ListItem>
          <ListItem>
            <ListItemText primary="24/7 Concierge" />
          </ListItem>
        </List>
      </Container>
    </Box>
  </Box>
);

export default Amenities;