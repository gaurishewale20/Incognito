import React from 'react';
import styles from "./StateTable.module.css";


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
                    <table className="table ">
                        <thead className="text-black-0 w-100">
                            <tr>
                                <th>State </th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>

                        <tbody>
                            { data.map( stateinfo =>
                            {
                                const { statename, statecode, recovered, confirmed, deaths } = stateinfo;
                                return (
                                    <>

                                        <tr key={ statecode } className={ styles.statetablerow }>
                                            <td >{ statename }</td>
                                            <td >{ confirmed }</td>
                                            <td>{ recovered }</td>
                                            <td>{ deaths }</td>
                                        </tr>

                                    </>
                                )
                            } )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default DashJS;