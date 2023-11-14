import './Card.css';
import { Link } from 'react-router-dom';

const CityAQDCard = ({ cityName, cityID, countryName, countryId, imageUrl, iso3, regionName, regionId }) => {

    return (
        <div className="card-body">
            <p className="card-text">City Name: {cityName}</p>

            <img src={imageUrl} className="card-img-top" alt={`Image of: ${cityName}`} />

            <h5 className="card-title">City Id:{cityID}</h5>
            
            <p className="card-text">Country Name: {countryName}</p>
            <p className="card-text">Country Name: {countryId}</p>
            <p className="card-text">ISO3:{iso3}</p>
            <p className="card-text">Region Name: {regionName}</p>
            <p className="card-text">Region Id: {regionId}</p>

        </div>
    );
}

export default CityAQDCard;