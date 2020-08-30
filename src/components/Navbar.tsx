import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <div className="nav-bg">
    <div className="container">
      <nav>
        <h1>
          <NavLink to="/">Almost Trello</NavLink>
          {/* Almost Trello */}
        </h1>
        <ul>
          <li>
            <NavLink to="/">TODO List</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
