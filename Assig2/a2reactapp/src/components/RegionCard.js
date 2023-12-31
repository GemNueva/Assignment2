﻿import './Card.css';
import { Link } from "react-router-dom";

const RegionCard = ({ regionId, regionName, imageUrl, countryCount }) => {

    return (
        <div className="card-body">

            <img src={imageUrl} className="card-img-top" alt={`Image of: ${regionName}`} />

            <h5 className="card-title">Region Name:{regionName}</h5>

            <p className="card-text"> Region Id: {regionId}</p>

            <p className="card-text"> Country Count:{countryCount}</p>

            {/*to pass the regionId into the url*/}
            <Link to={`/CountriesList/${regionId}`} className="stretched-link">

            </Link>

            {/*https://getbootstrap.com/docs/4.3/utilities/stretched-link/*/}

        </div> 
    );
}
export default RegionCard;