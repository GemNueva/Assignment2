
import './App.css';
import { Link, Outlet } from "react-router-dom"; // IMPORT LINK & OUTLET


import RegionList from './components/RegionList';
import CountriesListSearch from './components/CountriesListSearch';



function App() {
    return (
        
        <div className="App Container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" > Single Page Web Application</Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to="/Home">Home</Link>
                            <Link className="nav-link" to="/RegionList">Region List</Link>
                            <Link className="nav-link" to="/CountriesListSearch">Countries</Link>

                        </div>
                    </div>


                </div>

            </nav>

            <Outlet />

        </div>

   
    );
}

export default App;
