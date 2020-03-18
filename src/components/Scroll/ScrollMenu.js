import React, { Component } from "react";

class ScrollMenu extends Component {
  onOrderChange = props => {
    const { cust_id, rest_id, name } = this.props;
    const res_id = rest_id.rest_id;
    fetch(`http://localhost:3000/order/${cust_id}/${res_id}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name
      })
    });

    this.props.onRouteChange("order");
  };

  render() {
    const { onRouteChange, isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div>
          <div
            style={{
              overflowY: "scroll",
              height: "450px"
            }}
            className="mt2"
          >
            {this.props.children}
          </div>
          <div className="tc mt4 ">
            <a
              onClick={this.onOrderChange}
              className="f3 link dim ph3 pv2 mb2 dib white bg-dark-green "
              href="#0"
            >
              Order
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{
              overflowY: "scroll",
              height: "450px"
            }}
            className="mt2"
          >
            {this.props.children}
          </div>
          <div className="tc mt4 ">
            <a
              onClick={() => onRouteChange("signinc")}
              className="f3 link dim ph3 pv2 mb2 dib white bg-dark-green "
              href="#0"
            >
              Order
            </a>
          </div>
        </div>
      );
    }
  }
}

export default ScrollMenu;
