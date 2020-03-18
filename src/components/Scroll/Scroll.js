import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "650px"
      }}
      className="mt2"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
