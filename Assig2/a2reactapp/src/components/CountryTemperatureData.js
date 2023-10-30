import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountryTemperatureData = ({ }) => {

    const { countryId } = useParams();  // To get the countryId form url - dafault is 0
                                        // useParams() returns an object, in this case regionId

    const [countryData, setData] = useState({}); // initialise state

    // Fetch country Data using: countryId
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data =>setData(data))
            .catch(err => {
                console.log(err);
            })
            
    }, [countryId]) // Dependancy array: will fetch and update when these variables change
                    //  (if empty[] will only run once)

    return (
        <div className="cardTempData">
            <h2 className="text-center">
                Component: In Country Temperature Data
            </h2>

            <hr />

            <div className="row justify-content-start mb-3">

                {/*To go back to Region Page*/}
                <div className="col text-right">
                    <Link to={`/Countries/?countryId=${countryId}`} type="button" className="btn button-primary"> Go Back - View Countries</Link>
                </div>

            </div>

            
            {/*Table: Country Temperature Data - NEED TO DISPLAY COUNTRY NAME - MAKE ANOTHER API CALL?*/}
            <h3> Raw Temperature Data: {countryData?.rawTemperatureData?.[0]?.theCountryTempData?.country?.countryName} </h3>

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
                            <td>{item.theCountryTempData.year}</td>
                            <td>{item.theCountryTempData.unit}</td>
                            <td>{item.theCountryTempData.change}</td>
                            <td>{item.regionalAvg}</td>
                            <td>{item.regionalMin}</td>
                            <td>{item.regionalMax}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
export default CountryTemperatureData;
