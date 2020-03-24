import React, { Component } from "react";

class RegisterR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      rname: "",
      address: "",
      pnumber: "",
      cuisines: "",
      cf2: "",
      tfrom: "",
      tto: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onRnameChange = event => {
    this.setState({ rname: event.target.value });
  };

  onAddressChange = event => {
    this.setState({ address: event.target.value });
  };

  onPnumberChange = event => {
    this.setState({ pnumber: event.target.value });
  };

  onCuisinesChange = event => {
    this.setState({ cuisines: event.target.value });
  };
  onCostfortwoChange = event => {
    this.setState({ cf2: event.target.value });
  };
  onTimefromChange = event => {
    this.setState({ tfrom: event.target.value });
  };
  onTimetoChange = event => {
    this.setState({ tto: event.target.value });
  };

  onSubmitRegisterR = () => {
    fetch("https://gentle-reef-95460.herokuapp.com/register/restaurant", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        rname: this.state.rname,
        address: this.state.address,
        pnumber: this.state.pnumber,
        cuisines: this.state.cuisines,
        cf2: this.state.cf2,
        tfrom: this.state.tfrom,
        tto: this.state.tto
      })
    })
      .then(response => response.json())
      .then(restaurant => {
        if (restaurant === "success") {
          this.props.loadRestaurant(restaurant);
          this.props.onRouteChange("restauranthome");
        }
      });
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 tc fw6 ph0 mh0">Register</legend>
              <div style={{ display: "flex" }}>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    onChange={this.onNameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mt3 ml3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3 ml3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="db fw6 lh-copy f6" htmlFor="restaurantname">
                    Restaurant's Name
                  </label>
                  <input
                    onChange={this.onRnameChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="restaurantname"
                    id="restaurantname"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="address">
                    Address
                  </label>
                  <input
                    onChange={this.onAddressChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="address"
                    id="address"
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="number">
                    Phone no.
                  </label>
                  <input
                    onChange={this.onPnumberChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="number"
                    name="number"
                    id="number"
                  />
                </div>
                <div className="mt3 ml3">
                  <label className="db fw6 lh-copy f6" htmlFor="cuisines">
                    Cuisines
                  </label>
                  <input
                    onChange={this.onCuisinesChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="cuisines"
                    id="cuisines"
                  />
                </div>

                <div className="mv3 ml3">
                  <label className="db fw6 lh-copy f6" htmlFor="cf2">
                    Cost for two
                  </label>
                  <input
                    onChange={this.onCostfortwoChange}
                    className="b pa2 tr input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="number"
                    name="cf2"
                    id="cf2"
                  />
                </div>
              </div>
              <div className="mt2">
                <label className="db fw6 mb2 lh-copy f6" htmlFor="timings">
                  Timings
                </label>

                <div style={{ display: "flex" }}>
                  <label className="db fw6 lh-copy f6" htmlFor="from">
                    From
                  </label>
                  <input
                    onChange={this.onTimefromChange}
                    className="pa2 ml2 input-reset mw3 ba bg-transparent hover-bg-black hover-white w-100"
                    type="number"
                    name="from"
                    id="from"
                  />
                  <label className="db ml2 fw6 lh-copy f6" htmlFor="to">
                    To
                  </label>
                  <input
                    onChange={this.onTimetoChange}
                    className="pa2 mw3 ml2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="number"
                    name="to"
                    id="to"
                  />
                </div>
                <br />
              </div>
            </fieldset>
            <div className="tc">
              <input
                onClick={this.onSubmitRegisterR}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default RegisterR;
