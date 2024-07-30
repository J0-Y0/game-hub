import { AppBar, Avatar, Box, Button, Fab, IconButton, Switch, Toolbar, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png'
import { DarkMode, Light, LightMode } from '@mui/icons-material';
interface Props  {
  setMode: (color: string) => void;
  mode:string
}
const Navbar = ({mode, setMode}:Props) => {
  return (
    <AppBar position="static" sx={{ background: "#ffca28" }}>
      <Toolbar>
        <Box flexGrow={1} display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, mx: 0 }}
          >
            <Avatar alt="yosef logo" src={Logo} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            color="success"
            href="#"
            sx={{
              mr: 2,
              display: { sm: "flex", xs: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontStyle: "bold",
              letterSpacing: ".3rem",
              color: "inherit",

              textDecoration: "none",
            }}
          >
            GameHub
          </Typography>
        </Box>

        <Button color="inherit">Logins</Button>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => setMode(mode == "light" ? "dark" : "light")}
        >
          {mode == "light" ? <DarkMode /> : <LightMode />}
        </Fab>
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
