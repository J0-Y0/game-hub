import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import Logo from "../assets/images/logo.png";

interface Props {
  setMode: (color: string) => void;
  mode: string;
}

const Navbar = ({ mode, setMode }: Props) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: mode === "light" ? "#ffffff" : "#121212",
        color: mode === "light" ? "#000" : "#fff",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side: Logo + Brand */}
        <Box display="flex" alignItems="center">
          <IconButton edge="start" sx={{ p: 0, mr: 1 }}>
            <Avatar alt="Yosef Logo" src={Logo} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            GameHub
          </Typography>
        </Box>

        {/* Right Side: Login + Theme Toggle */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button variant="outlined" color="inherit" size="small">
            Login
          </Button>
          <Tooltip title="Toggle theme">
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
              sx={{
                transition: "0.3s",
                "&:hover": {
                  backgroundColor:
                    mode === "light" ? "#f0f0f0" : "rgba(255,255,255,0.1)",
                },
              }}
            >
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
