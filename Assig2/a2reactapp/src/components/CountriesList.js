import { useState, useEffect } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountriesList = ({ }) => {

    const { regionId } = useParams();  // To get the regionId form url
                                       // useParams() returns an object, in this case regionId

    const [countryData, setState] = useState([]); // initialise state

    const [query, setQuery] = useState('');

    // Fetch the countries using the query
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [query])

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value;
        alert('value' + value);
        setQuery(value);
    }

    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px'
    }

    return (
        <div className="cardListSearch">

            <h2 className="text-center">
                Component: In CountriesList
            </h2>
            <hr />

            <div className="row justify-content-start mb-3">

                {/*Search Bar*/}
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="type your query" />
                </div>

                {/*Button*/}
                <div className="col text-left">
                    <button type="button" className="btn button-primary" onClick={searchQuery}> Search </button>
                </div>

                {/*To go back to Region Page*/}
                <Link to={"/Region"}> View Regions</Link>

            </div>

            {/*Displaying Region Info*/}
            <p>Region Id: {TheRegion.regionId}</p>
            <p>Region Name: {TheRegion.regionName}</p>
            <p>Country Count: {TheRegion.countryCount}</p>
            <img src={TheRegion.imageUrl} alt={TheRegion.regionName}> </img>

            <div className="card-container" style={cardContainerStyle}>
                {countryData.map((obj) => (
                    <Card
                        key={obj.countryId}
                        regionId={obj.countryId}
                        regionName={obj.countryName}
                        imageUrl={obj.imageUrl}
                        countryCount={obj.countryCount}
                    />
                ))}
            </div>
        </div>
    );
}


export default CountriesList;
