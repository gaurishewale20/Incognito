import React from "react";
import { Bar, Pie } from "react-chartjs-2";
//import axios from "axios";
import styles from './NationChart.module.css';
//import { render } from "react-dom";

const NationChart = ({ subset: { confirmed, recovered, active, deaths } }) => {


    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Active', 'Deaths'],
                    datasets: [
                        {
                            label: 'Numbers',
                            backgroundColor: ['rgba(30, 31, 38, 0.8)', 'rgba(40, 54, 85, 0.8)', 'rgba(77, 100, 141, 0.8)', 'rgba(208, 150, 131, 0.8)'],
                            data: [confirmed, recovered, active, deaths],
                            borderWidth: 1,
                            borderColor: '#777',
                            hoverBorderWidth: 2,
                            hoverBorderColor: '#333',
                        },

                    ],

                }}
                options={{
                    responsive: true,
                    //maintainAspectRatio: false,
                    legend: { display: false, align: 'center', labels: { fontColor: '#000' } },
                    title: { display: true, text: `Current state in India`, fontSize: 15, fontColor: '#777' },
                    tooltips: {
                        enabled: true,
                        intersect: true,
                        cornerRadius: 9

                    }
                }}
            />
        ) : null
    );

    const pieChart = (
        confirmed ? (
            <Pie
                data={{
                    labels: ['Confirmed', 'Recovered', 'Active', 'Deaths'],
                    datasets: [
                        {
                            label: 'Numbers',
                            backgroundColor: ["rgba(219, 127, 127, 0.6)", 'rgba(221, 159, 159, 0.6)', 'rgba(238, 210, 210, 0.6)', 'rgba(244, 235, 219, 0.6)'],
                            data: [confirmed, recovered, active, deaths],
                            borderWidth: 1,
                            borderColor: '#777',
                            hoverBorderWidth: 2,
                            hoverBorderColor: ["rgba(0, 0, 0, 0.8)", 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)'],
                        },

                    ],

                }}
                options={{
                    responsive: true,
                    //maintainAspectRatio: false,
                    legend: { display: true, align: 'center', labels: { fontColor: '#000' } },
                    title: { display: true, text: `Current state in India`, fontSize: 15, fontColor: '#777' },
                    tooltips: {
                        enabled: true,
                        intersect: true,
                        cornerRadius: 9

                    }
                }}
            />
        ) : null
    );





    return (
        <div className={styles.App}>
            <div className={styles.bar_chart}>
                {barChart}
            </div>
            <div className={styles.pie_chart}>{pieChart}</div>

        </div>
    );
};

export default NationChart; 
