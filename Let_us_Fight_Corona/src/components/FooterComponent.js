import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>
{
    return (
        <div className="footer row justify-content-center">
            <div className="text-center">
                <h4>Don't Panic. Stay Healthy. Stay Safe.</h4><br />
                <div className="row">
                    <div className="col-4"><Link to="./aboutus" style={ { color: '#e4e4e7' } }>The Team</Link></div>
                    <div className="col-4"><Link to="./resources" style={ { color: '#e4e4e7' } }>Resources</Link></div>
                    <div className="col-4"><Link to="./credits" style={ { color: '#e4e4e7' } }>Credits</Link></div>
                </div>
                <br />
                <p > © Team Incognito</p>
            </div>
        </div>
    )
}

export default Footer;
