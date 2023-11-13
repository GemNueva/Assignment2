﻿import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CountryCard from './CountryCard';
import './cardContainerStyle.css';

const CountriesList = ({ }) => {

    const { regionId = 0} = useParams();  // To get the regionId form url - dafault is 0
                                          // useParams() returns an object, in this case regionId
    const [data, setData] = useState({
            theRegion: {},
            countryList: []
    }); 


    const [query, setQuery] = useState('');

    // Fetch countries using: regionId & query
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            })
    }, [regionId, query]) // Dependancy array: will fetch and update when these variables change
                          //  (if empty[] will only run once)

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value; // Get value from searchText = search input
        //alert('value=' + value);
        setQuery(value); // update the query value - which triggers useEffect()
    }


    return (
        <div className="cardListSearch">

            <h2 className="text-center">
                In CountriesList:
            </h2>

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

            {/*//TODO*/}
            <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height: '100%' }}>

                <div className="d-flex flex-column align-items-center justify-content-center">
                    <img className="text-center" src={data.theRegion.imageUrl ?? "No Region Selected"}
                        alt={data.theRegion.regionName ?? "No Region Selected"}
                        style={{ width: '400px', height: 'auto' }}
                    />

                    <p className="text-center">Region Id: {data.theRegion.regionId ?? "No Region Selected"}</p>
                    <p className="text-center">Region Name: {data.theRegion.regionName ?? "No Region Selected"}</p>
                    <p className="text-center">Country Count: {data.theRegion.countryCount ?? "No Region Selected"}</p>


                </div>


            </div>
            {/*List of Countries*/}
            <div className="cardContainerStyle">
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
