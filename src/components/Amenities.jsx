// pages/Amenities.js
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import KeyIcon from '@mui/icons-material/Key';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShowerIcon from '@mui/icons-material/Shower';
import bedRoom from '../Assets/bedRoom.png';

const amenities = [
  { icon: <WifiIcon fontSize="large" />, title: 'Complementary Wi-Fi' },
  { icon: <KitchenIcon fontSize="large" />, title: 'Full Kitchen' },
  { icon: <KeyIcon fontSize="large" />, title: 'Keyless Entry' },
  { icon: <AcUnitIcon fontSize="large" />, title: 'Air Conditioning' },
  { icon: <TvIcon fontSize="large" />, title: 'Smart TV' },
  { icon: <DirectionsCarIcon fontSize="large" />, title: 'Free Parking' },
  { icon: <ShowerIcon fontSize="large" />, title: 'Essential Toiletries' },
];

const galleryImages = [
  { src: 'https://source.unsplash.com/random/400x400?cabin,1', location: 'Adirondacks, NY' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,2', location: 'Catskills, NY' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,3', location: 'Hudson Valley' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,4', location: 'Lake George' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,5', location: 'Finger Lakes' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,6', location: 'Woodstock, NY' },
];

// ✅ SectionDivider Component (must be outside main function)
const SectionDivider = ({ image, children }) => (
  <Box
    sx={{
      position: 'relative',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      aspectRatio: '16 / 9', // Ensures full image is visible in proper proportions
      my: 10,
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {/* Optional dark overlay for contrast */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '20px',
        zIndex: 1,
      }}
    />

    {/* Text or children content */}
    <Box
      sx={{
        zIndex: 2,
        color: '#fff',
        px: 2,
      }}
    >
      {children}
    </Box>
  </Box>
);

const Amenities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ backgroundColor: '#fffefb' }}>
      {/* Header Background Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562496147-9255ede9a5b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRvd2Vsc3xlbnwwfHwwfHx8MA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: { xs: 8, md: 12 },
          px: 2,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            borderRadius: 2,
            py: 6,
            px: { xs: 2, md: 6 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  borderBottom: '3px solid #c1a361',
                  pb: 1,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Playfair Display, serif',
                    letterSpacing: '1px',
                    fontWeight: 500,
                  }}
                >
                  AMENITIES
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body1"
              align="center"
              sx={{ maxWidth: 650, mx: 'auto', mb: 5, color: '#444' }}
            >
              Cozy Horizon Stays offers all the modern comforts you need to relax, recharge, and enjoy your stay.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {amenities.map((amenity, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={1} sx={{ textAlign: 'center', py: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 1 }}>{amenity.icon}</Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {amenity.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Optional contact button */}
            {/* 
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{
                display: 'block',
                mx: 'auto',
                mt: 2,
                borderColor: '#c1a361',
                color: '#c1a361',
                '&:hover': { backgroundColor: '#c1a361', color: '#fff' },
              }}
            >
              Contact Us to Book
            </Button>
            */}
          </motion.div>
        </Container>
      </Box>

      {/* 🔸 Section Divider with bedroom image and overlay text */}
      <SectionDivider image={bedRoom}>
        {/* Optional alternate text */}
        {/* <Typography variant="h5" sx={{ fontWeight: 600, mt: 2, textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}>
          Ready to unwind with us?
        </Typography> */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          We look forward to your stay!
        </Typography>
      </SectionDivider>

      {/* 🔸 Gallery Section (Commented Out – enable if needed) */}
      {/* 
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
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
            FROM OUR GALLERY
          </Typography>
          <Grid container spacing={2}>
            {galleryImages.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  component="img"
                  src={item.src}
                  alt={`Gallery ${index}`}
                  onClick={() => setSelectedImage(item)}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      */}

      {/* 🔸 Dialog for Expanded Gallery Image */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} maxWidth="md">
        <DialogContent>
          {selectedImage && (
            <Box>
              <Box
                component="img"
                src={selectedImage.src}
                alt="Expanded Gallery"
                sx={{ width: '100%', mb: 2, borderRadius: 2 }}
              />
              <Typography variant="body2" align="center" color="text.secondary">
                📍 {selectedImage.location}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Amenities;
