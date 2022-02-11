import React from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ButtonSwitchTheme } from "./btn_changeThemeContext";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export const Navbar = (props) => {

    const items = [{id: 1, path:'/', text:'Bienvenue'}, {id:2, path:'/works/list', text:"Travaux"}, {id:3, path:'/about',text:"À propos"}]
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };


    return (


      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {items.map(item => (
                    <Button to={item.path} key={item.id} component={Link} variant="h6" sx={{ m: 2, display: 'block', underline: 'none' }} onClick={handleCloseNavMenu} > 
                      {item.text} 
                    </Button>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              AGENCY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {items.map((item) => (
                <Button to={item.path} key={item.id} component={Link} variant="h6" sx={{ m: 2, display: 'block', underline: 'none' }} onClick={handleCloseNavMenu} > 
                  {item.text} 
                </Button>
              ))}
            </Box>
            <ButtonSwitchTheme/>
           </Toolbar>
        </AppBar>
      </Box>
    );
}