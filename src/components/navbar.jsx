import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <div className="title">
        <h1>Fashion House</h1>
        </div>
        <Link to="/"> Shop </Link>
        <Link to="/cart"> 
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};