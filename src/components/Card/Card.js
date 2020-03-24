import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  onViewChange = () => {
    let rest_id = this.props.id;
    fetch(`https://gentle-reef-95460.herokuapp.com/menu/${rest_id}/starter`)
      .then(response => {
        return response.json();
      })
      .then(starter => {
        if (starter.length) {
          this.props.loadStarter(starter);
        }
      });
    fetch(`https://gentle-reef-95460.herokuapp.com/menu/${rest_id}/maincourse`)
      .then(response => {
        return response.json();
      })
      .then(maincourse => {
        if (maincourse.length) {
          this.props.loadMainCourse(maincourse);
        }
      });
    fetch(`https://gentle-reef-95460.herokuapp.com/menu/${rest_id}/beverages`)
      .then(response => {
        return response.json();
      })
      .then(beverages => {
        if (beverages.length) {
          this.props.loadBeverages(beverages);
        }
      });
    this.props.onRouteChange("menu", { rest_id });
  };
  render() {
    const { rname, cuisines, tfrom, tto, cf2 } = this.props;

    return (
      <div className=" bg-white dib br3 pa3 ma3 grow ba shadow-5">
        <div className="tc">
          <h2>{rname}</h2>
        </div>
        <img
          alt="food"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ylenksmzhrpnu0t2zex6"
        />
        <div>
          <p className="f6">CUISINES : {cuisines}</p>
          <p className="f6">
            HOURS : {tfrom}am - {tto}pm
          </p>
          <p className="f6">COST FOR TWO : Rs. {cf2}/-</p>
          <p
            onClick={this.onViewChange}
            className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green button pointer mt2"
          >
            View Menu
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
