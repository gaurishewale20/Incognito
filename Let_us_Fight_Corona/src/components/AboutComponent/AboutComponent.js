import React from 'react';
import nasawp from '../../image/images/nasawp.jpg';


function About () 
{
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 text-left">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content p-5" style={ { backgroundImage: `url(${ nasawp })`, backgroundAttachment: "fixed", backgroundSize: "cover", color: "white" } } >
                <div className="team_info " >
                    <h5>We are a team of budding student web developers who took upon the idea of
                    creating a well-versed dashboard regarding Corona Virus
                    (the pandemic which we all are fighting worldwide ) into a project and shaped it to bloom this website.
                      <p />
                        <h4>Our Team</h4>
                        <ul>
                            <li>
                                Gauri Shewale
                        </li>
                            <li>
                                Piyusha Bharambe
                        </li>
                            <li>
                                Vaishnavi Bhadrashette
                        </li>
                            <li>
                                Meera Wadher
                        </li>
                        </ul>
                    </h5>

                </div>
                <div className="credits">
                    <p />
                    <h4>CREDITS</h4>
                    <a href="#" >India Live Patient DataBase(CrowdSoured)</a><br />
                    Inspired from the project <a href="https://covid19india.org">covid19india.org</a><br />
                    Special Thanks to -
                    <ul type="none">
                        <li>COC VJTI</li>
                        <li>Traversy Media</li>
                    </ul>


                </div>
            </div>


        </div>
    );
}

export default About;    