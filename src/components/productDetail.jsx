import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { match, data } = props;
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});

  const getProduct = () => {
    if (match.params.id) {
      const item = data.find((p) => {
        return p._id === match.params.id;
      });
      setProduct(item);
    }
  };

  useEffect(getProduct, []);

  let { name, numReviews, description, price, image, countInStock } = product;

  const handleOnChange = (evt) => {
    const value = evt.target.value;
    setQuantity(value);
  };
  const handleIncrement = (q) => {
    let plus = q + 1;
    setQuantity(plus);
  };

  const handleDecrement = (quantity) => {
    let minius = quantity - 1;
    setQuantity(minius);
  };

  return (
    <div className="row">
      <h1> SHOPPING BAG</h1>
      <div className="col-lg-6">
        <h3>{countInStock} products in stock</h3>
        <img src={`https://winkelwagon.herokuapp.com${image}`} alt="" />
        <h2>{name}</h2>
      </div>
      <div className="col-lg-3">
        <h4>{numReviews}</h4>
        <h4>{price}</h4>
        <h4>{description}</h4>
      </div>
      <div className="col-lg-3">
        <div className="card">
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <div className="row">
                <div className="col-3">Price</div>
                <div className="col">{price}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-3">Status</div>
                <div className="col">{countInStock && "In stock"}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-3">Quantity</div>
                <div className="col">
                  <div className="quantity">
                    <button
                      className="quantity_2KdYzP"
                      onClick={() => handleDecrement(quantity)}
                      disabled={quantity === 0 ? "disable" : ""}
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
                      value={quantity}
                      onChange={handleOnChange}
                    />
                    <button
                      className="quantity _2KdYzP"
                      onClick={() => handleIncrement(quantity)}
                      disabled={quantity === countInStock ? "disable" : ""}
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
              </div>
            </div>
            <div className="d-grid list-group-item">
              <div className="row">
                <div className="col-12">
                  <Link to={`/cart/${match.params.id}?qty=${quantity}`}>
                    <button className="btn-success btn btn-primary">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

