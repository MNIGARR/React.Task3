import React from "react";
import { products } from "../../Products.js";
import { getImageUrl } from "../../image.js";
import './Cards.css';

function expired(product) {
  const ex=product.expireDate;
  if (new Date(ex)< Date.now()) {
    return (
      <div style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          style={{ width: "700px", height: "500px" }}
          src="/images/expired.png"
          alt="expired"
        ></img>
      </div>
    );
  }
  return null;
}

const product = products.map((product) => (
  <li key={product.id} style={{ listStyle: "none" }}>
    <div className="Card">
      <div className="image-back">
        <div style={{width: "90%", marginTop: "20px", position: "relative"}}>
          <img
            style={{ width: "100%", height: "500px"}}
            src={getImageUrl(product)}
            alt={product.name}
          ></img>
          {expired(product)}
        </div>
      </div>

      <div className="info">
        <h1 style={{ color: "#ff6d39" }}>{product.name}</h1>
        <h2>{product.description}</h2>
        <span>
          {product.discount > 0
            ? Number(product.price) -
              Number(product.price) * (Number(product.discount) / 100)
            : product.price}
          $
        </span>
        <span style={{ textDecoration: "line-through", marginLeft: "50px" }}>
          {product.discount > 0 ? product.price + "$" : ""}
        </span>
        <div style={{ marginTop: "100px" }}>
          <i
            className="fa-solid fa-bag-shopping"
            style={{ color: "white" }}
          ></i>
          <span style={{ marginLeft: "10px", marginRight: "40px" }}>
            Buy Now
          </span>
          <i className="fa-solid fa-basket-shopping"></i>
          <span style={{ marginLeft: "10px" }}>Add To Cart</span>
        </div>
      </div>
    </div>
  </li>
));

export default function ListItems() {
  return (
    <div>
      <ul>{product}</ul>
    </div>
  );
}