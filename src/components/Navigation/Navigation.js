import React from "react";

const Navigation = ({
  customername,
  restownername,
  onRouteChange,
  isSignedInR,
  isSignedIn
}) => {
  if (isSignedIn) {
    return (
      <div className="mt2 fl w-100 tr">
        <p className="f4 ph3 pv2 mb2 dib black bg-white">Hi, {customername}</p>
        <p
          onClick={() => onRouteChange("signout")}
          className="f4 link dim ba ph3 pv2 mb2 dib black ml2 pointer mr4"
        >
          Sign out
        </p>
      </div>
    );
  } else if (isSignedInR) {
    return (
      <div className="mt2 fl w-100 tr">
        <p className="f4 ph3 pv2 mb2 dib black bg-white">Hi, {restownername}</p>
        <p
          onClick={() => onRouteChange("signout")}
          className="f4 link dim ba ph3 pv2 mb2 dib black ml2 pointer mr4"
        >
          Sign out
        </p>
      </div>
    );
  } else {
    return (
      <div className="mt2 fl w-100 tr">
        <p
          onClick={() => onRouteChange("signin")}
          className="f4 link dim ba ph3 pv2 mb2 dib white bg-black pointer ml2"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f4 link dim ba ph3 pv2 mb2 dib black pointer ml2 mr4"
        >
          Register
        </p>
      </div>
    );
  }
};

export default Navigation;
