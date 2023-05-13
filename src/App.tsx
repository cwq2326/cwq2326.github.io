import { Box, Divider, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

import About from './components/About/index';
import Experiences from './components/Experiences/index';
import Hero from './components/Hero';
import FloatingButtons from './components/Layouts/FloatingButtons';
import Footer from './components/Layouts/Footer';
import NavBar from './components/Layouts/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills/index';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1200,
      xl: 1500,
    },
  },
  palette: {
    primary: {
      main: '#fafaff',
      contrastText: '#1c1c1c',
    },
    secondary: {
      main: '#eef0f2',
    },
    text: {
      primary: '#EDF5E1',
    },
  },
});

const sections: JSX.Element[] = [
  <About key="about" />,
  <Experiences key="experiences" />,
  <Projects key="projects" />,
  <Skills key="skills" />,
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <FloatingButtons />
        <Hero />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            bgcolor: 'secondary.main',
            py: '1rem',
          }}
        >
          {sections.map((el: JSX.Element, index: number) => (
            <>
              {el}
              {index < sections.length - 1 && (
                <Divider flexItem sx={{ width: '80%', alignSelf: 'center' }} />
              )}
            </>
          ))}
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
