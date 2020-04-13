import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',            
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);


const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Home</h1>
        </div>        
    );
}

export default Home;