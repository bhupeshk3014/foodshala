import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa2 ba b--green "
        type="search"
        placeholder="search restaurants"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
