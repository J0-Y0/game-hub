import { Box, createTheme, Grid, Paper, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.css'
import { useState } from "react";
import GameGrid from "./components/GameGrid";

function App() {
 const [mode, setMode] = useState("dark");
  type PaletteMode = "light" | "dark";
  const theme = createTheme({
   palette: {
     mode: mode as PaletteMode,
   },
 });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,

          margin: 0,
        }}
      >
        <Navbar mode={mode} setMode={setMode} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <Paper sx={{ p: 2 }}>dsds</Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <GameGrid />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App
