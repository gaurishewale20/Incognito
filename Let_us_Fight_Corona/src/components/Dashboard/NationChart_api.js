<<<<<<< HEAD

=======
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
import React from 'react';
import axios from 'axios';
import NationChart from './NationChart';


<<<<<<< HEAD
class NC_APP extends React.Component
{
=======
class NC_App extends React.Component {
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139

    state = {
        data: {},
        subset: {}
    }


<<<<<<< HEAD
    async componentDidMount ()
    {

        const { data } = await axios.get( 'https://api.covid19india.org/data.json' );
        const india_values = data.statewise[ 0 ];
=======
    async componentDidMount() {

        const { data } = await axios.get('https://api.covid19india.org/data.json');
        const india_values = data.statewise[0];
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
        const subset = {
            confirmed: india_values.confirmed,
            recovered: india_values.recovered,
            active: india_values.active,
            deaths: india_values.deaths
        };


<<<<<<< HEAD
        this.setState( { data: data, subset: subset } );
        //console.log( data );
        //console.log( subset );
        return ( { subset } )
    }

    render ()
    {
=======
        this.setState({ data: data, subset: subset });
        console.log(data);
        console.log(subset);
        return ({ subset })
    }

    render() {
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
        const { subset } = this.state;
        return (

            <div>


<<<<<<< HEAD
                <div> < NationChart subset={ subset } /></div>
=======
                <div> < NationChart subset={subset}/></div>
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
            </div>
        )


    }
<<<<<<< HEAD
}
export default NC_APP; 
=======






}

         export default NC_App;  
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
