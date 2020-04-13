import React from 'react';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import { change_theme } from '../../store/ducks/themes/actions'
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';


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


const Config: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    function changeTheme() {
        dispatch(change_theme())
    }

    return (
        <div className={classes.root}>
            <h1>Configuração</h1>
            <Button type="button" onClick={changeTheme}>
                Mudar tema
            </Button>
            <Grid
                container
                spacing={4}
            >
                <Grid
                    item
                    md={7}
                    xs={12}
                >
                    
                </Grid>
                <Grid
                    item
                    md={5}
                    xs={12}
                >
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Config;