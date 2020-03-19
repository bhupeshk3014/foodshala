import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onAddChange = props => {
    const { cust_id, rest_id, dish, type, price } = this.props;
    const res_id = rest_id.rest_id;
    fetch(`http://localhost:3000/addtocart/${cust_id}/${res_id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dish: dish,
        type: type,
        price: price
      })
    });

    this.setState({ selected: true });
  };

  render() {
    const { dish, type, price, isSignedIn } = this.props;
    const add = this.state.selected === true ? "Added" : "Add";
    if (isSignedIn) {
      if (type !== "-") {
        return (
          <tr>
            <td className="pv3 pr3 bb b--black-20">{dish}</td>
            <td className="pv3 pr3 bb b--black-20">{type}</td>
            <td className="pv3 pr3 bb b--black-20">Rs. {price}/-</td>
            <td className="pv3 pr3 bb b--black-20">
              <p
                onClick={this.onAddChange}
                className="f6 ba link dim ph3 pv2 dib dark-green bg-white pointer mt2"
              >
                {add}
              </p>
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td className="pv3 pr3 bb b--black-20">{dish}</td>
            <td className="pv3 pr3 bb b--black-20">Rs. {price}/-</td>
            <td className="pv3 pr3 bb b--black-20">
              <p
                onClick={this.onAddChange}
                className="f6 ba link dim ph3 pv2 dib dark-green bg-white pointer mt2"
              >
                {add}
              </p>
            </td>
          </tr>
        );
      }
    } else {
      if (type !== "no") {
        return (
          <tr>
            <td className="pv3 pr3 bb b--black-20">{dish}</td>
            <td className="pv3 pr3 bb b--black-20">{type}</td>
            <td className="pv3 pr3 bb b--black-20">Rs. {price}/-</td>
            <td className="pv3 pr3 bb b--black-20">
              <p className="f6 ba link dim ph3 pv2 dib dark-green bg-white pointer mt2">
                Add
              </p>
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td className="pv3 pr3 bb b--black-20">{dish}</td>
            <td className="pv3 pr3 bb b--black-20">Rs. {price}/-</td>
            <td className="pv3 pr3 bb b--black-20">
              <p className="f6 ba link dim ph3 pv2 dib dark-green bg-white pointer mt2">
                Add
              </p>
            </td>
          </tr>
        );
      }
    }
  }
}

export default Item;
