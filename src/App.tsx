import { Box, createTheme, Grid, Paper, styled, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.css'
import { useState } from "react";

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
          
           margin:0
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} p={0} m={0}>
            <Navbar mode={mode} setMode={setMode} />
            
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2 }}>xs=4
              lorem
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App
