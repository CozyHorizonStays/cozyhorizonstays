import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Amenities = () => (
  <Container>
    <Typography variant="h3" align="center" gutterBottom>
      Amenities
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="High-Speed Wi-Fi" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Fully Equipped Kitchens" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Washer/Dryer" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Comfortable Beds and Bedding" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Smart TVs with Streaming Services" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Professional Cleaning Services" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Free Parking (select locations)" />
      </ListItem>
    </List>
  </Container>
);

export default Amenities;