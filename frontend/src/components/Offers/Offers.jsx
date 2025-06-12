import React from "react";
import "./Offers.css";
import exclusive_img from "../assets/exclusive_img.jpg";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR YOU</h1>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" className="exclusive" />
      </div>
    </div>
  );
};
export default Offers;
