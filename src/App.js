import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import Amenities from './components/Amenities';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;