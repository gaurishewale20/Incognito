import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
function About () 
{
    return (
        <div className="container-fluid">

            <div className=" Aboutus row row-content p-4"  >




                <div className="team_info " >
                    <h4>ABOUT US</h4><hr />
                    <h5>We are a team of budding student web developers who took upon the idea of
                    creating a well-versed dashboard regarding Corona Virus
                    (the pandemic which we all are fighting worldwide) into a project and shaped it to bloom this website.</h5>
                    <br />
                    <h4>OUR TEAM</h4><hr />
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
                    <br />

                    <h4>CONTACT US</h4>
                    <hr />
                    <h5> <MailIcon /> teamincognito04@gmail.com</h5>


                </div>


            </div>
            <p />

        </div>
    );
}

export default About; 