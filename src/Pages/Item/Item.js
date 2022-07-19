import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const { id, title, image, price } = product;
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div onClick={() => navigateToDetail(id)} className="card py-1 image">
      <img
        style={{ width: "200px", height: "200px" }}
        src={image}
        className="card-img-top mx-auto image__img"
        alt={title}
      />
      <div className="image__overlay">
        <div className="image__title">Click For Details</div>
        <p className="image__description">{title}</p>
        <p className="image__description">${price}</p>
      </div>
      <div className="card-body">
        {/* <h6 className="card-title text-primary my-3">{title}</h6> */}
      </div>
    </div>
  );
};

export default Item;
