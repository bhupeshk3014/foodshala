import React, { Component } from "react";
import Item from "./Item";
import "./ViewOrder.css";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {
      viewButtonClicked: false,
      items: []
    };
  }

  onViewButtonChange = props => {
    const { rest_id, cust_id } = this.props;
    // const res_id = rest_id.rest_id;
    fetch(`http://localhost:3000/vieworder/dishes/${rest_id}/${cust_id}`)
      .then(response => {
        return response.json();
      })
      .then(viewlist => {
        if (viewlist.length) {
          this.setState({ items: viewlist });
        }
      });

    this.setState({ viewButtonClicked: true });
  };

  onCloseButtonChange = () => {
    this.setState({ viewButtonClicked: false });
  };

  render() {
    const { name, order_id } = this.props;
    const { viewButtonClicked, items } = this.state;
    if (viewButtonClicked === false) {
      return (
        <div className=" bg-white dib br3 pa3 ma3 ba shadow-5 w-50">
          <div className="tc">
            <h2>Order id: {order_id}</h2>
            <h2>{name}</h2>
          </div>
          <p
            onClick={this.onViewButtonChange}
            className="f6 link dim ph3 pv2 tc mb2 dib white bg-dark-green pointer mt2"
          >
            OPEN
          </p>
        </div>
      );
    } else {
      return (
        <div className=" bg-white tc br3 pa3 ma3 ba shadow-5 ">
          <div className="tc">
            <h2>{name}</h2>
          </div>
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <tbody className="lh-copy">
                  {items.map((item, i) => {
                    return (
                      <Item
                        key={i}
                        dish={items[i].dish}
                        type={items[i].type}
                        price={items[i].price}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p
            onClick={this.onCloseButtonChange}
            className="f6 link dim ph3 pv2 tc mb2 dib white bg-dark-green pointer mt2"
          >
            CLOSE
          </p>
        </div>
      );
    }
  }
  // return (
  //   <div className=" bg-white dib br3 pa3 ma3 ba shadow-5 box">
  //     <div className="tc">
  //       <h2>{name}</h2>
  //     </div>
  //     <div className="pa4">
  //       <div className="overflow-auto">
  //         <table className="f6 w-100 mw8 center" cellSpacing="0">
  //           <tbody className="lh-copy">
  //             {items.map((item, i) => {
  //               return (
  //                 <Item
  //                   key={i}
  //                   dish={items[i].dish}
  //                   type={items[i].type}
  //                   price={items[i].price}
  //                 />
  //               );
  //             })}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Menu;
