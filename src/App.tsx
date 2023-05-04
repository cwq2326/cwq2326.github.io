import {
  Box,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import NavBar from "./components/layout/NavBar";
import FloatingButtons from "./components/layout/FloatingButtons";
import Hero from "./components/Hero";
import About from "./components/About/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects";
import Footer from "./components/layout/Footer";

let theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
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
        <FloatingButtons />
        <Hero />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            bgcolor: "secondary.main",
            py: "1rem",
          }}
        >
          <About />
          <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
          <Projects />
          <Divider flexItem sx={{ width: "80%", alignSelf: "center" }} />
          <Skills />
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
