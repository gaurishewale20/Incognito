import React from 'react';

function About () 
{
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 text-left">
                    <h3>About Us</h3>

                </div>
            </div>
            <div className=" Aboutus row row-content p-5"  >
                <div className="team_info " >
                    <h5>We are a team of budding student web developers who took upon the idea of
                    creating a well-versed dashboard regarding Corona Virus
                    (the pandemic which we all are fighting worldwide ) into a project and shaped it to bloom this website.</h5>
                    <br />
                    <h4>OUR  TEAM</h4><hr />
                    <div className="Team_member_names">
                        <h5>
                            <ul>
                                <li>
                                    Gauri Shewale  (CSE , VJTI 2019-23)
                        </li>
                                <li>
                                    Piyusha Bharambe (IT ,VJTI 2019-23)
                        </li>
                                <li>
                                    Vaishnavi Bhadrashette (CSE ,VJTI 2019-23)
                        </li>
                                <li>
                                    Meera Wadher (CSE , VJTI 2019-23)
                        </li>
                            </ul>
                        </h5>
                    </div>

                </div>

                <div className="resources">
                    <br />
                    <h4>RESOURCES</h4>
                    <hr />
                    <h5>

                        <ul type="none">
                            <li> The Daily Data displayed on this website is used from this
                    <a href="https://api.covid19india.org/"> API.</a>
                    (A volunteer-driven, crowd-sourced database for COVID-19 stats & patient tracing in India)
                    </li>
                            <li>Information regarding the Symptoms, Preventions ,etc is collected from :-</li>
                            <li><a href="https://www.mohfw.gov.in/ ">Ministry of Health and Family Welfare , Government of India</a></li>
                            <li><a href=" https://www.who.int/">World Health Organization( WHO )</a></li>
                        </ul>
                    </h5>
                </div>
                <div className="credits">
                    <p />
                    <h4>CREDITS</h4>
                    <hr />
                    <h5>Inspired from the project <a href="https://covid19india.org">covid19india.org</a></h5><br />
                    <h4>Special Thanks to -
                    <ul type="none">
                            <li>COC VJTI,Mumbai</li>
                        </ul></h4>
                </div>
            </div>
            <p />

        </div>
    );
}

export default About;    