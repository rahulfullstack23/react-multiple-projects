import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import products from "./data/product";

const App = () => {
  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
