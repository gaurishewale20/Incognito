import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ( { subset: { confirmed, recovered, active, deaths }, country } ) =>


{
    if(!confirmed){
        return 'Please select a State!'
    }
    const barChart = (
        confirmed ? (
            <Bar
                data={ {
                    labels: [ 'Confirmed', 'Recovered', 'Active', 'Deaths' ],
                    datasets: [
                        {
                            label: 'Numbers',
                            backgroundColor: [ 'rgba(30, 31, 38, 0.8)', 'rgba(40, 54, 85, 0.8)', 'rgba(77, 100, 141, 0.8)', 'rgba(208, 150, 131, 0.8)' ],
                            data: [ confirmed, recovered, active, deaths ],
                            borderWidth: 1,
                            borderColor: '#777',
                            hoverBorderWidth: 2,
                            hoverBorderColor: '#333',
                        },

                    ],

                } }
                options={ {
                    legend: { display: false, align: 'center', labels: { fontColor: '#000' } },
                    title: { display: true, text: `Current state in ${ country }`, fontSize: 15, fontColor: '#777' },
                    tooltips: {
                        enabled: true,
                        intersect: true,
                        cornerRadius: 9

                    }
                } }
            />
        ) : null
    );



    return (
        <div className={ styles.container }>
            { barChart }
        </div>
    );
};

export default Chart; 