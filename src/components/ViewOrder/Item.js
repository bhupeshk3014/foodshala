import React from "react";

const Item = ({ dish, type, price }) => {
  return (
    <tr>
      <td className="pv3 pr3 bb b--black-20">{dish}</td>
      <td className="pv3 pr3 bb b--black-20">{type}</td>
      <td className="pv3 pr3 bb b--black-20">Rs. {price}/-</td>
    </tr>
  );
};

export default Item;
