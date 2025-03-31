// pages/Home.js
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import livingRoom from '../Assets/livingRoom.png'

// const testimonials = [
//   {
//     quote: "Absolutely stunning cabin! Everything was spotless and cozy. We’ll be back!",
//     author: "– Jamie L."
//   },
//   {
//     quote: "Peaceful, quiet, and beautiful surroundings. The perfect escape.",
//     author: "– Marcus T."
//   },
//   {
//     quote: "Such thoughtful details inside. Felt like home from the moment we arrived.",
//     author: "– Priya K."
//   }
// ];

const SectionDivider = ({ image }) => (
  <Box
    sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '60vh',
      width: '100%',
      my: 10,
      borderRadius: '20px'
    }}
  />
);

// const InstagramGrid = () => (
//   <Box sx={{ py: 10, backgroundColor: '#fff' }}>
//     <Container>
//       <Typography
//         variant="h4"
//         align="center"
//         sx={{
//           fontFamily: 'Playfair Display, serif',
//           mb: 6,
//           letterSpacing: '1px',
//         }}
//       >
//         FROM OUR GALLERY
//       </Typography>
//       <Grid container spacing={2}>
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <Grid item xs={6} sm={4} md={2} key={item}>
//             <Box
//               component="img"
//               src={`https://source.unsplash.com/random/400x400?cabin,${item}`}
//               alt={`Gallery ${item}`}
//               sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   </Box>
// );

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${livingRoom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        {/* Black transparent overlay behind text */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            zIndex: 1,
          }}
        />

        {/* Content on top */}
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', md: '2rem' },
              mb: 2,
            }}
          >
            STAY WITH COMFORT, LEAVE WITH MEMORIES
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Whether you're unwinding, exploring, or celebrating — your perfect stay starts here.
          </Typography>
          <Button
            variant="outlined"
            component={Link}
            to="/amenities"
            color="inherit"
            size="large"
          >
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ py: 10, backgroundColor: '#fffefb', textAlign: 'center' }}>
          <Container>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Playfair Display, serif',
                mb: 2,
                letterSpacing: '1px',
              }}
            >
              WELCOME TO COZY HORIZON STAYS
            </Typography>
            <Typography
              variant="body1"
              sx={{ maxWidth: 700, mx: 'auto', color: '#555' }}
            >
              Our stays are designed to offer the perfect blend of comfort and style.
              Whether you're traveling for work, celebration, or a quick escape —
              we’re here to make every moment unforgettable.
            </Typography>
          </Container>
        </Box>
      </motion.div>

      {/* <SectionDivider image="https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62" /> */}
      <SectionDivider image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
      {/* Booking Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ py: 10, backgroundColor: '#f9f9f7', textAlign: 'center' }}>
          <Container>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Playfair Display, serif',
                mb: 2,
                letterSpacing: '1px',
              }}
            >
              BOOKING COMING SOON
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#666' }}>
              We’re getting everything ready for your stay. In the meantime,
              feel free to reach out with questions or requests.
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
                  color: '#fff',
                },
              }}
            >
              Contact Us
            </Button>
          </Container>
        </Box>
      </motion.div>

      {/* Testimonials Section */}
      {/* <Box sx={{ py: 10, backgroundColor: '#f9f9f7' }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: 'Playfair Display, serif',
              mb: 6,
              letterSpacing: '1px',
            }}
          >
            WHAT OUR GUESTS SAY
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    border: '1px solid #eee',
                    borderRadius: 2,
                    p: 4,
                    boxShadow: 1,
                    height: '100%',
                    backgroundColor: '#fff',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: 'italic', mb: 2 }}
                  >
                    “{testimonial.quote}”
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', color: '#666' }}
                  >
                    {testimonial.author}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}
      {/* 
      Google Maps Section (Commented Out – enable when ready)
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
      */}

      {/* Instagram Grid */}
      {/* <InstagramGrid /> */}
    </Box>
  );
};

export default Home;
