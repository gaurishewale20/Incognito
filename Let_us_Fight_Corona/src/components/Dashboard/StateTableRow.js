
import React from "react";
import styles from "./StateTable.module.css";


function StateTableRow ( { statename, recovered, confirmed, deaths } )
{
    return (
        <>
            <tr className={ styles.statetablerow }>
                <td>{ statename }</td>
                <td>{ recovered }</td>
                <td>{ confirmed }</td>
                <td>{ deaths }</td>

            </tr>
        </>

    );
}

export default StateTableRow;
