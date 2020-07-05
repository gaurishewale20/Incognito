
import React from "react";
import styles from "./StateTable.module.css";


function StateTableRow ( { statename, confirmed, recovered, deaths } )
{
    return (
        <>
            <tr className={ styles.statetablerow }>
                <td>{ statename }</td>

                <td>{ confirmed }</td>
                <td>{ recovered }</td>
                <td>{ deaths }</td>

            </tr>
        </>

    );
}

export default StateTableRow;
