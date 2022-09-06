import React from "react";
import Introduction from "./components/Introduction";
import TabPanel from "./components/TabPanel";
import IntroCard from "./components/IntroCard";
import MemeCard from "./components/MemeCard";
import Navigation from "./components/Navigation";
import {
  createTheme,
  CssBaseline,
  Grid,
  colors,
  ThemeProvider
} from "@mui/material";
import { useState } from "react";

const lightTheme = createTheme({
  type: "Light Mode",
  palette: {
    primary: {
      main: "#E67AD6"
    }
  }
});
const darkTheme = createTheme({
  type: "Dark Mode",
  palette: {
    primary: {
      main: "#E67AD6"
    },
    background: { default: colors.grey[900], paper: colors.grey[800] },
    text: {
      primary: colors.grey[200]
    }
  }
});

export default function App() {
  const [mode, setMode] = useState(lightTheme);

  const handleThemeChange = () => {
    setMode(mode === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={mode}>
      <CssBaseline />
      <Navigation mode={mode} themeChange={handleThemeChange} />
      <Grid
        alignItems="center"
        justifyContent="space-evenly"
        container
        sx={{ height: "100vh" }}
      >
        <Introduction name="Preston" />
        <TabPanel content={[<IntroCard />, <MemeCard />]} />
      </Grid>
    </ThemeProvider>
  );
}
