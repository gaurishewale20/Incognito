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
            <div className="container-fluid" style={ { backgroundColor: "#37414a" } }>
                <div className="row justify-content-center p-2">
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />
                </div>
            </div>
        );
    }
}

export default Precautions;