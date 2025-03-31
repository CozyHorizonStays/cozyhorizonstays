// pages/Contact.js
import React, { useState, useRef } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Divider, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_xem4sch', 'template_n5td6mo', formRef.current, 'LH9Aeix5o5N1hijMi')
      .then(() => {
        setLoading(false);
        setOpen(true);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fffefb',
        backgroundImage: 'url(https://images.unsplash.com/photo-1556742400-b5a63e27c4df)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 2, py: 6, px: { xs: 2, md: 6 } }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
                            Contact Us
                          </Typography>
                        </Box>
                      </Box>
          
          <Typography variant="body1" align="center" sx={{ maxWidth: 650, mx: 'auto', mb: 5, color: '#444' }}>
            Have a question or want to book directly? We’d love to hear from you.
            Send us a message and we’ll get back to you as soon as we can.
          </Typography>

          <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField name="first_name" fullWidth label="First Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="last_name" fullWidth label="Last Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField name="email" fullWidth label="Email Address" variant="outlined" required type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField name="message" fullWidth label="Message" variant="outlined" required multiline rows={5} />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button type="submit" variant="outlined" size="large" disabled={loading} sx={{ borderColor: '#c1a361', color: '#c1a361', '&:hover': { backgroundColor: '#c1a361', color: '#fff' } }}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
            <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
              Thank you! Your message has been sent.
            </Alert>
          </Snackbar>

          <Divider sx={{ my: 6 }} />

          <Box textAlign="center">
            <Typography variant="h5" sx={{ fontFamily: 'Playfair Display, serif', mb: 2 }}>
              Or reach out directly
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="action" />
                <Typography variant="body1" component="a" href="mailto:hello@cozyhorizonstays.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  info@cozyhorizonstays.com
                </Typography>
              </Box>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="action" />
                <Typography variant="body1">(917) 373-8225</Typography>
              </Box> */}
              {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <InstagramIcon color="action" />
                <Typography variant="body1" component="a" href="https://instagram.com/cozyhorizonstays" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  @cozyhorizonstays
                </Typography>
              </Box> */}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
