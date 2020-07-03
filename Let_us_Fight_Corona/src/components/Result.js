import React, { useEffect } from "react";
function Result ( { score, Retake } )
{
    var message;
    if ( `${ score }` < 1 )
    {
        message = "Comparitively you are safer.";
    }
    else if ( `${ score }` < 2 )
    {
        message = "You are at low risk. Take care and stay at home. ";
    }
    else if ( `${ score }` < 3 ) 
    {
        message = "You are at risk. Take care and stay at home. Consult doctor.";
    }
    else 
    {
        message = "You are at high risk. Take care and stay at home. Consult doctor immediately.";
    }
    useEffect( () =>
    {
        window.scrollTo( 0, 0 );
    }, [] );
    return (
        <div className="score-board  p-5">
            <div className="score-card row align-items-center p-5">
                { message }</div><br />
            <div >
                < button className="playBtn" onClick={ Retake }>
                    Retake the Test!
        </button></div>
        </div> );

}



export default Result;