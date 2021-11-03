import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/">Products</Link>
        </span>
        <span className="navbar-brand mb-0 h1">
          <Link to="/cart"><i class="fa fa-cart-plus" style={{"font-size":"36px"}}></i></Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
