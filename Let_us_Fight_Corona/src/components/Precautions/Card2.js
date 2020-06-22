import React from 'react';
import face from '../../image/images/face.jpg';


const Card2 = () =>
{

    return (
        <div className="card mb-3" style={ { maxWidth: "540px" } } >
            <div className="row">
                <div className="col-sm-4">
                    <img src={ `${ face }` } className="card-img" alt="face" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Don't touch your face</h5>
                        <hr />
                        <p className="card-text">To help in prevnenting infection, keep your hands away from your eyes, nose and mouth.As
            touching your dirty hands to this part allows virus to enter into your body.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card2;