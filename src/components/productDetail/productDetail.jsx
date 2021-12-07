import React from "react";
import "./productDetail.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { match, data, onDecrement, onIncrement, onChangeQty, qty } = props;

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
      <div className="col-lg-12">
        <h6>{countInStock} sản phẩm có sẵn</h6>
        <hr />
      </div>

      <div className="col-lg-4">
        <img
          className="image_product"
          src={`https://winkelwagon.herokuapp.com${image}`}
          alt=""
        />
        <h5>{name}</h5>
      </div>
      <div className="col-lg-8">
      <div className="col-lg-12">
        <h6>Số lượng review: {numReviews}</h6>
        <h6>Giá: {price}</h6>
        <h6>Mô tả sản phẩm: {description}</h6>
      </div>

      <div className="col-lg-12">
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <div className="row">
                <div className="col-4">Price</div>
                <div className="col-8">{price}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-4">Status</div>
                <div className="col-8">{countInStock && "In stock"}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-4">Quantity</div>
                <div className="col-8">
                  <div className="quantity">
                    <button
                      className="quantity_www"
                      onClick={onDecrement}
                      disabled={qty === 0 ? "disable" : ""}
                    >
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>

                    <input
                      type="text"
                      style={{ width: "30%" }}
                      value={qty}
                      onChange={onChangeQty}
                    />
                    <button
                      className="quantity_www"
                      onClick={onIncrement}
                      disabled={qty === countInStock ? "disable" : ""}
                    >
                      <ion-icon name="add-outline"></ion-icon>
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
