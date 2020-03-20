import React from "react";
import success from "./success2.png";
import "./Order.css";

const Order = ({ onRouteChange }) => {
  return (
    <div className="tc">
      <p
        onClick={() => onRouteChange("home")}
        className="f4 link dim ph3 pv2 dib ba tr black bg-white pointer mt5"
      >
        Home
      </p>
      <h1 className="dark-green f2">Order Successful</h1>
      <img className="success" src={success} alt="order accepted" />
    </div>
  );
};

export default Order;
