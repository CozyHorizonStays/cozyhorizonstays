import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => (
  <Container>
    <Typography variant="h3" align="center" gutterBottom>
      Contact Us
    </Typography>
    <Box component="form" noValidate autoComplete="off">
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary" size="large" type="submit">
        Send Message
      </Button>
    </Box>
  </Container>
);

export default Contact;
