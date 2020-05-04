import * as React from "react";

function Header({covidData}) {
    
    function getLastRowKey() {
        return Object.keys(covidData.timelineitems[0]).reverse().find((key) => key !== "stat");
    }

    function getTotalCases() {
        const data = covidData.timelineitems[0];
        return data[getLastRowKey()].total_cases;
    }

    function getTotalRecoveries() {
        const data = covidData.timelineitems[0];
        return data[getLastRowKey()].total_recoveries;
    }

    function getTotalDeaths() {
        const data = covidData.timelineitems[0];
        return data[getLastRowKey()].total_deaths;
    }

    return(
        <div>
            <h1 className="ui header">
                COVID-19 statistics for: {covidData.countrytimelinedata[0].info.title}
                <div className="sub header">Data source: {covidData.countrytimelinedata[0].info.source}</div>
            </h1>
            <div className="ui divider"></div>
            <div className="ui statistics">
                <div className="red statistic">
                    <div className="value">
                    {getTotalCases()}
                    </div>
                    <div className="label">
                    Total Cases
                    </div>
                </div>
                <div className="green statistic">
                    <div className="value">
                    {getTotalRecoveries()}
                    </div>
                    <div className="label">
                    Total Recoveries
                    </div>
                </div>
                <div className="black statistic">
                    <div className="value">
                    {getTotalDeaths()}
                    </div>
                    <div className="label">
                    Total Deaths
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;