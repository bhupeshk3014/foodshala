import React from "react";
import Menu from "./Menu";

const MenuList = ({
  starterMenu,
  isSignedIn,
  mainCourseMenu,
  beveragesMenu,
  cust_id,
  rest_id
}) => {
  if (
    starterMenu.length === 0 &&
    mainCourseMenu.length === 0 &&
    beveragesMenu.length === 0
  ) {
    return (
      <div>
        <h1 className="tc f2 dark-green mt3">Coming soon....</h1>
      </div>
    );
  } else {
    return (
      <div className="tc mt2">
        <Menu
          name="starter"
          cust_id={cust_id}
          rest_id={rest_id}
          isSignedIn={isSignedIn}
          items={starterMenu}
        />
        <Menu
          name="maincourse"
          isSignedIn={isSignedIn}
          items={mainCourseMenu}
          cust_id={cust_id}
          rest_id={rest_id}
        />
        <Menu
          name="beverages"
          cust_id={cust_id}
          rest_id={rest_id}
          isSignedIn={isSignedIn}
          items={beveragesMenu}
        />
      </div>
    );
  }
};

export default MenuList;
