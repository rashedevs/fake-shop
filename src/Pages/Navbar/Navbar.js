import React from "react";
import { Link } from "react-router-dom";
import shop from "../../Assets/shop.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3 px-5">
      <div className="container-fluid">
        <img
          className="rounded-1"
          style={{ height: "40px" }}
          src={shop}
          alt="shop_photo"
        />
        <Link className="navbar-brand fw-bold text-warning me-5 ms-2" to="/">
          Fake Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-primary"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fw-bolder text-white mx-3" to="/">
                All Products
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
