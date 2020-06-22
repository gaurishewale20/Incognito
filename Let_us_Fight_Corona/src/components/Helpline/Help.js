import React from 'react';
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import styles from "./Help.module.css";

function RenderHelpline ( { helplinenumber } )// States
{
    return (
        <tbody className={ styles.staterow }>
            <tr>
                <td>{ helplinenumber.id }</td>
                <td><h5>{ helplinenumber.statename }</h5></td>
                <td>{ helplinenumber.helplinenumber }</td>
            </tr>
        </tbody>
    );
}

function RenderUThelp ( { helpline } ) // Union T
{

    return (
        <tbody className={ styles.staterow }>
            <tr >
                <td>{ helpline.id }</td>
                <td><h5>{ helpline.ut }</h5></td>
                <td>{ helpline.helpline }</td>
            </tr>
        </tbody>
    );
}

function RenderMumbaiHelp ( { mumbaihelpline } ) // Mumbai 
{

    return (
        <tbody className={ styles.staterow }>
            <tr >
                <td>{ mumbaihelpline.id }</td>
                <td><h5>{ mumbaihelpline.ward }</h5></td>
                <td>{ mumbaihelpline.area }</td>
                <td>{ mumbaihelpline.helplinenumber }</td>
            </tr>
        </tbody>
    );
}
function Help ( props )
{

    const helplinenumbers = props.helplinenumbers.map( ( helplinenumber ) =>
    {
        return (
            <RenderHelpline helplinenumber={ helplinenumber } />
        );
    } );


    const helplines = props.helplines.map( ( helpline ) =>
    {
        return (
            <RenderUThelp helpline={ helpline } />
        );
    } );

    const mumbaihelplines = props.mumbaihelplines.map( ( mumbaihelpline ) =>
    {
        return (
            <RenderMumbaiHelp mumbaihelpline={ mumbaihelpline } />
        );
    } );

    return (
        <div className="container-fluid bg-navy">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem >Help</BreadcrumbItem>
                </Breadcrumb>

            </div>
            <div className="col-12">
                <h2>HelpLine</h2>
                <p />
            </div>
            <div className="container-fluid">
                <table className="table ">
                    <thead className="text-black-0 w-100">
                        <tr>
                            <th>Sr.no</th>
                            <th>State</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    { helplinenumbers }
                </table>
            </div>
            <p />
            <div className="container-fluid">
                <h2>Union Territories</h2>
                <table className="table ">
                    <thead className="text-black-0 w-100">
                        <tr>
                            <th>Sr.no</th>
                            <th>State</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    { helplines }
                </table>
            </div>
            <p />
            <div className="container-fluid">
                <h2>Mumbai Helpline Numbers</h2>
                <table className="table ">
                    <thead className="text-black-0 w-100">
                        <tr>
                            <th>Sr.no</th>
                            <th>Ward</th>
                            <th>Areas Included</th>
                            <th>Helpline-number</th>
                        </tr>
                    </thead>
                    { mumbaihelplines }
                </table>
            </div>


        </div>
    )
}

export default Help;
