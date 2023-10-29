import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountryTemperatureData = ({ }) => {

    const { countryId } = useParams();  // To get the countryId form url - dafault is 0
                                        // useParams() returns an object, in this case regionId

    const [countryData, setData] = useState({}); // initialise state

    const [query, setQuery] = useState('');

    // Fetch country Data using: countryId
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId]) // Dependancy array: will fetch and update when these variables change
                    //  (if empty[] will only run once)

    const countryDetail = countryData.rawTemperatureData
        && countryData.rawTemperatureData[0]
        && countryData.rawTemperatureData[0].theCountryTempData
        && countryData.rawTemperatureData[0].theCountryTempData.country;


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

            <div style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }}>

                <img src={countryDetail.imageUrl}
                    alt={countryDetail.regionName}
                    style={{ width: '200px', height: 'auto' }}
                />

                <p>Region Id: {countryDetail.regionId}</p>
                <p>Region Name: {countryDetail.regionName}</p>
                <p>Country Count: {countryDetail.countries}</p>

            </div>
        </div>
    );
}
export default CountryTemperatureData;
