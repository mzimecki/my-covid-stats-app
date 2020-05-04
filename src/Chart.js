import * as React from "react";
import '../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries
  } from 'react-vis';

function Chart({covidData}) {
    
    function getTotalCasesData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: data[key].total_cases};
        });
    }

    function getTotalDeathsData() {
        return Object.keys(covidData.timelineitems[0]).filter((key) => key !== "stat").map(key => {
            const data = covidData.timelineitems[0];
            return {x: new Date(key), y: data[key].total_deaths};
        });
    }

    return (
        <div className="ui segments">
            <XYPlot xType="time" width={600} height={400}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="Time" />
                <YAxis title="Total" />
                <LineSeries data={getTotalCasesData()} animation color="red"/>
                <LineSeries data={null} />
                <LineSeries data={getTotalDeathsData()} animation color="black"/>
            </XYPlot>
        </div>
    );
}

export default Chart;