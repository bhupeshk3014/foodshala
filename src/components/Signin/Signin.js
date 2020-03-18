import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-50-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <fieldset id="signin" className="ba b--transparent ph0 mh0">
          <legend className="f1 tc fw6 ph0 mh0">Sign In</legend>
          <div style={{ display: "flex" }}></div>
          <div className="mt2 fl w-100 tc">
            <p
              onClick={() => onRouteChange("signinc")}
              className="f4 link dim ba ph3 pv2 mb2 dib white bg-black pointer ml2"
            >
              Customer
            </p>
            <p
              onClick={() => onRouteChange("signinr")}
              className="f4 link dim ba ph3 pv2 mb2 dib white bg-black pointer ml2"
            >
              Restaurant
            </p>
          </div>
        </fieldset>
      </main>
    </article>
  );
};

export default Signin;
