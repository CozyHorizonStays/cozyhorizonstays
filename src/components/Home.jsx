// pages/Home.js
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote: "Absolutely stunning cabin! Everything was spotless and cozy. We’ll be back!",
    author: "– Jamie L."
  },
  {
    quote: "Peaceful, quiet, and beautiful surroundings. The perfect escape.",
    author: "– Marcus T."
  },
  {
    quote: "Such thoughtful details inside. Felt like home from the moment we arrived.",
    author: "– Priya K."
  }
];

const SectionDivider = ({ image }) => (
  <Box
    component={motion.div}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '80vh',
      width: '100%',
      my: 8
    }}
  />
);

const InstagramGrid = () => (
  <Box sx={{ py: 10, backgroundColor: '#fff' }}>
    <Container>
      <Typography variant="h4" align="center" sx={{ fontFamily: 'Playfair Display, serif', mb: 6, letterSpacing: '1px' }}>
        FROM OUR GALLERY
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid item xs={6} sm={4} md={2} key={item}>
            <Box
              component="img"
              src={`https://source.unsplash.com/random/400x400?cabin,${item}`}
              alt={`Gallery ${item}`}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold', fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
            NATURE MEETS COMFORT
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}>
            Escape to a modern retreat surrounded by trees, sky, and peace.
          </Typography>
          <Button variant="outlined" component={Link} to="/amenities" color="inherit" size="large">
            Explore Our Cabins
          </Button>
        </Container>
      </Box>

      <SectionDivider image="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62" />

      {/* Booking Coming Soon Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Box sx={{ py: 10, backgroundColor: '#f9f9f7', textAlign: 'center' }}>
          <Container>
            <Typography variant="h4" sx={{ fontFamily: 'Playfair Display, serif', mb: 2, letterSpacing: '1px' }}>
              BOOKING COMING SOON
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              We’re getting everything ready for your stay. In the meantime, feel free to reach out with questions or requests.
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              sx={{
                borderColor: '#c1a361',
                color: '#c1a361',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#c1a361',
                  color: '#fff'
                }
              }}
            >
              Contact Us
            </Button>
          </Container>
        </Box>
      </motion.div>

      <SectionDivider image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />

      {/* Google Maps Section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Box sx={{ py: 10, backgroundColor: '#f2f1ec' }}>
          <Container>
            <Typography variant="h4" align="center" sx={{ fontFamily: 'Playfair Display, serif', mb: 4, letterSpacing: '1px' }}>
              FIND US HERE
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949693262335!2d-73.98968038459357!3d40.74189507932737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a5f0f1%3A0x5f7452dfad3f77a9!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1612333189606!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 20 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Container>
        </Box>
      </motion.div>

      <InstagramGrid />
    </Box>
  );
};

export default Home;
