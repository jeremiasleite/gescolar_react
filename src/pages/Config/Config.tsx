import React from 'react';
import { makeStyles, Theme, createStyles, CardContent, Card, CardHeader, Divider } from '@material-ui/core';
import { change_theme } from '../../store/ducks/themes/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { ApplicationState } from '../../store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            paddingTop: theme.spacing(2),

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


const Config: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const prefersDarkMode = useSelector((state: ApplicationState) => state.themes.data);

    function changeTheme() {
        dispatch(change_theme())
    }

    return (
        <Layout>
            <div className={classes.root}>
                <Grid container spacing={4}>                    
                    <Grid item xs={4}>
                        <Card>
                            <CardHeader
                                subheader="Gerencie as configurações gerais"
                                title="Configurações Gerais"
                            />
                            <Divider />
                            <CardContent>
                                <FormControl component="fieldset">
                                    <FormGroup aria-label="position" row>
                                        <FormControlLabel
                                            value="Modo Escuro"
                                            control={<Switch color="primary" onChange={changeTheme} checked={prefersDarkMode === 'dark' ? true : false} />}
                                            label="Modo Escuro"
                                            labelPlacement="start"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout>

    );
}

export default Config;