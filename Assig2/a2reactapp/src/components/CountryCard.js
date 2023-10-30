import './Card.css';
import { Link } from "react-router-dom";

const CountryCard = ({ countryId, countryName, imageUrl, iso3, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {

    return (
        <div className="card-body">

            <img src={imageUrl} className="card-img-top" alt={"Image of" + countryName} />

            <h5 className="card-title">Country Name:{countryName}</h5>
            <p className="card-text"> Region Id: {countryId}</p>
            <p className="card-text"> ISO3: {iso3}</p>
            <p className="card-text"> City Count:{cityCount}</p>
            <p className="card-text"> Temperature Data Year Range:{temperatureDataYearRange}</p>
            <p className="card-text"> Emission Data Year Range:{emissionDataYearRange}</p>


            {/*Link to CountryTemperatureData*/}
            {temperatureDataYearRange ?
                <Link to={"/CountryTemperatureData/" + countryId}> View Temperature Detail</Link>
                : <p> No Temperature Data</p>
            }

            <br />

            {/*Link to CountryEmissionData*/}
            {emissionDataYearRange ?
                <Link to={"/CountryEmissionData/" + countryId}> View Emission Data</Link>
                : <p> No Emission Data</p>
            }
            
            

           
            
        </div>
    );
}
export default CountryCard;