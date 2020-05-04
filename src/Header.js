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
            <h1 class="ui header">
                COVID-19 statistics for: {covidData.countrytimelinedata[0].info.title}
                <div class="sub header">Data source: {covidData.countrytimelinedata[0].info.source}</div>
            </h1>
            <div className="ui divider"></div>
            <div class="ui statistics">
                <div class="red statistic">
                    <div class="value">
                    {getTotalCases()}
                    </div>
                    <div class="label">
                    Total Cases
                    </div>
                </div>
                <div class="green statistic">
                    <div class="value">
                    {getTotalRecoveries()}
                    </div>
                    <div class="label">
                    Total Recoveries
                    </div>
                </div>
                <div class="black statistic">
                    <div class="value">
                    {getTotalDeaths()}
                    </div>
                    <div class="label">
                    Total Deaths
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;