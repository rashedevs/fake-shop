import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { title, price, description, image, category, rating } = item;
  useEffect(() => {
    const url = ` https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  return (
    <div
      style={{ height: "100%" }}
      class="card text-center bg-success text-white"
    >
      <div class="card-body">
        <img
          className="rounded my-2"
          style={{ width: "300px", height: "270px" }}
          src={image}
          alt="img"
        />
        <h5 class="card-title mt-2">
          <span className="text-warning fw-bold">Item:</span> {title}
        </h5>
        <h6 class="card-text">
          <span className="text-warning fw-bold">Category:</span> {category}
        </h6>
        <p class="card-text w-75 mx-auto">
          <span className="text-warning fw-bold">Description:</span>{" "}
          {description}
        </p>
        <p class="card-text">
          <span className="text-warning fw-bold">Count:</span> {rating?.count}
        </p>
        <p class="card-text">
          <span className="text-warning fw-bold">Price:</span> ${price}
        </p>
        <p class="card-text">
          <span className="text-warning fw-bold">Rating:</span> {rating?.rate}
        </p>
        <Link to="/" class="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ItemDetails;
