import './Card.css';
import { Link } from 'react-router-dom';

const CityCard = ({ cityID, cityName, airQualityYearRange, recordCount }) => {

    return (
        <div className="card-body">
            <h5 className="card-title">City Id:{cityID}</h5>

            <p className="card-text">City Name: {cityName}</p>

            <p className="card-text">Air Quality Year Range:{airQualityYearRange}</p>

            <p className="card-text">Record Count:{recordCount}</p>

            {/*Link to CitiesList*/}
            {recordCount ?
                <Link to={"/CityAQD/" + cityID}> View AQD </Link>
                : <p> No Air Quality Data</p>

            }

        </div>
    );
}

export default CityCard;