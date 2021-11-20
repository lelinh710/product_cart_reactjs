import React from "react";
import "./productDetail.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { match, data, onDecrement, OnIncrement, onChangeQty, qty } = props;

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

  return (
    <div className="row">
      <h2> Shopping Bag</h2>
      <div className="col-lg-2"></div>
      <div className="col-lg-5">
       <div className="row">
       <div className="col-lg-12">
          <h6>{countInStock} sản phẩm có sẵn</h6>
          <hr />
        </div>
        <div className="col-lg-5">
        <img
            className="image_product"
            src={`https://winkelwagon.herokuapp.com${image}`}
            alt=""
          />
          <h5>{name}</h5>
        </div>
        <div className="col-lg-7">
          <br />
          <h5>Số lượng review: {numReviews}</h5>
          <h5>Giá: {price}</h5>
          <h5>Mô tả sản phẩm: {description}</h5>
        </div>
       </div>
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
              </div>
            </div>
            <div className="d-grid list-group-item">
              <div className="row">
                <div className="col-12">
                  <Link to={`/cart/${match.params.id}?qty=${qty}`}>
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
