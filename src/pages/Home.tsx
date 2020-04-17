import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Paper } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 150
        },
    }),
);


const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <Layout>
            <div className={classes.root}>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12}>
                        <h1>Home</h1>
                    </Grid>

                    {[0, 1, 2, 4].map((value) => (
                        <Grid key={value} item xs={3}>
                            <Paper elevation={3} className={classes.paper} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    );
}

export default Home;