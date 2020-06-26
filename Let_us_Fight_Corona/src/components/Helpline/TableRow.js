
import React from "react";
import styles from "./Help.module.css";


function TableRow ( { id, name, number } )
{
    return (
        <>
            <tr className={ styles.staterow }>
                <td>{ id }</td>
                <td>{ name }</td>
                <td>{ number }</td>

            </tr>
        </>

    );
}

export default TableRow;
