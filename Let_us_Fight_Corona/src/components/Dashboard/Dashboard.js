import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import NC_App from './NationChart_api';
import StateChart from './StateChart';
import StateTable from './StateTable';

function Dashboard ()
{
    return (
        <div className="container-fluid">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem >Dashboard</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Dashboard</h3>
                    <hr />
                </div>
            </div>
            <NC_App /><p />
            <StateChart /><p />
            <StateTable />
        </div>
    );

}
export default Dashboard;

