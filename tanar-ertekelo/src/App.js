// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ErtekelesListPage from './ErtekelesListPage';
import ErtekelesSinglePage from './ErtekelesSinglePage';
import './App.css';
import SummaryPage from './SummaryPage';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-auto">
            <div className="collapse navbar-collapse" id="navbarNav center">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">
                            Értékelések
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/Összesítés`} className="nav-link">
                            Összesítés
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>

            <Routes>
                <Route path="/" element={<ErtekelesListPage />} />
                <Route path="/ertekelesek/:nev" element={<ErtekelesSinglePage />} />
                <Route path='*' element={<ErtekelesListPage />}/>
                <Route path='/Összesítés' element={<SummaryPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
