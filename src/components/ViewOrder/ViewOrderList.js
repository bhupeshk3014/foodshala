import React from "react";
import ViewOrder from "./ViewOrder";

const ViewOrderList = ({ orderlist }) => {
  return (
    <div className="tc mt2">
      {orderlist.map((order, i) => {
        return (
          <ViewOrder
            key={i}
            id={orderlist[i].id}
            name={orderlist[i].name}
            items={orderlist[i].items}
          />
        );
      })}
    </div>
  );
};

export default ViewOrderList;
