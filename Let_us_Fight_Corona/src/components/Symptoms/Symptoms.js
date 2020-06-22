import React from 'react';
import { Card, CardImg } from 'reactstrap';
import s1 from "../../image/images/s1.jpg";
import s2 from "../../image/images/s2.jpg";
import s3 from "../../image/images/s3.jpg";
import s4 from "../../image/images/s4.jpg";
import s5 from "../../image/images/s5.jpg";
import s6 from "../../image/images/s6.jpg";

import s7 from "../../image/images/allsymptoms.jpg";


function Symptoms ()
{
    const Symptomcards = [
        { src: `${ s1 }`, id: 1 },
        { src: `${ s2 }`, id: 2 },
        { src: `${ s3 }`, id: 3 },
        { src: `${ s4 }`, id: 4 },
        { src: `${ s5 }`, id: 5 },
        { src: `${ s6 }`, id: 6 },

    ];
    return (
        <div className="container-fluid">
            <div className="row justify-content justify-content-center">
                { Symptomcards.map( ( i ) => (
                    <>
                        <Card style={ { margin: '2rem' } }>
                            <CardImg width="100%" src={ i.src } alt="Card image cap" />
                        </Card>
                    </>

                ) ) }
                <img src={ `${ s7 }` } width="100%" alt=" All Symptoms Together " />
            </div>
        </div>

    )

}
export default Symptoms;