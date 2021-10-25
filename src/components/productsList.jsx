import React from "react";

import ProductItem from "./productItem";

function ProductsList({ data }) {
  return (
    <div className="row justify-content-center text-center">
  <div className="col-md-8 col-lg-6">
    <div className="header">
      <h3>Featured Product</h3>
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





