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

function ChartDaily({covidData}) {
    
    const legendItems = [
        {
          title: 'New daily cases',
          color: 'red',
          strokeWidth: 6,
        },
        {
            title: 'New daily deaths',
            color: 'black',
            strokeWidth: 6,
        }
    ];

    function getDailyCasesData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: parseFloat(data[key].new_daily_cases)};
        });
    }

    function getDailyDeathsData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: parseFloat(data[key].new_daily_deaths)};
        });
    }
    
    return (
        <XYPlot xType="time" width={700} height={400}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis title="Time" />
            <YAxis title="Cases" />
            <LineSeries data={getDailyCasesData()} color="red" />
            <LineSeries data={null} />
            <LineSeries data={getDailyDeathsData()} color="black"/>
            <DiscreteColorLegend items={legendItems} orientation="horizontal" />
        </XYPlot>
    );
}

export default ChartDaily;