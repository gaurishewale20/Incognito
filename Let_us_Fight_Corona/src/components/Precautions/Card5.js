import React from 'react';
import StayHome from '../../image/gifs/stay_home.gif';
import Pic1 from '../../image/images/1.png';
import Pic2 from '../../image/images/2.png';
import Pic3 from '../../image/images/3.png';
import Pic4 from '../../image/images/4.png';
import Pic5 from '../../image/images/5.png';
import Pic6 from '../../image/images/6.png';



const Card5 = () =>
{

    return (

        <div className="card mb-3" style={ { maxWidth: "540px" } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `${ StayHome }` } className="card-img" alt="Stay Home" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Stay Home, Stay Safe</h5>
                        <hr />
                        <br />
                        <p className="card-text">Home is the safest place to protect you from corona virus, as it prevents you from
                        exposure to virus.If you are not feeling well, then you should strictly stay at home and take advise from doctor.</p>

                    </div>
                </div>
                <button type="button" className="block" data-toggle="collapse" data-target="#demo3">How to stay positive and healthy at home?</button>
                <div id="demo3" className="collapse">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#s1">Mantra 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#s2">Mantra 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#s3">Mantra 3</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="s1" className="container tab-pane active"><br />
                            <h5>#HealthyAtHome: Physical Avtivity</h5>
                            <div>
                                <div><img src={ `${ Pic1 }` } width="500" height="400" alt="Tip1" /></div><br />
                                <div><img src={ `${ Pic2 }` } width="500" height="400" alt="Tip2" /></div>

                            </div>
                        </div>
                        <div id="s2" className="container tab-pane fade"><br />
                            <h4>#HealthyAtHome: Healthy Diet</h4>
                            <br />
                            <h5>Tips for maintaining a Healthy Diet:</h5>
                            <div>
                                <ul className="diet">
                                    <li> Eat a variety of food, including fruits and vegetables</li>
                                    <li> Cut back on salt</li>
                                    <li> Eat moderate amounts of fats and oils</li>
                                    <li> Limit sugar intake</li>
                                    <li> Stay hydrated: Drink enough water</li>
                                    <li> Avoid hazardous and harmful alcohol use</li>
                                    <li> Breastfeed babies and young children</li>
                                </ul>
                            </div>
                            <div>
                                <div><img src={ `${ Pic3 }` } width="500" height="400" alt="vegetable washing faq" /></div>

                            </div>
                        </div>
                        <div id="s3" className="container tab-pane fade"><br />
                            <h4>#HealthyAtHome: Mental Health</h4> <br />
                            <div>
                                <div><img src={ `${ Pic4 }` } width="500" height="400" alt="Health worker" /></div><br />
                                <div><img src={ `${ Pic5 }` } width="500" height="400" alt="Care" /></div>
                                <div><img src={ `${ Pic6 }` } width="500" height="200" alt="Get the facts straight" /></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card5;