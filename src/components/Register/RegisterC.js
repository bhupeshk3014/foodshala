import React, { Component } from "react";

class RegisterC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      pnumber: "",
      preference: ""
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

  onAddressChange = event => {
    this.setState({ address: event.target.value });
  };

  onPnumberChange = event => {
    this.setState({ pnumber: event.target.value });
  };

  onPreferenceChange = event => {
    this.setState({ preference: event.target.value });
  };

  onSubmitRegisterC = () => {
    fetch("http://localhost:3000/register/customer", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        pnumber: this.state.pnumber,
        preference: this.state.preference
      })
    })
      .then(response => response.json())
      .then(customer => {
        if (customer === "success") {
          this.props.loadCustomer(customer);
          this.props.onRouteChange("home");
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
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="number">
                    Your Preference:
                  </label>
                  <input
                    onChange={this.onPreferenceChange}
                    checked={this.state.preference === "veg"}
                    type="radio"
                    name="preference"
                    id="veg"
                    value="veg"
                  />
                  <label className="ml2 f6" htmlFor="customer">
                    Veg
                  </label>
                  <br />
                  <input
                    onChange={this.onPreferenceChange}
                    checked={this.state.preference === "nonveg"}
                    type="radio"
                    name="preference"
                    id="nonveg"
                    value="nonveg"
                  />
                  <label className="ml2 f6" htmlFor="restaurant">
                    Non Veg
                  </label>
                  <br />
                  <br />
                </div>
              </div>
            </fieldset>
            <div className="tc">
              <input
                onClick={this.onSubmitRegisterC}
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

export default RegisterC;
