import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CityCard from './CityCard';


const CitiesList = () => {

    const { countryId } = useParams();

    const [cityList, setState] = useState([]);

    const [query, setQuery] = useState(''); //

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId, query])

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value; // Get value from searchText = search input
        setQuery(value); // update query value - which triggers useEffect()
    }

    const cardContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px'
    }

    return (
        <div>
            <div className="row justify-content-start mb-3">

                {/*Search Bar*/}
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="type your query" />
                </div>

                {/*Button*/}
                <div className="col text-left">
                    <button type="button" className="btn button-primary" onClick={searchQuery}> Search </button>
                </div>

                {/*To go back to Country List Page*/}
                <div className="col text-right">
                    <Link to={"/Countries"} type="button" className="btn button-primary"> Go Back - Countries List</Link>
                </div>

            </div>

            <div className="card-container" style={cardContainerStyle}>
                {console.log("Rendering CityCards with data:", cityList)}
                {cityList.map((obj) => (
                    <CityCard
                        key={obj.cityID}
                        cityID={obj.cityID}
                        cityName={obj.cityName}
                        airQualityYearRange={obj.airQualityYearRange}
                        cityCount={obj.cityCount}
                    />
                ))}
            </div>

 
        </div>
    )
}
export default CitiesList;

