import React from 'react';
import SocialDistance from '../../image/gifs/social_distance.gif';

const Card4 = () =>
{
    return (
        <div className="card " >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `${ SocialDistance }` } className="card-img" alt="Social Distance" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Safe distance</h5>
                        <hr />
                        <p className="card-text">Maintain social distance and try to minimise physical interactions with other. By doing
                so, we can control the transmission chain, prevent community spread and eventually flatten the curve. </p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Card4;