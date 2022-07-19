import React from "react";
import shop from "../../Assets/shop.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="container-fluid bg-dark footer-container">
      <div>
        <img
          className="rounded-2 me-4"
          style={{ height: "80px" }}
          src={shop}
          alt="footer_image"
        />
      </div>
      <div className="mt-3 ms-4">
        <h6>Fake Shop</h6>
        <p>
          All Rights Reserved <br />
          <small>Copyright &copy; {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
