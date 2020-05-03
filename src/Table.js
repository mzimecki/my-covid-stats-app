import * as React from 'react';

function Table({ covidData }) {
    if (covidData !== null && covidData.length > 0) {
      return (
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
            {
              Object.keys(covidData[0]).reverse().filter(key => key !== 'stat').map((key) => {
                const data = covidData[0];
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{data[key].new_daily_cases}</td>
                    <td>{data[key].new_daily_deaths}</td>
                    <td>{data[key].total_cases}</td>
                    <td>{data[key].total_recoveries}</td>
                    <td>{data[key].total_deaths}</td>
                  </tr>
                );
              })
              }
          </tbody>
        </table>
      );
    } else {
        return(<h2>Loading data...</h2>)
    }
}
export default Table;