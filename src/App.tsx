import {
  Box,
  Chip,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  styled,
  Slide,
  Fade,
  IconButton,
  Tooltip,
  Paper,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformMenu from "./components/PlatformMenu";
import OrderingMenu from "./components/OrderingMenu";
import { GameQuery } from "./hooks/UseGames";
import Hero from "./components/Hero";
import { Close, FilterAlt } from "@mui/icons-material";
import "./App.css";

// Styled components
const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 12,
  fontWeight: 600,
  padding: theme.spacing(0.5),
  "& .MuiChip-deleteIcon": {
    color: "inherit",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const FilterBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(3),
  position: "sticky",
  top: 0,
  zIndex: 10,
}));

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#3a7bd5" : "#12c2e9",
      },
      secondary: {
        main: mode === "light" ? "#f44336" : "#ff6b6b",
      },
      background: {
        default: mode === "light" ? "#f8fafc" : "#0d1117",
        paper: mode === "light" ? "#ffffff" : "#161b22",
      },
    },
    typography: {
      fontFamily: "'Poppins', Roboto, sans-serif",
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateY(-1px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            margin: "16px 0",
            backgroundColor:
              mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)",
          },
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.body.classList.toggle("dark-mode", mode === "dark");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const clearAllFilters = () => {
    setGameQuery({} as GameQuery);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero mode={mode} setMode={setMode} />

      <Box
        id="games-content"
        sx={{
          display: "flex",
          flexDirection: "column",

          minHeight: "100vh",
        }}
      >
        {/* Mobile Sidebar Toggle */}
        {isMobile && (
          <Tooltip title="Toggle filters">
            <IconButton
              onClick={toggleMobileSidebar}
              sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 1200,
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {mobileSidebarOpen ? <Close /> : <FilterAlt />}
            </IconButton>
          </Tooltip>
        )}

        <Box sx={{ display: "flex", flex: 1 }}>
          {/* Sidebar */}
          {!isMobile ? (
            <Box
              sx={{
                width: 280,
                flexShrink: 0,
                borderRight: `1px solid ${theme.palette.divider}`,
                bgcolor: theme.palette.background.paper,
                overflowY: "auto",
                height: "calc(100vh - 64px)",
                position: "sticky",
                top: 64,
              }}
            >
              <GenresList
                onSelectedGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genre })
                }
                selectedGenre={gameQuery.genre}
              />
            </Box>
          ) : (
            <Slide
              direction="right"
              in={mobileSidebarOpen}
              mountOnEnter
              unmountOnExit
            >
              <Paper
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 1100,
                  width: "80%",
                  maxWidth: 300,
                  height: "100vh",
                  overflowY: "auto",
                  boxShadow: 24,
                }}
              >
                <Box sx={{ p: 2 }}>
                  <GenresList
                    onSelectedGenre={(genre) => {
                      setGameQuery({ ...gameQuery, genre });
                      setMobileSidebarOpen(false);
                    }}
                    selectedGenre={gameQuery.genre}
                  />
                </Box>
              </Paper>
            </Slide>
          )}

          {/* Main Content */}
          <Box
            sx={{
              flex: 1,
              overflowX: "hidden",
              px: { xs: 2, md: 4 },
              py: 6,
              bgcolor: theme.palette.background.default,
            }}
          >
            <FilterBar>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  gap: 2,

                  flexWrap: "wrap",
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
              </Box>
            </FilterBar>

            {/* Active Filters */}
            {(gameQuery.genre || gameQuery.platform || gameQuery.ordering) && (
              <Fade in>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    flexWrap: "wrap",
                  }}
                >
                  {gameQuery.genre && (
                    <StyledChip
                      label={gameQuery.genre.name}
                      size="medium"
                      onDelete={() =>
                        setGameQuery({ ...gameQuery, genre: null })
                      }
                      color="primary"
                      deleteIcon={<Close fontSize="small" />}
                    />
                  )}
                  {gameQuery.platform && (
                    <StyledChip
                      label={gameQuery.platform.name}
                      size="medium"
                      onDelete={() =>
                        setGameQuery({ ...gameQuery, platform: null })
                      }
                      color="primary"
                      deleteIcon={<Close fontSize="small" />}
                    />
                  )}
                  {gameQuery.ordering && (
                    <StyledChip
                      label={gameQuery.ordering.replace(/-/g, " ")}
                      size="medium"
                      onDelete={() =>
                        setGameQuery({ ...gameQuery, ordering: null })
                      }
                      color="primary"
                      deleteIcon={<Close fontSize="small" />}
                    />
                  )}
                  <Button
                    variant="text"
                    size="small"
                    onClick={clearAllFilters}
                    sx={{
                      ml: "auto",
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                    }}
                  >
                    Clear all
                  </Button>
                </Box>
              </Fade>
            )}

            <GameGrid gameQuery={gameQuery} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
