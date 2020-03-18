import React from "react";
import success from "./success2.png";
import "./Order.css";

const Order = () => {
  return (
    <div className="tc">
      <h1 className="dark-green f2">Order Successful</h1>
      <img className="success" src={success} alt="order accepted" />
    </div>
  );
};

export default Order;
