// pages/Amenities.js
import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, Dialog, DialogContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WifiIcon from '@mui/icons-material/Wifi';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const amenities = [
  { icon: <WifiIcon fontSize="large" />, title: 'Free Wi-Fi' },
  { icon: <KitchenIcon fontSize="large" />, title: 'Full Kitchen' },
  { icon: <LocalFireDepartmentIcon fontSize="large" />, title: 'Fire Pit' },
  { icon: <AcUnitIcon fontSize="large" />, title: 'Air Conditioning' },
  { icon: <TvIcon fontSize="large" />, title: 'Smart TV' },
  { icon: <DirectionsCarIcon fontSize="large" />, title: 'Free Parking' },
];

const galleryImages = [
  { src: 'https://source.unsplash.com/random/400x400?cabin,1', location: 'Adirondacks, NY' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,2', location: 'Catskills, NY' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,3', location: 'Hudson Valley' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,4', location: 'Lake George' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,5', location: 'Finger Lakes' },
  { src: 'https://source.unsplash.com/random/400x400?cabin,6', location: 'Woodstock, NY' },
];

const Amenities = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box sx={{ backgroundColor: '#fffefb' }}>
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1583337130417-3346a1b1d2ce)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: { xs: 8, md: 12 },
          px: 2,
        }}
      >
        <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 2, py: 6, px: { xs: 2, md: 6 } }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="h3" align="center" sx={{ fontFamily: 'Playfair Display, serif', mb: 3, letterSpacing: '1px', fontWeight: 500 }}>
              AMENITIES
            </Typography>
            <Typography variant="body1" align="center" sx={{ maxWidth: 650, mx: 'auto', mb: 5, color: '#444' }}>
              Cozy Horizon Stays offers all the modern comforts you need to relax, recharge, and enjoy your stay.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {amenities.map((amenity, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card elevation={1} sx={{ textAlign: 'center', py: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 1 }}>{amenity.icon}</Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{amenity.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" align="center" sx={{ mt: 6, fontWeight: 500 }}>
              Why Guests Love Us
            </Typography>
            <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mt: 2, mb: 4, color: '#666' }}>
              "The cabin was even more beautiful in person! Every detail was thoughtfully placed. Super clean, cozy, and peaceful." – Sofia R.
            </Typography>

            <ul style={{ textAlign: 'left', maxWidth: 600, margin: '0 auto', paddingLeft: '1rem', color: '#555' }}>
              <li>✔️ Comfortable beds & soft linens</li>
              <li>✔️ Pet-friendly environment</li>
              <li>✔️ Surrounded by nature, perfect for unplugging</li>
              <li>✔️ Great for remote work or weekend getaways</li>
            </ul>

            <Typography variant="h5" align="center" sx={{ mt: 6, fontWeight: 500 }}>
              Ready to unwind with us?
            </Typography>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{ display: 'block', mx: 'auto', mt: 2, borderColor: '#c1a361', color: '#c1a361', '&:hover': { backgroundColor: '#c1a361', color: '#fff' } }}
            >
              Contact Us to Book
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Section Divider */}
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518837695005-2083093ee35b)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          width: '100%',
          mt: 10,
        }}
      />

      {/* Instagram-style Grid */}
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontFamily: 'Playfair Display, serif', mb: 6, letterSpacing: '1px' }}>
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
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
