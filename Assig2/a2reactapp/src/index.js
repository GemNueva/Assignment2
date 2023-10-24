import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home.js';
import RegionList from './components/RegionList.js';
import CountriesListSearch from './components/CountriesListSearch.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/RegionList' element={<RegionList />} />
                <Route path='/CountriesListSearch' element={<CountriesListSearch />} />

                {/*Routes to Redirect*/}

                <Route path='' element={<Home />} />*/}  {/*when locally hosted/does not contain a path localhost:[port]*/}
                <Route path='*' element={<Home />} />*/} {/*when does not match any route*/}

            </Routes>
        </BrowserRouter>
        
         
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: repowtWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
