import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import Amenities from './components/Amenities';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#F0EDE4', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
        <Footer />
    </Router>
  );
}

export default App;