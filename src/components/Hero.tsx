import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Tooltip,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UseGenres from "../hooks/UseGenres";
// import useGenres from "../hooks/useGenres"; // Import your genre hook
//
interface Props {
  setMode: (color: string) => void;
  mode: string;
}

const Hero = ({ mode, setMode }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const { data: genres } = UseGenres(); // Get real genres from API

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToGames = () => {
    const gamesSection = document.getElementById("games-content");
    gamesSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Use first 4 genres from API or fallback to empty array
  const gameCategories = genres?.slice(0, 4) || [];

  return (
    <>
      {/* Sticky App Bar */}
      <AppBar
        position={scrolled ? "fixed" : "static"}
        elevation={0}
        sx={{
          background:
            mode === "light"
              ? "linear-gradient(to right, rgba(255,255,255,0.97), rgba(245,247,250,0.97))"
              : "linear-gradient(to right, rgba(15,32,39,0.97), rgba(32,58,67,0.97))",
          color: mode === "light" ? "#000" : "#fff",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
          zIndex: theme.zIndex.drawer + 1,
          borderBottom: `1px solid ${
            mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
          }`,
          boxShadow: scrolled ? theme.shadows[4] : "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Left Side: Logo + Brand */}
          <Box display="flex" alignItems="center">
            <IconButton edge="start" sx={{ p: 0, mr: 1 }}>
              <Avatar
                alt="GameHub Logo"
                src={Logo}
                sx={{
                  width: 40,
                  height: 40,
                  border: `2px solid ${
                    mode === "light"
                      ? theme.palette.primary.main
                      : theme.palette.secondary.main
                  }`,
                }}
              />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                fontWeight: 800,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                background:
                  mode === "light"
                    ? "linear-gradient(45deg, #3a7bd5 0%, #00d2ff 100%)"
                    : "linear-gradient(45deg, #12c2e9 0%, #c471ed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GameHub
            </Typography>
          </Box>

          {/* Right Side: Theme Toggle */}
          <Box display="flex" alignItems="center" gap={2}>
            <Tooltip title="Toggle theme">
              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                color="inherit"
                sx={{
                  transition: "all 0.3s ease",
                  backgroundColor:
                    mode === "light"
                      ? theme.palette.primary.light
                      : theme.palette.secondary.light,
                  "&:hover": {
                    backgroundColor:
                      mode === "light"
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                    transform: "rotate(30deg)",
                  },
                }}
              >
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          pt: scrolled ? 16 : 0,
          minHeight: "90vh",
          background:
            mode === "light"
              ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
              : "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
          color: mode === "light" ? "#000" : "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  fontFamily: "'Poppins', sans-serif",
                  background:
                    mode === "light"
                      ? "linear-gradient(45deg, #3a7bd5 0%, #00d2ff 100%)"
                      : "linear-gradient(45deg, #12c2e9 0%, #c471ed 50%, #f64f59 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Discover Your Next Favorite Game
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  opacity: 0.9,
                }}
              >
                GameHub is your ultimate destination for all gaming platforms
                and genres. Explore thousands of titles, read reviews, and
                connect with fellow gamers.
              </Typography>
              <Box display="flex" gap={2} sx={{ mt: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={scrollToGames}
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      fontWeight: 700,
                      textTransform: "none",
                      background:
                        mode === "light"
                          ? "linear-gradient(to right, #3a7bd5, #00d2ff)"
                          : "linear-gradient(to right, #12c2e9, #c471ed)",
                      color: "#fff",
                      boxShadow: `0 4px 20px ${
                        mode === "light"
                          ? "rgba(58,123,213,0.3)"
                          : "rgba(18,194,233,0.3)"
                      }`,
                      "&:hover": {
                        opacity: 0.9,
                        boxShadow: `0 6px 24px ${
                          mode === "light"
                            ? "rgba(58,123,213,0.4)"
                            : "rgba(18,194,233,0.4)"
                        }`,
                      },
                    }}
                  >
                    Browse Games
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                ></motion.div>
              </Box>
            </Grid>
            {!isMobile && gameCategories.length > 0 && (
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    background:
                      mode === "light"
                        ? "linear-gradient(145deg, #e6e9f0 0%, #eef1f5 100%)"
                        : "linear-gradient(145deg, #1e2a3a 0%, #1a1a2e 100%)",
                    border: `1px solid ${
                      mode === "light"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.3)"
                    }`,
                    overflow: "hidden",
                    position: "relative",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background:
                        mode === "light"
                          ? "radial-gradient(circle, rgba(58,123,213,0.2) 0%, rgba(0,210,255,0.1) 100%)"
                          : "radial-gradient(circle, rgba(18,194,233,0.2) 0%, rgba(196,113,237,0.1) 50%, rgba(246,79,89,0.1) 100%)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2,
                    }}
                  >
                    {gameCategories.map((genre) => (
                      <motion.div key={genre.id} whileHover={{ y: -5 }}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 3,
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            backgroundColor:
                              mode === "light"
                                ? theme.palette.background.paper
                                : theme.palette.grey[800],
                            "&:hover": {
                              transform: "translateY(-5px)",
                              boxShadow: `0 10px 20px ${
                                mode === "light"
                                  ? "rgba(0,0,0,0.1)"
                                  : "rgba(255,255,255,0.05)"
                              }`,
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={genre.image_background}
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: "50%",
                              mb: 2,
                              objectFit: "cover",
                            }}
                            alt={genre.name}
                          />
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {genre.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              opacity: 0.7,
                              textAlign: "center",
                              mt: 1,
                            }}
                          >
                            {genre.games_count.toLocaleString()} games
                          </Typography>
                        </Paper>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
