import * as React from "react";
import "semantic-ui-css/semantic.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Header from "./Header";
import Table from "./Table";
import ChartTotal from "./ChartTotal";
import ChartDaily from "./ChartDaily";

function App() {
  const [covidData, setCovidData] = React.useState({});
  const [isTimelineLoading, setIsTimelineLoading] = React.useState(true);
 
  React.useEffect(() => {
    fetch("https://api.thevirustracker.com/free-api?countryTimeline=PL")
      .then((res) => res.json())
      .then((res) => {
        setCovidData(res);
        setIsTimelineLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        {
          isTimelineLoading ? 
          <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
          :  
          <div>
            <Header />
            <div className="ui divider"></div>
            <div className="ui stackable two column grid">
              <div className="column">
                <ChartTotal covidData={covidData} /><br/><br/><br/>
                <div className="ui divider"></div>
                <ChartDaily covidData={covidData} />
              </div>
              <div className="column"><Table covidData={covidData} /></div>
            </div>
          </div>
        }
    </div>
  );
}

export default App;
