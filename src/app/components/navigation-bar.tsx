import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { colors, IconButton } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles((theme: ThemeProvider) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavigationBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'} className={`${classes.link} ${classes.title}`}>
            LOGO
          </Link>
          <Button color="inherit">
            <Link to={'/'} className={`${classes.link}`}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/about'} className={`${classes.link}`}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/dashboard'} className={`${classes.link}`}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/login'} className={`${classes.link}`}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
