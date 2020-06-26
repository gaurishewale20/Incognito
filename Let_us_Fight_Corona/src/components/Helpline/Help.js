import React, { useState } from 'react';
import styles from "./Help.module.css";
import { Table } from "reactstrap";
import TableRow from './TableRow';
import { HelplineNumbers } from '../../shared/helplinenumbers';
import { Helplines } from '../../shared/helplines';
import { MumbaiHelpline } from '../../shared/mumbaihelpline';

const Help = () =>
{
    const [ search, setSearch ] = useState( '' );
    const filteredSearch = HelplineNumbers.filter( s =>
    {
        return s.statename.toLowerCase().includes( search.toLowerCase() )
    }
    )

    const filteredSearchUT = Helplines.filter( s =>
    {
        return s.ut.toLowerCase().includes( search.toLowerCase() )
    }
    )

    const filteredMumbai = MumbaiHelpline.filter( s =>
    {
        return s.area.toLowerCase().includes( search.toLowerCase() )
    }
    )
    return (
        <div className="help">
            <div className="container-fluid">
                <div className={ styles.search_option }>
                    <input type="text" placeholder=" Search " onChange={ e => setSearch( e.target.value ) } />

                </div>
                <br />
                <h4> State Helpline Numbers</h4><p />
                <Table >
                    <thead >
                        <tr>
                            <th>Sr.no</th>
                            <th>Statename</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredSearch.map( ( s, i ) => (
                                <TableRow
                                    key={ i }
                                    id={ s.id }
                                    name={ s.statename }
                                    number={ s.helplinenumber } />
                            )
                            )
                        }
                    </tbody>
                </Table>
                <p /><br />
                <h4> Union Territory Helpline Numbers</h4>
                <p />
                <Table >
                    <thead >
                        <tr>
                            <th>Sr.no</th>
                            <th>Union Territory</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredSearchUT.map( ( s, i ) => (
                                <TableRow
                                    key={ i }
                                    id={ s.id }
                                    name={ s.ut }
                                    number={ s.helpline } />
                            )
                            )
                        }
                    </tbody>
                </Table>
                <p /><br />
                <h4>Mumbai Helpline Numbers</h4>
                <p />
                <Table >
                    <thead >
                        <tr>
                            <th>Ward </th>
                            <th>Area</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredMumbai.map( ( s, i ) => (
                                <TableRow
                                    key={ i }
                                    id={ s.ward }
                                    name={ s.area }
                                    number={ s.helplinenumber } />
                            )
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>

    );
}

export default Help;
