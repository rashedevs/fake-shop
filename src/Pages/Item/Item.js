import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { id, title, image } = product;
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div>
      <button className="border-0" onClick={() => navigateToDetail(id)}>
        <div class="card py-1" style={{ width: "290px", height: "350px" }}>
          <img
            style={{ width: "200px", height: "200px" }}
            src={image}
            class="card-img-top mx-auto"
            alt="product_image"
          />
          <div class="card-body">
            <h6 class="card-title text-primary mt-3">{title}</h6>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Item;
