import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ( { subset: { active, confirmed, deaths, recovered } } ) =>
{

    if ( !deaths )
    {
        return ( <div className="container-fluid">
            <img src="clickme.gif" alt="Loading..." />
        </div> );
    }
    return (
        <div className={ styles.container } >
            <Grid container spacing={ 2 } justify="center">
                <Grid item component={ Card } xs={ 12 } md={ 4 } className={ cx( styles.card, styles.confirmed ) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h5'>
                            <CountUp start={ 0 } end={ confirmed } duration={ 2.0 } separator="," />
                        </Typography>

                        <Typography variant="body2">Number of confirmed cases of COVID-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={ Card } xs={ 12 } md={ 4 } className={ cx( styles.card, styles.active ) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h5'>
                            <CountUp start={ 0 } end={ active } duration={ 2.0 } separator="," />
                        </Typography>

                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={ Card } xs={ 12 } md={ 4 } className={ cx( styles.card, styles.recovered ) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={ 0 } end={ recovered } duration={ 2.0 } separator="," />
                        </Typography>

                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={ Card } xs={ 12 } md={ 4 } className={ cx( styles.card, styles.deaths ) }>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={ 0 } end={ deaths } duration={ 2.0 } separator="," />
                        </Typography>

                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>

                </Grid>

            </Grid>



        </div>
    );
}

export default Cards;