import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountryEmissionData = ({ }) => {

    const { countryId } = useParams();  // To get the countryId form url - dafault is 0
                                        // useParams() returns an object, in this case regionId

    const [ceData, setData] = useState({});

    const [query, setQuery] = useState({}); // initialise state

    // Fetch country Data using: countryId
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryEmissionData/${countryId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId, query])      // Dependancy array: will fetch and update when these variables change
                                //  (if empty[] will only run once)

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value; // Get value from searchText = search input
        //alert('value=' + value);
        setQuery(value);            // update the query value - which triggers useEffect()
    }

    return (
        <div className="cardTempData">
            <h2 className="text-center">
                Component: In Country Emission Data
            </h2>

            <hr />

            <div className="row justify-content-start mb-3">

                {/*Search Bar*/}
                <div className="col-3">
                    <input type="text" name="searchText" className="form-control" placeholder="type your query" />
                </div>

                {/*To go back to Countries Page*/}
                <div className="col text-right">
                    <Link to={`/Countries/?countryId=${countryId}`} type="button" className="btn button-primary"> Go Back - View Countries</Link>
                </div>

            </div>

            {/*Table: Country Emission Data*/}
            <h3> Country Temperature Data: </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>ItemName</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                   
                    <tr>
                        <td>{ceData.year}</td>
                        <td>{ceData.itemName}</td>
                        <td>{ceData.value}</td>
                    </tr>
                   
                </tbody>
            </table>

        </div>
    );
}
export default CountryEmissionData;
