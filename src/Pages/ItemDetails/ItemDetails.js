import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { title, price, description, image } = item;
  useEffect(() => {
    const url = ` https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  return (
    <div
      style={{ height: "100vh" }}
      class="card text-center bg-success text-white"
    >
      <div class="card-body">
        <img
          className="rounded my-2"
          style={{ width: "300px", height: "300px" }}
          src={image}
          alt="img"
        />
        <h5 class="card-title mt-2">{title}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text">Price: ${price}</p>
        <Link to="/" class="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ItemDetails;
