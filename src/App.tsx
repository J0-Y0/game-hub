import { Box, createTheme, Grid, Paper, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.css'
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/UseGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./hooks/usePlatform";

function App() {
  const [mode, setMode] = useState("dark");
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  
  type PaletteMode = "light" | "dark";
  const theme = createTheme({
    palette: {
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
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

        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sx={{ display: { xs: "none", sm: "block" } }}
            sm={3}
            md={2}
          >
            <GenresList
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={10}
            margin={0}
            padding={0}
            sx={{ padding: 0, margin: 0 }}
          >
            <PlatformMenu
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            ></PlatformMenu>
            <GameGrid selectedPlatform = {selectedPlatform} selectedGenre={selectedGenre} />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App
