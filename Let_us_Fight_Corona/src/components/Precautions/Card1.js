import React from 'react';
//import { Card, Button, CardTitle, CardSubtitle, CardBody, Collapse, Media } from 'reactstrap';
import cleanhands from '../../image/gifs/clean_hands.gif';
import Pic11 from '../../image/images/11.png';


const Card1 = () =>
{
    return (
        //Card1
        <div className="card mb-3" style={ { maxWidth: "540px" } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `${ cleanhands }` } className="card-img" alt="clean hands" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">WASH hands often</h5>
                        <hr />
                        <p className="card-text">It is very important to clean your hands for 20 sec, after every 30 minutes. For washing
                your hands, you can use soap and water,or an alocohol-based sanitizer.</p>

                    </div>
                </div>

                <button type="button" className="block" data-toggle="collapse" data-target="#demo">See here the correct
            procedure to wash hands</button>
                <div id="demo" className="collapse">
                    <br />
                    <div><img src={ `${ Pic11 }` } width="500" height="400" alt="Procedure to wash hands properly" /></div>
                </div>
            </div>

        </div>

    );
}

export default Card1;