import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-5">
      <h2>GovBr - Showcase componentes em Reactjs</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/datepicker">DatePicker</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
