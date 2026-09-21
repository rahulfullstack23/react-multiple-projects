import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Price : {product.price}</p>
      <p>Category : {product.category}</p>

      <p>
        status:
        {product.inStock ? " In Stock" : " Out Of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
