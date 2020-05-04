import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Header from "./Header";
import Table from "./Table";
import Chart from "./Chart";

function App() {
  const [covidData, setCovidData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://api.thevirustracker.com/free-api?countryTimeline=PL")
      .then((res) => res.json())
      .then((res) => {
        setCovidData(res);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {
          isLoading ? 
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> :  
          <div>
            <Header covidData={covidData} />
            <div className="ui divider"></div>
            <Chart covidData={covidData} />
            <div className="ui divider"></div>
            <Table covidData={covidData} />
          </div>
        }
    </div>
  );
}

export default App;
