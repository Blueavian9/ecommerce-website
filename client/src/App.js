// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-Commerce Website </h1>
        <div className="product-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
