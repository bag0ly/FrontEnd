import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import AllApartments from './AllApartments.js';
import ApartmentSinglePage from './ApartmentSinglePage.js';
import { ApartmentCreatePage } from './ApartmentCreatePage.js';
import { ApartmentModPage } from './ApartmentModPage.js';
import { ApartmentDeletePage } from './ApartmentDeletePage.js';
import { Login } from './Login.js';
import { AuthProvider } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-auto">
        <div className="collapse navbar-collapse" id="navbarNav center">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/new-apartment`} className="nav-link">
                New Apartment
              </NavLink>
            </li>
            <li>
              <NavLink to={`/login`} className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AllApartments />} />
        <Route path="*" element={<AllApartments />} />
        <Route path="/apartments/:id" element={<ApartmentSinglePage />} />
        <Route path="/new-apartment" element={<ApartmentCreatePage />} />
        <Route path="/mod-apartment/:id" element={<ApartmentModPage />} />
        <Route path="/delete-apartment/:id" element={<ApartmentDeletePage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
