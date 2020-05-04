import * as React from "react";
import Table from "./Table";
import "semantic-ui-css/semantic.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

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
          <Table covidData={covidData} />
        }
    </div>
  );
}

export default App;
