import './Card.css';
import { Link } from "react-router-dom";

const CountryCard = ({ regionId, countryId, countryName, imageUrl, iso3, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {

    //const dataToPass = { regionId, countryName, imageUrl };

    return (
        <div className="card-body">

            <img src={imageUrl} className="card-img-top" alt={countryName}/>

            <h5 className="card-title">Country Name:{countryName}</h5>
            <p className="card-text"> Region Id: {countryId}</p>
            <p className="card-text"> ISO3: {iso3 ?? "N/A"}</p>
            <p className="card-text"> City Count:{cityCount ?? "N/A"}</p>
            <p className="card-text"> Temp Data Year Range:{temperatureDataYearRange}</p>
            <p className="card-text"> Emission Data Year Range:{emissionDataYearRange}</p>


            {/*Link to CountryTemperatureData*/}
            {temperatureDataYearRange ?
                <Link to={{
                    pathname: `/CountryTemperatureData/${regionId}/${countryId}`,
                    state: {regionId, countryName, imageUrl}
                }}> View Temperature Detail</Link> : <p> No Temperature Data</p>
            }

            {/*Link to CountryEmissionData*/}
            {emissionDataYearRange ?
                <Link to={{
                    pathname: `/CountryEmissionData/${regionId}/${countryId}`,
                    state: {regionId, countryName, imageUrl}
                }} > View Emission Data</Link> : <p> No Emission Data</p>
            }

            {/*Link to CitiesList*/}
            {cityCount ?
                <Link to={`/CitiesList/${regionId}/${countryId}`}> View Cities List</Link>
                : <p> No City Data</p>

            }
            
        </div>
    );
}
export default CountryCard;