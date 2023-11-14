import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CityAQDCard from './CityAQDCard';


// CityAQD component: City Air Quality Data from an API.
// For each item in the returned data, it renders a Card component
// The fetch only works once due to the empty array passed to useEffect.

const CityAQD = () => {

    // get the cityId from the url, am i using the rest?
    const { regionId, countryId, cityID } = useParams(); 

    const [cityDetail, setCityDetail] = useState([]);

    const [airQualityData, setAirQualityData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityID}`)
            .then(response => response.json())
            .then(data => {
                setCityDetail(data.theCityDetail);
                setAirQualityData(data.theAirQualityData);
            })
            .catch(err => {
                console.log(err);
            })
    }, [cityID]) 

    return (
        <div>
            {/*Link to CitiesList*/}
            <Link to={`/CitiesList/${regionId}/${countryId}`}> Back to Cities List</Link>
  
            <div className="center">
                <CityAQDCard
                    key={cityDetail.cityID}
                    cityName={cityDetail.cityName}
                    cityID={cityDetail.cityId}
                    countryName={cityDetail.countryName}
                    countryId={cityDetail.countryId}
                    imageUrl={cityDetail.imageUrl}
                    iso3={cityDetail.iso3}
                    regionName={cityDetail.regionName}
                    regionId={cityDetail.regionId}
                />
               
            </div>
 

            <h2>City Air Quality Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>PM10 Average</th>
                        <th>PM10 Min</th>
                        <th>PM10 Max</th>
                        <th>PM2.5 Average</th>
                        <th>PM2.5 Min</th>
                        <th>PM2.5 Max</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {airQualityData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{data.countryPM10Avg ?? "N/A"}</td>
                            <td>{data.countryPM10Min ?? "N/A"}</td>
                            <td>{data.countryPM10Max ?? "N/A"}</td>
                            <td>{data.countryPM25Avg ?? "N/A"}</td>
                            <td>{data.countryPM25Min ?? "N/A"}</td>
                            <td>{data.countryPM25Max ?? "N/A"}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

            {/*// the way im accessing it - need to fix*/}
            {/*<h2>Air Quality Data:</h2>*/}
            {/*<table>*/}
            {/*    <thead>*/}
            {/*        <th>AQID</th>*/}
            {/*        <th>Annual Mean</th>*/}
            {/*        <th>Temporal Coverage 1</th>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*        {airQualityData.map((data, index) => (*/}
            {/*            <tr key={index}>*/}
            {/*                <td>{data.airQualityData.aqdId ?? "N/A"}</td>*/}
            {/*                <td>{data.airQualityData.annualMean ?? "N/A"}</td>*/}
            {/*                <td>{data.airQualityData.temporalCoverage1 ?? "N/A"}</td>*/}
            {/*            </tr>*/}
            {/*        ))}*/}
            {/*    </tbody>*/}
            {/*</table>*/}
          
        </div>
    )
}
export default CityAQD;

