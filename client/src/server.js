// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const products = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  // Add more products as needed
];

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express and React!" });
});

app.get("/api/products", (req, res) => {
  res.json({ products });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
