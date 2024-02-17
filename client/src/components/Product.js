// client/src/components/Product.js
import React from "react";

const Product = ({ name, price }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
