import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div class="card text-center">
      <div class="card-body">
        <img style={{ width: "200px" }} src={image} alt="img" />
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text">Price: ${price}</p>
        <a href="/" class="btn btn-primary">
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default ItemDetails;
