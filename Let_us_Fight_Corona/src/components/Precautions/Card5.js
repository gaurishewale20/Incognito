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

        <div className="card " >
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
                            <a className="nav-link active " data-toggle="tab" href="#s1">Mantra 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#s2">Mantra 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#s3">Mantra 3</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="s1" className="container tab-pane active"><br />
                            <h5 className='responsive'>#HealthyAtHome: Physical Avtivity</h5>
                            <div>
                                <div className='responsive'><img src={ `${ Pic1 }` } width="100%" height="100%" alt="Tip1" /></div><br />
                                <div className='responsive'><img src={ `${ Pic2 }` } width="100%" height="100%" alt="Tip2" /></div>

                            </div>
                        </div>
                        <div id="s2" className="container tab-pane fade"><br />
                            <h4 className='responsive'>#HealthyAtHome: Healthy Diet</h4>
                            <br />
                            <h5 className='responsive'>Tips for maintaining a Healthy Diet:</h5>
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
                                <div className='responsive'><img src={ `${ Pic3 }` } width="100%" height="100%" alt="vegetable washing faq" /></div>

                            </div>
                        </div>
                        <div id="s3" className="container tab-pane fade"><br />
                            <h4 className='responsive'>#HealthyAtHome: Mental Health</h4> <br />
                            <div>
                                <div className='responsive'><img src={ `${ Pic4 }` } width="100%" height="100%" alt="Health worker" /></div><br />
                                <div className='responsive'><img src={ `${ Pic5 }` } width="100%" height="100%" alt="Care" /></div>
                                <div className='responsive'><img src={ `${ Pic6 }` } width="100%" height="100%" alt="Get the facts straight" /></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card5;