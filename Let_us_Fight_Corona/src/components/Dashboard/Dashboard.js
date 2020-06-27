import React from 'react';
import NC_APP from './NationChart_api';
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
            <NC_APP /><p />
            <StateChart /><p />
            <StateTable />
        </div>
    );

}
export default Dashboard;
