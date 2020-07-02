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
<<<<<<< HEAD
                    Most infected people will develop mild to moderate illness and recover without hospitalization.
                    Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19 :
=======
                    Most infected people will develop mild to moderate symptoms and recover without hospitalization.
                    Such signs may appear 2-14 days after exposure to the virus. Here is some information regarding that -
>>>>>>> 1a7f3893d156d0d02e6a846f973706986d4dba86
                      </p>
                        <ul type="none">
                            <li><strong>Most Common Symptoms:</strong></li>
                            <ul type="square">
                                <li>
                                    Fever or chills
                        </li>
                                <li>
                                    Dry Cough
                        </li>

                                <li>
                                    Tiredness
                        </li>
                            </ul><br />
                            <li><strong>Less Common Symptoms:</strong></li>
                            <ul type="square">
                                <li>Muscle or body aches</li>
                                <li>Shortness of Breath</li>
                                <li>Headache</li>
                                <li>Loss of taste or smell</li>
                                <li>Sore throat</li>
                                <li>Congestion or runny nose</li>
                                <li>Nausea or vomiting</li>
                                <li>Diarrhoea</li>
                                <li>Conjunctivitis</li>
                                <li>Skin rashes or discolouration of fingers/toes</li>
                            </ul>
                        </ul>

                        <p>This list does not include all possible symptoms. We will continue to update this list as we learn more about COVID-19.</p>
                    </h5>
                    <h4><Link to="/process">Click here to go to Process</Link></h4>

                </div>
                <div className="row d-block align-items-center">
                    <img src={ `${ s7 }` } width="100%" alt=" All Symptoms Together " />
                </div>

            </div>

        </div>

    )

}
export default Symptoms;