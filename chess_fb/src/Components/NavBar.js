import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-auto">
        <div className="collapse navbar-collapse" id="navbarNav center">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`/new-chess`} className="nav-link">
                    New-Chess
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}