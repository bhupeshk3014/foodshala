import React, { Component } from "react";

class RLogin extends Component {
  onViewOrderChange = props => {
    const { rest_id } = this.props;
    fetch(
      `https://gentle-reef-95460.herokuapp.com/vieworder/orderitem/${rest_id}`
    )
      .then(response => {
        return response.json();
      })
      .then(orderlist => {
        if (orderlist === "Not found") {
          this.props.loadOrderList([]);
        } else {
          this.props.loadOrderList(orderlist);
        }
      });
    this.props.onRouteChange("vieworder");
  };

  render() {
    const { rname, onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <fieldset id="register" className="ba b--transparent ph0 mh0">
            <legend className="f2 tc fw6 ph0 mh0">{rname}</legend>
            <div style={{ display: "flex" }}></div>
            <div className="mt2 fl w-100 tc">
              <p
                onClick={() => onRouteChange("addmenu")}
                className="f4 link dim ba ph3 pv2 mb2 dib white bg-black pointer ml2"
              >
                Add Menu Items
              </p>
              <p
                onClick={this.onViewOrderChange}
                className="f4 link dim ba ph3 pv2 mb2 dib white bg-black pointer ml2"
              >
                View Order
              </p>
            </div>
          </fieldset>
        </main>
      </article>
    );
  }
}

export default RLogin;
