import React from "react";
import ViewOrder from "./ViewOrder";

const ViewOrderList = ({ orderlist }) => {
  return (
    <div className="tc mt2">
      {orderlist.map((order, i) => {
        return (
          <ViewOrder
            key={i}
            rest_id={orderlist[i].restaurant_id}
            cust_id={orderlist[i].customer_id}
            name={orderlist[i].name}
            order_id={orderlist[i].order_id}
          />
        );
      })}
    </div>
  );
};

export default ViewOrderList;
