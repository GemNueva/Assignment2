import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const CountryEmissionData = ({ }) => {

    const { regionId } = useParams(); // Get regionId from url : To display region info
    const { countryId } = useParams(); // Get countryId from url : To get country emission data

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

    // TODO - move to other component since we only need to render it once
    // Fetch list of emission elements
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/GetElementList`)
            .then(response => response.json())
            .then(data => setElementList(data))
            .catch(err => {
                console.log(err);
            })
    }, [])          // renders once

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
            <h3> Country Emission Data: </h3>

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
                            <td>{item.imageUrl}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}
export default CountryEmissionData;
