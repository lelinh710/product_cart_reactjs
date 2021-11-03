import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

function ProductItem({data}) {
  
  return (
    <div className="col-lg-4">
      <div className="card">
        <Link to={`/${data._id}`}>
          <img
            className="card-img-top"
            src={"https://winkelwagon.herokuapp.com" + data.image}
            alt="Card"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.price + "$"}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
