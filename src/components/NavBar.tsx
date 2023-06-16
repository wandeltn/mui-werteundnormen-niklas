import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import { routes } from '../routes';

//const pages = ['Gottesvorstellungen', 'Essensvorschriften', 'Quiz', 'Quellenverzeichnis'];

var pages: Array<string> = []

routes.map((routeList) => {
    routeList.map((route) => {
        pages.push(route.title)
    })
})


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    function HiddenMenuItem(props: {
        "hidden": boolean, 
        "key": string, 
        "title": string, 
        "path": string
        children?: React.ReactNode
    }) {
        if (props.hidden) {
            return <></>
        } else {
            return (
                <MenuItem 
                    key={props.key} 
                    onClick={handleCloseNavMenu}
                    href={props.path}
                    >
                    {props.children}
                    <Link textAlign="center" href={props.path}>{props.title}</Link>
                </MenuItem>
            )
        }
    }

    function HiddenButton(props: {
            "hidden": boolean, 
            "key": string,
            "title": string, 
            "path": string, 
            children?: React.ReactNode;
    }) {
        if (props.hidden) {
            return <></>
        } else {
            return (
                <Button
                    key={props.key}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    href={props.path}
                    hidden
                >
                    {props.title}
                </Button>
            )
        }
    }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SynagogueIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Judentum
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

                {routes.map((route) => (
                
                    route.map((linkDest) =>{
                        return (
                            <HiddenMenuItem 
                                hidden={linkDest.hidden} 
                                key={linkDest.key} 
                                title={linkDest.title}
                                path={linkDest.path}/>
                        )
                    })
                ))}     
            </Menu>
          </Box>
          <SynagogueIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Judentum
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((route) => (
                
                route.map((linkDest) =>{
                    return(
                        <HiddenButton 
                            hidden={linkDest.hidden}
                            key={linkDest.key}
                            path={linkDest.path}
                            title={linkDest.title}/>
                    )
                })
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;