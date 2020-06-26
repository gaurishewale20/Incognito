
import React from 'react';
import axios from 'axios';
import NationChart from './NationChart';


class NC_APP extends React.Component
{

    state = {
        data: {},
        subset: {}
    }


    async componentDidMount ()
    {

        const { data } = await axios.get( 'https://api.covid19india.org/data.json' );
        const india_values = data.statewise[ 0 ];
        const subset = {
            confirmed: india_values.confirmed,
            recovered: india_values.recovered,
            active: india_values.active,
            deaths: india_values.deaths
        };


        this.setState( { data: data, subset: subset } );
        //console.log( data );
        //console.log( subset );
        return ( { subset } )
    }

    render ()
    {
        const { subset } = this.state;
        return (

            <div>


                <div> < NationChart subset={ subset } /></div>
            </div>
        )


    }
}
export default NC_APP; 