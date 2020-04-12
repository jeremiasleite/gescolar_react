import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SimpleDrawer from './SimpleDrawer';
import MyAppBar from './MyAppBar';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },    
    content: {
      flexGrow: 1,      
      padding: theme.spacing(8),
    },
  }),
);

const Layout: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar/>
      <SimpleDrawer/>
      <Toolbar/>
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;