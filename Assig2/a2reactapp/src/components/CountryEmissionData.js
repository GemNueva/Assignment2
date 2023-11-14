import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";


const CountryEmissionData = ({ }) => {

    const { regionId } = useParams(); // Get regionId from url : To display region info
    const { countryId } = useParams(); // Get countryId from url : To get country emission data

    const location = useLocation();
    const { countryName, imageUrl } = location.state; //|| {};

    const [countryEmissionData, setCountryEmissionData] = useState([]);

    const [query, setQuery] = useState({}); 

    // Fetch country emission data using: countryId
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => setCountryEmissionData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId, query]) // Fetches when countryId and query changes

    const [elementList, setElementList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/GetElementList`)
            .then(response => response.json())
            .then(data => setElementList(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    function searchQuery(evt) {
        const value = document.querySelector('[name="searchText"]').value;
        setQuery(value);
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

                {/*Button*/}
                <div className="col text-left">
                    <button type="button" className="btn button-primary" onClick={searchQuery}> Search </button>
                </div>

                {/*To go back to Countries Page*/}
                <div className="col text-right">
                    <Link to={`/Countries/?countryId=${countryId}`} type="button" className="btn button-primary"> Go Back - View Countries</Link>
                </div>

            </div>

            {/*Table: Country Emission Data*/}
            
            <h3> Country Emission Data: {countryName} </h3>
            <p> Region Id: {regionId}</p>
            <img src={imageUrl}></img>

            <table className="table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Element</th>
                        <th>Total Value</th>
                    </tr>
                </thead>
                <tbody>
                    {countryEmissionData && countryEmissionData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{item.element}</td>
                            <td>{item.totalValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/*Table: Country Emission Data*/}
            <h3> Element List </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Element ID</th>
                        <th>Element</th>
                        <th>Unit</th>
                        <th>Image Url</th>
                    </tr>
                </thead>
                <tbody>
                    {elementList && elementList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.elementId}</td>
                            <td>{item.elementName}</td>
                            <td>{item.unit}</td>
                            <td>{item.imageUrl ?? "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}
export default CountryEmissionData;
