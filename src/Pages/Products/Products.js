import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div>
      <div className="bg-danger">
        <h3 className="products-title py-1">Products</h3>
      </div>
      <div className="all-products new">
        {products.map((product) => (
          <Item key={product.id} product={product}></Item>
        ))}
      </div>
    </div>
  );
};

export default Products;
