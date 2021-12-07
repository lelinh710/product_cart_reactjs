import React from "react";
import { useEffect, useState } from "react";

function Cart(props) {
  const { match, data, onDecrement, OnIncrement, onChangeQty, qty } = props;
  console.log(props);
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState([]);

  let product = {};
  if (match.params.id) {
    product = data.find((p) => {
      return p._id === match.params.id;
    });
  }

  const getProduct = () => {
    setCart((state) => [...state, product]);
    // console.log(cart);
  };

  useEffect(getProduct, []);

  const convertQueryString = (number) => {
    const queryString = require("query-string");

    const parsed = queryString.parse(props.location.search);
    number = Number(parsed.qty);
  };
  convertQueryString(quantity);

  // console.log(cart);

  let { name, price, image, countInStock } = product;

  return (
    <div className="row">
      <div className="col-md-8">
        <h1>SHOPPING CART</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={`https://winkelwagon.herokuapp.com${image}`}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="col-md-3">{name}</div>
              <div className="col-md-2">{price}</div>
              <div className="col-md-2"> 
              <div className="quantity">
                    <button
                      className="quantity_2KdYzP"
                      onClick={onDecrement}
                      disabled={qty === 0 ? "disable" : ""}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                      </svg>
                    </button>

                    <input
                      type="text"
                      style={{ width: "50px" }}
                      value={qty}
                      onChange={onChangeQty}
                    />
                    <button
                      className="qty _2KdYzP"
                      onClick={OnIncrement}
                      disabled={qty === countInStock ? "disable" : ""}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                        />
                      </svg>
                    </button>
                  </div>
               </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card"></div>
      </div>
    </div>
  );
}

export default Cart;
