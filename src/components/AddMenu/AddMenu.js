import React from "react";
import Template from "./Template";

const AddMenu = ({ rest_id, onRouteChange }) => {
  return (
    <div className="bg-black" style={{ display: "flex" }}>
      <h2 className="f2 mr3 ml3 white">Add Menu Items</h2>
      <Template
        rest_id={rest_id}
        onRouteChange={onRouteChange}
        item="Starters"
      />
      <Template
        rest_id={rest_id}
        onRouteChange={onRouteChange}
        item="Main Course"
      />
      <Template
        rest_id={rest_id}
        onRouteChange={onRouteChange}
        item="Beverages"
      />
    </div>
  );
};

export default AddMenu;
