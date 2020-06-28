import React from 'react';
import { Table } from "reactstrap";
import StateTableRow from './StateTableRow';


// Table for Daily State Data

class DashJS extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            data: [],
        }
    }


    componentDidMount ()
    {
        this.fetchData();
    }
    fetchData ()
    {
        fetch( "https://api.covid19india.org/data.json" )
            .then( response => response.json() )
            .then( parsedJSON => parsedJSON.statewise.map( stateinfo => (
                {
                    statecode: `${ stateinfo.statecode }`,
                    statename: `${ stateinfo.state }`,
                    recovered: `${ stateinfo.recovered }`,
                    confirmed: `${ stateinfo.confirmed }`,
                    deaths: `${ stateinfo.deaths }`,
                    active: `${ stateinfo.active }`,
                    lastUpdate: `${ stateinfo.lastupdatedtime }`
                }
            ) ) )
            .then( data => this.setState( {
                data
            } ) )

            .catch( error => console.log( 'parsing failed', error ) )

    }
    render ()
    {
        const { data } = this.state;




        return (
            <div className="container-fluid">
                <p />
                <h3>  State and Union Territory Tabular Data</h3>
                <div className="container-fluid">
                    <Table>
                        <thead>
                            <tr>
                                <th>State </th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>

                        <tbody>
                            { data.map( ( stateinfo, i ) =>
                                (
                                    <StateTableRow
                                        key={ i }
                                        statename={ stateinfo.statename }
                                        confirmed={ stateinfo.confirmed }
                                        recovered={ stateinfo.recovered }
                                        deaths={ stateinfo.deaths }

                                    />


                                ) )
                            }
                        </tbody>
                    </Table>

                </div>
            </div>
        );
    }
}

export default DashJS;