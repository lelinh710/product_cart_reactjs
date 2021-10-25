import React from "react";
import { useEffect, useState } from "react";

function Cart(props) {
  const { match, data } = props;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    if (match.params.id) {
      const item = data.filter((p) => {
        return p._id === match.params.id;
      });
      setProduct(item);
    }
  };

  useEffect(getProduct, []);

  const convertQueryString = (number) => {
    const queryString = require('query-string');

    const parsed = queryString.parse(props.location.search);
    number = Number(parsed.qty);
  }
  convertQueryString(quantity);

  let { name, numReviews, description, price, image, countInStock } = product;

  console.log(image);


  return <div className="row">
    <div className="col-md-8">
      <h1>SHOPPING CART</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-2">
              <img src={`https://winkelwagon.herokuapp.com${image}`} alt="" />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card"></div>
    </div>
  </div>;
}

export default Cart;
