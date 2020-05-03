import * as React from "react";

function Table({ covidData }) {
  if (covidData !== null && covidData.hasOwnProperty("timelineitems")) {
    return (
      <div>
        <h1>
          COVID-19 statistics for: {covidData.countrytimelinedata[0].info.title}
        </h1>
        <h3>source: {covidData.countrytimelinedata[0].info.source}</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Date</th>
              <th>New daily cases</th>
              <th>New daily deaths</th>
              <th>Totatl cases</th>
              <th>Total recoveries</th>
              <th>Total deaths</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(covidData.timelineitems[0]).reverse().filter((key) => key !== "stat").map((key) => {
                const data = covidData.timelineitems[0];
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{data[key].new_daily_cases}</td>
                    <td>{data[key].new_daily_deaths}</td>
                    <td>{data[key].total_cases}</td>
                    <td>{data[key].total_recoveries}</td>
                    <td>{data[key].total_deaths}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <h2>Loading data...</h2>;
  }
}
export default Table;
