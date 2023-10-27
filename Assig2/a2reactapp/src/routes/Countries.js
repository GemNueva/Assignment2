import CountriesList from "../components/CountriesList";

const Countries = ({ }) => {
    return (
        <div>
            <h2 className="text-center">
                Route: Countries
                <br />
                Component: CountriesList
            </h2>
            <hr />

            <CountriesList/>
        </div>
    );
}
export default Countries;
