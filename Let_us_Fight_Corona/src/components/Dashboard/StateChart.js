
import React from 'react';
import { Cards, CountryPicker, Chart } from '../../components';
//import { fetchData, fetchCountries} from '../../api';
import { fetchTotalData } from '../../api';
import styles from '../../App.css';
class StateChart extends React.Component
{

    state = {
        data: [],
        country: [],
        subset: {}
    }

    async componentDidMount ()
    {

        // const data = await fetchData();
        //this.setState({ data });
        // console.log( data );


        // const country_data = await fetchCountries();
        //console.log( country_data );


    }


    handleCountryChange = async ( country ) =>
    {

        const data = await fetchTotalData( country );

        const affected_state = data.filter( info => info.state === country ); //filters all the data to match the input state and we create a subset of the object data in 'subset'
        const subset = {
            confirmed: affected_state[ 0 ].confirmed,
            recovered: affected_state[ 0 ].recovered,
            active: affected_state[ 0 ].active,
            deaths: affected_state[ 0 ].deaths
        };
        //console.log( affected_state );
        //console.log( data );
        //console.log( subset );
        this.setState( { country: country, subset: subset } );
    }



    render ()
    {
        //console.log('in render');
        //console.log('subset: ' + subset);
        const { subset, country } = this.state;
        /*console.log('subset: ' + subset);
        console.log('subset.confirmed: ' + subset.confirmed);
        console.log('subset.recovered: ' + subset.recovered);
        console.log('subset.active: ' + subset.active);
        console.log('subset.deaths: ' + subset.deaths);*/
        return (
            <div>
                <p />
                <h3>State and Union Territory Specific Chart </h3>
                <hr /><p />
                <div className={ styles.country }><CountryPicker handleCountryChange={ this.handleCountryChange } /></div>
                <div className={ styles.container }>

                    <Chart subset={ subset }
                        country={ country } />
                    <Cards subset={ subset } />
                </div>
            </div>
        );

    }

}

export default StateChart;
