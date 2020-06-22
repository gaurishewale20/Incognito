
import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import axios from "axios";

const NationChart = () =>
{
    const [ chartBar, setChartBar ] = useState( {} );
    const [ chartPie, setChartPie ] = useState( {} );


    const chart_bar = () =>
    {

        axios
            .get( "https://api.covid19india.org/data.json" )
            .then( res =>
            {

                const Total_Confirmed = res.data.statewise[ 0 ].confirmed;
                const Total_Active = res.data.statewise[ 0 ].active;
                const Total_Deaths = res.data.statewise[ 0 ].deaths;
                const Total_Rec = res.data.statewise[ 0 ].recovered;


                setChartBar( {
                    labels: [ 'Confirmed', 'Recovered', 'Active', 'Deaths' ],
                    datasets: [ {
                        label: 'Numbers',
                        data: [ Total_Confirmed, Total_Rec, Total_Active, Total_Deaths ],
                        backgroundColor: [ "rgba(0, 68, 69, 0.6)", 'rgba(44, 120, 124, 0.6)', 'rgba(111, 185, 143, 0.6)', 'rgba(191, 220, 207, 0.6)' ],
                        borderWidth: 2,
                        borderColor: [ "rgba(0, 68, 69, 0.8)", 'rgba(44, 120, 124, 0.8)', 'rgba(111, 185, 143, 0.8)', 'rgba(191, 220, 207, 0.8)' ],
                        hoverBorderColor: [ "rgba(0, 0, 0, 0.8)", 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)' ]
                    } ]
                } );
            } )
            .catch( err =>
            {
                console.log( err );
            } );

    };

    const chart_pie = () =>
    {

        axios
            .get( "https://api.covid19india.org/data.json" )
            .then( res =>
            {
                console.log( res );
                const Total_Confirmed = res.data.statewise[ 0 ].confirmed;
                const Total_Active = res.data.statewise[ 0 ].active;
                const Total_Deaths = res.data.statewise[ 0 ].deaths;
                const Total_Rec = res.data.statewise[ 0 ].recovered;


                setChartPie( {
                    labels: [ 'Confirmed', 'Recovered', 'Active', 'Deaths' ],
                    datasets: [ {
                        data: [ Total_Confirmed, Total_Rec, Total_Active, Total_Deaths ],
                        backgroundColor: [ "rgba(219, 127, 127, 0.6)", 'rgba(221, 159, 159, 0.6)', 'rgba(238, 210, 210, 0.6)', 'rgba(244, 235, 219, 0.6)' ],
                        borderWidth: 2,
                        borderColor: [ "rgba(219, 127, 127, 0.6)", 'rgba(221, 159, 159, 0.6)', 'rgba(238, 210, 210, 0.6)', 'rgba(244, 235, 219, 0.6)' ],
                        hoverBorderColor: [ "rgba(0, 0, 0, 0.8)", 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.8)' ]
                    } ]
                } );
            } )
            .catch( err =>
            {
                console.log( err );
            } );

    };



    useEffect( () =>
    {
        chart_bar();
        chart_pie();
    }, [] );

    return ( <div className="container-fluid bg-light " >


        <h1> NationChart </h1> <div className="absolute-center">
            <Bar data={ chartBar }
                options={
                    {
                        responsive: true,
                        title: { text: "Cases in India", display: true },
                        legend: { display: true, align: 'center', labels: { fontColor: '#000', backgroundColor: '#000' } },
                        tooltips: {
                            enabled: true,
                            intersect: true,
                            cornerRadius: 9

                        },
                        scales: {
                            yAxes: {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: true
                                }
                            },
                            xAxes: ( {
                                position: 'bottom',
                                gridLines: {
                                    display: true
                                }

                            },
                            {
                                position: 'top',
                                ticks: {
                                    display: false
                                }
                            }

                            )
                        }
                    }
                } />
        </div>
        <p />
        <div>
            <Pie data={ chartPie }
                options={
                    {
                        responsive: true,
                        title: { text: "Cases in India", display: true },
                        legend: { display: true, align: 'center', labels: { fontColor: '#000', backgroundColor: '#000' } },
                        tooltips: {
                            enabled: true,
                            intersect: true,
                            cornerRadius: 9
                        },
                        scales: {
                            yAxes: [ {
                                ticks: {
                                    display: false
                                },
                                gridLines: {
                                    display: false
                                }
                            } ],
                            xAxes: ( {
                                position: 'bottom',
                                ticks: { display: false },
                                gridLines: {
                                    display: false
                                }

                            },
                            {
                                position: 'top',
                                ticks: {
                                    display: false
                                }
                            }

                            )
                        }
                    }
                } />

        </div>



    </div>
    );
};

export default NationChart;
