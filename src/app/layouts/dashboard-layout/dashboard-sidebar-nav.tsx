import React, { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { ExitToApp, Settings } from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 240;
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: 'none', color: 'inherit' },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
);

const DashboardSideNav = () => {
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  console.log(params.get('name'));
  const classes = useStyles();

  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to={'/dashboard'} className={classes.logoWithLink}>
            Logo
          </Link>
        </Toolbar>
        <div className={classes.drawerContainer}>
          <List>
            <Link
              to={'/dashboard/settings-and-privacy'}
              className={classes.link}
            >
              <ListItem button>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary={'settings and privacy'} />
              </ListItem>
            </Link>
            <a className={classes.link} href={'/'}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary={'logout'} />
              </ListItem>
            </a>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardSideNav;
