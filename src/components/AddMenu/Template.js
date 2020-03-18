import React, { Component } from "react";
import "./AddMenu.css";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: "",
      type: "",
      price: ""
    };
  }

  onDishChange = event => {
    this.setState({ dish: event.target.value });
  };
  onTypeChange = event => {
    this.setState({ type: event.target.value });
  };
  onPriceChange = event => {
    this.setState({ price: event.target.value });
  };

  onAddItem = props => {
    let { rest_id } = this.props;
    if (this.props.item === "Starters") {
      fetch(`http://localhost:3000/additem/${rest_id}/starter`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dish: this.state.dish,
          type: this.state.type,
          price: this.state.price
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.props.onRouteChange("restauranthome");
          }
        });
    } else if (this.props.item === "Beverages") {
      fetch(`http://localhost:3000/additem/${rest_id}/beverages`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dish: this.state.dish,
          type: this.state.type,
          price: this.state.price
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.props.onRouteChange("restauranthome");
          }
        });
    } else {
      fetch(`http://localhost:3000/additem/${rest_id}/maincourse`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dish: this.state.dish,
          type: this.state.type,
          price: this.state.price
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            this.props.onRouteChange("restauranthome");
          }
        });
    }
  };

  render() {
    const { item } = this.props;
    const dish = `dish${item}`;
    return (
      <div>
        <div className=" bg-white dib br3 pa3 ma3 ba shadow-5 box">
          <div className="tc">
            <h2>{item}</h2>
          </div>
          <div className="tl">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="dish">
                Dish name :
              </label>
              <input
                onChange={this.onDishChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="dish"
                id={dish}
              />
            </div>
            <div className="mt2">
              <label className="db fw6 lh-copy f6" htmlFor="type">
                Type :
              </label>
              <input
                type="radio"
                onChange={this.onTypeChange}
                checked={this.state.type === "veg"}
                name="type"
                id="veg"
                value="veg"
              />
              <label className="ml2 f6" htmlFor="type">
                Veg
              </label>
              <br />
              <input
                type="radio"
                onChange={this.onTypeChange}
                checked={this.state.type === "nonveg"}
                name="type"
                id="nonveg"
                value="nonveg"
              />
              <label className="ml2 f6" htmlFor="type">
                Non Veg
              </label>
            </div>
            <div className="mt3">
              <label className="db fw5 lh-copy f6" htmlFor="number">
                Price :
              </label>
              <input
                onChange={this.onPriceChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="number"
                name="price"
                id="price"
              />
            </div>
            <p
              onClick={this.onAddItem}
              className="f6 link dim ph3 pv2 mb2 mt3 dib white bg-dark-green button pointer mt2"
            >
              Add
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
