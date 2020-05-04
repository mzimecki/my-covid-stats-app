import * as React from "react";

function Table({ covidData }) {

  function formatDate(date) {
    const index = date.lastIndexOf("/") + 1;
    const newDate = new Date(date.slice(0, index) +  (2000 + parseInt(date.slice(index), 10)));
    const day = ('0' + newDate.getDate()).slice(-2);
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    return day + '-' + month + '-' + newDate.getFullYear();
  }

  return (
    <div>
      <table className="ui selectable celled table">
        <thead>
          <tr>
            <th>Date</th>
            <th>New daily cases</th>
            <th>New daily deaths</th>
            <th>Total cases</th>
            <th>Total recoveries</th>
            <th>Total deaths</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(covidData.timelineitems[0]).reverse().filter((key) => key !== "stat").map((key) => {
              const data = covidData.timelineitems[0];
              return (
                <tr key={key}>
                  <td>{formatDate(key)}</td>
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
}
export default Table;
