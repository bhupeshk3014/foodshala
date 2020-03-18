import React from "react";
import Card from "../Card/Card";

const CardList = ({
  restaurants,
  loadMainCourse,
  loadBeverages,
  loadStarter,
  onRouteChange
}) => {
  return (
    <div className="tc mt2">
      {restaurants.map((restaurant, i) => {
        return (
          <Card
            key={i}
            id={restaurants[i].restaurant_id}
            rname={restaurants[i].rname}
            cuisines={restaurants[i].cuisines}
            tfrom={restaurants[i].tfrom}
            tto={restaurants[i].tto}
            cf2={restaurants[i].cf2}
            onRouteChange={onRouteChange}
            loadStarter={loadStarter}
            loadBeverages={loadBeverages}
            loadMainCourse={loadMainCourse}
          />
        );
      })}
    </div>
  );
};

export default CardList;
