import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png'
const Navbar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,mx:0 }}
          >
            <Avatar alt="yosef logo" src={Logo} /> 
            
          </IconButton>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { md: 'flex', xs: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Hub
          </Typography>

          <Button color="inherit">Logins</Button>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar
