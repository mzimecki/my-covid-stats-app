import * as React from "react";
import MapOfPoland from "./MapOfPoland";
import 'leaflet/dist/leaflet.css';

function Header({totalData}) {
    
    const [totalCovidData, setTotalCovidData] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch("https://api.thevirustracker.com/free-api?countryTotal=PL")
            .then((res) => res.json())
            .then((res) => {
                setTotalCovidData(res);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <div>
            {
                isLoading ?
                <h1 className="ui block header">
                    <div className="ui segment" style={{height: "100px"}}>
                        <div className="ui active inverted dimmer">
                            <div className="ui text loader">Loading</div>
                        </div>
                    </div>
                </h1>
                :
                <div>
                    <h1 className="ui block header">
                        COVID-19 statistics for: {totalCovidData.countrydata[0].info.title}
                        <div className="sub header">Data source: {totalCovidData.countrydata[0].info.source}</div>
                    </h1>
                    <div className="ui stackable two column grid">
                        <div className="column">
                            <div className="ui statistics">
                                <div className="red statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_cases}
                                    </div>
                                    <div className="label">
                                    Total Cases
                                    </div>
                                </div>
                                <div className="green statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_recovered}
                                    </div>
                                    <div className="label">
                                    Total Recoveries
                                    </div>
                                </div>
                                <div className="black statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_deaths}
                                    </div>
                                    <div className="label">
                                    Total Deaths
                                    </div>
                                </div>
                                <div className="red statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_new_cases_today}
                                    </div>
                                    <div className="label">
                                    Total New Cases Today
                                    </div>
                                </div>
                                <div className="black statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_new_deaths_today}
                                    </div>
                                    <div className="label">
                                    Total New Deaths Today
                                    </div>
                                </div>
                                <div className="grey statistic">
                                    <div className="value">
                                    {totalCovidData.countrydata[0].total_serious_cases}
                                    </div>
                                    <div className="label">
                                    Serious Cases
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div id="container">
                                <MapOfPoland/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default Header;