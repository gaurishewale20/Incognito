import React from 'react';
<<<<<<< HEAD
import NC_APP from './NationChart_api';
=======
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import NC_App from './NationChart_api';
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
import StateChart from './StateChart';
import StateTable from './StateTable';

function Dashboard ()
{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h3>Dashboard</h3>

                </div>
            </div>
<<<<<<< HEAD
            <NC_APP /><p />
=======
            <NC_App /><p />
>>>>>>> 1c555558e0f84039ebd7b2f3f6367eba4e808139
            <StateChart /><p />
            <StateTable />
        </div>
    );

}
export default Dashboard;
