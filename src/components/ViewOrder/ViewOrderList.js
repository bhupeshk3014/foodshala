import React from "react";
import ViewOrder from "./ViewOrder";

const ViewOrderList = ({ orderlist, rest_id }) => {
  if (orderlist.length) {
    const filterList = orderlist.filter((order, i) => {
      return orderlist[i].restaurant_id === rest_id;
    });

    if (filterList.length) {
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
    } else {
      return <div className="f2 tc dark-red">No Orders</div>;
    }
  } else {
    return <div className="f2 tc dark-red">No Orders</div>;
  }
};

export default ViewOrderList;
