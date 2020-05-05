import * as React from "react";
import '../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    DiscreteColorLegend
  } from 'react-vis';

function ChartTotal({covidData}) {
    
    const legendItems = [
        {
          title: 'Total cases',
          color: 'red',
          strokeWidth: 6,
        },
        {
            title: 'Total deaths',
            color: 'black',
            strokeWidth: 6,
        }
    ];

    function getTotalCasesData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: parseFloat(data[key].total_cases/1000)};
        });
    }

    function getTotalDeathsData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: parseFloat(data[key].total_deaths/1000)};
        });
    }
    
    return (
        <XYPlot xType="time" width={700} height={400}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="Time" />
            <YAxis title="Cases (thousands)" />
            <LineSeries data={getTotalCasesData()} color="red" />
            <LineSeries data={null} />
            <LineSeries data={getTotalDeathsData()} color="black"/>
            <DiscreteColorLegend items={legendItems} orientation="horizontal" />
        </XYPlot>
    );
}

export default ChartTotal;