import { useState, useEffect } from 'react';
import Card from './Card.js';

// RegionList component fetches region data from an API when it's first mounted.
// For each item in the returned data, it renders a Card component
// The fetch only works once due to the empty array passed to useEffect.

const RegionList = () => {

    // initialise the state
    const [regionData, setState] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5256/api/A_Regions")
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px'
    }

    return (
        <div>            
            <div className="card-container" style={cardContainerStyle}>
                {regionData.map((obj) => (
                    <Card
                        key={obj.regionId}
                        regionId={obj.regionId}
                        regionName={obj.regionName}
                        imageUrl={obj.imageUrl ?? "DefaultImageUrlHere"}
                        countryCount={obj.countryCount ?? "Not Available"}
                    />
                ))}
            </div>
        </div>
    )
}
export default RegionList;

