import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b3d',
    },
    secondary: {
      main: '#2c3e50',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
      <section id="hero"> <Hero /> </section>
        <section id="features"><Features /></section>
        <section id="solutions"><Solutions /></section>
        <section id="pricing"><Pricing /></section>
      </Container>
      <section id="about"><Footer /></section>
    </ThemeProvider>
  );
}

export default App;