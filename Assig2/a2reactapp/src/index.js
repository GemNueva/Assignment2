import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './routes/Home.js';
import Region from './routes/Region.js';
import Countries from './routes/Countries.js';
import CountriesList from './components/CountriesList';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Region' element={<Region />} />

                // Need to CHANGE SINCE WE CAN ONLY GO TO 
                <Route path='/Countries' element={<Countries />} />


                <Route path='/Countries/:regionId' element={<Countries />} />

                <Route path='/CountriesList/:regionId' element={<CountriesList />} />

                

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
