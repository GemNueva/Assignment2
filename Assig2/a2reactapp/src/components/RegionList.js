import { useState, useEffect } from 'react';
import RegionCard from './RegionCard.js';
import './cardContainerStyle.css';

// RegionList component fetches region data from an API when it's first mounted.
// For each item in the returned data, it renders a Card component
// The fetch only works once due to the empty array passed to useEffect.

// When the component is rendered
// the useEffect runs only once because of the empty dependancy array
// the fetch call is made the data returned is turned into json format
// setRegionData:
// - updates the regionData with the new data on the next render
// - triggers a re - render because the state has changed

const RegionList = () => {

    // initialise states - regionData: hold the info returned from api
    //                     setRegionData: function to update the regionData

    const [regionData, setRegionData] = useState([]); // set initial state to empty array

    // Fetch the data from the API
    useEffect(() => {
        fetch(`http://localhost:5256/api/A_Regions`)
            .then(response => response.json())      
            .then(data => setRegionData(data))      
            .catch(err => {
                console.log(err);
            })
    }, []) 

    return (
        <div className="cardContainerStyle">
            {regionData.map((obj) => (
                <RegionCard
                    className="card-body"
                    key={obj.regionId}
                    regionId={obj.regionId}
                    regionName={obj.regionName}
                    imageUrl={obj.imageUrl ?? "DefaultImageUrlHere"}
                    countryCount={obj.countryCount ?? "Not Available"}
                />
            ))}  
        </div>
    )
}
export default RegionList;

