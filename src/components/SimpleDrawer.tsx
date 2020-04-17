import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import PersonAddIcon from '@material-ui/icons/PersonAdd';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';

import Profile from './SideBar/components/Profile';
import { Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
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
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
  }),
);

interface Page {
  title: string,
  href: string,
  icon: any
}


const SimpleDrawer: React.FC = (props) => {
  const classes = useStyles();

  const [path, setPath] = useState("");

  let location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location, setPath]);

  const activetRoute = (route: string) => {
    return route === path;
  }

  const pages: Page[] = [
    {
      title: 'Início',
      href: '/',
      icon: <HomeIcon />
    },
    {
      title: 'Usuário',
      href: '/usuarios',
      icon: <PeopleIcon/>
    },
    {
      title: 'Configurações',
      href: '/configuracao',
      icon: <SettingsIcon />
    },
    {
      title: 'Sair',
      href: '/login',
      icon: <ExitToAppIcon />
    }
  ]

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Grid container direction="row" justify='center'>
            <Grid item xs={6}>
              <Profile />
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <List >
            {pages.map((item, index) => (
              <ListItem button component={Link} to={item.href} selected={activetRoute(item.href)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}

          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SimpleDrawer;