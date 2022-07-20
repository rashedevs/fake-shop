import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { title, price, description, image, category, rating } = item;
  const fullstar = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>;
  const halfstar = <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>;
  const user = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>;
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
          <span className="text-warning fw-bold">Price:</span> ${price}
        </p>

        <p class="card-text">
          <span className="text-warning fw-bold">Rating:</span> {rating?.rate}
          {Math.round(rating?.rate) === 2 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
            </span>
          )}
          {Math.round(rating?.rate) === 2.5 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {halfstar}
            </span>
          )}
          {Math.round(rating?.rate) === 3 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {fullstar}
            </span>
          )}
          {Math.round(rating?.rate) === 3.5 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {fullstar}
              {halfstar}
            </span>
          )}
          {Math.round(rating?.rate) === 4 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
            </span>
          )}
          {Math.round(rating?.rate) === 4.5 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
              {halfstar}
            </span>
          )}
          {Math.round(rating?.rate) === 5 && (
            <span className="star-icon">
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
              {fullstar}
            </span>
          )}
          <span className="ms-2">{user}</span>
          <span className="ms-2">{rating?.count}</span>
        </p>
        <Link to="/" class="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ItemDetails;
