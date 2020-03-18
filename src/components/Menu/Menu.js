import React from "react";
import Item from "./Item";
import "./Menu.css";

const Menu = ({ name, cust_id, rest_id, isSignedIn, items }) => {
  if (name !== "beverages") {
    return (
      <div className=" bg-white dib br3 pa3 ma3 ba shadow-5 box">
        <div className="tc">
          <h2>{name}</h2>
        </div>
        <div className="pa4">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <tbody className="lh-copy">
                {items.map((itemss, i) => {
                  return (
                    <Item
                      key={i}
                      dish={items[i].dish}
                      type={items[i].type}
                      price={items[i].price}
                      isSignedIn={isSignedIn}
                      cust_id={cust_id}
                      rest_id={rest_id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" bg-white dib br3 pa3 ma3 ba shadow-5 box">
        <div className="tc">
          <h2>{name}</h2>
        </div>
        <div className="pa4">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <tbody className="lh-copy">
                {items.map((itemss, i) => {
                  return (
                    <Item
                      key={i}
                      dish={items[i].dish}
                      type="no"
                      price={items[i].price}
                      isSignedIn={isSignedIn}
                      cust_id={cust_id}
                      rest_id={rest_id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Menu;
