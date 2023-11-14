import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CountryCard from './CountryCard';
import './cardContainerStyle.css';

const CountriesList = ({ }) => {

    /*  useParams(): returns an object, in this case regionId
        - gets the regionId form url - dafault is 0 so that it shows all regions
    */ 

    const { regionId = 0 } = useParams();

    // The Api response returns and Object and an array
    const [countryData, setCountryData] = useState({
            theRegion: {},
            countryList: []
    }); 


    const [query, setQuery] = useState('');

    // Fetch countries using: regionId & query:
    // Dependancy array: will fetch and update when these variables regionId and query changes
                       
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => setCountryData(data))
            .catch(err => {
                console.log(err);
            })
    }, [regionId, query]) 


    // useEffect(): gets value from searchText = search input - update the query value
    // which triggers a render to fetch again
    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value; 
        setQuery(value); 
    }

    return (
        <div className="cardListSearch">

            <h2 className="text-center">
                In CountriesList:
            </h2>

         

            {/* Ass Spec */}
            {countryData.theRegion.countryCount > 1 && (
                <div className="row justify-content-start mb-3">

                    {/*Search Bar*/}
                    <div className="col-3">
                        <input type="text" name="searchText" className="form-control" placeholder="type your query" />
                    </div>

                    {/*Button*/}
                    <div className="col text-left">
                        <button type="button" className="btn button-primary" onClick={searchQuery}> Search </button>
                    </div>

                </div>
            )}

            {/*To go back to Region Page*/}
            <div className="col text-right">
                <Link to={"/Region"} type="button" className="btn button-primary"> Go Back - View Regions</Link>
            </div>

            {/*Middle Card*/}
            <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%' }}>

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img className="text-center"
                        src={countryData.theRegion.imageUrl ?? "No Region Selected"}
                        alt={countryData.theRegion.regionName}
                        style={{ width: '400px', height: 'auto' }}
                    />

                    <p className="text-center">Region Id: {countryData.theRegion.regionId ?? "No Region Selected"}</p>
                    <p className="text-center">Region Name: {countryData.theRegion.regionName ?? "No Region Selected"}</p>
                    <p className="text-center">Country Count: {countryData.theRegion.countryCount ?? "No Region Selected"}</p>

                </div>
            </div>

            {/*List of Countries*/}
            <div className="cardContainerStyle">
                {countryData.countryList.map((obj) => (
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
