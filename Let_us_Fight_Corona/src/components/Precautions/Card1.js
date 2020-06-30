import React from 'react';
//import { Card, Button, CardTitle, CardSubtitle, CardBody, Collapse, Media } from 'reactstrap';
import cleanhands from '../../image/gifs/clean_hands.gif';
import Pic11 from '../../image/images/11.png';


const Card1 = () =>
{
    return (
        //Card1
        <div className="card ">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `${ cleanhands }` } className="card-img" alt="clean hands" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">WASH hands often</h5>
                        <hr />
                        <p className="card-text">It is very important to clean your hands for a duration of 20 sec, after every 30 minutes. For washing
                your hands, you can use soap and water, or an alcohol-based sanitizer.</p>

                    </div>
                </div>

                <button type="button" className="block" data-toggle="collapse" data-target="#demo1">View the correct
            procedure to wash hands here</button>
                <div id="demo1" className="collapse">
                    <br />
                    <div><img src={ `${ Pic11 }` } width="100%" height="100%" alt="Procedure to wash hands properly" /></div>
                </div>
            </div>

        </div>

    );
}

export default Card1;