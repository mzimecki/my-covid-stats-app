import * as React from 'react';
import Table from './Table';
import 'semantic-ui-css/semantic.min.css';


function App() {

    const [covidData, setCovidData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.thevirustracker.com/free-api?countryTimeline=PL")
        .then(res => res.json())
        .then(json => setCovidData(json.timelineitems));
    }, []);
    
    
    return(
        <div>
            <h1>Oki</h1>
            <Table covidData={covidData}/>
        </div>
    );
}

export default App;