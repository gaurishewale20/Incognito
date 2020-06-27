import React from 'react';
import s7 from "../../image/images/allsymptoms.jpg";
import { Link } from "react-router-dom";


function Symptoms ()
{
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12">
                    <h3>Symptoms</h3>
                </div>
            </div>
            <div className="row row-content p-5  border border-blue "  >
                <div className="symptoms " >
                    <h5><p>People with COVID-19 have had a wide range of symptoms reported.
                    Most infected people will develop mild to moderate illness and recover without hospitalization.
                    Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:.
                      </p>
                        <ul>
                            <li>
                                Fever or chills
                        </li>
                            <li>
                                Cough
                        </li>
                            <li>
                                Shortness of breath or difficulty breathing
                        </li>
                            <li>
                                Fatigue (Tiredness)
                        </li>
                            <li>Muscle or body aches</li>
                            <li>Headache</li>
                            <li>New loss of taste or smell</li>
                            <li>Sore throat</li>
                            <li>Congestion or runny nose</li>
                            <li>Nausea or vomiting</li>
                            <li>Diarrhea</li>
                        </ul>
                        <p>This list does not include all possible symptoms. We will continue to update this list as we learn more about COVID-19.</p>
                    </h5>
                    <h4><Link to="/process">Click here to go to Process</Link></h4>

                </div>
                <div className="row justify-content justify-content-center">
                    <img src={ `${ s7 }` } width="100%" alt=" All Symptoms Together " />
                </div>

            </div>

        </div>

    )

}
export default Symptoms;