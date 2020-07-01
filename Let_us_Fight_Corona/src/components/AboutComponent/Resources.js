import React from 'react';
function Resources () 
{
    return (
        <div className="container-fluid">
            <div className=" Resources row row-content p-4"  >
                <div className="resources_info">
                    <br />
                    <h4>RESOURCES</h4>
                    <hr />
                    <h5>

                        <p >
                            The Daily Data displayed on this website is used from this
                    <a href="https://api.covid19india.org/"> API.</a>
                    (A volunteer-driven, crowd-sourced database for COVID-19 stats & patient tracing in India)
                    </p>
                            Information regarding the Symptoms, Preventions ,etc is collected from :-
                            <ul>
                            <li><a href="https://www.mohfw.gov.in/ ">Ministry of Health and Family Welfare , Government of India</a></li>
                            <li><a href=" https://www.who.int/">World Health Organization( WHO )</a></li>
                        </ul>
                    </h5>
                </div>
            </div>
            <p />

        </div>
    );
}

export default Resources; 