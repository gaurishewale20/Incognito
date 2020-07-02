import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>
{
    return (
        <div className="footer row justify-content-center">
            <div className="text-center">
                <h4>Don't Panic. Stay Healthy. Stay Safe.</h4><br />
                <div className="row">
                    <div className="col-4"><Link to="./aboutus" style={ { color: '#e4e4e7', fontSize: "17px" } }>The Team</Link><br /></div>
                    <div className="col-4"><Link to="./resources" style={ { color: '#e4e4e7', fontSize: "17px" } }>Resources</Link></div>
                    <div className="col-4"><Link to="./credits" style={ { color: '#e4e4e7', fontSize: "17px" } }>Credits</Link><br /></div>

                </div>
                <br />
                <p style={ { color: "#c5c5c5" } }> ©Team Incognito</p>
            </div>
        </div>
    )
}

export default Footer;
