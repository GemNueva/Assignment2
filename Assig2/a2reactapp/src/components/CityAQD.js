import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


// CityAQD component: City Air Quality Data from an API.
// For each item in the returned data, it renders a Card component
// The fetch only works once due to the empty array passed to useEffect.

const CityAQD = () => {

    const { cityID } = useParams(); 

    // initialise the state
    const [cityAQD, setState] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityID}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [cityID])

    return (
        <div>
            <p> City Name: {cityAQD.TheCityDetail.cityName }</p>
            <p> City Id: {cityAQD.TheCityDetail.cityId}</p>
            <p> CountryName: {cityAQD.TheCityDetail.countryName}</p>
            <p> CountryId: {cityAQD.TheCityDetail.countryId}</p>
            <p> Image URL: {cityAQD.TheCityDetail.imageUrl}</p>
            <p> ISO3: {cityAQD.TheCityDetail.iso3}</p>
            <p> Region Name: {cityAQD.TheCityDetail.regionName}</p>
            <p> Region Id: {cityAQD.TheCityDetail.regionId}</p> 
          
        </div>
    )
}
export default CityAQD;

