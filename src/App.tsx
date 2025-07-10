import {
  Box,
  Chip,
  createTheme,
  Divider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformMenu from "./components/PlatformMenu";
import { GameQuery } from "./hooks/UseGames";
import OrderingMenu from "./components/OrderingMenu";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const theme = createTheme({
    palette: {
      mode,
      secondary: {
        main: "#f44336",
      },
    },
  });

  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Top Navbar */}
        <Navbar mode={mode} setMode={setMode} />

        {/* Main Layout */}
        <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Sidebar */}
          {isSmUp && (
            <Box
              sx={{
                width: 240,
                overflowY: "auto",
                borderRight: "1px solid #ddd",
                bgcolor: mode === "light" ? "#f9f9f9" : "#1e1e1e",
              }}
            >
              <GenresList
                onSelectedGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genre })
                }
                selectedGenre={gameQuery.genre}
              />
            </Box>
          )}

          {/* Main Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              padding: 2,
              bgcolor: theme.palette.background.default,
            }}
          >
            <PlatformMenu
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <OrderingMenu
              setOrdering={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
            />

            {/* Filter Chips */}
            <Divider sx={{ my: 1 }}>
              {gameQuery.genre && (
                <Chip
                  label={gameQuery.genre.name}
                  size="small"
                  onDelete={() => setGameQuery({ ...gameQuery, genre: null })}
                />
              )}
              {gameQuery.platform && (
                <Chip
                  label={gameQuery.platform.name}
                  size="small"
                  onDelete={() =>
                    setGameQuery({ ...gameQuery, platform: null })
                  }
                />
              )}
              {gameQuery.ordering && (
                <Chip
                  label={gameQuery.ordering}
                  size="small"
                  onDelete={() =>
                    setGameQuery({ ...gameQuery, ordering: null })
                  }
                />
              )}
            </Divider>

            <GameGrid gameQuery={gameQuery} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
