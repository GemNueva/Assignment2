import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";


const CountryTemperatureData = ({ }) => {

    {/*https://medium.com/@hammadrao891/passing-data-via-links-in-react-a-guide-to-effective-data-transfer-1e0b030e2a12 */ }

    const location = useLocation();

    const { countryName, imageUrl } = location.state || {};


    // Get regionId & countryId from url
    const { regionId, countryId } = useParams();  

    // initialise state
    const [countryData, setCountryData] = useState({}); 

    // Fetch Country Temp Detail data using: countryId
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data =>setCountryData(data))
            .catch(err => {
                console.log(err);
            })
            
    }, [countryId]) 

    return (
        <div className="cardTempData">

            <h2 className="text-center">
                Component: In Country Temperature Data
            </h2>

            <div className="row justify-content-start mb-3">

                {/*To go back to Region Page*/}
                <div className="col text-right">
                    <Link to={`/Countries/?countryId=${countryId}`} type="button" className="btn button-primary"> Go Back - View Countries</Link>
                </div>

            </div>

            <p>RegionId: {regionId}</p>

            
            {/*Table: Country Temperature Data - NEED TO DISPLAY COUNTRY NAME - MAKE ANOTHER API CALL?*/}
            <h3> Raw Temperature Data: {countryName} </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Unit</th>
                        <th>Change</th>
                        <th>Avg</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {countryData.rawTemperatureData && countryData.rawTemperatureData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.theCountryTempData.year ?? "N/A"}</td>
                            <td>{item.theCountryTempData.unit}</td>
                            <td>{item.theCountryTempData.change}</td>
                            <td>{item.regionalAvg ?? "N/A"}</td>
                            <td>{item.regionalMin ?? "N/A"}</td>
                            <td>{item.regionalMax ?? "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default CountryTemperatureData;
