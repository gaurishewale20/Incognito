import React from 'react';
import maskwear from '../../image/gifs/maskwear.gif';
import Pic7 from '../../image/images/7.png';
import Pic8 from '../../image/images/8.png';
import Pic9 from '../../image/images/9.png';
import Pic10 from '../../image/images/10.png';



const Card3 = () =>
{
    return (

        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src={ `${ maskwear }` } className="card-img" alt="maskwear" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Wear a Face Mask</h5>
                        <hr />
                        <p className="card-text">Wearing a face mask covers your nose and mouth. This prevents the virus from entering your body.</p>
                    </div>
                </div>
                <button type="button" className="block" data-toggle="collapse" data-target="#demo2">Follow these instructions to wear it correctly</button>
                <div id="demo2" className="collapse">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#r1">No 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#r2">No 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#r3">No 3</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div id="r1" className="container tab-pane active">

                            <h5 className='responsive'>Non Medical Fabric Mask</h5>

                            <div className='responsive'><img src={ `${ Pic7 }` } width="100%" height="100%" alt="nonMedic MaskwearingTips Do" /></div><br />
                            <div className='responsive'><img src={ `${ Pic8 }` } width="100%" height="100%" alt="nonMedic MaskwearingTips Dont" /></div>


                        </div>
                        <div id="r2" className="container tab-pane fade"><br />
                            <h5 className='responsive'>Medical Mask</h5>

                            <div>
                                <div className='responsive'><img src={ `${ Pic9 }` } width="100%" height="100%" alt="Medic MaskwearingTips Do" /></div><br />
                                <div className='responsive'><img src={ `${ Pic10 }` } width="100%" height="100%" alt="Medic MaskwearingTips Dont" /></div>

                            </div>
                        </div>
                        <div id="r3" className="container tab-pane fade"><br />

                            <h4 className='responsive'>Remember: </h4><br />
                            <h6 className='responsive'>Even following all the given rules and wearing the mask correctly can't help you on its own. For protecting yourself
                from this virus you have to take all the above precautions.</h6>

                            <br />
                            <h5 className='responsive'>For more info:</h5><br />
                            <h6 className='responsive'>
                                <ul className="diet">Detailed Videos:
                <li><a href="https://www.youtube.com/watch?time_continue=129&v=9Tv2BVN_WTk&feature=emb_logo">WHO (World
                    Health Organization) - 1</a></li>
                                    <li><a href="https://www.youtube.com/watch?time_continue=8&v=adB8RW4I3o4&feature=emb_logo">WHO (World
                    Health Organization) - 2</a></li>
                                </ul>
                            </h6>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card3;