import { Box, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/Hero";
import About from "./components/About/index";
import Experiences from "./components/Experiences/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fafaff",
      contrastText: "#1c1c1c",
    },
    secondary: {
      main: "#eef0f2",
    },
    text: {
      primary: "#EDF5E1",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Hero />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            bgcolor: "secondary.main",
            py: "1rem",
          }}
        >
          <About />
          {/* <Experiences /> */}
          <Projects />
          <Skills />
          {/* <Contact /> */}
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
