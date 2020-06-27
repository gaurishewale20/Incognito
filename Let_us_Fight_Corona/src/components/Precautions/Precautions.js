import React from 'react';
import './Precautions.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';

class Precautions extends React.Component
{
    render ()
    {
        return (
            <div className="container-fluid ">
                <div className="col-12">

                    <Card4 /><br />
                    <Card2 /><br />
                    <Card1 /><br />
                    <Card3 /><br />
                    <Card5 /><br />

                </div>
            </div>
        );
    }
}

export default Precautions;