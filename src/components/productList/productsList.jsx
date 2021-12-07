import React from "react";
import "./List.css";
import ProductItem from "../productItem/productItem";

function ProductsList({ data }) {
  return (
    <div className="row justify-content-center text-center">
  <div className="col-md-12">
    <div className="header">
      <h2>Featured Product</h2>
    </div>
    <div className="row">
    {data.map((product) => (
    <ProductItem data= {product} key={product._id}/>
    ))}
    </div>
  </div>
  </div>
  );
}

export default ProductsList;





