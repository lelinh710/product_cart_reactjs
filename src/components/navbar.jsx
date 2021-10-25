import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/">Products</Link>
        </span>
        <span className="navbar-brand mb-0 h1">
          <Link to="/cart">Cart</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
