import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>PORTFOLIO</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Gadget</Link>
          </li>
          <li>
          <Link to="/me">About me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
