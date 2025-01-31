import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h3" align="center" gutterBottom>
      About Us
    </Typography>
    <Box>
      <Typography variant="h5" gutterBottom>
        Who We Are
      </Typography>
      <Typography paragraph>
        Cozy Horizon Stays is dedicated to providing comfortable, clean, and reliable short-term housing for traveling professionals, families, and solo travelers. Our properties are thoughtfully designed to feel like home.
      </Typography>
      <Typography variant="h5" gutterBottom>
        What We Offer
      </Typography>
      <Typography paragraph>
        We offer a range of fully furnished properties with flexible stays from 1 night to 120 days. Each property is equipped with modern amenities to ensure a seamless experience.
      </Typography>
      <Typography variant="h5" gutterBottom>
        How We Help
      </Typography>
      <Typography paragraph>
        By providing consistent rent payments, professional cleaning, and local support, we help property owners and guests alike. Whether you’re visiting for work, leisure, or transition, we have you covered.
      </Typography>
    </Box>
  </Container>
);

export default Home;