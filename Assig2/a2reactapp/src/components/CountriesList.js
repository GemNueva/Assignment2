import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CountryCard from './CountryCard';



const CountriesList = ({ }) => {

    const { regionId } = useParams();  // To get the regionId form url
                                       // useParams() returns an object, in this case regionId

    const [data, setData] = useState({
            theRegion: {},
            countryList: []
    }); // initialise state

    const [query, setQuery] = useState('');

    // Fetch the countries using the query
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}/?searchText=${query}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            })
    }, [regionId])

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
                <div className="col text-right">
                    <Link to={"/Region"} type="button" className="btn button-primary"> Go Back - View Regions</Link>
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

                <img src={data.theRegion.imageUrl}
                     alt={data.theRegion.regionName}
                     style={{ width: '200px', height: 'auto' }}
                />

                <p>Region Id: {data.theRegion.regionId}</p>
                <p>Region Name: {data.theRegion.regionName}</p>
                <p>Country Count: {data.theRegion.countryCount}</p>

            </div>

            {/*List of Countries*/}
            <div className="card-container" style={cardContainerStyle}>
                {data.countryList.map((obj) => (
                    <CountryCard
                        key={obj.countryId}
                        countryId={obj.countryId}
                        countryName={obj.countryName}
                        iso3={obj.iso3}
                        imageUrl={obj.imageUrl}
                        cityCount={obj.cityCount}
                        emissionDataYearRange={obj.emissionDataYearRange}
                        temperatureDataYearRange={obj.temperatureDataYearRange }
                    />
                ))}
            </div>

        </div>
    );
}
export default CountriesList;
